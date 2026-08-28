import LifeInsuranceComparison from "@/components/home/LifeInsuranceComparison/LifeInsuranceComparison";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import InsuranceTiles from "@/components/home/InsuranceTiles";
import PartnersSection from "@/components/home/PartnersSection";
import SpecialOffers from "@/components/home/SpecialOffers";
import SchoolComparison from "@/components/home/SchoolComparison/SchoolComparison";
import PetInsuranceSection from "@/components/home/PetInsuranceSection";
import CyclistInsuranceSection from "@/components/home/CyclistInsuranceSection";

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SpecialOffers />
      <InsuranceTiles />
      <SchoolComparison />
      <LifeInsuranceComparison />
      <PetInsuranceSection />
      <CyclistInsuranceSection />
      <CTASection />
      <PartnersSection />
    </main>
  );
};

export default HomePage;
