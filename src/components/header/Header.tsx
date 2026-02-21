"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo/Logo";
import { Icon } from "@/utils/types";

const navLinks = [
  { name: "Strona główna", path: "/" },
  { name: "O nas", path: "/description" },
  { name: "Baza wiedzy", path: "/knowledge" },
  { name: "Oferta", path: "/offer" },
  { name: "Promocje", path: "/promotions" },
  { name: "Kontakt", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container flex h-16 gap-4 items-center justify-between lg:h-20 m-auto px-4 lg:px-2">
        <Logo logoVariant={Icon.DARK} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex lg:text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "rounded-lg px-2 lg:px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                pathname === link.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="accent" asChild>
            <Link href="/contact">Skontaktuj się</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Otwórz menu nawigacji"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          className="animate-fade-in border-t border-border/50 bg-background lg:hidden"
        >
          <nav className="container flex flex-col gap-1 px-4 py-4 w-full m-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors focus:outline-none",
                  pathname === link.path
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="accent" className="mt-2" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Skontaktuj się
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
