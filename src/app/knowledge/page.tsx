import type { Metadata } from "next";
import { faqItems } from "@/utils/constants";
import { KnowledgeContent } from "@/components/knowledge/KnowledgeContent";

export const metadata: Metadata = {
  title: "Baza wiedzy | wPolisa - Pytania o ubezpieczeniach",
  description:
    "Odpowiedzi na wszystkie pytania o ubezpieczeniach: OC, AC, ubezpieczenie domu, mieszkania, zdrowia i więcej.",
  keywords: "pytania o ubezpieczeniach, FAQ ubezpieczenia, poradnik ubezpieczeniowy",
  openGraph: {
    title: "Baza wiedzy - wPolisa",
    description: "Poznaj odpowiedzi na najczęściej zadawane pytania o ubezpieczeniach.",
    type: "website",
    url: "https://www.wpolisa.pl/knowledge",
  },
};

const KnowledgePage = () => {
  // Generowanie danych strukturalnych FAQPage dla Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    })),
  };

  return (
    <main>
      {/* Wstrzyknięcie skryptu SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Ubezpieczenia</h1>
            <h2 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">Baza wiedzy i Poradnik</h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Eksperckie odpowiedzi na najczęściej zadawane pytania dotyczące ubezpieczeń.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              🛡️ My czytamy drobny druk, żebyś ty nie musiał.
            </p>
          </div>
        </div>
      </section>
      <KnowledgeContent />
    </main>
  );
};

export default KnowledgePage;
