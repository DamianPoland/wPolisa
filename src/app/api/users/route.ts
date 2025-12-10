import { HubSpotContactPropertiesInputApi } from "@/utils/types";
import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

interface HubSpotCreateContactRequest {
  properties: HubSpotContactPropertiesInputApi;
}
interface HubSpotCreateContactResponse {
  id: string;
  properties: {
    [key: string]: any;
  };
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export async function POST(request: NextRequest) {
  const body: HubSpotContactPropertiesInputApi = await request.json();

  // Validation
  if (!body.firstname || !body.email) {
    return NextResponse.json({ error: "First name, and email are required" }, { status: 400 });
  }
  const hubSpotUrlApiContacts = "https://api.hubapi.com/crm/v3/objects/contacts";
  const payload: HubSpotCreateContactRequest = {
    properties: {
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      phone: body.phone,
      description: body.description,
      variant: body.variant,
      history: body.history,
      privacy_consent: body.privacy_consent,
      marketing_consent: body.marketing_consent,
      hs_lead_status: body.hs_lead_status, // hubSpot standard field,  allowed options: [NEW, OPEN, IN_PROGRESS, OPEN_DEAL, UNQUALIFIED, ATTEMPTED_TO_CONTACT, CONNECTED, BAD_TIMING]
    },
  };

  try {
    const response: AxiosResponse<HubSpotCreateContactResponse> = await axios.post(hubSpotUrlApiContacts, payload, {
      headers: {
        // Authorization: `Bearer pat-eu1-70c27775-e1a5-47ac-90fa-5f9a4b28e4d8`,
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json({
      ok: true,
      message: "User saved successfully",
      hubspotResponse: response.data,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    if (error.response) {
      console.error("Błąd API:", error.response.status, error.response.data);
    } else {
      console.error("Błąd:", error.message);
    }
    return NextResponse.json({ error: "Failed to save user", detail: String(error) }, { status: 500 });
  }
}
