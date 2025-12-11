import { HubSpotContactPropertiesInputApi } from "@/utils/types";
import axios, { AxiosResponse } from "axios";
import nodemailer from "nodemailer";

// Email sending function
type SendEmailData = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendEmail({ from, to, subject, text, html }: SendEmailData): Promise<nodemailer.SentMessageInfo> {
  const pass = process.env.GMAIL_PASS_W_POLISA_FORMS; // from .env, firebase take it from Google Cloud Cloud Secret Manager
  if (!pass) throw new Error("Environment variable PASSWORD is required");

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wpolisa.pl@gmail.com",
      pass: pass, // 16-digit gmail password wpolisa.pl@gmail.com, creation: https://myaccount.google.com/apppasswords
    },
  });

  // text will be ignored when html is not empty
  return await transporter.sendMail({ from, to, subject, text, html });
}

// HubSpot user saving function
interface HubSpotCreateContactRequest {
  properties: HubSpotContactPropertiesInputApi;
}
interface HubSpotCreateContactResponse {
  id: string;
  properties: { [key: string]: any };
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export async function saveUserInHubSpot(
  body: HubSpotContactPropertiesInputApi
): Promise<AxiosResponse<HubSpotCreateContactResponse>> {
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

  return await axios.post(hubSpotUrlApiContacts, payload, {
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN_W_POLISA_FORMS}`, // from .env, firebase take it from Google Cloud Cloud Secret Manager
      "Content-Type": "application/json",
    },
  });
}
