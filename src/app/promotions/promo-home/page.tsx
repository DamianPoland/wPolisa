import Link from "next/link";
import { Shield, Gift, Clock, Star, CheckCircle, ArrowRight, ShoppingBag, Check, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import InsuranceVariantIcon from "@/components/insuranceVariantIcon/InsuranceVariantIcon";
import InsurancePartners from "@/components/partnersSections/InsurancePartners";

const steps = [
  {
    step: "1",
    title: "Wypełnij Formularz",
    desc: "Podaj dane nieruchomości. To zajmie tylko minutę.",
    color: "from-cyan-800 via-cyan-400 to-cyan-800",
    icon: Shield,
  },
  {
    step: "2",
    title: "Wybierz Ofertę",
    desc: "Porównamy dla Ciebie oferty i znajdziemy najlepszą ochronę.",
    color: "from-orange-600 via-amber-500 to-orange-600",
    icon: Clock,
  },
  {
    step: "3",
    title: "Odbierz 50 zł",
    desc: "Opłać składkę (min. 500 zł) i ciesz się bonem na zakupy!",
    color: "from-emerald-800 via-emerald-500 to-emerald-800",
    icon: Gift,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Pełna Ochrona",
    description: "Ubezpieczenie od pożaru, zalania, kradzieży i OC w życiu prywatnym w jednej polisie.",
    color: "from-cyan-800 via-cyan-400 to-cyan-800",
  },
  {
    icon: ShoppingBag,
    title: "Karta Allegro 50 zł",
    description: "Gwarantowany bon do wykorzystania na WSZYSTKO w serwisie Allegro.",
    color: "from-orange-600 via-amber-500 to-orange-600",
  },
  {
    icon: Landmark,
    title: "Honorowana przez Banki",
    description: "Polisa w 100% spełnia wymogi do kredytu hipotecznego. Przygotujemy cesję dla Twojego banku.",
    color: "from-emerald-800 via-emerald-500 to-emerald-800",
  },
];

const faqItems = [
  {
    question: "Czy muszę wydać 50 zł jednorazowo?",
    answer:
      "Nie! Środki z karty podarunkowej trafiają na Twoje saldo Allegro. Możesz nimi opłacić kilka mniejszych zakupów lub dołożyć do czegoś większego.",
  },
  {
    question: "Co wlicza się do kwoty 500 zł?",
    answer:
      "Liczy się łączna kwota składki za ubezpieczenie nieruchomości (domu, mieszkania, garażu). Warto dobrać dodatki (np. OC w życiu prywatnym lub Assistance), aby zyskać lepszą ochronę i zgarnąć bonus.",
  },
  {
    question: "Czy ta polisa nadaje się do kredytu hipotecznego?",
    answer:
      "Tak! Nasze ubezpieczenia są akceptowane przez wszystkie banki w Polsce. Podczas zakupu dopisz w uwagach „Cesja na bank”, a my przygotujemy dokumenty, które wystarczy przekazać do banku.",
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
    question: "Gdzie wpisać kod promocyjny?",
    answer:
      "Nie musisz wpisywać żadnego kodu! Wystarczy, że przejdziesz do formularza przez przycisk na tej stronie („Wypełnij wniosek i odbierz bon”), a promocja naliczy się automatycznie.",
  },
  {
    question: "Kiedy dokładnie otrzymam bon do Allegro?",
    answer:
      "Kod wysyłamy w ciągu 14 dni liczonych od dnia, w którym upłynął termin na skuteczne odstąpienie od umowy ubezpieczenia. To czas na ewentualne formalności – po nim nagroda jest Twoja!",
  },
];

export const metadata = {
  title: "Bon na Dom | wPolisa - Darmowe 50 zł na Allegro do ubezpieczenia",
  description:
    "Ubezpiecz mieszkanie lub dom w wPolisa i odbierz gwarantowany bon 50 zł na Allegro. Sprawdź ofertę w 3 minuty!",
  openGraph: {
    title: "Bon 50 zł na Allegro od wPolisa",
    description: "Zabezpiecz dom i zrób zakupy za darmo. Szybka decyzja, najlepsze ubezpieczenie.",
    type: "website",
    url: "https://www.wpolisa.pl/promotions/promo-home",
  },
};

const PromotionHomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Lewa strona - Tekst */}
          <div className="text-center md:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold tracking-wide">Promocja "Bon na Dom"</span>
            </div>
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Ubezpiecz nieruchomość i odbierz 50 zł
            </h1>
            <ul className="mt-6 space-y-2 text-primary-foreground/80 font-medium text-left inline-block">
              <li className="flex items-center gap-2">
                <div className="bg-emerald-500/20 p-1 rounded-full">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                Akceptowana przez wszystkie banki (kredyt)
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-emerald-500/20 p-1 rounded-full">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                Szybka cesja online
              </li>
            </ul>
            <h2 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">
              Twoja polisa teraz &quot;płaci&quot; za zakupy!
            </h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Zyskaj spokój ducha dzięki najlepszej polisie i zrób darmowe zakupy na Allegro.
            </p>

            <div className="inline-flex  gap-2 mt-6  text-sm text-primary-foreground">
              <Gift className="h-7 w-7 text-accent" />
              <p className="max-w-3xl text-primary-foreground/80 text-lg md:text-xl text-left">
                Gwarantowana nagroda przy składce min. 500 zł.
              </p>
            </div>
          </div>

          {/* Prawa strona - Wizualizacja Karty (CSS Art) */}
          <div
            className="relative flex justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Karta Allegro CSS */}
            <div className="relative group perspective-1000">
              <div className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] bg-gradient-to-br from-[#ff5a00] to-[#ff8d00] rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-2 rotate-[-6deg] flex flex-col justify-between p-6 sm:p-8 border-t border-white/20">
                {/* Logo Allegro style */}
                <div className="text-white font-bold text-2xl tracking-tight opacity-90">allegro</div>

                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-white/80 text-sm uppercase tracking-wider font-semibold">
                      Karta podarunkowa
                    </span>
                    <div className="text-white font-extrabold text-5xl drop-shadow-md">50 zł</div>
                  </div>
                  <Gift className="text-white/20 w-24 h-24 absolute bottom-4 right-4" />
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white text-foreground font-bold px-4 py-2 rounded-lg shadow-lg rotate-12 animate-pulse">
                Gwarantowane!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Dlaczego warto?</h2>
          <p className="text-muted-foreground mt-2">To proste: chronisz dom i zyskujesz pieniądze na zakupy.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, i) => (
            <Card
              key={i}
              className="border-border/50 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <InsuranceVariantIcon icon={item.icon} gradient={item.color} />

                <h3 className="pt-4 mb-3 text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps Section - Improved Readability */}
      <section className="bg-muted/30 py-16 md:py-24 px-4 border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Jak odebrać nagrodę?</h2>
            <p className="text-muted-foreground text-lg">
              Wystarczą 3 kroki. Cały proces zajmuje mniej niż parzenie kawy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Linia łącząca na desktopie */}
            <div className="absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-emerald-200 hidden md:block -z-10" />

            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                <div
                  className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br ${step.color} text-white shadow-xl group-hover:scale-105 transition-transform duration-300 relative z-10`}
                >
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-foreground shadow-md border border-gray-100">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {/* Highlightowanie kwoty 500 zł */}
                  {step.step === "3" ? (
                    <>
                      Opłać składkę{" "}
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-1 rounded">min. 500 zł</span> i ciesz
                      się bonem!
                    </>
                  ) : (
                    step.desc
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-100 p-4 rounded-lg text-sm text-blue-800 shadow-sm">
              💡 <strong>Wskazówka:</strong> Masz kredyt? Ubezpieczenie pod cesję zazwyczaj przekracza 500 zł, więc bon
              otrzymasz niejako "w gratisie" do obowiązkowej polisy. Jeśli brakuje Ci kilku złotych, dobierz
              ubezpieczenie szyb lub Assistance!
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More "Allegro" vibes */}
      <section className="py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto ">
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-none overflow-hidden relative shadow-2xl">
            {/* Abstrakcyjne tło */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5a00] rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -translate-x-1/3 translate-y-1/3" />

            <CardContent className="p-12 md:p-16 relative z-10 flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full mb-8">
                <Gift className="h-12 w-12 text-[#ff5a00]" />
              </div>

              <h2 className="text-3xl font-bold md:text-5xl mb-6">50 zł na Allegro czeka na Ciebie!</h2>
              <p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
                Nie zwlekaj. Ubezpieczenie i tak musisz kupić – dlaczego nie dostać za to prezentu? Kliknij poniżej i
                sprawdź cenę polisy w 3 minuty.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  className="bg-[#ff5a00] hover:bg-[#e04f00] text-white border-none h-auto py-4 whitespace-normal"
                  asChild
                >
                  <Link href="/offer?variant=nieruchomosc&promo=Bon na Dom">Wypełnij wniosek i odbierz bon</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
                  asChild
                >
                  <Link href="/promotions">Zobacz inne promocje</Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                Oferta ważna do odwołania. Dotyczy nowych polis o wartości min. 500 zł.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:py-24 bg-background">
        <div className="container m-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Masz pytania?</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:text-[#ff5a00] transition-colors hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center border-t pt-8">
            <p className="text-sm text-muted-foreground">
              Szczegółowe warunki promocji znajdziesz w{" "}
              <Link
                href="/promotions/promo-home/terms"
                className="text-primary font-medium underline hover:text-[#ff5a00] transition-colors"
              >
                Regulaminie Promocji "Bon na Dom"
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="mb-16 md:mb-24 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Sieć Partnerska</h2>
        </div>
        <InsurancePartners />
      </section>
    </main>
  );
};

export default PromotionHomePage;
