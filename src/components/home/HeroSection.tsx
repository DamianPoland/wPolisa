"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import shieldColor from "@/assets/images/shield-color-32.png";

const HeroSection = () => {
  const benefits = ["Porównujemy oferty 10+ ubezpieczycieli", "Bezpłatne doradztwo i pomoc", "Szybka obsługa online"];

  return (
    <section className="relative overflow-hidden bg-gradient-hero px-4 md:px-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-36 m-auto">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
            <Image src={shieldColor} alt="shield" className="h-4 w-4" />
            <span>Multiagencja Ubezpieczeniowa</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-slide-up text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Życie jest nieprzewidywalne.
          </h1>
          <h1 className="animate-slide-up text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-6xl">
            My jesteśmy!
          </h1>

          {/* Subheading */}
          <p
            className="animate-slide-up mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            🛡️ Ubezpieczenia bez bólu głowy. Zamiast szukać, po prostu nas zapytaj.
          </p>

          {/* Benefits */}
          <div
            className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6"
            style={{ animationDelay: "0.2s" }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" asChild>
              <Link href="/forms">
                Znajdź ubezpieczenie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link href="/description">Poznaj nas</Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="animate-fade-in mt-12 text-lg text-primary-foreground/80" style={{ animationDelay: "0.4s" }}>
            Odszyfrujemy dla Ciebie OWU, zanim zdążysz wypić kawę ☕
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 70L1440 65V124H1380C1320 124 1200 124 1080 124C960 124 840 124 720 124C600 124 480 124 360 124C240 124 124 124 60 124H0Z"
            fill="hsl(0 0% 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
