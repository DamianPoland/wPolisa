import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Badge, Gift, Globe, Shield, Users } from "lucide-react";
import Link from "next/link";
import CornerInfoBadge, { BadgeVariant } from "@/components/cornerInfoBadge/CornerInfoBadge";

interface Promotion {
  id: string;
  title: string;
  benefits: string[];
  icon: React.ElementType;
  gradient: string;
  badge: string;
  badgeVariant: BadgeVariant;
}

const promotions: Promotion[] = [
  {
    id: "bon-za-dom",
    title: "Bon za Dom",
    benefits: [
      "Odbierz voucher o wartości 50 zł na zakupy.",
      "Bonus za każde 500 zł wydane na ubezpieczenie.",
      "Szybka realizacja i proste zasady.",
    ],
    icon: Gift,
    gradient: "from-orange-500 to-amber-500",
    badge: "Dla Ciebie",
    badgeVariant: 1,
  },
  {
    id: "strona-www",
    title: "Darmowa Strona WWW dla Biznesu",
    benefits: [
      "Profesjonalna strona internetowa za 0 zł.",
      "Nagroda za przeniesienie ubezpieczeń firmowych do naszej agencji.",
      "Kompleksowe wsparcie techniczne i nowoczesny design.",
    ],
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
    badge: "Dla Firmy",
    badgeVariant: 2,
  },
  {
    id: "bezpieczny-zespol",
    title: "Pakiet Transport Plus",
    benefits: [
      "Darmowe ubezpieczenie pracownika za każdy ubezpieczony zestaw (ciągnik + naczepa).",
      "Realne oszczędności w kosztach zatrudnienia.",
      "Pełna ochrona Twojej floty i kadry w jednym pakiecie.",
    ],
    icon: Users,
    gradient: "from-blue-500 to-indigo-500",
    badge: "Dla Firmy",
    badgeVariant: 2,
  },
];

const Promocje = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Promocje dla Ciebie</h1>
            <h2 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">i Twojej Firmy</h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Skorzystaj z wyjątkowych ofert przygotowanych specjalnie dla naszych klientów.
            </p>
            <div className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
                <Gift className="h-4 w-4 text-accent" />
                <span>Oferty specjalne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Grid Section */}
      <section className="py-16 md:py-24 px-4 md:px-2">
        <div className="container m-auto">
          {/* Promotions Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {promotions.map((promo, index) => {
              const IconComponent = promo.icon;
              return (
                <div
                  key={promo.id}
                  className="group animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                    {/* Gradient top accent */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${promo.gradient}`} />

                    <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                      <CornerInfoBadge text={promo.badge} variant={promo.badgeVariant} />

                      <div
                        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${promo.gradient} shadow-lg`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-foreground mb-4">{promo.title}</h2>

                      {/* Benefits */}
                      <ul className="space-y-3 mb-6 flex-1">
                        {promo.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br ${promo.gradient} shrink-0`}
                            />
                            <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className="mt-auto pt-4">
                        <Button variant="accent" className="w-full group/btn" asChild>
                          <Link href={`/kontakt?promo=${promo.id}`}>
                            Sprawdź szczegóły
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Masz pytania dotyczące promocji?</p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Skontaktuj się z nami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Promocje;
