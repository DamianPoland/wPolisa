const insurers = [
  "PZU Życie",
  "PZU SA",
  "Warta Życie",
  "Warta HD",
  "Hestia",
  "TU Zdrowie",
  "Unum",
  "Generali",
  "Compensa",
  "Saltus",
  "Allianz",
];

const medicalPartners = ["Luxmed", "Medicover"];

const PartnersSection = () => {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Nasi <span className="text-accent">Partnerzy</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Współpracujemy tylko z najlepszymi. Twoje bezpieczeństwo jest w dobrych rękach – dosłownie.
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Ubezpieczyciele
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {insurers.map((partner) => (
              <div
                key={partner}
                className="flex h-14 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Medical Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Placówki Medyczne
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {medicalPartners.map((partner) => (
              <div
                key={partner}
                className="flex h-14 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 px-8 text-sm font-semibold text-accent shadow-sm transition-all hover:bg-accent/10 hover:shadow-md"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
