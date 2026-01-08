import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import CookiePopup from "@/components/cookiePopup/CookiePopup";
import { Suspense } from "react";
import QueryParamsTracker from "@/components/queryParamsTracker/QueryParamsTracker";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";

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
    <html lang="pl">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ToastContainer />
        {/* CookiePopup pyta o zgody i włącza Google Analytics jeśli użytkownik wyraził zgodę */}
        <CookiePopup />
        {/* Suspense jest wymagany przy używaniu useSearchParams w Next.js */}
        <Suspense fallback={null}>
          {/* QueryParamsTracker pobiera referrer(hostname) i paramsy przy pierwszym odpaleniu aplikacji i zapisuje do local storage */}
          <QueryParamsTracker />
          {/* AnalyticsTracker włącza eventy na otwarcie każdej zkładki  */}
          <AnalyticsTracker />
        </Suspense>
      </body>
    </html>
  );
}
