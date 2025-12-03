"use client";

import { useState } from "react";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";
import Logo from "@/components/logo/Logo";
import { MenuItem } from "@/utils/types";

const menuItems: MenuItem[] = [
  { id: 1, href: "/", title: "Główna" },
  { id: 2, href: "/description", title: "O nas" },
  { id: 3, href: "/forms", title: "Formularze" },
  { id: 4, href: "/contact", title: "Kontakt" },
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
      <div className="flex items-center justify-between max-w-7xl m-auto">
        <Logo closeMenu={closeMenu} />
        <DesktopNav menuItems={menuItems} />
      </div>
      <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} menuItems={menuItems} />
    </header>
  );
};
export default Header;
