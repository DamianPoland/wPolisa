"use client";

import logo from "@/assets/images/logo5-tr-full-dark-64.png";
import Image from "next/image";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-20 md:px-32 py-2 bg-basicDark shadow-md z-50">
        <div className="flex items-center justify-between max-w-5xl m-auto">
          <div className="pl-4">
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <DesktopNav />
          </div>
        </div>
        <div>
          <MobileNav />
        </div>
      </header>
    </>
  );
};
export default Header;
