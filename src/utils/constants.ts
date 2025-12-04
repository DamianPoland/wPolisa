import { Plus_Jakarta_Sans } from "next/font/google";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
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
