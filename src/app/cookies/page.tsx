import Link from "next/link";

const CookiesPage = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-4xl m-auto">
        <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">Polityka Prywatności i Cookies</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
          {/* Sekcja 1: Informacje ogólne */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">1. Informacje ogólne</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych
                przez Użytkowników w związku z korzystaniem z serwisu wpolisa.pl (dalej: „Serwis").
              </li>
              <li>
                Administratorem danych osobowych jest wPolisa z siedzibą w Gdyni (81-504), ul. Lipnowska 17/1, NIP:
                [TODO], REGON: [TODO] (dalej: „Administrator").
              </li>
              <li>
                Administrator prowadzi działalność agencji ubezpieczeniowej na podstawie wpisu do Rejestru Agentów
                Ubezpieczeniowych prowadzonego przez Komisję Nadzoru Finansowego.
              </li>
              <li>
                Kontakt z Administratorem w sprawach ochrony danych osobowych:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>Email: kontakt@wpolisa.pl</li>
                  <li>Adres: ul. Lipnowska 17/1, 81-504 Gdynia</li>
                  <li>Telefon: +48 123 456 789</li>
                </ul>
              </li>
              <li>
                Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą,
                zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
                (RODO).
              </li>
            </ol>
          </div>

          {/* Sekcja 2: Zakres zbieranych danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">2. Zakres zbieranych danych osobowych</h2>
            <p className="mb-4">
              W ramach świadczenia usług pośrednictwa ubezpieczeniowego Administrator zbiera następujące kategorie
              danych osobowych:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Dane identyfikacyjne:</h3>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>imię i nazwisko,</li>
                  <li>PESEL (w przypadku przygotowania oferty ubezpieczeniowej),</li>
                  <li>numer i seria dowodu osobistego (w przypadku zawarcia umowy).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Dane kontaktowe:</h3>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>adres zamieszkania/korespondencyjny,</li>
                  <li>numer telefonu,</li>
                  <li>adres e-mail.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Dane niezbędne do wyceny ubezpieczenia (w zależności od rodzaju produktu):
                </h3>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>data urodzenia,</li>
                  <li>informacje o stanie zdrowia (ubezpieczenia na życie i zdrowotne),</li>
                  <li>dane pojazdu (ubezpieczenia komunikacyjne),</li>
                  <li>dane nieruchomości (ubezpieczenia majątkowe),</li>
                  <li>informacje o prowadzonej działalności gospodarczej (ubezpieczenia firmowe),</li>
                  <li>historia ubezpieczeniowa i szkodowa.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sekcja 3: Cele przetwarzania */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">3. Cele i podstawy prawne przetwarzania danych</h2>
            <p className="mb-4">Dane osobowe są przetwarzane w następujących celach:</p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left">Cel przetwarzania</th>
                    <th className="border border-border px-4 py-2 text-left">Podstawa prawna (RODO)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Przygotowanie oferty ubezpieczeniowej</td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. b – wykonanie umowy lub podjęcie działań przed zawarciem umowy
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Zawarcie i wykonanie umowy ubezpieczenia</td>
                    <td className="border border-border px-4 py-2">Art. 6 ust. 1 lit. b – wykonanie umowy</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Obsługa posprzedażowa i likwidacja szkód</td>
                    <td className="border border-border px-4 py-2">Art. 6 ust. 1 lit. b – wykonanie umowy</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Wypełnienie obowiązków prawnych (np. archiwizacja dokumentów)
                    </td>
                    <td className="border border-border px-4 py-2">Art. 6 ust. 1 lit. c – obowiązek prawny</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Marketing bezpośredni produktów ubezpieczeniowych
                    </td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. a – zgoda lub Art. 6 ust. 1 lit. f – prawnie uzasadniony interes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Przypomnienia o kończących się polisach</td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. f – prawnie uzasadniony interes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Dochodzenie lub obrona przed roszczeniami</td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. f – prawnie uzasadniony interes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sekcja 4: Odbiorcy danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">4. Odbiorcy danych osobowych</h2>
            <p className="mb-4">Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Zakłady ubezpieczeń</strong> – współpracujące z wPolisa, w celu przygotowania oferty i zawarcia
                umowy ubezpieczenia (m.in. PZU, Warta, Ergo Hestia, Generali, Allianz, Compensa, Unum, TU Zdrowie,
                Saltus).
              </li>
              <li>
                <strong>Placówki medyczne</strong> – w przypadku ubezpieczeń zdrowotnych (m.in. Luxmed, Medicover).
              </li>
              <li>
                <strong>Podmioty przetwarzające dane na zlecenie Administratora</strong> – dostawcy usług IT, hostingu,
                poczty elektronicznej, systemów CRM.
              </li>
              <li>
                <strong>Organy państwowe</strong> – w przypadkach przewidzianych przepisami prawa (np. KNF, organy
                podatkowe, sądy).
              </li>
            </ul>
            <p className="mt-4">
              Administrator nie przekazuje danych osobowych do państw trzecich (poza Europejski Obszar Gospodarczy).
            </p>
          </div>

          {/* Sekcja 5: Okres przechowywania */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">5. Okres przechowywania danych</h2>
            <p className="mb-4">Dane osobowe są przechowywane przez następujące okresy:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Dane związane z umową ubezpieczenia</strong> – przez okres trwania umowy oraz 10 lat od jej
                zakończenia (zgodnie z wymogami ustawy o rachunkowości i przepisami dotyczącymi przedawnienia roszczeń).
              </li>
              <li>
                <strong>Dane przetwarzane na podstawie zgody</strong> – do momentu wycofania zgody.
              </li>
              <li>
                <strong>Dane z formularzy kontaktowych (bez zawarcia umowy)</strong> – 3 lata od ostatniego kontaktu.
              </li>
              <li>
                <strong>Dane do celów marketingowych</strong> – do momentu wniesienia sprzeciwu lub wycofania zgody.
              </li>
              <li>
                <strong>Dane dla celów podatkowych i rachunkowych</strong> – 5 lat od końca roku kalendarzowego, w
                którym powstał obowiązek podatkowy.
              </li>
            </ul>
          </div>

          {/* Sekcja 6: Prawa użytkownika */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">6. Prawa osób, których dane dotyczą</h2>
            <p className="mb-4">Zgodnie z RODO, Użytkownikowi przysługują następujące prawa:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Prawo dostępu do danych</strong> – możliwość uzyskania informacji o przetwarzanych danych oraz
                otrzymania ich kopii.
              </li>
              <li>
                <strong>Prawo do sprostowania</strong> – możliwość żądania poprawienia nieprawidłowych lub uzupełnienia
                niekompletnych danych.
              </li>
              <li>
                <strong>Prawo do usunięcia danych („prawo do bycia zapomnianym")</strong> – możliwość żądania usunięcia
                danych, gdy nie są już niezbędne do celów, dla których zostały zebrane.
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania</strong> – możliwość żądania ograniczenia przetwarzania
                danych w określonych przypadkach.
              </li>
              <li>
                <strong>Prawo do przenoszenia danych</strong> – możliwość otrzymania danych w ustrukturyzowanym formacie
                i przekazania ich innemu administratorowi.
              </li>
              <li>
                <strong>Prawo do sprzeciwu</strong> – możliwość wniesienia sprzeciwu wobec przetwarzania danych na
                podstawie prawnie uzasadnionego interesu, w tym marketingu bezpośredniego.
              </li>
              <li>
                <strong>Prawo do wycofania zgody</strong> – w każdym momencie, bez wpływu na zgodność z prawem
                przetwarzania dokonanego przed wycofaniem.
              </li>
              <li>
                <strong>Prawo do wniesienia skargi</strong> – do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2,
                00-193 Warszawa, www.uodo.gov.pl).
              </li>
            </ul>
            <p className="mt-4">
              Aby skorzystać z powyższych praw, prosimy o kontakt: kontakt@wpolisa.pl lub pisemnie na adres siedziby.
            </p>
          </div>

          {/* Sekcja 7: Dobrowolność podania danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">7. Dobrowolność podania danych</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Podanie danych osobowych jest dobrowolne, jednak niezbędne do:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>przygotowania oferty ubezpieczeniowej,</li>
                  <li>zawarcia i wykonania umowy ubezpieczenia,</li>
                  <li>udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy.</li>
                </ul>
              </li>
              <li>Brak podania wymaganych danych może uniemożliwić świadczenie usług przez Administratora.</li>
              <li>
                Podanie danych do celów marketingowych jest całkowicie dobrowolne i nie wpływa na możliwość skorzystania
                z usług.
              </li>
            </ol>
          </div>

          {/* Sekcja 8: Bezpieczeństwo danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">8. Bezpieczeństwo danych</h2>
            <p className="mb-4">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych
              danych osobowych, w szczególności:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>szyfrowanie transmisji danych (protokół SSL/TLS),</li>
              <li>zabezpieczenie dostępu do systemów informatycznych,</li>
              <li>regularne tworzenie kopii zapasowych,</li>
              <li>kontrolę dostępu do danych osobowych,</li>
              <li>szkolenia pracowników z zakresu ochrony danych osobowych.</li>
            </ul>
          </div>

          {/* Sekcja 9: Polityka Cookies */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">9. Polityka Cookies (Pliki Cookies)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.1. Czym są pliki cookies?</h3>
                <p>
                  Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu Użytkownika podczas
                  korzystania z Serwisu. Służą one do prawidłowego funkcjonowania strony, zapamiętywania preferencji
                  oraz zbierania anonimowych statystyk odwiedzin.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.2. Rodzaje wykorzystywanych cookies</h3>
                <div className="mt-2 space-y-3">
                  <div>
                    <strong>Cookies niezbędne (funkcjonalne):</strong>
                    <p className="text-sm">
                      Są konieczne do prawidłowego działania Serwisu. Umożliwiają nawigację i korzystanie z podstawowych
                      funkcji. Bez nich strona nie mogłaby funkcjonować prawidłowo.
                    </p>
                  </div>
                  <div>
                    <strong>Cookies preferencyjne:</strong>
                    <p className="text-sm">
                      Umożliwiają zapamiętanie preferencji Użytkownika, takich jak zgoda na cookies, wybrane ustawienia
                      języka czy regionu.
                    </p>
                  </div>
                  <div>
                    <strong>Cookies analityczne/statystyczne:</strong>
                    <p className="text-sm">
                      Pozwalają zbierać anonimowe dane o sposobie korzystania z Serwisu (np. liczba odwiedzin, czas
                      spędzony na stronie). Pomagają w ulepszaniu Serwisu.
                    </p>
                  </div>
                  <div>
                    <strong>Cookies marketingowe:</strong>
                    <p className="text-sm">
                      Mogą być wykorzystywane do wyświetlania spersonalizowanych reklam. Są stosowane tylko za zgodą
                      Użytkownika.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.3. Podstawa prawna stosowania cookies</h3>
                <ul className="list-disc space-y-1 pl-6 text-sm">
                  <li>Cookies niezbędne – art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).</li>
                  <li>Cookies analityczne i marketingowe – art. 6 ust. 1 lit. a RODO (zgoda Użytkownika).</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.4. Zarządzanie cookies</h3>
                <p className="mb-2">
                  Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Uwaga: Wyłączenie cookies może wpłynąć na funkcjonalność Serwisu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.5. Zgoda na cookies</h3>
                <p>
                  Podczas pierwszej wizyty w Serwisie wyświetlamy komunikat informujący o wykorzystywaniu plików
                  cookies. Klikając przycisk akceptacji, wyrażasz zgodę na używanie cookies zgodnie z niniejszą
                  polityką. Możesz zmienić swoją decyzję w dowolnym momencie poprzez ustawienia przeglądarki.
                </p>
              </div>
            </div>
          </div>

          {/* Sekcja 10: Zmiany polityki */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">10. Zmiany Polityki Prywatności</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.</li>
              <li>
                O istotnych zmianach Administrator poinformuje poprzez publikację zaktualizowanej wersji w Serwisie.
              </li>
              <li>Zalecamy regularne przeglądanie niniejszej Polityki.</li>
            </ol>
          </div>

          {/* Sekcja kontaktowa */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">Kontakt w sprawach ochrony danych</h2>
            <p className="mb-4">
              W przypadku pytań dotyczących przetwarzania danych osobowych lub polityki cookies prosimy o kontakt:
            </p>
            <ul className="list-none space-y-1">
              <li>
                <strong>Administrator danych:</strong> wPolisa
              </li>
              <li>
                <strong>Adres:</strong> ul. Lipnowska 17/1, 81-504 Gdynia
              </li>
              <li>
                <strong>Email:</strong> kontakt@wpolisa.pl
              </li>
              <li>
                <strong>Telefon:</strong> +48 123 456 789
              </li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground">
            Zobacz również:{" "}
            <Link href="/terms" className="text-accent hover:underline">
              Regulamin serwisu
            </Link>
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiesPage;
