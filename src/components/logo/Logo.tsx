import Image from "next/image";
import Link from "next/link";
import shieldDark from "@/assets/images/shield-dark-168.png";
import shieldLight from "@/assets/images/shield-light-168.png";
import logoFullDark from "@/assets/images/wPolisa_agecja_tr-bg_light-text_504x168.png";
import logoFullLight from "@/assets/images/wPolisa_agecja_tr-bg_dark-text_504x168.png";
import { Icon } from "@/utils/types";

type LogoType = {
  logoVariant: Icon.DARK | Icon.LIGHT;
};

const Logo = ({ logoVariant }: LogoType) => {
  const isLogoLight = logoVariant === Icon.LIGHT;

  return (
    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 focus:outline-none">
      <div
        className={`flex h-14 min-w-14 w-14 items-center justify-center rounded-lg ${isLogoLight ? "bg-basic-bright" : "bg-gradient-hero"}`}
      >
        <Image
          src={isLogoLight ? shieldDark : shieldLight}
          alt="wPolisa logo"
          width={56}
          height={56}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
      <div className={`flex h-14 min-w-42 w-42 items-center justify-center`}>
        <Image
          src={isLogoLight ? logoFullDark : logoFullLight}
          alt="wPolisa - Multiagencja Ubezpieczeniowa"
          width={168}
          height={56}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
