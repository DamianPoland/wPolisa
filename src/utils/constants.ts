import { Plus_Jakarta_Sans, Figtree, Manrope } from "next/font/google";
import { Facebook, Linkedin, MessageCircle, Instagram, Youtube } from "lucide-react";

// Public site key for client-side reCAPTCHA v3
export const PUBLIC_RECAPTCHA_SITE_KEY = "6LcWWy0sAAAAAH0nUHhyq2Gm_0edmokfERJbJNvH";
export const RECAPTCHA_DATA_SCORE = 0.5;

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-figtree",
});

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    color: "hover:bg-[#4267B2]",
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
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color:
      "hover:bg-gradient-to-bl hover:from-[#833AB4] hover:via-[#C13584] hover:via-[#E1306C] hover:via-[#FD1D1D] hover:via-[#F56040] hover:via-[#777737] hover:via-[#FCAF45] hover:to-[#FFDC80]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@wPolisa-ubezpieczenia",
    color: "hover:bg-[#FF0000]",
  },
];
