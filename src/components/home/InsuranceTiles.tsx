"use client";
import { Heart, Shield, Plane, Home, Building2, Package, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const insuranceTypes = [
  {
    id: "medyczny",
    title: "Pakiet Medyczny",
    description: "Zdrowie pod kontrolą. Z nami to nie łut szczęścia, a plan.",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "zycie",
    title: "Ubezpieczenie Życia",
    description:
      "Zabezpiecz przyszłość tych, na których Ci zależy. Bo pieniądze szczęścia nie dają, ale pomagają w trudnych chwilach.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "podroze",
    title: "Ubezpieczenie Podróży",
    description: "Zwiedzaj bez stresu! W razie czego, my łapiemy samolot za Ciebie.",
    icon: Plane,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "dom",
    title: "Ubezpieczenie Domu",
    description: "Twój dom to Twoja twierdza. A my pilnujemy, by stał twardo na fundamentach.",
    icon: Home,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "firma",
    title: "Ubezpieczenie Firmy",
    description: "Biznes pod ochroną. Zadbaj o firmę, a my zadbamy o to, byś mógł spokojnie spać.",
    icon: Building2,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "inne",
    title: "Pozostałe Ubezpieczenia",
    description: "Coś więcej? Pomożemy! Ubezpieczymy prawie wszystko, co ma sens.",
    icon: Package,
    color: "from-slate-500 to-gray-500",
  },
];

const InsuranceTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Nasze <span className="text-accent">Hity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wybierz rodzaj ubezpieczenia i wypełnij krótki formularz. Skontaktujemy się z najlepszą ofertą!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insuranceTypes.map((insurance, index) => (
            <Link
              key={insurance.id}
              href={`/forms?type=${insurance.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${insurance.color}`}
                  >
                    <insurance.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">{insurance.title}</h3>
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
