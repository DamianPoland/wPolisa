import Link from "next/link";
import logo from "@/assets/images/logo5-tr-full-dark-64.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-20 px-32 py-2 bg-basicDark shadow-md z-50">
        <div className="flex items-center justify-between max-w-5xl m-auto px-10">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <nav className="flex gap-4 text-basicBright">
            <Link href="/">Home</Link>
            <Link href="/description">Description</Link>
            <Link href="/forms">Form</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
