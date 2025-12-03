import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-montserrat",
});

// TODO poprawoć opisy metadata
export const metadata: Metadata = {
  title: "wPolisa ubezpieczenia",
  keywords: "ubezpieczenia, polisa, PZU, Warta, Allianz, AXA, Generali, Link4",
  description:
    "Ubezpieczenie online, ubezpieczenie samochodu, ubezpieczenie domu, ubezpieczenie zdrowia, cyberbezpieczenienia, ubezpieczenia na zycie, ubezpieczenia firmowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={montserrat.className}>
      <body className="bg-basicBright">
        <Header />
        {/* TODO replace with css margin or padding for header */}
        <div className="height-full min-h-[calc(100vh-80px)] max-w-7xl m-auto mt-20 px-4 py-8 ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
