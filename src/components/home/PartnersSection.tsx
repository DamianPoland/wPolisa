import MedicalPartners from "../partnersSections/MedicalPartners";
import InsurancePartners from "../partnersSections/InsurancePartners";

const PartnersSection = () => {
  return (
    <section className="bg-muted/5 py-16 md:py-24 px-4 md:px-2 hidden">
      <div className="container m-auto">
        <div className="mx-auto max-w-2xl  text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Sieć <span className="text-accent">Partnerska</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Twoje bezpieczeństwo jest w dobrych rękach – dosłownie.</p>
        </div>

        {/* Insurance Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Towarzystwa Ubezpieczeniowe
          </h3>
          <InsurancePartners />
        </div>

        {/* Medical Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Operatorzy Medyczni i Partnerzy Zdrowotni
          </h3>
          <MedicalPartners />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
