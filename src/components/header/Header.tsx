"use client";

import { useState } from "react";
import logo from "@/assets/images/logo5-tr-dark-64.png";
import Image from "next/image";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Link from "next/link";

export type MenuItem = {
  id: number;
  href: string;
  title: string;
};

const menuItems: MenuItem[] = [
  { id: 1, href: "/", title: "Główna" },
  { id: 2, href: "/description", title: "O nas" },
  { id: 3, href: "/forms", title: "Formularze" },
  { id: 4, href: "/contact", title: "Kontact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full h-20 md:px-32 py-2 bg-basicDark shadow-md z-50">
      <div className="flex items-center justify-between max-w-5xl m-auto">
        <Link
          href="/"
          className="pl-4 flex items-center gap-2 z-10"
          onClick={closeMenu}
        >
          <Image src={logo} alt="logo" />
          <h1 className="text-basicBright font-bold tracking-wide text-xl">
            <span className="text-basicBright">wP</span>
            <span className="text-accentBright">olisa</span>
          </h1>
        </Link>
        <div>
          <DesktopNav menuItems={menuItems} />
        </div>
      </div>
      <div>
        <MobileNav
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          menuItems={menuItems}
        />
      </div>
    </header>
  );
};
export default Header;
