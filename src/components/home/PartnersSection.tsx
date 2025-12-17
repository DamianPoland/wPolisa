import Image, { StaticImageData } from "next/image";
import pzu from "@/assets/images/pzu.png";
import pzuZycie from "@/assets/images/pzu-zycie.png";
import warta from "@/assets/images/warta.png";
import wartaHDI from "@/assets/images/warta-hdi.png";
import hestia from "@/assets/images/hestia.png";
import tuZdrowie from "@/assets/images/tu-zdrowie.png";
import unum from "@/assets/images/unum.png";
import generali from "@/assets/images/generali.png";
import compensa from "@/assets/images/compensa.png";
import saltus from "@/assets/images/saltus.png";
import allianz from "@/assets/images/allianz.png";
import luxmed from "@/assets/images/luxmed.png";
import medicover from "@/assets/images/medicover.png";

type Insurer = {
  name: string;
  logo: StaticImageData;
};

const insurers: Insurer[] = [
  { name: "PZU Życie", logo: pzu },
  { name: "PZU SA", logo: pzuZycie },
  { name: "Warta Życie", logo: warta },
  { name: "Warta HDI", logo: wartaHDI },
  { name: "Hestia", logo: hestia },
  { name: "TU Zdrowie", logo: tuZdrowie },
  { name: "Unum", logo: unum },
  { name: "Generali", logo: generali },
  { name: "Compensa", logo: compensa },
  { name: "Saltus", logo: saltus },
  { name: "Allianz", logo: allianz },
];

const medicalPartners = [
  { name: "Luxmed", logo: luxmed },
  { name: "Medicover", logo: medicover },
];

const PartnersSection = () => {
  return (
    <section className="bg-muted/5 py-16 md:py-24 px-4 md:px-2">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl  text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Nasi <span className="text-accent">Partnerzy</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Twoje bezpieczeństwo jest w dobrych rękach – dosłownie.</p>
        </div>

        {/* Insurance Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ubezpieczyciele
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {insurers.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-1 md:gap-2">
                <div className="w-24 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                  <Image src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <div
                  key={partner.name}
                  className="flex items-center justify-center text-sm font-medium text-foreground"
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Placówki Medyczne
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {medicalPartners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-1 md:gap-2">
                <div className="w-24 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                  <Image src={partner.logo} alt={`${partner.name} logo`} />
                </div>
                <div key={partner.name} className="flex items-center justify-center text-sm font-medium text-accent">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
