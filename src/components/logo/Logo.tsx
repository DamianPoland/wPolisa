import Image from "next/image";
import Link from "next/link";
import shieldDark from "@/assets/images/shield-dark-64.png";
import shieldLight from "@/assets/images/shield-light-64.png";
import logoFullDark from "@/assets/images/wPolisa_agecja_tr-bg_light-text.png";
import logoFullLight from "@/assets/images/wPolisa_agecja_tr-bg_dark-text.png";
import { Icon } from "@/utils/types";

type LogoType = {
  logoVariant: Icon.DARK | Icon.LIGHT;
};

const Logo = ({ logoVariant }: LogoType) => {
  const isLogoLight = logoVariant === Icon.LIGHT;

  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
      <div
        className={`flex h-14 min-w-14 items-center justify-center rounded-lg ${isLogoLight ? "bg-basic-bright" : "bg-gradient-hero"}`}
      >
        <Image src={isLogoLight ? shieldDark : shieldLight} alt="logo" className="h-full w-full" />
      </div>
      <div className={`flex h-14 min-w-42 items-center justify-center`}>
        <Image src={isLogoLight ? logoFullDark : logoFullLight} alt="name" className="h-full w-full" />
      </div>
    </Link>
  );
};

export default Logo;
