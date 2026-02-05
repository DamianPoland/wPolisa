import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Coffee, ShoppingBag, ArrowRight, Gift, Shield, Clock } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Wypełnij Formularz",
    desc: "Podaj podstawowe dane nieruchomości, którą chcesz ubezpieczyć.",
  },
  {
    step: "2",
    title: "Wybierz Ofertę",
    desc: "Nasi eksperci przygotują dla Ciebie najlepsze opcje ubezpieczenia.",
  },
  {
    step: "3",
    title: "Odbierz Nagrodę",
    desc: "Po opłaceniu składki za min. 500 zł, karta podarunkowa o wartości 50 zł trafi na Twój adres e-mail i ruszasz na łowy!",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Najlepsze Ubezpieczenie",
    description: "Masz najlepsze ubezpieczenie dostępne na rynku. Proste zasady, szybka realizacja i realne korzyści.",
    color: "text-orange-500",
  },
  {
    icon: Gift,
    title: "Voucher 50 zł na Allegro",
    description:
      "Kupujesz ubezpieczenie nieruchomości za min. 500 zł i otrzymujesz kartę podarunkową o wartości 50 zł do wykorzystania na dowolne zakupy.",
    color: "text-amber-500",
  },
  {
    icon: Clock,
    title: "Szybka Decyzja",
    description: "Otrzymaj propozycję ubezpieczenia w 24 godziny od zgłoszenia.",
    color: "text-orange-600",
  },
];

const faqItems = [
  {
    question: "Jak długo muszę czekać na kod do Allegro?",
    answer:
      "Kod wysyłamy w ciągu 14 dni roboczych od zaksięgowania składki. Wystarczająco długo, żebyśmy mogli zaparzyć kawę, sprawdzić Twoją polisę i upewnić się, że wszystko gra.",
  },
  {
    question: "Czy ubezpieczenie garażu też się liczy?",
    answer:
      "Pewnie! Garaż, domek letniskowy, a nawet szopa na narzędzia – jeśli to nieruchomość i polisa kosztuje min. 500 zł, bon jest Twój. Twój garaż zasługuje na ochronę tak samo jak Twoje auto w środku.",
  },
  {
    question: "Co jeśli moja polisa kosztuje 499 zł?",
    answer:
      "Hmm, to prawie jak bon, ale jeszcze nie bon 😉 Możesz dorzucić dodatkowe ryzyko (np. stłuczenie szyb albo przepięcia) i przekroczyć magiczną granicę 500 zł. Bonus: lepsza ochrona + 50 zł na zakupy. Win-win!",
  },
  {
    question: "Czy mogę wykorzystać bon na cokolwiek na Allegro?",
    answer:
      "Tak! Allegro to Allegro – kup co chcesz. Nowa lampa do salonu? Proszę bardzo. Karma dla kota? Czemu nie. Kolejna szafka do skręcania? Twoja sprawa, my nie oceniamy! 🛒",
  },
];

// TODO: dostosować metadane
export const metadata = {
  title: "Bon na Dom | wPolisa.pl",
  description: "Odbierz voucher 50 zł i bonusy za ubezpieczenie domu!",
};

const PromotionHomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Bon na Dom</h1>
            <h2 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">
              Twoja polisa teraz „płaci" za zakupy!
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Bo ubezpieczenie to nie tylko obowiązek, to czysta przyjemność.
            </p>

            <div className="inline-flex  gap-2 px-4 mt-6  text-sm text-primary-foreground">
              <Gift className="h-7 w-7 text-accent" />
              <p className="mx-auto max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
                Chroń swoje cztery kąty i odbierz 50 zł na Allegro.
              </p>
            </div>
          </div>
        </div>
        <div
          className="animate-slide-up mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.2s" }}
        >
          <Button variant="hero" size="xl" asChild>
            <Link href="/offer?variant=nieruchomosc&promo=Bon na Dom">Odbieram ofertę i kartę podarunkową</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, i) => (
            <Card key={i} className="border-border/50 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div
                  className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 ${item.color}`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-muted/50 py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Jak odebrać kortę podarunkową?</h2>
            <p className="text-muted-foreground text-lg">To tylko 3 proste kroki do Twojej nagrody</p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 left-0 w-full h-1 bg-border hidden md:block -z-10" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* TODO zmienić kolory kółek "from" "to" na takie co mamy w aplikacji */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-orange-500 to-amber-500 text-3xl font-bold text-white shadow-xl">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto ">
          <Card className="bg-gradient-hero from-orange-500 to-amber-600 text-white border-none overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <CardContent className="p-12 relative z-10">
              <Gift className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">Chcę ten bon!</h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
                Wypełnij formularz, a my skontaktujemy się z Tobą i pomożemy wybrać najlepszą polisę. Bon na 50 zł już
                na Ciebie czeka!
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link href="/offer?variant=nieruchomosc&promo=Bon na Dom">Wypełnij zgłoszenie teraz</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link href="/promotions">Wróć do promocji</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container m-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Często zadawane pytania</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Odpowiedzi na pytania, które pewnie chcesz zadać
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-border/50 py-0">
              <CardContent className="py-0">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Szczegółowe warunki promocji znajdziesz w{" "}
              <Link href="/promotions/promo-home/terms" className="underline hover:text-foreground transition-colors">
                regulaminie
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PromotionHomePage;
