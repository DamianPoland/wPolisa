import Image, { StaticImageData } from "next/image";
import pzu from "@/assets/images/pzu.png";
import pzuZycie from "@/assets/images/pzu-zycie.png";
import warta from "@/assets/images/warta.png";
import wartaHDI from "@/assets/images/warta-hdi.png";
import hestia from "@/assets/images/hestia.png";
import unum from "@/assets/images/unum.png";
import generali from "@/assets/images/generali.png";
import compensa from "@/assets/images/compensa.png";
import saltus from "@/assets/images/saltus.png";
import allianz from "@/assets/images/allianz.png";

type InsuranceCompaniesType = {
  name: string;
  logo: StaticImageData;
};

const insuranceCompanies: InsuranceCompaniesType[] = [
  { name: "PZU SA", logo: pzu },
  { name: "PZU Życie", logo: pzuZycie },
  { name: "Warta Życie", logo: warta },
  { name: "Warta HDI", logo: wartaHDI },
  { name: "Hestia", logo: hestia },
  { name: "Unum", logo: unum },
  { name: "Generali", logo: generali },
  { name: "Compensa", logo: compensa },
  { name: "Saltus", logo: saltus },
  { name: "Allianz", logo: allianz },
];

const InsurancePartners = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {insuranceCompanies.map((partner) => (
        <div key={partner.name} className="flex flex-col items-center gap-1 md:gap-2">
          <div className="w-24 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
            <Image src={partner.logo} alt={`${partner.name} logo`} />
          </div>
          <div key={partner.name} className="flex items-center justify-center text-sm font-medium text-foreground">
            {partner.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsurancePartners;
