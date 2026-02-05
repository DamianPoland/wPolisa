import { Heart, Shield, Plane, Home, Building2, Package, ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { InsuranceVariantsId } from "@/utils/types";
import { insuranceVariants } from "@/utils/constants";

interface InsuranceType {
  id: InsuranceVariantsId;
  description: string;
  color: string;
}

const insuranceTypes: InsuranceType[] = [
  {
    id: InsuranceVariantsId.medyczny,
    description: "Zdrowie pod kontrolą. Z nami to nie łut szczęścia, a plan.",
    color: "from-red-900 to-rose-400",
  },
  {
    id: InsuranceVariantsId.zycie,
    description:
      "Zabezpiecz przyszłość tych, na których Ci zależy. Bo pieniądze szczęścia nie dają, ale pomagają w trudnych chwilach.",
    color: "from-cyan-800 to-cyan-400",
  },
  {
    id: InsuranceVariantsId.podroze,
    description: "Zwiedzaj bez stresu! W razie czego, my łapiemy samolot za Ciebie.",
    color: "from-violet-800 to-fuchsia-400",
  },
  {
    id: InsuranceVariantsId.nieruchomosc,
    description: "Twój dom to Twoja twierdza. A my pilnujemy, by stał twardo na fundamentach.",
    color: "from-emerald-900 to-emerald-500",
  },
  {
    id: InsuranceVariantsId.firma,
    description: "Biznes pod ochroną. Zadbaj o firmę, a my zadbamy o to, byś mógł spokojnie spać.",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: InsuranceVariantsId.inne,
    description: "Coś więcej? Pomożemy! Ubezpieczymy prawie wszystko, co ma sens.",
    color: "from-zinc-800 to-zinc-400",
  },
];

const InsuranceTiles = () => {
  const OfferIcon = ({ id }: { id: InsuranceVariantsId }) => {
    const Icon = insuranceVariants.find((t) => t.id === id)?.icon;
    if (!Icon) return null;
    return <Icon className="h-7 w-7 text-white" />;
  };

  return (
    <section className="px-4 md:px-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Nasza <span className="text-accent">Oferta</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Zaufali nam najlepsi &ndash; i my im też.</p>
          <p className="mt-4 text-muted-foreground">
            Wybierz rodzaj ubezpieczenia i wypełnij krótki formularz, aby otrzymać najlepszą ofertę!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insuranceTypes.map((insurance, index) => (
            <Link
              key={insurance.id}
              href={`/offer?variant=${insurance.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${insurance.color}`}
                  >
                    <OfferIcon id={insurance.id} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                    {insuranceVariants.find((t) => t.id === insurance.id)?.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{insurance.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Wypełnij formularz
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTiles;
