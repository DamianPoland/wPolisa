import { Plus_Jakarta_Sans, Figtree, Manrope } from "next/font/google";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

// Public site key for client-side reCAPTCHA v3
export const PUBLIC_RECAPTCHA_SITE_KEY = "6LcWWy0sAAAAAH0nUHhyq2Gm_0edmokfERJbJNvH";
export const RECAPTCHA_DATA_SCORE = 0.5;

// Form fields max lengths
export const FORM_FIRST_NAME_MAX_LENGTH = 100;
export const FORM_EMAIL_MAX_LENGTH = 100;
export const FORM_PHONE_MAX_LENGTH = 30;
export const FORM_DESCRIPTION_MAX_LENGTH = 2000;
export const FORM_RECAPTCHA_MAX_LENGTH = 5000;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-figtree",
});

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:bg-[#0A66C2]",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/48607034911",
    color: "hover:bg-[#25D366]",
  },
];
