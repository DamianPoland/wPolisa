import { HubSpotContactPropertiesInputApi } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { saveUserInHubSpot, sendEmail } from "./services";

export async function POST(request: NextRequest) {
  let body: HubSpotContactPropertiesInputApi;

  // Parse JSON body checking for errors
  try {
    body = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: "Invalid JSON payload", message: error?.message }, { status: 400 });
  }

  // Validation checks for required fields
  if (!body.firstname || !body.email) {
    return NextResponse.json({ error: "First name, and email are required" }, { status: 400 });
  }

  const formatBodyText = (obj: Record<string, any>) =>
    Object.entries(obj)
      .map(([k, v]) => `${k}: ${v === undefined || v === null ? "" : v}`)
      .join("\n");

  // Execute both operations in parallel and wait for both to complete
  const results = await Promise.allSettled([
    sendEmail({
      from: "wpolisa.pl@gmail.com",
      to: "kontakt@wpolisa.pl",
      subject: `NOWY FORM: ${body.email}, ${body.firstname}`,
      text: formatBodyText(body),
      html: "", // text will be ignored when html is not empty
    }),
    saveUserInHubSpot(body),
  ]);

  const emailResult = results[0];
  const hubSpotResult = results[1];

  const emailSuccess = emailResult.status === "fulfilled";
  const hubSpotSuccess = hubSpotResult.status === "fulfilled";

  const status = hubSpotSuccess && emailSuccess ? 200 : emailSuccess || hubSpotSuccess ? 202 : 500;

  // Log email service results
  if (emailSuccess) {
    console.log("---------- ✓ Email sent successfully");
  } else {
    const reason: any = (emailResult as PromiseRejectedResult).reason;
    console.error("---------- ✗ Email sending failed", {
      at: new Date().toISOString(),
      service: "email",
      to: "kontakt@wpolisa.pl",
      subject: `NOWY FORM: ${body.email}, ${body.firstname}`,
      message: reason?.message ?? String(reason),
      code: reason?.code ?? null,
      response: reason?.response ?? null,
      requestBodyPreview: {
        firstname: body.firstname,
        email: body.email,
        phone: body.phone ?? null,
      },
    });
  }

  // Log hubSpot service results
  if (hubSpotSuccess) {
    console.log("---------- ✓ HubSpot contact saved successfully");
  } else {
    const reason: any = (hubSpotResult as PromiseRejectedResult).reason;
    console.error("---------- ✗ HubSpot save failed", {
      at: new Date().toISOString(),
      service: "hubspot",
      message: reason?.message ?? String(reason),
      code: reason?.code ?? null,
      axiosData: reason?.response?.data ?? null,
      requestBody: body,
    });
  }

  // If both failed, return error response
  if (!emailSuccess && !hubSpotSuccess) {
    return NextResponse.json(
      {
        error: "Nie udało się wysłać zapytania",
        emailError: (emailResult as PromiseRejectedResult).reason?.message,
        hubSpotError: (hubSpotResult as PromiseRejectedResult).reason?.message,
      },
      { status }
    );
  }

  // Return success or partial success response if at least one succeeded
  return NextResponse.json(
    {
      message: hubSpotSuccess && emailSuccess ? "Success" : "Partial success",
      emailResponse: emailSuccess ? (emailResult as PromiseFulfilledResult<any>).value?.response : null,
      emailError: !emailSuccess ? (emailResult as PromiseRejectedResult).reason?.message : null,
      spotResponse: hubSpotSuccess
        ? (hubSpotResult as PromiseFulfilledResult<any>).value?.data?.properties?.email
        : null,
      spotError: !hubSpotSuccess ? (hubSpotResult as PromiseRejectedResult).reason?.message : null,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}
