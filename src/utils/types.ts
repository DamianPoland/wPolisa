export interface HubSpotContactPropertiesInputApi {
  firstname: string;
  email: string;
  phone: string;
  description: string;
  variant: string;
  history: string;
  privacy_consent: boolean;
  marketing_consent: boolean;
  hs_lead_status: string;
  recaptchaToken?: string;
}

export type MenuItem = {
  id: number;
  href: string;
  title: string;
};

export enum Icon {
  DARK = "dark",
  LIGHT = "light",
}
