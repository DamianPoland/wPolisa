import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

// TODO: Dostosować metadane
export const metadata = {
  title: "Regulamin Bon na Dom | wPolisa.pl",
  description: "Regulamin promocji Bon na Dom",
};

const PromoHomeTermsPage = () => {
  return (
    <main className="min-h-screen bg-muted/30 py-12 md:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/promotions/promo-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do promocji
          </Link>
        </Button>

        <Card className="border-border/50 bg-card shadow-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border/50">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">Regulamin Promocji "Bon na Dom"</h1>
                <p className="text-muted-foreground mt-1">Obowiązuje od dnia 01.02.2025 r.</p>
              </div>
            </div>

            <div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 1. Postanowienia ogólne</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Organizatorem promocji "Bon na Dom" (zwanej dalej "Promocją") jest wPolisa sp. z o.o. z siedzibą w
                    Gdyni.
                  </li>
                  <li>Promocja trwa od 01.02.2025 r. do odwołania lub wyczerpania puli nagród.</li>
                  <li>
                    Celem promocji jest nagradzanie klientów decydujących się na zakup ubezpieczenia nieruchomości.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 2. Warunki uczestnictwa</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Uczestnikiem promocji może być każda osoba fizyczna, która w okresie trwania promocji zakupi polisę
                    ubezpieczenia nieruchomości za pośrednictwem wPolisa sp. z o.o.
                  </li>
                  <li>
                    Minimalna wartość składki uprawniająca do udziału w promocji wynosi 500 zł (słownie: pięćset
                    złotych).
                  </li>
                  <li>Promocja dotyczy wyłącznie nowych polis, nie obejmuje wznowień automatycznych.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 3. Nagrody</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Nagrodą w promocji jest karta podarunkowa (bon) do serwisu Allegro o wartości 50 zł.</li>
                  <li>
                    Nagroda przekazywana jest w formie elektronicznej (kod cyfrowy) na adres e-mail podany podczas
                    zakupu polisy.
                  </li>
                  <li>
                    Nagroda zostanie wysłana w terminie do 14 dni roboczych od momentu zaksięgowania pełnej wpłaty
                    składki.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-foreground">§ 4. Reklamacje</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Wszelkie reklamacje dotyczące promocji można zgłaszać drogą mailową na adres kontakt@wpolisa.pl.
                  </li>
                  <li>Reklamacje będą rozpatrywane w terminie 14 dni od daty ich wpłynięcia.</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PromoHomeTermsPage;
