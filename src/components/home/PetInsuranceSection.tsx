"use client";
import { ArrowRight, FileText, HeartPulse, PawPrint, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pzu from "@/assets/images/pzu.png";
import pet from "@/assets/images/pet.png";

const OFFER_URL = "https://ubestrefa.pl/oferta/WPOLISAPETS";

const benefits = [
  {
    icon: Stethoscope,
    title: "Szeroki zakres ochrony",
    description: "Leczenie po wypadku i w chorobie oraz pakiet OC i opieki.",
  },
  {
    icon: FileText,
    title: "Prosty zakup online",
    description: "Formalności dopełnisz w kilka minut przez dedykowany kod.",
  },
];

const PetInsuranceSection = () => {
  return (
    <section id="pet" className="px-4 md:px-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
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
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Ubezpieczenie dla psa i kota</h2>
              <h2 className="text-3xl font-bold text-accent mt-2 md:text-4xl">ochrona na cztery łapy z PZU</h2>
              <p className="mt-4 text-muted-foreground">
                Zadbaj o zdrowie swojego pupila i nie martw się niespodziewanymi kosztami u weterynarza.
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
                aria-label="Oblicz składkę i kup ubezpieczenie PZU dla psa i kota online – otwiera się w nowej karcie"
                className="w-full group cursor-pointer"
                onClick={() => window.open(OFFER_URL, "_blank")}
              >
                Oblicz składkę i kup online
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Wycena bez zobowiązań – zajmie Ci mniej czasu niż spacer. 🐾
              </p>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <Image
              src={pet}
              alt="Ilustracja psa i kota przed gabinetem weterynarza"
              loading="lazy"
              decoding="async"
              width={948}
              height={520}
              className="w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetInsuranceSection;
