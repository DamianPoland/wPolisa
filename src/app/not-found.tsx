"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center m-auto p-2">
      <div className="text-8xl font-bold text-accent">404</div>
      <h1 className="mt-4 text-3xl font-bold text-foreground">Ups! Strona nie istnieje</h1>
      <p className="mt-2 text-muted-foreground">Wygląda na to, że ta strona postanowiła wziąć urlop. 🏖️</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button variant="outline" className="cursor-pointer" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Wróć
        </Button>
        <Button variant="accent" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Przejdź do strony głównej
          </Link>
        </Button>
      </div>
    </main>
  );
}
