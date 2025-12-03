"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { MenuItem } from "@/utils/types";

interface IMobileNav {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  menuItems: MenuItem[];
}

const MobileNav = ({ toggleMenu, isMenuOpen, menuItems }: IMobileNav) => {
  const pathname = usePathname();
  const Icon = isMenuOpen ? X : MenuIcon;

  return (
    <div className="relative w-full md:hidden">
      <nav className="absolute -top-20 right-0 py-2 flex justify-end items-center h-20">
        <div className="flex justify-end items-center h-20">
          <button onClick={toggleMenu} className="py-2 px-4 text-basicBright">
            <Icon size={24} />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <>
          <ul className="flex flex-col items-center bg-basicDark shadow-md" onClick={toggleMenu}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.id} className="w-full text-center">
                  <Link
                    href={item.href}
                    className={`block p-2
                     ${isActive ? "text-accentBright" : "text-basicBright"}`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-screen w-full bg-basicDark/20" onClick={toggleMenu}></div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
