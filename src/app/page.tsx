import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import InsuranceTiles from "@/components/home/InsuranceTiles";
import PartnersSection from "@/components/home/PartnersSection";
import SpecialOffers from "@/components/home/SpecialOffers";

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SpecialOffers />
      <InsuranceTiles />
      <CTASection />
      <PartnersSection />
    </main>
  );
};

export default HomePage;
