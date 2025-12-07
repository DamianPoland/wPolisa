"use client";
import { useState, useEffect } from "react";
import { Heart, Shield, Plane, Home, Building2, Package, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
import { set, useForm } from "react-hook-form";
import { IDBUser } from "@/utils/types";
import axios from "axios";
import Link from "next/link";

const insuranceVariants = [
  { id: "medyczny", title: "Pakiet Medyczny", icon: Heart },
  { id: "zycie", title: "Ubezpieczenie Życia", icon: Shield },
  { id: "podroze", title: "Ubezpieczenie Podróży", icon: Plane },
  { id: "dom", title: "Ubezpieczenie Domu", icon: Home },
  { id: "firma", title: "Ubezpieczenie Firmy", icon: Building2 },
  { id: "inne", title: "Pozostałe Ubezpieczenia", icon: Package },
];

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<Partial<IDBUser>>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      privacy_consent: false,
      marketing_consent: true,
    },
  });

  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const variant = searchParams.get("variant");
    if (variant) {
      setSelectedVariant(variant);
      setTimeout(() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }), 100); // Scroll to form
    }
  }, []);

  const onSubmit = async (data: Partial<IDBUser>) => {
    if (!selectedVariant) {
      toast.info("Proszę wybrać rodzaj ubezpieczenia przed wysłaniem formularza.");
      return;
    }

    const dataToSend: IDBUser = {
      id: "",
      pesel: "00000000000",
      name: data.name || "",
      surname: "",
      email: data.email || "",
      phone: data.phone || "",
      description: data.description || "",
      variant: selectedVariant,
      note: "",
      created_at: new Date().toISOString(),
      history: document.referrer ? new URL(document.referrer).hostname : "brak danych",
      privacy_consent: data.privacy_consent || false,
      marketing_consent: data.marketing_consent || false,
    };
    console.log("dataToSend:", dataToSend);

    try {
      const response = await axios.post("/api/users", dataToSend);
      reset();
      setSelectedVariant("");
      toast.success("Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.");
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error?.response?.data?.error || error.message || "Failed to submit form");
    }
  };

  const selectedInsurance = insuranceVariants.find((t) => t.id === selectedVariant);

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

      {/* Insurance Variant Selection */}
      <section className="px-4 md:px-0 py-12">
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
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                    }`}
                  >
                    <variant.icon className="h-6 w-6" />
                  </div>
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię*</Label>
                    <Input
                      id="name"
                      {...register("name", {
                        required: "Imię jest wymagane",
                      })}
                      type="text"
                      placeholder="Wpisz imię"
                    />
                    {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Adres email *</Label>
                    <Input
                      id="email"
                      {...register("email", {
                        required: "Adres e-mail jest wymagany",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Nieprawidłowy format adresu e-mail",
                        },
                      })}
                      type="email"
                      placeholder="Wpisz adres e-mail"
                    />
                    {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Numer telefonu (opcjonalny)</Label>
                    <Input id="phone" {...register("phone")} type="tel" placeholder="Wpisz numer telefonu" />
                    {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Krótki opis (opcjonalny)</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Wpisz opis"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                {/* RODO Consents */}
                <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent-required"
                      checked={watch("privacy_consent") || false}
                      onCheckedChange={(checked) => setValue("privacy_consent", checked === true)}
                      className="mt-0.5 rounded-none border-2"
                    />
                    <div className="text-sm leading-relaxed">
                      <Label
                        htmlFor="consent-required"
                        className="font-normal cursor-pointer whitespace-normal wrap-break-word"
                      >
                        <div className="flex flex-wrap gap-1">
                          <span className="text-destructive">*</span>
                          <span>Akceptuję</span>
                          <span>
                            <Link
                              href="/terms"
                              className="text-accent underline hover:text-accent-hover"
                              target="_blank"
                            >
                              Regulamin
                            </Link>
                          </span>
                          <span>i</span>
                          <span>
                            <Link
                              href="/cookies"
                              className="text-accent underline hover:text-accent-hover"
                              target="_blank"
                            >
                              Politykę Prywatności
                            </Link>
                          </span>
                          <span>oraz wyrażam zgodę</span>
                          <span>na przetwarzanie</span>
                          <span>danych osobowych.</span>
                        </div>
                      </Label>
                      <details className="mt-2">
                        <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                          Pokaż pełną treść zgody
                        </summary>
                        <p className="text-xs text-muted-foreground mt-1">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych przez wPolisa w celu przedstawienia
                          oferty ubezpieczeniowej oraz zawarcia umowy ubezpieczenia, zgodnie z art. 6 ust. 1 lit. a i b
                          RODO.
                        </p>
                      </details>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent-marketing"
                      checked={watch("marketing_consent") || false}
                      onCheckedChange={(checked) => setValue("marketing_consent", checked === true)}
                      className="mt-0.5 rounded-none border-2"
                    />
                    <div className="text-sm leading-relaxed">
                      <Label htmlFor="consent-marketing" className="font-normal cursor-pointer">
                        <p className="leading-[18px]">Zgadzam się na kontakt marketingowy (opcjonalne)</p>
                      </Label>
                      <details className="mt-2">
                        <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                          Pokaż pełną treść zgody
                        </summary>
                        <p className="text-xs text-muted-foreground mt-1">
                          Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną (e-mail, SMS) oraz
                          telefoniczną, zgodnie z ustawą o świadczeniu usług drogą elektroniczną oraz Prawem
                          telekomunikacyjnym. Zgoda może być wycofana w każdym czasie.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || !watch("privacy_consent")}
                >
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
