import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
    <html lang="pl">
      <body className="bg-basicBright">
        <Header />
        {/* <div className="h-10"></div>{" "} */}
        {/* TODO replace with css margin or padding for header */}
        <div className="height-full min-h-[calc(100vh-80px)] max-w-5xl m-auto mt-20 pt-8 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
