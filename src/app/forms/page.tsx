"use client";
import { useState, useEffect } from "react";
import { Heart, Shield, Plane, Home, Building2, Package, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

const insuranceVariants = [
  { id: "medyczny", title: "Pakiet Medyczny", icon: Heart },
  { id: "zycie", title: "Ubezpieczenie Życia", icon: Shield },
  { id: "podroze", title: "Ubezpieczenie Podróży", icon: Plane },
  { id: "dom", title: "Ubezpieczenie Domu", icon: Home },
  { id: "firma", title: "Ubezpieczenie Firmy", icon: Building2 },
  { id: "inne", title: "Pozostałe Ubezpieczenia", icon: Package },
];

export const FormPage = () => {
  const searchParams = useSearchParams();
  // const { toast } = useToast();
  const [selectedType, setSelectedType] = useState(searchParams.get("variant") || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setSelectedType(type);
      // Scroll to form
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!selectedType) {
    //   toast({
    //     title: "Wybierz rodzaj ubezpieczenia",
    //     description: "Proszę wybrać rodzaj ubezpieczenia przed wysłaniem formularza.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // toast({
    //   title: "Formularz wysłany! 🎉",
    //   description: "Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.",
    // });

    setFormData({ name: "", phone: "", email: "", description: "" });
    setSelectedType("");
    setIsSubmitting(false);
  };

  const selectedInsurance = insuranceVariants.find((t) => t.id === selectedType);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-0 py-16 md:py-20">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              Zacznijmy od czegoś <span className="text-accent">prostego!</span>
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Wybierz, czego potrzebujesz, a my odezwiemy się z gotowymi propozycjami.
            </p>
            <p
              className="animate-slide-up mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl"
              style={{ animationDelay: "0.1s" }}
            >
              🛡️ Zrób pierwszy krok w minutę - my zrobimy pozostałe 99.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Type Selection */}
      <section className="px-4 md:px-0 py-12">
        <div className="container m-auto">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Wybierz rodzaj ubezpieczenia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceVariants.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`group flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                    isSelected ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                    }`}
                  >
                    <type.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isSelected ? "text-accent" : "text-foreground"}`}>
                      {type.title}
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
      <section id="contact-form" className="bg-muted/50 px-4 md:px-0 py-12 md:py-16">
        <div className="container m-auto">
          <Card className="mx-auto max-w-2xl border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                {selectedInsurance ? (
                  <>
                    <selectedInsurance.icon className="h-6 w-6 text-accent" />
                    {selectedInsurance.title}
                  </>
                ) : (
                  "Formularz kontaktowy"
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię i Nazwisko *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Numer telefonu *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adres email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jan@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Krótki opis potrzeb (opcjonalnie)</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Opisz, czego potrzebujesz lub jakie masz pytania..."
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Wysyłanie..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Wyślij zapytanie!
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">...i czekaj na najlepszą ofertę! 🎯</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default FormPage;
