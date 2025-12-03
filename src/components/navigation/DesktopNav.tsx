"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/utils/types";

interface IDesktopNav {
  menuItems: MenuItem[];
}

const DesktopNav = ({ menuItems }: IDesktopNav) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-4 text-basicBright">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`px-3 py-2 hover:text-accentBright ${isActive ? "text-accentBright" : "text-basicBright"}`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
