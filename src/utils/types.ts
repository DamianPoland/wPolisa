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
  color: string;
}

export enum InsuranceVariantsId {
  medyczny = "medyczny",
  zycie = "zycie",
  podroze = "podroze",
  nieruchomosc = "nieruchomosc",
  firma = "firma",
  inne = "inne",
}

export enum BadgeVariant {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  five = 5,
  six = 6,
}

// Tile Colors
export enum TILE_GRADIENTS {
  red = "from-red-900 via-rose-400 to-red-900",
  blue = "from-cyan-800 via-cyan-400 to-cyan-800",
  purple = "from-violet-800 via-purple-400 to-violet-800",
  green = "from-emerald-800 via-emerald-500 to-emerald-800",
  orange = "from-orange-600 via-amber-500 to-orange-600",
  grey = "from-zinc-800 via-zinc-400 to-zinc-800",
  yellow = "from-yellow-600 via-yellow-400 to-yellow-600",
  indigo = "from-indigo-500 via-blue-500 to-indigo-500",
}
