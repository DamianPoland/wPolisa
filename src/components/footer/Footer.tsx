"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { Icon } from "@/utils/types";
import { socialLinks } from "@/utils/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container px-4 md:px-2 py-12 md:py-16 m-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo logoVariant={Icon.LIGHT} />
            <p className="text-sm text-primary-foreground/70">
              Multiagencja ubezpieczeniowa. Łączymy wiedzę, doświadczenie i najlepsze oferty na rynku.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nawigacja</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                Strona główna
              </Link>
              <Link
                href="/description"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                O nas
              </Link>
              <Link
                href="/knowledge"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Baza wiedzy
              </Link>
              <Link href="/offer" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                Oferta
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ubezpieczenia</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/offer?variant=medyczny"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Pakiet Medyczny
              </Link>
              <Link
                href="/offer?variant=zycie"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ubezpieczenie Życia
              </Link>
              <Link
                href="/offer?variant=podroze"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ubezpieczenie Podróży
              </Link>
              <Link
                href="/offer?variant=nieruchomosc"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ubezpieczenie Nieruchomości
              </Link>
              <Link
                href="/offer?variant=firma"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ubezpieczenie Firmy
              </Link>
              <Link
                href="/offer?variant=inne"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Pozostałe Ubezpieczenia
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Swietojanska+118,+Gdynia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Świętojańska 118, Gdynia</span>
              </a>
              <a
                href="tel:+48888970510"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                <span>+48 888 970 510</span>
              </a>
              <a
                href="mailto:kontakt@wpolisa.pl"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                <span>kontakt@wpolisa.pl</span>
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-accent-foreground/50 transition-colors ${social.color}`}
                >
                  <Image src={social.icon} className="h-6 w-6" alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-primary-foreground/50">© 2025 wPolisa. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-primary-foreground/50 transition-colors hover:text-accent">
                Regulamin
              </Link>
              <Link href="/cookies" className="text-sm text-primary-foreground/50 transition-colors hover:text-accent">
                Polityka cookies
              </Link>
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("openCookieSettings"));
                }}
                className="text-sm text-primary-foreground/50 transition-colors hover:text-accent cursor-pointer"
              >
                Ustawienia cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
