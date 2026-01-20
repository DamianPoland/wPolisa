"use client";

import { useState, useMemo, useEffect, startTransition } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, Car, Home, Heart, Plane, Building2, HelpCircle } from "lucide-react";
import { faqItems } from "@/utils/constants";
import { CategoryConfig, FaqItem } from "@/utils/types";

const categoryConfig: Record<string, CategoryConfig> = {
  "Wiedza Ogólna": { label: "Wiedza Ogólna", icon: HelpCircle },
  "Ubezpieczenia Komunikacyjne": { label: "Ubezpieczenia komunikacyjne", icon: Car },
  "Dom i Nieruchomości": { label: "Dom i Nieruchomości", icon: Home },
  "Zdrowie i Życie": { label: "Zdrowie i Życie", icon: Heart },
  "Podróże i Turystyka": { label: "Podróże i Turystyka", icon: Plane },
  "Firma i Specjalistyczne": { label: "Firma i Specjalistyczne", icon: Building2 },
};

const categoryOrder = [
  "Wiedza Ogólna",
  "Zdrowie i Życie",
  "Ubezpieczenia Komunikacyjne",
  "Dom i Nieruchomości",
  "Firma i Specjalistyczne",
  "Podróże i Turystyka",
];

export const KnowledgeContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  // Filtrowanie z memoizacją dla wydajności
  const filteredFaqItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return faqItems;
    return faqItems.filter(
      (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedByCategory = useMemo(() => {
    const grouped: Record<string, FaqItem[]> = {};
    filteredFaqItems.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, [filteredFaqItems]);

  const sortedCategories = useMemo(() => {
    return categoryOrder.filter((cat) => groupedByCategory[cat]?.length > 0);
  }, [groupedByCategory]);

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      startTransition(() => {
        setOpenCategories((prev) => {
          if (prev.length === sortedCategories.length && prev.every((v, i) => v === sortedCategories[i])) {
            return prev;
          }
          return sortedCategories;
        });
      });
    } else {
      startTransition(() => {
        setOpenCategories((prev) => (prev.length ? [] : prev));
      });
    }
  }, [searchQuery, sortedCategories]);

  return (
    <section className="px-4 md:px-2 py-16 md:py-24 bg-background">
      <div className="container m-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Najczęściej zadawane <span className="text-accent">pytania (FAQ)</span>
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Szukasz informacji o ubezpieczeniach? Skorzystaj z naszej wyszukiwarki.
          </p>

          {/* Search Input */}
          <div className="relative mt-8">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Np. ubezpieczenie OC w życiu prywatnym"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg shadow-sm"
            />
          </div>

          {/* Questions & Answers */}
          {sortedCategories.length > 0 ? (
            <Accordion
              type="multiple"
              value={openCategories}
              onValueChange={setOpenCategories}
              className="mt-6 space-y-4"
            >
              {sortedCategories.map((cat) => {
                const config = categoryConfig[cat];
                const Icon = config?.icon || HelpCircle;
                const items = groupedByCategory[cat];

                return (
                  <AccordionItem
                    key={cat}
                    value={cat}
                    className="rounded-lg border border-border bg-card px-4 last:border"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent data-[state=open]:text-accent hover:no-underline [&[data-state=open]>svg]:stroke-accent [&[data-state=closed]>svg]:stroke-accent  cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 min-w-5 text-accent" />
                        <span>{config?.label || cat}</span>
                        <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-sm font-normal text-accent">
                          {items.length}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <Accordion type="single" collapsible className="space-y-2">
                        {items.map((item, index) => (
                          <AccordionItem
                            key={`${cat}-${index}`}
                            value={`${cat}-${index}`}
                            className="border-b border-border/50 last:border-0"
                          >
                            <AccordionTrigger className="text-base py-3 text-left font-semibold text-foreground hover:text-accent cursor-pointer">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[15px] pb-3 leading-relaxed text-muted-foreground">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ) : (
            <div className="py-12 text-center">
              <p className="text-xl text-muted-foreground">
                Nie znaleźliśmy odpowiedzi na &ldquo;<strong>{searchQuery}</strong>&rdquo;.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
