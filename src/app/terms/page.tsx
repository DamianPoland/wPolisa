import Link from "next/link";
import React from "react";

const TermsPage = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-4xl m-auto">
        <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">Regulamin serwisu wPolisa</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§1. Postanowienia ogólne</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Niniejszy Regulamin określa zasady korzystania z serwisu internetowego wPolisa, dostępnego pod adresem
                wpolisa.pl (dalej: „Serwis").
              </li>
              <li>
                Właścicielem i administratorem Serwisu jest wPolisa z siedzibą w Gdyni (81-504), ul. Lipnowska 17/1,
                NIP: [TODO], REGON: [TODO] (dalej: „Usługodawca" lub „Administrator").
              </li>
              <li>
                Usługodawca prowadzi działalność agencji ubezpieczeniowej na podstawie wpisu do Rejestru Agentów
                Ubezpieczeniowych prowadzonego przez Komisję Nadzoru Finansowego pod numerem [TODO].
              </li>
              <li>
                Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu oraz{" "}
                <Link href="/cookies" className="text-accent hover:underline">
                  Polityki Prywatności i Cookies
                </Link>
                .
              </li>
              <li>
                Serwis działa zgodnie z przepisami prawa polskiego, w szczególności z ustawą z dnia 15 grudnia 2017 r. o
                dystrybucji ubezpieczeń (Dz.U. 2017 poz. 2486 ze zm.).
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§2. Definicje</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Serwis</strong> – strona internetowa wPolisa wraz ze wszystkimi podstronami, dostępna pod
                adresem wpolisa.pl.
              </li>
              <li>
                <strong>Użytkownik</strong> – każda osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca
                osobowości prawnej, korzystająca z Serwisu.
              </li>
              <li>
                <strong>Usługodawca/Administrator</strong> – wPolisa, właściciel i administrator Serwisu, prowadzący
                działalność w zakresie pośrednictwa ubezpieczeniowego.
              </li>
              <li>
                <strong>Formularz kontaktowy</strong> – narzędzie elektroniczne umożliwiające przesłanie zapytania
                ofertowego lub kontakt z Usługodawcą.
              </li>
              <li>
                <strong>Umowa ubezpieczenia</strong> – umowa zawierana pomiędzy Użytkownikiem a zakładem ubezpieczeń,
                przy udziale Usługodawcy jako pośrednika.
              </li>
              <li>
                <strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§3. Zakres usług</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Serwis umożliwia zapoznanie się z ofertą ubezpieczeniową wPolisa oraz współpracujących zakładów
                ubezpieczeń.
              </li>
              <li>
                Usługodawca świadczy usługi pośrednictwa ubezpieczeniowego, polegające na:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>prezentowaniu ofert ubezpieczeniowych wielu zakładów ubezpieczeń,</li>
                  <li>porównywaniu dostępnych produktów ubezpieczeniowych,</li>
                  <li>przygotowywaniu indywidualnych ofert ubezpieczeniowych,</li>
                  <li>pomocy w zawieraniu umów ubezpieczenia,</li>
                  <li>obsłudze posprzedażowej polis ubezpieczeniowych.</li>
                </ul>
              </li>
              <li>
                Użytkownik może przesyłać zapytania ofertowe za pomocą formularzy kontaktowych dostępnych w Serwisie.
              </li>
              <li>
                Informacje prezentowane w Serwisie mają charakter informacyjny i nie stanowią oferty w rozumieniu art.
                66 Kodeksu Cywilnego.
              </li>
              <li>
                Ostateczne warunki umowy ubezpieczenia określa zakład ubezpieczeń w polisie i Ogólnych Warunkach
                Ubezpieczenia (OWU).
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§4. Zasady korzystania z Serwisu</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji.</li>
              <li>
                Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z obowiązującym prawem, dobrymi obyczajami
                oraz niniejszym Regulaminem.
              </li>
              <li>
                Zabronione jest:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>przesyłanie treści niezgodnych z prawem, obraźliwych lub naruszających prawa osób trzecich,</li>
                  <li>podejmowanie działań mogących zakłócić funkcjonowanie Serwisu,</li>
                  <li>wykorzystywanie Serwisu do celów niezgodnych z jego przeznaczeniem,</li>
                  <li>podawanie nieprawdziwych danych w formularzach kontaktowych.</li>
                </ul>
              </li>
              <li>
                Użytkownik ponosi pełną odpowiedzialność za prawdziwość i aktualność danych podanych w formularzach.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§5. Ochrona danych osobowych</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administratorem danych osobowych Użytkowników jest wPolisa z siedzibą w Gdyni, ul. Lipnowska 17/1.
              </li>
              <li>
                Dane osobowe przetwarzane są zgodnie z RODO oraz ustawą z dnia 10 maja 2018 r. o ochronie danych
                osobowych.
              </li>
              <li>
                Dane osobowe są zbierane i przetwarzane w następujących celach:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>przygotowania oferty ubezpieczeniowej (art. 6 ust. 1 lit. b RODO),</li>
                  <li>zawarcia i wykonania umowy ubezpieczenia (art. 6 ust. 1 lit. b RODO),</li>
                  <li>wypełnienia obowiązków prawnych ciążących na Administratorze (art. 6 ust. 1 lit. c RODO),</li>
                  <li>marketingu bezpośredniego produktów i usług – na podstawie zgody (art. 6 ust. 1 lit. a RODO),</li>
                  <li>dochodzenia lub obrony przed roszczeniami (art. 6 ust. 1 lit. f RODO).</li>
                </ul>
              </li>
              <li>
                Podanie danych osobowych jest dobrowolne, jednak niezbędne do przygotowania oferty ubezpieczeniowej i
                zawarcia umowy.
              </li>
              <li>
                Dane osobowe mogą być przekazywane:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>zakładom ubezpieczeń współpracującym z wPolisa,</li>
                  <li>podmiotom świadczącym usługi IT i hostingowe,</li>
                  <li>organom państwowym na podstawie przepisów prawa.</li>
                </ul>
              </li>
              <li>
                Dane osobowe przechowywane są przez okres:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    trwania umowy ubezpieczenia oraz 10 lat po jej zakończeniu (dla celów archiwalnych i prawnych),
                  </li>
                  <li>do czasu wycofania zgody – w przypadku przetwarzania na podstawie zgody,</li>
                  <li>3 lata od ostatniego kontaktu – w przypadku niezawarcia umowy.</li>
                </ul>
              </li>
              <li>
                Użytkownikowi przysługuje prawo do:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>dostępu do swoich danych osobowych,</li>
                  <li>sprostowania nieprawidłowych danych,</li>
                  <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>przenoszenia danych,</li>
                  <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                  <li>wycofania zgody w dowolnym momencie,</li>
                  <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                </ul>
              </li>
              <li>
                Szczegółowe informacje dotyczące przetwarzania danych osobowych zawiera{" "}
                <Link href="/cookies" className="text-accent hover:underline">
                  Polityka Prywatności
                </Link>
                .
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§6. Prawa własności intelektualnej</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, logo, zdjęcia i elementy multimedialne,
                są własnością Usługodawcy lub podmiotów, z którymi Usługodawca zawarł stosowne umowy.
              </li>
              <li>
                Kopiowanie, rozpowszechnianie lub wykorzystywanie treści Serwisu bez pisemnej zgody Usługodawcy jest
                zabronione.
              </li>
              <li>
                Logo i nazwy zakładów ubezpieczeń prezentowane w Serwisie są własnością ich właścicieli i są
                wykorzystywane wyłącznie w celach informacyjnych.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§7. Odpowiedzialność</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Usługodawca dokłada wszelkich starań, aby informacje zawarte w Serwisie były aktualne, rzetelne i zgodne
                z prawdą.
              </li>
              <li>
                Usługodawca nie ponosi odpowiedzialności za:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>przerwy w działaniu Serwisu wynikające z przyczyn technicznych lub działania siły wyższej,</li>
                  <li>szkody wynikające z niewłaściwego korzystania z Serwisu przez Użytkownika,</li>
                  <li>treść i dostępność stron internetowych, do których prowadzą linki zewnętrzne,</li>
                  <li>
                    decyzje zakładów ubezpieczeń dotyczące zawarcia umowy ubezpieczenia lub wypłaty odszkodowania.
                  </li>
                </ul>
              </li>
              <li>
                Odpowiedzialność za realizację umowy ubezpieczenia ponosi zakład ubezpieczeń, z którym Użytkownik zawarł
                umowę.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§8. Reklamacje</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Reklamacje dotyczące funkcjonowania Serwisu można składać:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>pisemnie na adres: wPolisa, ul. Lipnowska 17/1, 81-504 Gdynia,</li>
                  <li>elektronicznie na adres: kontakt@wpolisa.pl.</li>
                </ul>
              </li>
              <li>Reklamacja powinna zawierać: imię i nazwisko, adres e-mail, opis problemu.</li>
              <li>Usługodawca rozpatrzy reklamację w terminie 30 dni od jej otrzymania.</li>
              <li>
                Reklamacje dotyczące umów ubezpieczenia należy kierować bezpośrednio do właściwego zakładu ubezpieczeń.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§9. Postanowienia końcowe</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu. O zmianach Użytkownicy zostaną
                poinformowani poprzez publikację nowej wersji Regulaminu w Serwisie.
              </li>
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w
                szczególności Kodeksu Cywilnego, ustawy o dystrybucji ubezpieczeń oraz RODO.
              </li>
              <li>Ewentualne spory będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.</li>
              <li>Regulamin wchodzi w życie z dniem publikacji w Serwisie.</li>
            </ol>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">Kontakt</h2>
            <p className="mb-4">W przypadku pytań dotyczących Regulaminu prosimy o kontakt:</p>
            <ul className="list-none space-y-1">
              <li>
                <strong>Adres:</strong> wPolisa, ul. Lipnowska 17/1, 81-xxx Gdynia
              </li>
              <li>
                <strong>Email:</strong> kontakt@wpolisa.pl
              </li>
              <li>
                <strong>Telefon:</strong> +48 123 456 789
              </li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
