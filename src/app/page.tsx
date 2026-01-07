"use client";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import InsuranceTiles from "@/components/home/InsuranceTiles";
import PartnersSection from "@/components/home/PartnersSection";

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <InsuranceTiles />
      <PartnersSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
