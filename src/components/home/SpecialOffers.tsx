import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CornerInfoBadge from "../cornerInfoBadge/CornerInfoBadge";
import { BadgeVariant, InsuranceVariantsId } from "@/utils/types";
import { insuranceVariants } from "@/utils/constants";
import InsuranceVariantIcon from "../insuranceVariantIcon/InsuranceVariantIcon";

interface SpecialOffer {
  id: InsuranceVariantsId;
  promo: string;
  description: string;
  badgeText: string;
  badgeVariant: BadgeVariant;
}

const specialOffersTypes: SpecialOffer[] = [
  {
    id: InsuranceVariantsId.medyczny,
    promo: "95zł/m-c",
    description: "Indywidualne ubezpieczenie zdrowotne w cenie grupowego!",
    badgeText: "BESTSELLER",
    badgeVariant: BadgeVariant.two,
  },
  {
    id: InsuranceVariantsId.nieruchomosc,
    promo: "150zł/rok",
    description: "Gwarancja stałej składki tylko do końca miesiąca.",
    badgeText: "LIMITOWANA OFERTA",
    badgeVariant: BadgeVariant.one,
  },
  {
    id: InsuranceVariantsId.zycie,
    promo: "299zł/rok",
    description: "Zabezpiecz przyszłość rodziny już od 1,50 zł dziennie.",
    badgeText: "SUPER OFERTA",
    badgeVariant: BadgeVariant.three,
  },
];

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
                <CornerInfoBadge text={offer.badgeText} variant={offer.badgeVariant} />

                {/* Gradient top accent */}
                <div
                  className={`h-1.5 w-full bg-linear-to-r ${insuranceVariants.find((t) => t.id === offer.id)?.color}`}
                />

                <CardContent className="p-6 md:p-8 pt-8 flex flex-col flex-1">
                  {/* Icon */}
                  <InsuranceVariantIcon id={offer.id} />

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
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
                      Wypełnij formularz
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
