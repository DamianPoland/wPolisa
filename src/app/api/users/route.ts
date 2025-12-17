import { NextRequest, NextResponse } from "next/server";
import { saveUserInHubSpot, sendEmail } from "./services";
import axios from "axios";
import {
  FORM_DESCRIPTION_MAX_LENGTH,
  FORM_EMAIL_MAX_LENGTH,
  FORM_FIRST_NAME_MAX_LENGTH,
  FORM_PHONE_MAX_LENGTH,
  FORM_RECAPTCHA_MAX_LENGTH,
  RECAPTCHA_DATA_SCORE,
} from "@/utils/constants";
import { z } from "zod";
import { HubSpotContactPropertiesInputApi } from "@/utils/types";

// Zod schema for incoming request (matches type: HubSpotContactPropertiesInputApi)
const UserSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "Imię jest wymagane")
      .max(FORM_FIRST_NAME_MAX_LENGTH, `Maksymalnie ${FORM_FIRST_NAME_MAX_LENGTH} znaków`),
    email: z
      .email("Nieprawidłowy adres e-mail")
      .max(FORM_EMAIL_MAX_LENGTH, `Maksymalnie ${FORM_EMAIL_MAX_LENGTH} znaków`),
    phone: z.string().max(FORM_PHONE_MAX_LENGTH, `Maksymalnie ${FORM_PHONE_MAX_LENGTH} znaków`).optional(),
    description: z
      .string()
      .max(FORM_DESCRIPTION_MAX_LENGTH, `Maksymalnie ${FORM_DESCRIPTION_MAX_LENGTH} znaków`)
      .optional(),
    variant: z.string().max(100),
    history: z.string().max(200).optional(),
    privacy_consent: z.boolean().refine((v) => v === true, { message: "Zgoda jest wymagana" }),
    marketing_consent: z.boolean().optional(),
    hs_lead_status: z.string().max(100).default("NEW"),
    recaptchaToken: z.string().min(10, "brak tokenu reCAPTCHA").max(FORM_RECAPTCHA_MAX_LENGTH, "Token jest za długi"),
  })
  .strict(); // .strict() returns error if extra fields are present

export async function POST(request: NextRequest) {
  // Execute Zod validation and parse request body, Zod - against attacks like XSS or invalid data
  let hubspotPayload: HubSpotContactPropertiesInputApi;
  try {
    const json = await request.json();
    const result = UserSchema.safeParse(json);
    if (!result.success) {
      console.error("---------- ✗ Błąd walidacji", z.treeifyError(result.error));
      return NextResponse.json({ error: "Błąd walidacji", issues: z.treeifyError(result.error) }, { status: 400 });
    }
    // Cast parsed Zod result to the HubSpot type we expect
    hubspotPayload = result.data as unknown as HubSpotContactPropertiesInputApi;
  } catch (error: any) {
    console.error("---------- ✗ Invalid JSON payload", error?.message);
    return NextResponse.json({ error: "Invalid JSON payload", message: error?.message }, { status: 400 });
  }

  // Execute reCaptcha
  try {
    // Only use this bypass in local development to skip verification (env variable)
    const skipVerify = process.env.RECAPTCHA_SKIP_VERIFY_IN_DEV === "true";

    if (skipVerify) {
      console.warn("⚠️ Skipping reCAPTCHA verification (development mode)");
    } else {
      const secret = process.env.RECAPTCHA_SECRET_KEY;
      if (!secret) {
        console.error("---------- ✗ reCAPTCHA secret not configured");
        return NextResponse.json({ error: "reCAPTCHA secret not configured" }, { status: 500 });
      }

      const recaptchaResponse = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
        params: { secret: secret, response: hubspotPayload.recaptchaToken },
      });

      const recaptchaResData = recaptchaResponse.data as any;

      // Check success and score
      const score = typeof recaptchaResData.score === "number" ? recaptchaResData.score : undefined;

      // Reject when verification fails or score is too low
      if (!recaptchaResData.success || (score !== undefined && score < RECAPTCHA_DATA_SCORE)) {
        console.error("---------- ✗ reCAPTCHA verification details", recaptchaResData);
        return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 403 });
      }
      console.log(
        "---------- ✓ reCAPTCHA success,",
        `score: ${recaptchaResData?.score},`,
        `hostname: ${recaptchaResData.hostname}`
      );
    }
  } catch (err: any) {
    console.error("---------- ✗ reCAPTCHA verification error", err, err?.message);
    return NextResponse.json({ error: "reCAPTCHA verification error" }, { status: 500 });
  }

  // Execute saveUserInHubSpot
  try {
    await saveUserInHubSpot(hubspotPayload);
    console.log("---------- ✓ HubSpot contact saved successfully");
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (errHubSpot: any) {
    console.error(
      `---------- ✗ HubSpot contact saving failed, message: ${errHubSpot.response?.data?.message ?? errHubSpot?.message ?? String(errHubSpot)}`
    );

    // if HubSpot save is error then try execute sendEmail
    try {
      const formatBodyText = (obj: Record<string, any>) =>
        `HubSpot contact saving error: ${errHubSpot.response?.data?.message ?? errHubSpot?.message ?? String(errHubSpot)}\n\n` + // add error + lines
        Object.entries(obj)
          .map(([k, v]) => `${k}: ${v === undefined || v === null || k === "recaptchaToken" ? "" : v}`)
          .join("\n");

      await sendEmail({
        from: "wpolisa.pl@gmail.com",
        to: "kontakt@wpolisa.pl",
        subject: `Zapytanie z Formularza (HubSpot ERROR)`,
        text: formatBodyText(hubspotPayload),
        html: "", // text will be ignored when html is not empty
      });
      console.log("---------- ✓ Email sent successfully");
      return NextResponse.json({ message: "Optional success" }, { status: 202 });
    } catch (errSendEmail: any) {
      console.error(`---------- ✗ Email sending failed, message: ${errSendEmail?.message ?? String(errSendEmail)}`);
      return NextResponse.json(
        {
          error: "Nie udało się wysłać zapytania",
          messageEmail: errSendEmail?.message ?? String(errSendEmail),
          messageCRM: errHubSpot?.message ?? String(errHubSpot),
        },
        { status: 500 }
      );
    }
  }
}
