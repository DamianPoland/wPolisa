"use client";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, Youtube } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Zadowolonych klientów" },
  { icon: Clock, value: "10+", label: "Lat doświadczenia" },
  { icon: Award, value: "11", label: "Partnerów ubezpieczeniowych" },
  { icon: Shield, value: "100%", label: "Profesjonalizm" },
];

const DescriptionPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Po pierwsze, jesteśmy ludźmi.</h1>
            <h1 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">Po drugie, ekspertami.</h1>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              Jesteśmy zespołem pasjonatów, którzy naprawdę chcą Ci pomóc.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              🛡️ U nas rozmawiasz z człowiekiem, a nie z robotem.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-4 md:mx-2 py-16">
        <div className="container m-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in rounded-xl border border-border bg-card p-6 text-center shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-muted/50 px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Nasze <span className="text-accent">doświadczenie</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Od lat działamy na rynku ubezpieczeń. Nie boimy się skomplikowanych przypadków, bo znamy branżę na
                wylot. Profesjonalizm to nasza norma, nie dodatek.
              </p>
              <p>
                Wiesz, że Twoje polisy są w rękach kogoś, kto potrafi odróżnić OWU od UFO? My potrafimy – i co więcej,
                wytłumaczymy Ci to prostym językiem, bez prawniczego żargonu.
              </p>
              <p>
                Każdego klienta traktujemy indywidualnie. Twoje potrzeby są unikalne, więc i Twoje ubezpieczenie powinno
                być dopasowane. Nie sprzedajemy &quot;produktów&quot; – szukamy rozwiązań.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Youtube className="h-8 w-8 text-accent-dark" />
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Wolisz <span className="text-accent">oglądać</span> niż czytać?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Rozumiemy. Dlatego prowadzimy kanał YouTube, gdzie tłumaczymy ubezpieczenia tak, jakbyśmy rozmawiali przy
              kawie. Bez nudnych slajdów i korporacyjnego żargonu – tylko konkrety i odrobina humoru. Bo kto powiedział,
              że ubezpieczenia muszą być nudne?
            </p>
            <p className="mt-4 text-muted-foreground">
              Subskrybuj, jeśli chcesz wiedzieć więcej o ubezpieczeniach bez zasypiania przed ekranem.
            </p>
            <Button asChild size="lg" className="mt-8 gap-2">
              <a href="https://www.youtube.com/@wPolisa-ubezpieczenia" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-accent" />
                Odwiedź nasz kanał YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DescriptionPage;
