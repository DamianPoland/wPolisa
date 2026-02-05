"use client";

import { useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { HubSpotContactPropertiesInputApi } from "@/utils/types";
import axios from "axios";
import Link from "next/link";
import {
  FORM_DESCRIPTION_MAX_LENGTH,
  FORM_EMAIL_MAX_LENGTH,
  FORM_FIRST_NAME_MAX_LENGTH,
  FORM_PHONE_MAX_LENGTH,
  FORM_PHONE_MIN_LENGTH,
  PUBLIC_RECAPTCHA_SITE_KEY,
  ORIGIN_QUERY_PARAM_URL,
  ORIGIN_REFERRER,
  insuranceVariants,
} from "@/utils/constants";
import { InsuranceVariantsId } from "@/utils/types";

interface ContactFormProps {
  variant: InsuranceVariantsId | null;
  promo: string | null;
  onSubmitSuccess: () => void;
}

const ContactForm = ({ variant, promo, onSubmitSuccess }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<Partial<HubSpotContactPropertiesInputApi>>({
    defaultValues: {
      firstname: "",
      email: "",
      phone: "",
      description: "",
      privacy_consent: false,
      marketing_consent: false,
    },
  });

  // Load reCAPTCHA v3 script, site key is provided in constants.ts
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = setTimeout(() => {
      if ((window as any).grecaptcha || document.getElementById("recaptcha-script")) {
        return;
      }

      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }, 5000); // Opóźnienie 5 sekund aby nie blokować szybkiego renderowania strony

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: Partial<HubSpotContactPropertiesInputApi>) => {
    if (!variant) {
      toast.info("Proszę wybrać rodzaj ubezpieczenia przed wysłaniem formularza.");
      return;
    }

    // execute reCAPTCHA v3 and obtain token
    let recaptchaToken = "";
    try {
      // Only use this bypass in local development to skip verification (env variable)
      const skipVerify = process.env.NEXT_PUBLIC_RECAPTCHA_SKIP_VERIFY_IN_DEV === "true";
      if (skipVerify) {
        recaptchaToken = "mock-token-for-local-development";
      } else {
        const grecaptcha = (window as any).grecaptcha;
        if (!grecaptcha) throw new Error("grecaptcha not loaded");

        recaptchaToken = await new Promise<string>((resolve, reject) => {
          try {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(PUBLIC_RECAPTCHA_SITE_KEY, { action: "submit" })
                .then((token: string) => resolve(token))
                .catch((err: any) => reject(err));
            });
          } catch (e) {
            reject(e);
          }
        });
      }
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      toast.error("Weryfikacja reCAPTCHA nie powiodła się. Spróbuj ponownie.");
      return;
    }
    const originReferrer = localStorage.getItem(ORIGIN_QUERY_PARAM_URL)
      ? (localStorage.getItem(ORIGIN_QUERY_PARAM_URL) as string)
      : localStorage.getItem(ORIGIN_REFERRER)
        ? `referrer: ${localStorage.getItem(ORIGIN_REFERRER)}`
        : "brak danych";

    const variantTitle = `${insuranceVariants.find((v) => v.id === variant)?.title}${promo ? " " + promo : ""}`;

    const dataToSend: HubSpotContactPropertiesInputApi = {
      firstname: data.firstname || "",
      email: data.email || "",
      phone: data.phone || "",
      description: data.description || "",
      variant: variantTitle || "",
      origin: originReferrer,
      privacy_consent: data.privacy_consent || false,
      marketing_consent: data.marketing_consent || false,
      hs_lead_status: "NEW",
      recaptchaToken: recaptchaToken,
    };

    try {
      await axios.post("/api/users", dataToSend);
      reset();
      onSubmitSuccess();
      toast.success("Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.");
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error?.response?.data?.error || error.message || "Failed to submit form");
    }
  };

  const selectedInsurance = insuranceVariants.find((t) => t.id === variant);

  return (
    <section id="contact-form" className="scroll-mt-12 bg-muted/50 px-4 md:px-2 py-12 md:py-16">
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
            {promo && (
              <div className="mt-4 rounded-lg bg-accent/10 p-4">
                <p className="text-sm font-medium text-accent">💡 Oferta specjalna</p>
                <p className="mt-1 pl-6 text-md text-muted-foreground">{promo}</p>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstname">Imię*</Label>
                  <Input
                    id="firstname"
                    {...register("firstname", {
                      required: "Imię jest wymagane",
                      maxLength: {
                        value: FORM_FIRST_NAME_MAX_LENGTH,
                        message: `Maksymalnie ${FORM_FIRST_NAME_MAX_LENGTH} znaków`,
                      },
                    })}
                    maxLength={FORM_FIRST_NAME_MAX_LENGTH}
                    type="text"
                    placeholder="Wpisz imię"
                  />
                  {errors.firstname && <span className="text-red-600 text-sm">{errors.firstname.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adres email (opcjonalny)</Label>
                  <Input
                    id="email"
                    {...register("email", {
                      maxLength: {
                        value: FORM_EMAIL_MAX_LENGTH,
                        message: `Maksymalnie ${FORM_EMAIL_MAX_LENGTH} znaków`,
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Nieprawidłowy format adresu e-mail",
                      },
                    })}
                    maxLength={FORM_EMAIL_MAX_LENGTH}
                    type="email"
                    placeholder="Wpisz adres e-mail"
                  />
                  {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Numer telefonu *</Label>
                  <Input
                    id="phone"
                    {...register("phone", {
                      required: "Numer telefonu jest wymagany",
                      minLength: {
                        value: FORM_PHONE_MIN_LENGTH,
                        message: "Numer telefonu jest za krótki",
                      },
                      maxLength: {
                        value: FORM_PHONE_MAX_LENGTH,
                        message: `Maksymalnie ${FORM_PHONE_MAX_LENGTH} znaków`,
                      },
                    })}
                    maxLength={FORM_PHONE_MAX_LENGTH}
                    type="tel"
                    placeholder="Wpisz numer telefonu"
                  />
                  {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Krótki opis (opcjonalny)</Label>
                <Textarea
                  id="description"
                  {...register("description", {
                    maxLength: {
                      value: FORM_DESCRIPTION_MAX_LENGTH,
                      message: `Maksymalnie ${FORM_DESCRIPTION_MAX_LENGTH} znaków`,
                    },
                  })}
                  maxLength={FORM_DESCRIPTION_MAX_LENGTH}
                  placeholder="Wpisz opis"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
                {errors.description && <span className="text-red-600 text-sm">{errors.description.message}</span>}
              </div>

              {/* RODO Consents */}
              <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
                {/* Select All */}
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <Checkbox
                    id="consent-all"
                    checked={(watch("marketing_consent") && watch("privacy_consent")) || false}
                    onCheckedChange={(checked) => {
                      setValue("marketing_consent", checked === true);
                      setValue("privacy_consent", checked === true);
                    }}
                    className="rounded-none border-2"
                  />
                  <Label htmlFor="consent-all" className="font-medium cursor-pointer">
                    Zaznacz wszystko
                  </Label>
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
                      <p className="leading-[18px]">
                        Kontakt marketingowy. BEZ spamu. Tylko SUPER oferty. Możesz wypisać się w każdej chwili.
                      </p>
                    </Label>
                    <details className="mt-2">
                      <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                        Pokaż pełną treść zgody
                      </summary>
                      <p className="text-xs text-muted-foreground mt-1">
                        Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną (e-mail, SMS) oraz
                        telefoniczną, zgodnie z ustawą o świadczeniu usług drogą elektroniczną oraz Prawem
                        telekomunikacyjnym. Zgoda może być wycofana w każdej chwili.
                      </p>
                    </details>
                  </div>
                </div>
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
                          <Link href="/terms" className="text-accent underline hover:text-accent-hover" target="_blank">
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
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez wPolisa sp. z o.o. w celu
                        przedstawienia oferty ubezpieczeniowej oraz zawarcia umowy ubezpieczenia, zgodnie z art. 6 ust.
                        1 lit. a i b RODO.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
              {/* TODO info że Wakacje */}
              {false && (
                <div className="mt-4 rounded-lg bg-accent/10 p-4">
                  <p className="text-sm font-medium text-accent">💡 Dziękujemy za zaufanie!</p>
                  <p className="mt-1 text-md text-muted-foreground">
                    Cieszymy się, że tak wiele osób chce z nami współpracować. Obecnie czas oczekiwania na odpowiedź
                    jest nieco dłuższy.
                  </p>
                </div>
              )}

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
  );
};

export default ContactForm;
