"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

const KnowledgePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqItems = faqItems.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query);
  });

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-0 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl pb-4">
              Baza <span className="text-accent">wiedzy</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące ubezpieczeń.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              🛡️ My czytamy drobny druk, żebyś ty nie musiał.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-0 py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Najczęściej zadawane <span className="text-accent">pytania</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground">Masz pytania? Mamy odpowiedzi!</p>

            <div className="relative mt-8">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Szukaj w pytaniach..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Accordion type="single" collapsible className="mt-8">
              {filteredFaqItems.length > 0 ? (
                filteredFaqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-foreground hover:text-accent">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <p className="py-8 text-center text-muted-foreground">
                  Nie znaleziono pytań pasujących do &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgePage;
