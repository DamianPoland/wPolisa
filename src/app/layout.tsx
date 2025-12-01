import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TODO poprawoć opisy metadata
export const metadata: Metadata = {
  title: "wPolisa ubezpieczenia",
  keywords: 'ubezpieczenia, polisa, PZU, Warta, Allianz, AXA, Generali, Link4',
  description: "Uebezpieczenie online, ubezpieczenie samochodu, ubezpieczenie domu, ubezpieczenie zdrowia, cyberbezpieczenienia, ubezpieczenia na zycie, ubezpieczenia firmowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        <div className="h-10"></div> {/* TODO replace with css margin or padding for header */}
        <div className="height-full min-h-[calc(100vh-80px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
