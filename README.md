# wPolisa - Platforma Ubezpieczeniowa

Nowoczesna strona internetowa dla agencji ubezpieczeniowej wPolisa, umożliwiająca użytkownikom przeglądanie oferty ubezpieczeń i składanie zapytań o wycenę.

## 🎯 Funkcjonalności

- **Strona główna** z prezentacją oferty i partnerów
- **Interaktywne kafelki ubezpieczeń** - szybki dostęp do formularzy zapytań
- **System formularzy** - składanie zapytań o różne typy ubezpieczeń
- **Strony informacyjne** - O nas, Kontakt
- **Zgodność z RODO** - Regulamin i Polityka Prywatności
- **Cookie Consent** - Banner zgody na pliki cookies
- **Responsywny design** - optymalizacja dla wszystkich urządzeń

## 🛠️ Technologie

| Technologia                                     | Opis                                         |
| ----------------------------------------------- | -------------------------------------------- |
| [Next.js](https://nextjs.org)                   | Biblioteka do budowy interfejsów użytkownika |
| [TypeScript](https://www.typescriptlang.org/)   | Typowany JavaScript                          |
| [Tailwind CSS](https://tailwindcss.com/)        | Utility-first framework CSS                  |
| [shadcn/ui](https://ui.shadcn.com/)             | Komponenty UI oparte na Radix UI             |
| [React Hook Form](https://react-hook-form.com/) | Zarządzanie formularzami                     |
| [Lucide React](https://lucide.dev/)             | Ikony                                        |

## 📁 Struktura projektu

```
src/
├── app/              # strony aplikacji
│   ├── api/          # backend
│   ├── contact/      # strona kontaktu
│   ├── cookies/      # strona cookies
│   ├── description/  # strona o nas
│   ├── forms/        # strona z formularzami
│   ├── terms/        # strona terms & conditions
│   ├── global.css    # Style globalne
│   ├── layout.tsx    # layout główny
│   ├── not-found.tsx # strona not found
│   └── page.tsx      # strona główna
├── assets/           # images, icons
├── components/       # header, footer, ...
│   └── ui/           # komponenty shadcn/ui
└── utils/            # utilities
```

## 🎨 System kolorów

Projekt wykorzystuje spójny system kolorów zdefiniowany w Tailwind:

- **basicBright** (`#f8f8f8`) - jasne tła
- **basicMiddle** (`#9ba4af`) - tekst drugorzędny
- **basicDark** (`#1c3757`) - główny tekst, ciemne sekcje
- **accentBright** (`#e67a2c`) - przyciski CTA
- **accentDark** (`#d45c10`) - stany hover

## 🚀 Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Budowanie produkcyjne
npm run build
```

## 📄 Strony

| Ścieżka       | Opis                               |
| ------------- | ---------------------------------- |
| `/`           | Strona główna                      |
| `/o-nas`      | Informacje o firmie                |
| `/formularze` | Formularze zapytań o ubezpieczenia |
| `/kontakt`    | Dane kontaktowe                    |
| `/regulamin`  | Regulamin serwisu                  |
| `/cookies`    | Polityka prywatności i cookies     |

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:

- Urządzeń mobilnych (320px+)
- Tabletów (768px+)
- Desktopów (1024px+)

## ⚖️ Zgodność prawna

- Regulamin zgodny z polskim prawem
- Polityka prywatności zgodna z RODO
- Banner cookie consent

## Implementacja Zabezpieczeń

Projekt wykorzystuje strategię „Defense in Depth” (obrona wielowarstwowa), aby zapewnić integralność danych i ochronę przed atakami.

1. Cloudflare (Warstwa Infrastruktury)
   Chroni przed: atakami DDoS, próbami Brute-force oraz złośliwym ruchem botów.

Konfiguracja:

- Logowanie na cloudflare.com i ustawienie reguł.
- Zmiana serwerów DNS w panelu OVH.

Działanie: Cały ruch jest kierowany przez sieć Edge Cloudflare i sprawdzany pod kątem ataków; tylko bezpieczne żądania trafiają do domeny.
Reguły WAF: Zastosowano niestandardowe limity zapytań (Rate Limiting) dla endpointów /api/ (np. maks. 5 żądań/minutę na jeden adres IP).
SSL/TLS: Wymuszone pełne szyfrowanie "Full (Strict)" na trasie: użytkownik ↔ Cloudflare ↔ serwer źródłowy (Origin).

2. reCAPTCHA v3 (Warstwa Behawioralna)
   Chroni przed: automatycznym spamem z formularzy i skryptami typu headless browser.

Konfiguracja:

- Frontend (FE): Obsługa zdarzenia onSubmit w formularzach.
- Backend (BE): Weryfikacja tokena na początku endpointu (jako strażnik/guard przed wykonaniem głównego kodu).
- Bezpieczeństwo: Klucz RECAPTCHA_SECRET_KEY przechowywany w Google Cloud Secret Manager.

Walidacja po stronie serwera: Trasy API weryfikują token klienta przy użyciu Google site-verify API.
Próg wyniku (Score): Przetwarzane są tylko żądania z wynikiem > 0.5; podejrzany ruch jest automatycznie odrzucany.

3. Zod (Warstwa Danych)
   Chroni przed: atakami SQL/NoSQL Injection, atakami typu Mass Assignment oraz nieprawidłowymi strukturami danych (malformed payloads).

Konfiguracja:

- Backend (BE): Walidacja i parsowanie danych wejściowych na samym początku każdego endpointu.

Rygorystyczna walidacja: Wszystkie przychodzące obiekty są sprawdzane przy użyciu schematów .strict(), co powoduje odrzucenie żądań zawierających nieznane pola.
Bezpieczeństwo typów (Type Safety): Gwarantuje, że wszystkie dane (e-maile, ciągi znaków, liczby) spełniają określone wymogi formatu i długości przed dotarciem do bazy danych.

## reCAPTCHA v3

This project uses Google reCAPTCHA v3 to protect the contact forms from automated abuse. Quick setup steps:

- **Create keys:** Go to https://www.google.com/recaptcha/admin and create a reCAPTCHA v3 key for your domain. You will get a Site Key and a Secret Key.
- **Set environment variables:**
  - const `PUBLIC_RECAPTCHA_SITE_KEY` — public key, used in the browser. Declared in constants.ts
  - `RECAPTCHA_SECRET_KEY` — server-side secret, used to verify tokens. Keep this secret and do not commit it to the repo.
- **How it works in this app:** the client loads the v3 script, executes `grecaptcha.execute(...)` on submit and sends `recaptchaToken` together with the form payload to the backend endpoint `POST /api/users`. The server verifies the token against Google's `siteverify` API and rejects requests that fail verification or have a low score.
- **Score threshold:** Currently the server rejects tokens with `score < 0.5`. Adjust this threshold in `src/app/api/users/route.ts` if you need stricter or looser checks.
- **Development bypass:** For local development you can bypass verification by setting `RECAPTCHA_SKIP_VERIFY_IN_DEV=true` in your `.env`. This is only for testing and should never be enabled in production.

If you deploy to Firebase App Hosting, add `RECAPTCHA_SECRET_KEY` to your Cloud Secret Manager and map it to the app hosting environment as you do for other secrets.

## DEVELOPMENT

1. Release and build

- Kod jest na GitHub koncie DamianPoland, Główny branch to main
- Jeśli kod jest mergowany do main to automatycznie uruchamia się build i release na Firebase. W App Hosting Firebase jest dodana domena wPolisa.pl
- W .env jest NAZWA_TWOJEGO_SEKRETU. Ustawienie secret NAZWA_TWOJEGO_SEKRETU w App Hosting:
  - npm install -g firebase-tools // dodanie firebase globalnie - TYLKO raz na początku
  - firebase login // zalogować się do firebase na konto wPolisa.pl
  - firebase init apphosting // podpięcie projektu do istniejącego w App Hosting TYLKO raz na początku projektu - utworzy plik apphosting.yaml w którym trzeba dodać secret z env
  - firebase apphosting:secrets:set NAZWA_TWOJEGO_SEKRETU => wkleić wartość secret (UWAGA nie widać co się wkleja i można wkleić dwa razy przez pomyłkę) => production => grand access => add to apphosting.yaml // dodaje secret do Google Cloud Cloud Secret Manager (można też to zrobić/sprawdzić bezpośrednio w konsoli Google: https://console.cloud.google.com/security/secret-manager?project=wpolisa-pl musi być wybrane w przeglądarce login wPolisa a jak nie to zmienić na wPolisa => wybierz projekt wPolisa.pl => security/secret manager)
