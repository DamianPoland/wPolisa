import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { plusJakartaSans } from "@/utils/constants";
import { ToastContainer } from "react-toastify";
import CookiePopup from "@/components/cookiePopup/CookiePopup";

export const metadata: Metadata = {
  title: "wPolisa - Multiagencja Ubezpieczeniowa | Ubezpieczenia Komunikacyjne, Domu, Życia, Zdrowotne",
  keywords: "ubezpieczenia, polisa, PZU, Warta, Allianz, AXA, Generali, Link4",
  description:
    "wPolisa to multiagencja oferująca polisy ubezpieczeniowe. Ubezpieczenie online, ubezpieczenie samochodu, ubezpieczenie domu, ubezpieczenie zdrowia, cyberbezpieczenienia, ubezpieczenia firmowe",
  openGraph: {
    title: "wPolisa - Twoje ubezpieczenia w jednym miejscu",
    description: "Porównujemy ubezpieczenia od najlepszych firm. Sprawdź ofertę wPolisa i oszczędź na składce!",
    type: "website",
    url: "https://www.wpolisa.pl",
    images: [
      {
        url: "/images/shield-light-64.png",
        width: 64,
        height: 64,
        alt: "wPolisa - Multiagencja Ubezpieczeniowa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wPolisa - Twoje ubezpieczenia w jednym miejscu",
    description: "Porównujemy ubezpieczenia od najlepszych firm. Sprawdź ofertę wPolisa i oszczędź na składce!",
    images: ["/images/shield-light-64.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={plusJakartaSans.className}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ToastContainer />
        <CookiePopup />
      </body>
    </html>
  );
}
