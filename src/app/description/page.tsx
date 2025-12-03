"use client";
import { Award, Users, Clock, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { icon: Users, value: "1000+", label: "Zadowolonych klientów" },
  { icon: Clock, value: "10+", label: "Lat doświadczenia" },
  { icon: Award, value: "11", label: "Partnerów ubezpieczeniowych" },
  { icon: Shield, value: "100%", label: "Profesjonalizm" },
];

const faqItems = [
  {
    question: "Czy ubezpieczenie jest naprawdę potrzebne?",
    answer:
      "Czy wolisz kupić parasol, gdy pada, czy wcześniej? My jesteśmy Twoim parasolem, zanim spadnie pierwsza kropla. Ubezpieczenie to inwestycja w spokój ducha – chroni Cię przed nieprzewidzianymi wydatkami i daje pewność, że w trudnej sytuacji nie zostaniesz sam.",
  },
  {
    question: "Czy mogę ubezpieczyć... statek kosmiczny?",
    answer:
      "Zadzwoń, pogadajmy o tym! 🚀 Ale zacznijmy od samochodu albo mieszkania. Tak naprawdę ubezpieczamy większość rzeczy, które mają sens – od zdrowia, przez firmę, po egzotyczne podróże. Jeśli masz nietypowe potrzeby, chętnie znajdziemy rozwiązanie.",
  },
  {
    question: "Dlaczego wybrać multiagencję?",
    answer:
      "Bo zamiast porównywać 10 firm samodzielnie, robimy to za Ciebie. Oszczędzasz czas i pieniądze. Mamy dostęp do ofert wielu ubezpieczycieli, więc możemy znaleźć najlepszą opcję dopasowaną do Twoich potrzeb i budżetu – bez zbędnego szukania.",
  },
  {
    question: "Ile kosztuje konsultacja?",
    answer:
      "Nic! Konsultacja i analiza Twoich potrzeb są całkowicie bezpłatne. Płacisz tylko za wybrane ubezpieczenie – bezpośrednio do ubezpieczyciela. My zarabiamy na prowizji od firm ubezpieczeniowych, nie od Ciebie.",
  },
  {
    question: "Jak szybko otrzymam ofertę?",
    answer:
      "Zwykle w ciągu 24-48 godzin od wypełnienia formularza masz już na skrzynce porównanie ofert. W pilnych przypadkach (np. wyjazd za granicę jutro) działamy ekspresowo – wystarczy zadzwonić!",
  },
];

export const DescriptionPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Po pierwsze, jesteśmy ludźmi.</h1>
            <h1 className="text-4xl font-bold text-accent md:text-5xl mt-6">Po drugie, ekspertami.</h1>
            <p className="mt-6 text-lg text-primary-foreground/80  md:text-xl">
              Jesteśmy zespołem pasjonatów, którzy naprawdę chcą Ci pomóc.
            </p>
            <p
              className="animate-slide-up mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl"
              style={{ animationDelay: "0.1s" }}
            >
              🛡️ My czytamy drobny druk, żebyś ty nie musiał.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container m-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in rounded-xl border border-border bg-card p-6 text-center shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Nasze <span className="text-accent">doświadczenie</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Od lat działamy na rynku ubezpieczeń. Nie boimy się skomplikowanych przypadków, bo znamy branżę na
                wylot. Profesjonalizm to nasza norma, nie dodatek.
              </p>
              <p>
                Wiesz, że Twoje polisy są w rękach kogoś, kto potrafi odróżnić OWU od UFO? My potrafimy – i co więcej,
                wytłumaczymy Ci to prostym językiem, bez prawniczego żargonu.
              </p>
              <p>
                Każdego klienta traktujemy indywidualnie. Twoje potrzeby są unikalne, więc i Twoje ubezpieczenie powinno
                być dopasowane. Nie sprzedajemy "produktów" – szukamy rozwiązań.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Najczęściej zadawane <span className="text-accent">pytania</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground">Masz pytania? Mamy odpowiedzi!</p>

            <Accordion type="single" collapsible className="mt-8">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DescriptionPage;
