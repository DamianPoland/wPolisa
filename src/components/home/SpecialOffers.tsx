import { ArrowRight, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CornerInfoBadge from "../cornerInfoBadge/CornerInfoBadge";
import { BadgeVariant, InsuranceVariantsId } from "@/utils/types";
import { insuranceVariants } from "@/utils/constants";
import InsuranceVariantIcon from "../insuranceVariantIcon/InsuranceVariantIcon";
import { Badge } from "../ui/badge";

interface SpecialOffer {
  id: InsuranceVariantsId;
  promo: string;
  description: string;
  badgeText: string;
  badgeVariant: BadgeVariant;
  benefits: string[];
  smallBadgeInfo?: string;
}

const specialOffersTypes: SpecialOffer[] = [
  {
    id: InsuranceVariantsId.medyczny,
    promo: "86 zł/m-c",
    description: "Indywidualne ubezpieczenie zdrowotne w cenie grupowego!",
    badgeText: "NAJCZĘSTSZY WYBÓR",
    badgeVariant: BadgeVariant.two,
    benefits: [
      "Błyskawiczny dostęp do 16 specjalistów.",
      "Zabiegi i diagnostyka bez kolejek.",
      "Komplet 24 kluczowych badań.",
      "Profilaktyka, która dba o Ciebie.",
    ],
    smallBadgeInfo: "PODSTAWOWY",
  },
  {
    id: InsuranceVariantsId.medyczny,
    promo: "198 zł/m-c",
    description: "Bo zdrowie jest najważniejsze!",
    badgeText: "PREMIUM",
    badgeVariant: BadgeVariant.one,
    benefits: [
      "Aż 33 specjalistów na wyciągnięcie ręki.",
      "Pełna diagnostyka (ponad 120 badań).",
      "Szeroki wachlarz zabiegów.",
      "Szczepienia i profilaktyka bez limitów.",
      "Kompleksowa ochrona 24/7.",
    ],
    smallBadgeInfo: "ROZSZERZONY",
  },
  {
    id: InsuranceVariantsId.zycie,
    promo: "44 zł/m-c",
    description: "Zabezpiecz przyszłość rodziny już od 1,50 zł dziennie.",
    badgeText: "HIT CENOWY",
    badgeVariant: BadgeVariant.three,
    benefits: [
      "Realne wsparcie finansowe: 30 000 zł.",
      "Wypłata 10 000 zł w razie choroby.",
      "Ochrona na wypadek operacji.",
      "Wypłata za każdy % uszczerbku.",
    ],
  },
];

const SpecialOffers = () => {
  return (
    <section className="px-4 md:px-2 py-16 md:py-24">
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
              key={offer.id + offer.promo}
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

                <CardContent className="p-6 md:p-8 pt-8 flex flex-col flex-1 items-top">
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <InsuranceVariantIcon id={offer.id} />
                    {offer.smallBadgeInfo && (
                      <Badge
                        variant="outline"
                        className={` h-fit py-1 text-xs ${
                          index === 0 ? "bg-zinc-300" : index === 1 ? "bg-amber-300" : ""
                        }`}
                        // className="text-xs border-accent/30 bg-accent/10 text-accent font-semibold"
                      >
                        {offer.smallBadgeInfo === "ROZSZERZONY" && <Crown className="h-3 w-3 mr-1" />}
                        {offer.smallBadgeInfo}
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {insuranceVariants.find((t) => t.id === offer.id)?.title}
                  </h3>

                  <h5 className="mt-1 text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {offer.promo}
                  </h5>

                  {/* Description */}
                  <p className="mt-3 text-muted-foreground leading-relaxed">{offer.description}</p>

                  {/* Benefits */}
                  <ul className="space-y-3 my-6 flex-1">
                    {offer.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-1.5 h-2 w-2 rounded-full bg-linear-to-br ${insuranceVariants.find((t) => t.id === offer.id)?.color} shrink-0`}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

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
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/promotions">
              Sprawdź nasze aktualne promocje
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
