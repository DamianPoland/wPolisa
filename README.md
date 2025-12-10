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

## DEVELOPMENT

1. Release and build

- Kod jest na GitHub koncie DamianPoland, Główny branch to main
- Jeśli kod jest mergowany do main to automatycznie uruchamia się build i release na Firebase. W App Hosting Firebase jest dodana domena wPolisa.pl
- W .env jest HUBSPOT_ACCESS_TOKEN. Ustawienie secret HUBSPOT_ACCESS_TOKEN w App Hosting:
  - npm install -g firebase-tools // dodanie firebase globalnie - tylko raz na początku
  - firebase login // zalogować się di firebase na konto wPolisa.pl
  - firebase init apphosting // podpięcie projektu do istniejącego w App Hosting // tylko raz na początku projektu
  - firebase apphosting:secrets:set NAZWA_TWOJEGO_SEKRETU => prod => grand permisions => add to apphosting.yaml
