import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex gap-4 text-basicBright">
      <Link href="/">Home</Link>
      <Link href="/description">Description</Link>
      <Link href="/form">Form</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default DesktopNav;
