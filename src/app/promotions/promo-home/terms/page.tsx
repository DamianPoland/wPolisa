import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Gift, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Regulamin Bon na Dom | wPolisa.pl",
  description: "Regulamin promocji Bon na Dom",
};

const PromoHomeTermsPage = () => {
  return (
    <main className="min-h-screen bg-muted/30 py-6">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Przycisk powrotu */}
        <Button variant="ghost" className="mb-8 hover:bg-transparent pl-0" asChild>
          <Link
            href="/promotions/promo-home"
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do promocji
          </Link>
        </Button>

        <Card className="border-border/50 bg-card shadow-sm overflow-hidden">
          {/* Nagłówek Regulaminu */}
          <div className="p-8 md:p-12 border-b border-border/50">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white shadow-sm text-primary ring-1 ring-border/50">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold md:text-3xl text-foreground">
                  Regulamin Promocji &quot;Bon na Dom&quot;
                </h1>
                <p className="text-muted-foreground mt-2 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  Obowiązuje od dnia 01.02.2025 r.
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-8 md:p-12">
            <div className="prose prose-stone dark:prose-invert max-w-none space-y-10">
              {/* § 1 Postanowienia ogólne */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  § 1. Postanowienia ogólne
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-muted-foreground marker:text-foreground/70">
                  <li>
                    Organizatorem promocji &quot;Bon na Dom&quot; (zwanej dalej &quot;Promocją&quot;) jest{" "}
                    <strong>wPolisa sp. z o.o.</strong> z siedzibą w Gdyni, wpisana do rejestru przedsiębiorców KRS pod
                    numerem 0001215491, NIP: 5862425740, REGON: 543671892 (zwana dalej &quot;Organizatorem&quot;).
                  </li>
                  <li>Promocja trwa od dnia 01.02.2025 r. do odwołania lub do wyczerpania puli nagród.</li>
                  <li>
                    Promocja jest prowadzona na terytorium Rzeczypospolitej Polskiej za pośrednictwem strony
                    internetowej Organizatora.
                  </li>
                </ol>
              </section>

              {/* § 2 Warunki uczestnictwa */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />§ 2. Warunki uczestnictwa
                </h3>
                <p className="text-muted-foreground mb-4">
                  Uczestnikiem Promocji może być pełnoletnia osoba fizyczna, która spełni łącznie następujące warunki:
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-muted-foreground marker:text-foreground/70">
                  <li>
                    W okresie trwania Promocji zakupi polisę ubezpieczenia nieruchomości (&quot;Polisa&quot;) za
                    pośrednictwem wPolisa sp. z o.o.
                  </li>
                  <li>
                    Wartość składki za zakupioną Polisę wynosi minimum <strong>500,00 zł</strong> (słownie: pięćset
                    złotych).
                  </li>
                  <li>Dokona pełnej opłaty za Polisę.</li>
                  <li>
                    <strong>Nie odstąpi od umowy ubezpieczenia</strong> (nie wycofa polisy) w ustawowym terminie
                    przewidzianym dla umów zawieranych na odległość (standardowo 30 dni dla umów ubezpieczenia).
                  </li>
                  <li>
                    Promocja dotyczy wyłącznie nowych Klientów lub nowych przedmiotów ubezpieczenia i nie obejmuje
                    automatycznych wznowień polis.
                  </li>
                </ol>
              </section>

              {/* § 3 Nagrody i zasady przyznawania */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />§ 3. Nagrody i termin realizacji
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-muted-foreground marker:text-foreground/70">
                  <li>
                    Nagrodą w Promocji jest elektroniczna karta podarunkowa (bon) do serwisu Allegro o wartości{" "}
                    <strong>50 zł brutto</strong>.
                  </li>
                  <li>Nagroda zostanie wysłana na adres e-mail Uczestnika podany podczas zakupu Polisy.</li>
                  <li className="bg-primary/5 p-4 rounded-lg border border-primary/10 text-foreground font-medium">
                    Termin wysyłki: Bon zostanie wysłany w ciągu <strong>14 dni</strong> liczonych od dnia, w którym
                    upłynął termin na skuteczne odstąpienie od umowy ubezpieczenia.
                  </li>
                  <li className="text-sm">
                    <em>
                      Przykład: Jeśli ustawowy termin na odstąpienie wynosi 30 dni od zakupu, bon zostanie wysłany
                      najpóźniej w 44. dniu od zawarcia umowy, pod warunkiem opłacenia składki.
                    </em>
                  </li>
                  <li>
                    Nagroda w ramach niniejszej Promocji stanowi nagrodę w sprzedaży premiowej i korzysta ze zwolnienia
                    z podatku dochodowego od osób fizycznych na podstawie art. 21 ust. 1 pkt 68 ustawy o PIT (wartość
                    nagrody nie przekracza 2000 zł).
                  </li>
                </ol>
              </section>

              {/* § 4 Reklamacje */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">§ 4. Reklamacje</h3>
                <ol className="list-decimal pl-5 space-y-3 text-muted-foreground marker:text-foreground/70">
                  <li>
                    Wszelkie reklamacje dotyczące przebiegu Promocji można zgłaszać drogą elektroniczną na adres:{" "}
                    <a href="mailto:kontakt@wpolisa.pl" className="text-primary hover:underline">
                      kontakt@wpolisa.pl
                    </a>
                    .
                  </li>
                  <li>Zgłoszenie reklamacyjne powinno zawierać numer polisy oraz opis zdarzenia.</li>
                  <li>
                    Reklamacje będą rozpatrywane w terminie 14 dni od daty ich otrzymania. O wyniku postępowania
                    reklamacyjnego Uczestnik zostanie powiadomiony e-mailem.
                  </li>
                </ol>
              </section>

              {/* § 5 Dane osobowe */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  § 5. Dane osobowe (RODO)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Administratorem danych osobowych Uczestników jest Organizator. Dane osobowe będą przetwarzane w celu
                  realizacji Promocji, w tym wydania nagrody oraz rozpatrywania ewentualnych reklamacji, a także w
                  celach podatkowych i sprawozdawczych. Podanie danych jest dobrowolne, ale niezbędne do wzięcia udziału
                  w Promocji. Uczestnikowi przysługuje prawo wglądu do swoich danych oraz ich poprawiania.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-muted-foreground text-xs mt-8">
          Wersja regulaminu: 1.0 | Ostatnia aktualizacja: 01.02.2025
        </p>
      </div>
    </main>
  );
};

export default PromoHomeTermsPage;
