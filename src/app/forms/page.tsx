import FormsContent from "@/components/forms/FormsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formularze | wPolisa - Otrzymaj ofertę ubezpieczeń",
  description:
    "Wypełnij formularz i otrzymaj darmową wycenę ubezpieczenia. OC, AC, ubezpieczenie domu, zdrowia i więcej.",
  openGraph: {
    title: "Formularze - wPolisa",
    description: "Szybkie formularz do otrzymania oferty ubezpieczenia dostosowanej do Twoich potrzeb.",
    type: "website",
    url: "https://www.wpolisa.pl/forms",
  },
};

const FormPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Zacznijmy od czegoś</h1>
            <h2 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">prostego!</h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Wybierz, czego potrzebujesz, a my odezwiemy się z gotowymi propozycjami.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              🛡️ Zrób pierwszy krok w minutę - my zrobimy pozostałe 99.
            </p>
          </div>
        </div>
      </section>
      <FormsContent />
    </main>
  );
};

export default FormPage;
