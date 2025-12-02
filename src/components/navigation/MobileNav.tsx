"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

const menuItems = [
  { id: 1, href: "/", title: "Home" },
  { id: 2, href: "/description", title: "Description" },
  { id: 3, href: "/form", title: "Form" },
  { id: 4, href: "/contact", title: "Contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full md:hidden">
      {!isOpen ? (
        <button
          onClick={toggleMenu}
          className="absolute -top-13 right-0 w-full flex items-center justify-end py-2 px-4 text-basicBright"
        >
          <MenuIcon />
        </button>
      ) : (
        <nav className="absolute -top-13 right-0 w-full">
          <button
            onClick={toggleMenu}
            className="flex justify-self-end pt-2 px-4 pb-7 text-basicBright"
          >
            <X />
          </button>
          <ul
            className="flex flex-col items-center bg-basicDark shadow-md"
            onClick={toggleMenu}
          >
            {menuItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <Link href={item.href} className="block p-4 text-basicBright">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="h-screen w-full bg-transparent"
            onClick={toggleMenu}
          ></div>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
