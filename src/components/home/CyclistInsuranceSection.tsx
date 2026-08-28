"use client";
import { ArrowRight, Backpack, Bike, LifeBuoy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pzu from "@/assets/images/pzu.png";
import bike from "@/assets/images/bike.svg";

const OFFER_URL = "https://ubestrefa.pl/oferta/WPOLISAROW";

const benefits = [
  {
    icon: Bike,
    title: "Casco roweru",
    description:
      "Odszkodowanie za uszkodzenie, zniszczenie lub utratę roweru – także po kradzieży z usunięciem zabezpieczeń.",
  },
  {
    icon: ShieldCheck,
    title: "OC rowerzysty",
    description: "Pokrycie szkód wyrządzonych innym – gdy przez nieuwagę porysujesz auto lub potrącisz przechodnia.",
  },
  {
    icon: LifeBuoy,
    title: "NNW i assistance",
    description: "Świadczenie za trwały uszczerbek, zwrot kosztów leczenia oraz pomoc medyczna w Polsce.",
  },
  {
    icon: Backpack,
    title: "Bagaż i dziecko do 7 lat",
    description: "Ochrona sakw, kasku i odzieży, a także dziecka podróżującego w foteliku lub przyczepce.",
  },
];

const CyclistInsuranceSection = () => {
  return (
    <section id="bike" className="px-4 md:px-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: illustration */}
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <Image
              src={bike}
              alt="Rowerzystka w kasku z dzieckiem w foteliku rowerowym w parku"
              loading="lazy"
              decoding="async"
              width={739}
              height={571}
              className="w-full max-w-lg rounded-2xl shadow-card"
            />
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
                <Image
                  src={pzu}
                  alt="Logo PZU"
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                  width={20}
                  height={20}
                />
                <span>Partner oferty: PZU</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Ubezpieczenie rowerzysty z PZU</h2>
              <h2 className="text-3xl font-bold text-accent mt-2 md:text-4xl">
                Twój styl, Twoja trasa i spokój po drodze
              </h2>
              <p className="mt-4 text-muted-foreground">
                PZU Rowerzysta chroni Ciebie i Twój rower – niezależnie od tego, czy dojeżdżasz do pracy, czy jeździsz
                rekreacyjnie. Casco roweru, OC, NNW z assistance oraz bagaż rowerzysty w jednej polisie.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-border bg-gradient-card p-4 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                variant="accent"
                aria-label="Oblicz składkę i kup ubezpieczenie PZU Rowerzysta online – otwiera się w nowej karcie"
                className="w-full group cursor-pointer"
                onClick={() => window.open(OFFER_URL, "_blank")}
              >
                Oblicz składkę i kup online
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <p className="text-sm text-muted-foreground">Wycena szybsza niż zapięcie roweru pod blokiem. 🚲</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyclistInsuranceSection;
