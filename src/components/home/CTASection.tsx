"use client";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="mx-4 md:mx-2 py-16 md:py-24">
      <div className="container m-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Gotowy na spokój ducha?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę ubezpieczenia dopasowanego do Twoich potrzeb.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" asChild>
                <Link href="/forms">
                  Wypełnij formularz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <a href="tel:+48607034911">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
