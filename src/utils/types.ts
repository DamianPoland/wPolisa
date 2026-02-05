import { LucideIcon } from "lucide-react";

export interface HubSpotContactPropertiesInputApi {
  firstname: string;
  email: string;
  phone: string;
  description: string;
  variant: string;
  origin: string;
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

export interface InsuranceVariantType {
  id: InsuranceVariantsId;
  title: string;
  icon: LucideIcon;
}

export enum InsuranceVariantsId {
  medyczny = "medyczny",
  zycie = "zycie",
  podroze = "podroze",
  nieruchomosc = "nieruchomosc",
  firma = "firma",
  inne = "inne",
}
