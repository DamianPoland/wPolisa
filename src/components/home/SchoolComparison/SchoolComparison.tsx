"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import pzu from "@/assets/images/pzu.png";
import {
  howItWorks,
  schoolInsuranceComparisonBenefits,
  schoolInsuranceComparisonOffer,
  tabsOptions,
  tabsOptionsType,
} from "./constants";

const SchoolComparison = () => {
  const [tab, setTab] = useState<tabsOptionsType>(tabsOptions[4]);
  const [open, setOpen] = useState(false);

  return (
    <section id="school" className="px-4 md:px-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Ubezpieczenie dla</h2>
          <h2 className="text-3xl font-bold text-accent mt-2 md:text-4xl">dzieci i młodzieży</h2>
          <p className="mt-4 text-muted-foreground">Wybierz sumę ubezpieczenia i roczną składkę.</p>
        </div>

        {/* tabsOptions Filter */}
        <div className="mt-2 flex justify-center">
          <Tabs
            value={tab.id}
            onValueChange={(v) =>
              setTab(tabsOptions.find((option: tabsOptionsType) => option.id === v) || tabsOptions[0])
            }
            className="w-full max-w-md mb-2"
          >
            <TabsList className="grid w-full grid-cols-3 bg-muted/100 py-1 rounded-xl gap-2 !h-48">
              {tabsOptions.map((option: tabsOptionsType) => (
                <TabsTrigger
                  key={option.id}
                  value={option.id}
                  className="flex items-center justify-center rounded-lg !h-12 mx-2 cursor-pointer text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-accent data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="mt-0 text-accent">{option.label}</p>
                    <p className="mt-0 text-muted-foreground">{option.desc}</p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Card */}
        <div className="mt-4 flex justify-center">
          <Card
            className="relative flex flex-col rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in max-w-md"
            style={{ animationDelay: `${0.1}s` }}
          >
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent shadow-accent">
                Tylko sprawdzone rozwiązania
              </Badge>
            </div>
            <div className={`h-1.5 w-full bg-linear-to-r from-emerald-500 to-emerald-700`} />
            <CardContent className="flex flex-1 flex-col p-6 md:p-7">
              {/* Logo placeholder */}
              <div className="flex items-center gap-3">
                <div className="relative w-20 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                  <Image src={pzu} alt="Pzu logo" fill sizes="96px" className="object-contain p-3" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">PZU</h3>
                  <span className="text-xs text-muted-foreground">Akcja Szkolna 2026/2027</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between mt-6 rounded-xl bg-muted/40 p-5 text-center">
                <div className="">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Suma ubezpieczenia</p>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-xl font-extrabold text-accent tabular-nums animate-scale-in">
                      {tab.label ?? "0"}
                    </span>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Roczna składka</p>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-xl font-extrabold text-foreground tabular-nums animate-scale-in">
                      {tab.desc.split("/")[0] ?? "0"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">za osobę / rok</p>
                </div>
              </div>

              {/* Benefits */}
              <ul className="mt-6 space-y-3">
                {schoolInsuranceComparisonBenefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <Button
                  variant="accent"
                  className="w-full group cursor-pointer"
                  onClick={() => window.open(`https://ubestrefa.pl/oferta/WPOLISAEDU`, "_blank")}
                >
                  Wybierz tę ofertę
                </Button>
                <Button variant="outline" className="w-full group cursor-pointer mt-4" onClick={() => setOpen(true)}>
                  Zobacz szczegóły
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl p-0">
            <DialogHeader className="px-6 pt-6 pb-2 text-left">
              <DialogTitle className="text-2xl font-bold mt-2">NNW PZU Edukacja – szczegóły oferty</DialogTitle>
              <DialogDescription>
                Ubezpieczenie dla dzieci i młodzieży – do 18. urodzin, a jeśli się uczą – do ukończenia 26 lat.
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-6">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Suma ubezpieczenia</p>
                  <p className="text-lg sm:text-2xl font-extrabold text-foreground break-words">{tab.label}</p>
                </div>
                <div className="min-w-0 sm:text-right">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Roczna składka za osobę</p>
                  <p className="text-lg sm:text-2xl font-extrabold text-accent break-words">{tab.desc}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Żłobek, przedszkole lub szkoła, a do tego dodatkowy angielski, lekcje gry na gitarze czy trening
                  tenisa? Niezależnie od tego, jak wygląda dzień Twojego dziecka, ubezpieczenie{" "}
                  <strong>NNW PZU Edukacja</strong> zapewni mu ochronę <strong>24/7 na całym świecie</strong> w razie
                  nieprzewidzianych zdarzeń – od nieszczęśliwego wypadku po poważne zachorowanie.
                </p>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
                    Jak działa ubezpieczenie
                  </h4>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {howItWorks.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-foreground/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">
                    Taki scenariusz może się zdarzyć
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Maciek grał z kolegami w piłkę. Potknął się i upadł na kolano – złamał rzepkę i przeszedł operację.
                    Spędził 5 dni w szpitalu, a potem miał rehabilitację. Na szczęście rodzice ubezpieczyli go na sumę{" "}
                    <strong>15 000 zł</strong>, płacąc za rok ochrony <strong>48 zł</strong>. Dzięki temu chłopiec
                    otrzymał:
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-accent shrink-0" strokeWidth={3} />
                      <span>
                        <strong>500 zł</strong> za pobyt w szpitalu (dieta szpitalna)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-accent shrink-0" strokeWidth={3} />
                      <span>
                        <strong>750 zł</strong> za uszczerbek na zdrowiu i operację kolana
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-accent shrink-0" strokeWidth={3} />
                      <span>
                        <strong>750 zł</strong> za poniesione koszty rehabilitacji
                      </span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                    Maciek skorzystał też z indywidualnych korepetycji oraz pomocy psychologa. Zwróciliśmy także koszty
                    wycieczki, na którą nie pojechał z powodu kontuzji.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                {schoolInsuranceComparisonOffer[tab.id]?.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">{section.title}</h4>
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <table className="w-full text-sm">
                        <tbody>
                          {section.rows.map(([label, value], idx) => (
                            <tr key={label} className={idx % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                              <td className="p-2 md:p-4 text-foreground/80 align-top">{label}</td>
                              <td className="p-2 md:p-4 text-right font-semibold text-foreground align-top w-1/3">
                                {value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                Zakładem ubezpieczeń jest PZU SA. Ten materiał nie jest ofertą w rozumieniu art. 66 Kodeksu cywilnego i
                ma charakter wyłącznie informacyjny. Szczegółowe informacje o zakresie ubezpieczenia, w tym o
                wyłączeniach i ograniczeniach odpowiedzialności, znajdziesz w aktualnych ogólnych warunkach
                ubezpieczenia (OWU) NNW PZU Edukacja, dostępnych u naszych agentów, w naszych oddziałach i na pzu.pl
                oraz w postanowieniach dodatkowych i odbiegających od OWU NNW PZU Edukacja, dostępnych w naszych
                oddziałach i u naszych agentów. Materiał powstał z wykorzystaniem AI.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="accent"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(`https://ubestrefa.pl/oferta/WPOLISAEDU`, "_blank")}
                >
                  Wybierz tę ofertę
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full asChild cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Zamknij
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SchoolComparison;
