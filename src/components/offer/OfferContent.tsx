"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { insuranceVariants } from "@/utils/constants";
import ContactForm from "../form/ContactForm";
import { InsuranceVariantsId } from "@/utils/types";
import InsuranceVariantIcon from "../insuranceVariantIcon/InsuranceVariantIcon";

const OfferContent = () => {
  const searchParams = useSearchParams();
  const variantParams = searchParams.get("variant");
  const promoParams = searchParams.get("promo");

  const [selectedVariant, setSelectedVariant] = useState<InsuranceVariantsId | null>(null);

  // Scroll to form if variant is preselected via URL param
  useEffect(() => {
    if (variantParams) {
      setSelectedVariant(variantParams as InsuranceVariantsId);
      setTimeout(() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, [variantParams]);

  return (
    <section>
      {/* Insurance Variant Selection */}
      <section className="px-4 md:px-2 py-12">
        <div className="container m-auto">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Wybierz rodzaj ubezpieczenia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceVariants.map((variant) => {
              const isSelected = selectedVariant === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`group flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                    isSelected ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  {/* Icon */}
                  <InsuranceVariantIcon
                    id={variant.id}
                    gradient={
                      isSelected
                        ? "bg-accent text-accent-foreground"
                        : "bg-basicMiddle text-muted-foreground group-hover:bg-accent/50 group-hover:text-accent"
                    }
                  />

                  <div>
                    <div className={`font-semibold ${isSelected ? "text-accent" : "text-foreground"}`}>
                      {variant.title}
                    </div>
                    {isSelected && (
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <CheckCircle className="h-4 w-4" />
                        Wybrano
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        variant={selectedVariant}
        promo={selectedVariant === variantParams ? promoParams : ""}
        onSubmitSuccess={() => setSelectedVariant(null)}
      />
    </section>
  );
};

export default OfferContent;
