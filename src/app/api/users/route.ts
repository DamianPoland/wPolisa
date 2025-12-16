import { HubSpotContactPropertiesInputApi } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { saveUserInHubSpot, sendEmail } from "./services";
import axios from "axios";
import { RECAPTCHA_DATA_SCORE } from "@/utils/constants";

export async function POST(request: NextRequest) {
  let body: HubSpotContactPropertiesInputApi;

  // Validation - parse JSON body checking for errors
  try {
    body = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: "Invalid JSON payload", message: error?.message }, { status: 400 });
  }

  // Validation - checks for required fields
  if (!body.firstname || !body.email) {
    return NextResponse.json({ error: "First name, and email are required" }, { status: 400 });
  }

  // Validation - verify reCAPTCHA token (v3) before processing
  const recaptchaToken = (body as any).recaptchaToken;
  if (!recaptchaToken) {
    return NextResponse.json({ error: "reCAPTCHA token missing" }, { status: 400 });
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
        return NextResponse.json({ error: "reCAPTCHA secret not configured" }, { status: 500 });
      }

      const recaptchaResponse = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
        params: { secret: secret, response: recaptchaToken },
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
        "---------- ✓ reCAPTCHA success",
        `score: ${recaptchaResData?.score}`,
        `hostname: ${recaptchaResData.hostname}`
      );
    }
  } catch (err: any) {
    console.error("---------- ✗ reCAPTCHA verification error", err, err?.message);
    return NextResponse.json({ error: "reCAPTCHA verification error" }, { status: 500 });
  }

  // Execute saveUserInHubSpot
  try {
    await saveUserInHubSpot(body);
    console.log("---------- ✓ HubSpot contact saved successfully");
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (errHubSpot: any) {
    console.error("---------- ✗ HubSpot contact saving failed", { message: errHubSpot?.message ?? String(errHubSpot) });

    // if HubSpot save is error then try execute sendEmail
    try {
      const formatBodyText = (obj: Record<string, any>) =>
        `HubSpot contact saving error: ${errHubSpot?.message ?? String(errHubSpot)}\n\n` + // add error + new lines
        Object.entries(obj)
          .map(([k, v]) => `${k}: ${v === undefined || v === null || k === "recaptchaToken" ? "" : v}`)
          .join("\n");

      await sendEmail({
        from: "wpolisa.pl@gmail.com",
        to: "kontakt@wpolisa.pl",
        subject: `Zapytanie z Formularza (HubSpot ERROR)`,
        text: formatBodyText(body),
        html: "", // text will be ignored when html is not empty
      });
      console.log("---------- ✓ Email sent successfully");
      return NextResponse.json({ message: "Optional success" }, { status: 202 });
    } catch (errSendEmail: any) {
      console.error("---------- ✗ Email sending failed", { message: errSendEmail?.message ?? String(errSendEmail) });
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
