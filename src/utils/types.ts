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

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export type CategoryConfig = {
  label: string;
  icon: React.ElementType;
};

export enum Icon {
  DARK = "dark",
  LIGHT = "light",
}
