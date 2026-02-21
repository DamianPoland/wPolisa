import Image, { StaticImageData } from "next/image";
import luxmed from "@/assets/images/luxmed.png";
import medicover from "@/assets/images/medicover.png";
import pzuZdrowie from "@/assets/images/pzu-zdrowie.png";
import tuZdrowie from "@/assets/images/tu-zdrowie.png";

type MedicalOperatorsType = {
  name: string;
  logo: StaticImageData | string;
};

const medicalOperators: MedicalOperatorsType[] = [
  { name: "Luxmed", logo: luxmed },
  { name: "Medicover", logo: medicover },
  { name: "PZU Zdrowie", logo: pzuZdrowie },
  { name: "TU Zdrowie", logo: tuZdrowie },
];

const MedicalPartners = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {medicalOperators.map((partner) => (
        <div key={partner.name} className="flex flex-col items-center gap-1 md:gap-2">
          <div className="relative w-24 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
            <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain p-3" />
          </div>
          <div key={partner.name} className="flex items-center justify-center text-sm font-medium text-accent">
            {partner.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalPartners;
