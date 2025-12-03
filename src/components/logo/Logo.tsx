import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo5-tr-dark-64.png";

interface ILogo {
  closeMenu: () => void;
}

const Logo = ({ closeMenu }: ILogo) => {
  return (
    <div>
      <Link href="/" className="pl-4 flex items-center gap-2 z-10" onClick={closeMenu}>
        <Image src={logo} alt="logo" />
        <h1 className="text-basicBright font-bold tracking-wide text-3xl">
          <span className="text-basicBright inline-block transform rotate-25 -translate-y-0.5 -tracking-[4px]">w</span>
          <span className="text-accentBright">Polisa</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
