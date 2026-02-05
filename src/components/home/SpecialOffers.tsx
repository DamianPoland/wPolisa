import { Heart, Home, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CornerInfoBadge, { BadgeVariant } from "../cornerInfoBadge/CornerInfoBadge";
import { InsuranceVariantsId } from "@/utils/types";
import { insuranceVariants } from "@/utils/constants";

interface SpecialOffer {
  id: InsuranceVariantsId;
  promo: string;
  description: string;
  gradient: string;
  borderGradient: string;
  glowColor: string;
  badge: string;
  badgeVariant: BadgeVariant;
}

const specialOffersTypes: SpecialOffer[] = [
  {
    id: InsuranceVariantsId.medyczny,
    promo: "95zł/m-c",
    description: "Indywidualne ubezpieczenie zdrowotne w cenie grupowego!",
    gradient: "from-rose-500 via-pink-500 to-rose-600",
    borderGradient: "from-rose-400 via-pink-400 to-rose-500",
    glowColor: "rose",
    badge: "BESTSELLER",
    badgeVariant: 1,
  },
  {
    id: InsuranceVariantsId.nieruchomosc,
    promo: "150zł/rok",
    description: "Gwarancja stałej składki tylko do końca miesiąca.",
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    borderGradient: "from-emerald-400 via-teal-400 to-emerald-500",
    glowColor: "emerald",
    badge: "LIMITOWANA OFERTA",
    badgeVariant: 2,
  },
  {
    id: InsuranceVariantsId.zycie,
    promo: "299zł/rok",
    description: "Zabezpiecz przyszłość rodziny już od 1,50 zł dziennie.",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    borderGradient: "from-blue-400 via-cyan-400 to-blue-500",
    glowColor: "blue",
    badge: "SUPER OFERTA",
    badgeVariant: 3,
  },
];

const OfferIcon = ({ id }: { id: InsuranceVariantsId }) => {
  const Icon = insuranceVariants.find((t) => t.id === id)?.icon;
  if (!Icon) return null;
  return <Icon className="h-7 w-7 text-white" />;
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
              href={`/offer?variant=${offer.id}&promo=${encodeURIComponent(offer.promo)}`}
              className="group animate-fade-in block h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Card className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <CornerInfoBadge text={offer.badge} variant={offer.badgeVariant} />

                {/* Gradient top accent */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${offer.gradient}`} />

                <CardContent className="p-6 md:p-8 pt-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${offer.gradient} shadow-lg`}
                  >
                    <OfferIcon id={offer.id} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {insuranceVariants.find((t) => t.id === offer.id)?.title}
                  </h3>

                  <h5 className="mt-3 text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {offer.promo}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
