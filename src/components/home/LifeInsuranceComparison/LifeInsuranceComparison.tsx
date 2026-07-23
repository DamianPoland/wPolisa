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
import pzuZycie from "@/assets/images/pzu-zycie.png";
import warta from "@/assets/images/warta.png";
import hestia from "@/assets/images/hestia.png";
import { AgeId, ageRanges, lifeInsuranceComparisonOffer } from "./constants";

const insurers = [
  {
    id: "pzu",
    logo: pzuZycie,
    name: "PZU Życie",
    shortName: "PZU",
    accent: "from-emerald-500 to-emerald-700",
    badge: "Najpopularniejszy",
    benefits: [
      "Najniższa i najbardziej stabilna składka",
      "Wsparcie Assistance w standardzie",
      "Ochrona przed nowotworem we wczesnym stadium",
      "Szeroki zakres operacji chirurgicznych",
    ],
  },
  {
    id: "hestia",
    logo: hestia,
    name: "ERGO Hestia",
    shortName: "ERGO",
    accent: "from-blue-500 to-blue-700",
    badge: "Elastyczna",
    benefits: [
      "Bezkonkurencyjne wsparcie finansowe przy ciężkich chorobach",
      "Unikalne świadczenie kardiologiczne i neurologiczne",
      "Najmocniejsza ochrona dzieci na rynku",
      "Wysoka ochrona życia i zdrowia w wyniku nieszczęśliwego wypadku",
    ],
  },
  {
    id: "warta",
    logo: warta,
    name: "WARTA",
    shortName: "WARTA",
    accent: "from-orange-500 to-orange-700",
    badge: "Najszybsza wypłata",
    benefits: [
      "Najwyższe stawki za pobyt w szpitalu",
      "Dodatkowe pakiety powypadkowe (OIOM i Rekonwalescencja)",
      "Unikalne zabezpieczenie w krytycznych momentach",
      "Maksymalna ochrona finansowa małżonka",
    ],
  },
] as const;

const LifeInsuranceComparison = () => {
  const [age, setAge] = useState<AgeId>("18-39");
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 md:px-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Porównaj najlepsze ubezpieczenia <br />
            <span className="text-accent">na życie</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wybierz swój przedział wiekowy i porównaj składki trzech największych towarzystw ubezpieczeniowych w Polsce.
          </p>
          <p className="mt-4 text-muted-foreground">Przedział wiekowy:</p>
        </div>

        {/* Age Filter */}
        <div className="mt-2 flex justify-center">
          <Tabs value={age} onValueChange={(v) => setAge(v as AgeId)} className="w-full max-w-2xl ">
            <TabsList className="grid w-full grid-cols-5 bg-muted/100 py-0 rounded-xl gap-1 !h-12 ">
              {ageRanges.map((ageRange) => (
                <TabsTrigger
                  key={ageRange.id}
                  value={ageRange.id}
                  className="flex items-center justify-center cursor-pointer rounded-lg !h-10 text-xs sm:text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-accent data-[state=active]:shadow-sm"
                >
                  {ageRange.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
          {insurers.map((ins, i) => {
            const price = Number(lifeInsuranceComparisonOffer[age][0][ins.id]);
            const numericPrices = Object.values(lifeInsuranceComparisonOffer[age][0])
              .map((value) => (typeof value === "string" ? Number(value) : value))
              .filter((value): value is number => typeof value === "number" && !Number.isNaN(value));
            const isCheapest = price === Math.min(...numericPrices);
            return (
              <Card
                key={ins.id}
                className="relative flex flex-col rounded-2xl border border-border/60 bg-card shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {isCheapest && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent shadow-accent">Najtaniej</Badge>
                  </div>
                )}
                <div className={`h-1.5 w-full bg-gradient-to-r ${ins.accent}`} />
                <CardContent className="flex flex-1 flex-col p-6 md:p-7">
                  {/* Logo placeholder */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-3 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                      <Image src={ins.logo} alt={`${ins.name} logo`} fill sizes="96px" className="object-contain p-3" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">{ins.name}</h3>
                      <span className="text-xs text-muted-foreground">{ins.badge}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 rounded-xl bg-muted/40 p-5 text-center">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Składka miesięczna</p>
                    <div className="mt-1 flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-extrabold text-foreground tabular-nums animate-scale-in">
                        {price}
                      </span>
                      <span className="text-xl font-semibold text-muted-foreground">zł</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">/ miesiąc</p>
                  </div>

                  {/* Benefits */}
                  <ul className="mt-6 space-y-3">
                    {ins.benefits.map((b) => (
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
                    <Button variant="accent" className="w-full group" onClick={() => setOpen(true)}>
                      Zobacz szczegóły porównania
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-full max-w-[90vw] lg:max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl p-0">
            <DialogHeader className="px-6 pt-6 pb-2 text-left">
              <DialogTitle className="text-2xl font-bold">Pełne porównanie ofert</DialogTitle>
              <DialogDescription>
                Zestawienie zakresu ochrony dla przedziału wiekowego:{" "}
                <span className="font-semibold text-foreground">{ageRanges.find((r) => r.id === age)?.label}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="overflow-x-auto px-6 pb-6">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground p-4 w-[60px] md:w-[100px]"></th>
                    {insurers.map((ins) => (
                      <th key={ins.id} className="p-4 text-center w-[40px]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative w-20 h-20 flex items-center justify-center rounded-lg border border-border bg-card p-2 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
                            <Image
                              src={ins.logo}
                              alt={`${ins.name} logo`}
                              fill
                              sizes="96px"
                              className="object-contain p-3"
                            />
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {lifeInsuranceComparisonOffer[age].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                      <td className="p-4 font-semibold align-top w-[60px] md:w-[100px]">{row.name}</td>
                      {idx === 0 ? (
                        <td className={"p-4 w-[40px] text-2xl font-extrabold text-accent align-center text-center"}>
                          {row.pzu} zł
                        </td>
                      ) : (
                        <td className={"p-4 w-[40px] font-semibold align-center text-center"}>{row.pzu ?? "-"}</td>
                      )}
                      {idx === 0 ? (
                        <td className={"p-4 w-[40px] text-2xl font-extrabold text-accent align-center text-center"}>
                          {row.hestia} zł
                        </td>
                      ) : (
                        <td className={"p-4 w-[40px] font-semibold align-center text-center"}>{row.hestia ?? "-"}</td>
                      )}
                      {idx === 0 ? (
                        <td className={"p-4 w-[40px] text-2xl font-extrabold text-accent align-center text-center"}>
                          {row.warta} zł
                        </td>
                      ) : (
                        <td className={"p-4 w-[40px] font-semibold align-center text-center"}>{row.warta ?? "-"}</td>
                      )}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 w-[60px] md:w-[100px]" />
                    {insurers.map((ins) => (
                      <td key={ins.id} className="p-4 text-center w-[40px]">
                        <Button variant="accent" size="sm" className="w-full" asChild>
                          <Link
                            href={`/offer?variant=zycie&promo=${encodeURIComponent(`${ins.name}, wiek: ${age}`)}, składka: ${lifeInsuranceComparisonOffer[age][0][ins.id]} zł`}
                          >
                            Wybierz tę ofertę
                          </Link>
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LifeInsuranceComparison;
