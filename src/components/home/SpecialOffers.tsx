import { Heart, Home, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const specialOffersTypes = [
  {
    id: "medyczny",
    title: "Pakiet Medyczny",
    price: "95zł/m-c",
    description: "Indywidualne ubezpieczenie zdrowotne w cenie grupowego!",
    badge: "BESTSELLER",
    badgeVariant: "bestseller" as const,
    icon: Heart,
    gradient: "from-rose-500 via-pink-500 to-rose-600",
    borderGradient: "from-rose-400 via-pink-400 to-rose-500",
    glowColor: "rose",
  },
  {
    id: "nieruchomosc",
    title: "Ubezpieczenie Nieruchomości",
    price: "150zł/rok",
    description: "Gwarancja stałej składki tylko do końca miesiąca.",
    badge: "LIMITOWANA OFERTA",
    icon: Home,
    badgeVariant: "limited" as const,
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    borderGradient: "from-emerald-400 via-teal-400 to-emerald-500",
    glowColor: "emerald",
  },
  {
    id: "zycie",
    title: "Ubezpieczenie Życia",
    price: "299zł/rok",
    description: "Zabezpiecz przyszłość rodziny już od 1,50 zł dziennie.",
    badge: "SUPER OFERTA",
    badgeVariant: "super" as const,
    icon: Shield,
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    borderGradient: "from-blue-400 via-cyan-400 to-blue-500",
    glowColor: "blue",
  },
];

const getRibbonColors = (variant: string) => {
  switch (variant) {
    case "bestseller":
      return {
        main: "#f59e0b", // amber-500
        dark: "#b45309", // amber-700
      };
    case "limited":
      return {
        main: "#9333ea", // purple-600
        dark: "#6b21a8", // purple-800
      };
    case "super":
      return {
        main: "#e67a2c", // accent
        dark: "#c2410c", // orange-700
      };
    default:
      return {
        main: "#1c3757",
        dark: "#0f1d2d",
      };
  }
};

const CornerRibbon = ({ text, variant }: { text: string; variant: string }) => {
  const colors = getRibbonColors(variant);

  return (
    <div className="absolute top-0 right-0 z-20 overflow-hidden w-28 h-28 pointer-events-none">
      {/* Ribbon */}
      <div
        className="absolute top-[30px] right-[-35px] w-[150px] text-center py-1.5 text-[9px] font-bold tracking-wider text-white shadow-md rotate-45"
        style={{
          background: `linear-gradient(90deg, ${colors.main} 0%, ${colors.dark} 50%, ${colors.main} 100%)`,
          boxShadow: `0 2px 8px rgba(0,0,0,0.3)`,
        }}
      >
        {text}
      </div>
      {/* Right fold shadow */}
      <div
        className="absolute top-[-5px] right-[17px] w-0 h-0 rotate-45"
        style={{
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: `6px solid ${colors.dark}`,
          filter: "brightness(0.6)",
        }}
      />
    </div>
  );
};

const getGlowStyles = (color: string) => {
  switch (color) {
    case "rose":
      return "hover:shadow-[0_0_40px_-5px_rgba(244,63,94,0.4)]";
    case "emerald":
      return "hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.4)]";
    case "blue":
      return "hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.4)]";
    default:
      return "";
  }
};

const SpecialOffers = () => {
  return (
    <section className="px-4 md:px-2 py-16 md:py-24 hidden">
      <div className="container m-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Hity <span className="text-accent">Sprzedaży</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Nie przegap okazji!</p>
          <p className="mt-4 text-muted-foreground">Wyjątkowe promocje dostępne tylko przez ograniczony czas.</p>
        </div>

        {/* Special Offer Tiles */}
        <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3 items-stretch">
          {specialOffersTypes.map((offer, index) => (
            <Link
              key={offer.id}
              href={`/offer?variant=${offer.id}&price=${encodeURIComponent(offer.price)}`}
              className="group animate-fade-in block h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                id={offer.id}
                className={`scroll-mt-32 relative p-0.5 rounded-2xl bg-linear-to-br ${offer.borderGradient} transition-all duration-500 h-full ${getGlowStyles(offer.glowColor)}`}
              >
                <Card className="relative h-full overflow-hidden rounded-2xl border-0 bg-card transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                  {/* Corner Ribbon */}
                  <CornerRibbon text={offer.badge} variant={offer.badgeVariant} />

                  <CardContent className="p-6 md:p-8 pt-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${offer.gradient} shadow-lg`}
                    >
                      <offer.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {offer.title}
                    </h3>

                    <h5 className="mt-3 text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {offer.price}
                    </h5>

                    {/* Description */}
                    <p className="mt-3 text-muted-foreground leading-relaxed">{offer.description}</p>

                    {/* CTA Button */}
                    <div className="mt-auto pt-6">
                      <Button variant="accent" className="w-full group/btn cursor-pointer">
                        Sprawdź szczegóły
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
