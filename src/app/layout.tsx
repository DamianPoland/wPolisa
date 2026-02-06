import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import CookiePopup from "@/components/cookiePopup/CookiePopup";
import { Suspense } from "react";
import QueryParamsTracker from "@/components/queryParamsTracker/QueryParamsTracker";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import SchemaScripts from "@/components/schemas/SchemaScripts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wpolisa.pl"),
  title: "wPolisa - Multiagencja Ubezpieczeniowa | Ubezpieczenia Komunikacyjne, Domu, Mieszkania, Życia, Zdrowotne",
  description:
    "wPolisa to multiagencja oferująca polisy ubezpieczeniowe. Ubezpieczenie online, ubezpieczenie samochodu, ubezpieczenie domu, ubezpieczenie mieszkania, ubezpieczenie zdrowia, cyberbezpieczenienia, ubezpieczenia firmowe",
  keywords: "ubezpieczenia, polisa, PZU, Warta, Allianz, AXA, Generali, Link4",
  themeColor: "#1c3757",
  manifest: null,

  // Format Detection
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  // Open Graph
  openGraph: {
    title: "wPolisa - Twoje ubezpieczenia w jednym miejscu",
    description: "Porównujemy ubezpieczenia od najlepszych firm. Sprawdź ofertę wPolisa i oszczędź na składce!",
    type: "website",
    url: "https://www.wpolisa.pl",
    siteName: "wPolisa",
    locale: "pl_PL",
    images: [
      {
        url: "/icons/shield-dark-64.png",
        width: 64,
        height: 64,
        alt: "wPolisa - Multiagencja Ubezpieczeniowa",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "wPolisa - Twoje ubezpieczenia w jednym miejscu",
    description: "Porównujemy ubezpieczenia od najlepszych firm. Sprawdź ofertę wPolisa i oszczędź na składce!",
    creator: "@wpolisa",
    images: ["/icons/shield-dark-64.png"],
  },

  // SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // GEO & Language
  alternates: {
    canonical: "https://www.wpolisa.pl",
    languages: {
      "pl-PL": "https://www.wpolisa.pl",
      pl: "https://www.wpolisa.pl",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Language & GEO */}
        <meta name="Content-Language" content="pl-PL" />
        <meta name="geo.region" content="PL-POM" />
        <meta name="geo.placename" content="Gdynia" />
        <link rel="alternate" hrefLang="pl-PL" href="https://www.wpolisa.pl" />
        <link rel="alternate" hrefLang="pl" href="https://www.wpolisa.pl" />

        {/* Schema.org Structured Data */}
        <SchemaScripts />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ToastContainer />
        <CookiePopup />
        <Suspense fallback={null}>
          <QueryParamsTracker />
          <AnalyticsTracker />
        </Suspense>
      </body>
    </html>
  );
}
