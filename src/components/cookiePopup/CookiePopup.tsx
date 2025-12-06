"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "wpolisa-cookie-consent";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Małe opóźnienie dla lepszego UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container max-w-4xl mx-auto m-auto">
        <div className="relative rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
          <button
            onClick={declineCookies}
            className="absolute right-3 top-3 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
            aria-label="Zamknij"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-start gap-3 md:flex-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Cookie className="h-5 w-5 text-accent" />
              </div>
              <div className="space-y-1 pr-6 md:pr-0">
                <h3 className="font-semibold text-foreground">Ta strona używa ciasteczek 🍪</h3>
                <p className="text-sm text-muted-foreground">
                  Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie.{" "}
                  <Link href="/cookies" className="text-accent hover:underline">
                    Dowiedz się więcej
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:pt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="flex-1 md:flex-none cursor-pointer"
              >
                Odrzuć
              </Button>
              <Button variant="accent" size="sm" onClick={acceptCookies} className="flex-1 md:flex-none cursor-pointer">
                Akceptuję
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
