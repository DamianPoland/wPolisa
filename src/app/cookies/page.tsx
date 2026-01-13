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
                przez Użytkowników w związku z korzystaniem z serwisu wpolisa.pl (dalej: &quot;Serwis&quot;).
              </li>
              <li>
                Administratorem danych osobowych jest wPolisa z siedzibą w Gdyni (81-388), ul. Świętojańska 118, NIP:
                5862425740, REGON: 54367189200000 (dalej: &quot;Administrator&quot;).
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
                  <li>Telefon: +48 222 444 666</li>
                </ul>
              </li>
              <li>
                Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą,
                zgodnie z:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                    ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                    takich danych (RODO),
                  </li>
                  <li>Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000 z późn. zm.),</li>
                  <li>
                    Ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 Nr 144, poz. 1204
                    z późn. zm.),
                  </li>
                  <li>
                    Ustawą z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 Nr 171, poz. 1800 z późn. zm.) –
                    w zakresie stosowania plików cookies.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Sekcja 2: Zakres zbieranych danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">2. Zakres zbieranych danych osobowych</h2>
            <p className="mb-4">
              W ramach świadczenia usług pośrednictwa ubezpieczeniowego Administrator zbiera następujące kategorie
              danych osobowych niezbędnych do przygotowania oferty i zawarcia umowy ubezpieczenia:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Dane identyfikacyjne:</h3>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>imię i nazwisko,</li>
                  <li>PESEL (niezbędny do wyceny i zawarcia umowy ubezpieczenia),</li>
                  <li>numer i seria dowodu osobistego (w przypadku zawarcia umowy),</li>
                  <li>płeć,</li>
                  <li>data urodzenia / wiek.</li>
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
                  <li>
                    informacje o stanie zdrowia (ubezpieczenia na życie i zdrowotne) – stanowiące szczególne kategorie
                    danych osobowych w rozumieniu art. 9 RODO,
                  </li>
                  <li>
                    dane pojazdu – marka, model, rok produkcji, numer VIN, numer rejestracyjny (ubezpieczenia
                    komunikacyjne),
                  </li>
                  <li>
                    dane nieruchomości – adres, powierzchnia, rok budowy, rodzaj konstrukcji (ubezpieczenia majątkowe),
                  </li>
                  <li>informacje o prowadzonej działalności gospodarczej – NIP, REGON, PKD (ubezpieczenia firmowe),</li>
                  <li>historia ubezpieczeniowa i szkodowa,</li>
                  <li>informacje o współubezpieczonych osobach (np. członkowie rodziny).</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="font-semibold text-foreground">Dane zbierane automatycznie (techniczne):</h3>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>adres IP,</li>
                  <li>typ przeglądarki i systemu operacyjnego,</li>
                  <li>czas i data wizyty,</li>
                  <li>strony odwiedzone w Serwisie,</li>
                  <li>źródło ruchu (strona odsyłająca).</li>
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
                      Art. 6 ust. 1 lit. b – wykonanie umowy lub podjęcie działań przed zawarciem umowy na żądanie
                      osoby, której dane dotyczą
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Zawarcie i wykonanie umowy ubezpieczenia</td>
                    <td className="border border-border px-4 py-2">Art. 6 ust. 1 lit. b – wykonanie umowy</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Przetwarzanie danych o stanie zdrowia</td>
                    <td className="border border-border px-4 py-2">
                      Art. 9 ust. 2 lit. a – wyraźna zgoda osoby, której dane dotyczą
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Obsługa posprzedażowa i likwidacja szkód</td>
                    <td className="border border-border px-4 py-2">Art. 6 ust. 1 lit. b – wykonanie umowy</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Wypełnienie obowiązków prawnych (archiwizacja, wymogi KNF)
                    </td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. c – obowiązek prawny ciążący na administratorze
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Marketing bezpośredni produktów ubezpieczeniowych
                    </td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. a – zgoda osoby, której dane dotyczą
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Przesyłanie informacji handlowych drogą elektroniczną
                    </td>
                    <td className="border border-border px-4 py-2">
                      Art. 10 ustawy o świadczeniu usług drogą elektroniczną – zgoda
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Marketing telefoniczny</td>
                    <td className="border border-border px-4 py-2">
                      Art. 172 Prawa telekomunikacyjnego – zgoda abonenta
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Przypomnienia o kończących się polisach</td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. f – prawnie uzasadniony interes administratora
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Dochodzenie lub obrona przed roszczeniami</td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. f – prawnie uzasadniony interes administratora
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Cele statystyczne i analityczne (Google Analytics)
                    </td>
                    <td className="border border-border px-4 py-2">
                      Art. 6 ust. 1 lit. a – zgoda Użytkownika (poprzez banner cookies)
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
                <strong>Google Ireland Limited</strong> – w zakresie usługi Google Analytics (szczegóły poniżej w sekcji
                dotyczącej Google Analytics).
              </li>
              <li>
                <strong>Organy państwowe</strong> – w przypadkach przewidzianych przepisami prawa (np. KNF, UODO, organy
                podatkowe, sądy, prokuratura).
              </li>
            </ul>

            <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
              <h3 className="font-semibold text-foreground">Przekazywanie danych do państw trzecich</h3>
              <p className="mt-2">
                W związku z korzystaniem z usług Google Analytics, dane mogą być przekazywane do Stanów Zjednoczonych.
                Google LLC przystąpiło do EU-US Data Privacy Framework, co zapewnia odpowiedni poziom ochrony danych
                osobowych zgodnie z decyzją Komisji Europejskiej z dnia 10 lipca 2023 r. (decyzja wykonawcza C(2023)
                4745).
              </p>
            </div>
          </div>

          {/* Sekcja 5: Okres przechowywania */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">5. Okres przechowywania danych</h2>
            <p className="mb-4">Dane osobowe są przechowywane przez następujące okresy:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Dane związane z umową ubezpieczenia</strong> – przez okres trwania umowy oraz 10 lat od jej
                zakończenia (zgodnie z wymogami ustawy o rachunkowości, przepisami dotyczącymi przedawnienia roszczeń
                oraz wymogami Komisji Nadzoru Finansowego).
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
              <li>
                <strong>Dane zbierane przez Google Analytics</strong> – zgodnie z polityką przechowywania danych Google
                (standardowo 14 miesięcy).
              </li>
            </ul>
          </div>

          {/* Sekcja 6: Prawa użytkownika */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">6. Prawa osób, których dane dotyczą</h2>
            <p className="mb-4">
              Zgodnie z RODO oraz polskimi przepisami o ochronie danych osobowych, Użytkownikowi przysługują następujące
              prawa:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Prawo dostępu do danych (art. 15 RODO)</strong> – możliwość uzyskania informacji o
                przetwarzanych danych oraz otrzymania ich kopii.
              </li>
              <li>
                <strong>Prawo do sprostowania (art. 16 RODO)</strong> – możliwość żądania poprawienia nieprawidłowych
                lub uzupełnienia niekompletnych danych.
              </li>
              <li>
                <strong>Prawo do usunięcia danych (art. 17 RODO)</strong> – możliwość żądania usunięcia danych, gdy nie
                są już niezbędne do celów, dla których zostały zebrane, lub gdy cofnięto zgodę.
              </li>
              <li>
                <strong>Prawo do ograniczenia przetwarzania (art. 18 RODO)</strong> – możliwość żądania ograniczenia
                przetwarzania danych w określonych przypadkach.
              </li>
              <li>
                <strong>Prawo do przenoszenia danych (art. 20 RODO)</strong> – możliwość otrzymania danych w
                ustrukturyzowanym formacie i przekazania ich innemu administratorowi.
              </li>
              <li>
                <strong>Prawo do sprzeciwu (art. 21 RODO)</strong> – możliwość wniesienia sprzeciwu wobec przetwarzania
                danych na podstawie prawnie uzasadnionego interesu, w tym marketingu bezpośredniego.
              </li>
              <li>
                <strong>Prawo do wycofania zgody (art. 7 ust. 3 RODO)</strong> – w każdym momencie, bez wpływu na
                zgodność z prawem przetwarzania dokonanego przed wycofaniem.
              </li>
              <li>
                <strong>Prawo do niepodlegania zautomatyzowanemu podejmowaniu decyzji (art. 22 RODO)</strong> – w tym
                profilowaniu wywołującemu skutki prawne.
              </li>
              <li>
                <strong>Prawo do wniesienia skargi</strong> – do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2,
                00-193 Warszawa, www.uodo.gov.pl, kancelaria@uodo.gov.pl).
              </li>
            </ul>
            <p className="mt-4">
              Aby skorzystać z powyższych praw, prosimy o kontakt: kontakt@wpolisa.pl lub pisemnie na adres siedziby
              Administratora.
            </p>
          </div>

          {/* Sekcja 7: Dobrowolność podania danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">7. Dobrowolność podania danych</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Podanie danych osobowych jest dobrowolne, jednak niezbędne do:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    przygotowania oferty ubezpieczeniowej (wymagane: imię, nazwisko, PESEL, data urodzenia, płeć, dane
                    kontaktowe),
                  </li>
                  <li>zawarcia i wykonania umowy ubezpieczenia,</li>
                  <li>udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy.</li>
                </ul>
              </li>
              <li>
                Brak podania wymaganych danych może uniemożliwić świadczenie usług przez Administratora lub
                przygotowanie oferty ubezpieczeniowej.
              </li>
              <li>
                Podanie danych do celów marketingowych jest całkowicie dobrowolne i nie wpływa na możliwość skorzystania
                z usług.
              </li>
              <li>
                Wyrażenie zgody na cookies analityczne i marketingowe jest dobrowolne i nie wpływa na możliwość
                korzystania z Serwisu.
              </li>
            </ol>
          </div>

          {/* Sekcja 8: Bezpieczeństwo danych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">8. Bezpieczeństwo danych</h2>
            <p className="mb-4">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych
              danych osobowych zgodnie z art. 32 RODO, w szczególności:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>szyfrowanie transmisji danych (protokół SSL/TLS),</li>
              <li>zabezpieczenie dostępu do systemów informatycznych (uwierzytelnianie wieloskładnikowe),</li>
              <li>regularne tworzenie kopii zapasowych,</li>
              <li>kontrolę dostępu do danych osobowych (zasada najmniejszych uprawnień),</li>
              <li>szkolenia pracowników z zakresu ochrony danych osobowych,</li>
              <li>monitoring i audyt bezpieczeństwa systemów IT,</li>
              <li>procedury reagowania na incydenty bezpieczeństwa.</li>
            </ul>
          </div>

          {/* Sekcja 9: Google Analytics */}
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">9. Google Analytics i Google Consent Mode v2</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.1. Korzystanie z Google Analytics</h3>
                <p>
                  Serwis korzysta z usługi Google Analytics 4 świadczonej przez Google Ireland Limited (Gordon House,
                  Barrow Street, Dublin 4, Irlandia). Google Analytics wykorzystuje pliki cookies do analizy sposobu
                  korzystania z Serwisu przez Użytkowników.
                </p>
                <p className="mt-2">Zbierane dane obejmują m.in.:</p>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>informacje o urządzeniu i przeglądarce,</li>
                  <li>przybliżoną lokalizację (kraj/miasto),</li>
                  <li>strony odwiedzane w Serwisie,</li>
                  <li>czas trwania sesji,</li>
                  <li>źródło ruchu (skąd przyszedł Użytkownik).</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.2. Google Consent Mode v2 (GCM v2)</h3>
                <p>
                  Serwis wdrożył Google Consent Mode w wersji 2 (GCM v2), który umożliwia zarządzanie zgodami
                  Użytkowników zgodnie z wymogami RODO i Dyrektywy ePrivacy. Dzięki temu rozwiązaniu:
                </p>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    Cookies analityczne i reklamowe Google są aktywowane <strong>wyłącznie po wyrażeniu zgody</strong>{" "}
                    przez Użytkownika,
                  </li>
                  <li>
                    W przypadku braku zgody, Google Analytics pracuje w trybie ograniczonym (bez cookies), zbierając
                    jedynie zanonimizowane dane statystyczne,
                  </li>
                  <li>Użytkownik może w każdej chwili zmienić swoje preferencje dotyczące cookies.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.3. Kategorie zgód w GCM v2</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-border">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="border border-border px-4 py-2 text-left">Parametr zgody</th>
                        <th className="border border-border px-4 py-2 text-left">Opis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">analytics_storage</td>
                        <td className="border border-border px-4 py-2">
                          Zgoda na cookies do celów analitycznych (Google Analytics)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">ad_storage</td>
                        <td className="border border-border px-4 py-2">Zgoda na cookies reklamowe</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">ad_user_data</td>
                        <td className="border border-border px-4 py-2">
                          Zgoda na wysyłanie danych użytkownika do Google w celach reklamowych
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2 font-mono text-sm">ad_personalization</td>
                        <td className="border border-border px-4 py-2">Zgoda na personalizację reklam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">9.4. Podstawa prawna</h3>
                <p>Przetwarzanie danych przez Google Analytics odbywa się na podstawie:</p>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    <strong>Art. 6 ust. 1 lit. a RODO</strong> – zgoda Użytkownika wyrażona poprzez banner cookies,
                  </li>
                  <li>
                    <strong>Art. 173 Prawa telekomunikacyjnego</strong> – zgoda na przechowywanie informacji w
                    urządzeniu końcowym.
                  </li>
                </ul>
                <p className="mt-2">
                  Więcej informacji:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Polityka prywatności Google
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Sekcja 10: Polityka Cookies */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">10. Polityka Cookies (Pliki Cookies)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.1. Czym są pliki cookies?</h3>
                <p>
                  Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu końcowym Użytkownika
                  (komputer, tablet, smartfon) podczas korzystania z Serwisu. Służą one do prawidłowego funkcjonowania
                  strony, zapamiętywania preferencji oraz zbierania danych statystycznych.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.2. Podstawa prawna stosowania cookies</h3>
                <p className="mb-2">Stosowanie plików cookies regulują następujące przepisy:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong>Art. 173 ustawy Prawo telekomunikacyjne</strong> – wymóg uzyskania zgody na przechowywanie
                    informacji w urządzeniu końcowym (za wyjątkiem cookies niezbędnych),
                  </li>
                  <li>
                    <strong>Art. 174 ustawy Prawo telekomunikacyjne</strong> – warunki wyrażania zgody,
                  </li>
                  <li>
                    <strong>Art. 6 ust. 1 lit. a RODO</strong> – zgoda jako podstawa przetwarzania danych (cookies
                    analityczne i marketingowe),
                  </li>
                  <li>
                    <strong>Art. 6 ust. 1 lit. f RODO</strong> – prawnie uzasadniony interes (cookies niezbędne do
                    działania serwisu).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.3. Rodzaje wykorzystywanych cookies</h3>
                <div className="mt-2 space-y-3">
                  <div className="rounded border border-border p-3">
                    <strong className="text-green-600">✓ Cookies niezbędne (funkcjonalne)</strong>
                    <p className="mt-1 text-sm">
                      Są konieczne do prawidłowego działania Serwisu. Nie wymagają zgody użytkownika zgodnie z art. 173
                      ust. 3 Prawa telekomunikacyjnego. Obejmują: sesje użytkownika, preferencje zgody cookies,
                      bezpieczeństwo.
                    </p>
                  </div>
                  <div className="rounded border border-border p-3">
                    <strong>Cookies preferencyjne</strong>
                    <p className="mt-1 text-sm">
                      Umożliwiają zapamiętanie preferencji Użytkownika, takich jak wybrane ustawienia, język interfejsu.
                      Wymagają zgody.
                    </p>
                  </div>
                  <div className="rounded border border-border p-3">
                    <strong>Cookies analityczne/statystyczne</strong>
                    <p className="mt-1 text-sm">
                      Pozwalają zbierać dane o sposobie korzystania z Serwisu (np. liczba odwiedzin, czas na stronie,
                      źródło ruchu). Używane przez Google Analytics. Wymagają zgody.
                    </p>
                  </div>
                  <div className="rounded border border-border p-3">
                    <strong>Cookies marketingowe/reklamowe</strong>
                    <p className="mt-1 text-sm">
                      Służą do wyświetlania spersonalizowanych reklam i śledzenia skuteczności kampanii. Wymagają
                      wyraźnej zgody użytkownika.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.4. Wykaz wykorzystywanych cookies</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-border text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="border border-border px-3 py-2 text-left">Nazwa</th>
                        <th className="border border-border px-3 py-2 text-left">Dostawca</th>
                        <th className="border border-border px-3 py-2 text-left">Cel</th>
                        <th className="border border-border px-3 py-2 text-left">Ważność</th>
                        <th className="border border-border px-3 py-2 text-left">Typ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-3 py-2">wpolisa-cookie-consent</td>
                        <td className="border border-border px-3 py-2">wPolisa</td>
                        <td className="border border-border px-3 py-2">Przechowywanie zgody użytkownika</td>
                        <td className="border border-border px-3 py-2">1 rok</td>
                        <td className="border border-border px-3 py-2">Niezbędne</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-3 py-2">_ga</td>
                        <td className="border border-border px-3 py-2">Google</td>
                        <td className="border border-border px-3 py-2">Identyfikacja użytkownika w GA4</td>
                        <td className="border border-border px-3 py-2">2 lata</td>
                        <td className="border border-border px-3 py-2">Analityczne</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-3 py-2">_ga_*</td>
                        <td className="border border-border px-3 py-2">Google</td>
                        <td className="border border-border px-3 py-2">Utrzymanie stanu sesji GA4</td>
                        <td className="border border-border px-3 py-2">2 lata</td>
                        <td className="border border-border px-3 py-2">Analityczne</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.5. Zarządzanie cookies</h3>
                <p className="mb-2">Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong>Poprzez banner cookies</strong> – przy pierwszej wizycie lub poprzez link &quot;Ustawienia
                    cookies&quot; w stopce strony,
                  </li>
                  <li>
                    <strong>W ustawieniach przeglądarki:</strong>
                    <ul className="list-none mt-1 space-y-1 pl-4">
                      <li>
                        →{" "}
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
                        →{" "}
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
                        →{" "}
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
                        →{" "}
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
                  </li>
                  <li>
                    <strong>Poprzez dodatek do przeglądarki</strong> –{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                  </li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Uwaga: Wyłączenie cookies niezbędnych może wpłynąć na funkcjonalność Serwisu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">10.6. Zgoda na cookies</h3>
                <p>
                  Podczas pierwszej wizyty w Serwisie wyświetlamy komunikat (banner) informujący o wykorzystywaniu
                  plików cookies. Zgodnie z wymogami prawa:
                </p>
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    Cookies niezbędne są aktywowane bez zgody (podstawa: art. 173 ust. 3 Prawa telekomunikacyjnego),
                  </li>
                  <li>Cookies analityczne i marketingowe wymagają aktywnej zgody Użytkownika,</li>
                  <li>Zgoda jest dobrowolna i może być wycofana w dowolnym momencie,</li>
                  <li>Brak zgody na cookies opcjonalne nie ogranicza dostępu do Serwisu.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sekcja 11: Zmiany polityki */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">11. Zmiany Polityki Prywatności</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności w przypadku
                zmian przepisów prawa, zmian technologicznych lub zmian w zakresie przetwarzania danych.
              </li>
              <li>
                O istotnych zmianach Administrator poinformuje poprzez publikację zaktualizowanej wersji w Serwisie
                oraz, w miarę możliwości, poprzez powiadomienie e-mail.
              </li>
              <li>
                Korzystanie z Serwisu po wprowadzeniu zmian oznacza akceptację nowej wersji Polityki (w zakresie
                niewymagającym zgody).
              </li>
              <li>Zalecamy regularne przeglądanie niniejszej Polityki.</li>
            </ol>
          </div>

          {/* Sekcja kontaktowa */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">Kontakt w sprawach ochrony danych</h2>
            <p className="mb-4">
              W przypadku pytań dotyczących przetwarzania danych osobowych, realizacji praw lub polityki cookies prosimy
              o kontakt:
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
                <strong>Telefon:</strong> +48 222 444 666
              </li>
            </ul>
            <p className="mt-4 text-sm">
              W sprawach dotyczących ochrony danych osobowych można również kontaktować się z{" "}
              <strong>Prezesem Urzędu Ochrony Danych Osobowych</strong> (UODO): ul. Stawki 2, 00-193 Warszawa, tel. 22
              531 03 00,{" "}
              <a
                href="https://www.uodo.gov.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                www.uodo.gov.pl
              </a>
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Zobacz również:{" "}
            <Link href="/terms" className="text-accent hover:underline">
              Regulamin serwisu
            </Link>
          </p>

          <p className="mt-4 text-sm text-muted-foreground">Ostatnia aktualizacja: 8.01.2026</p>
        </div>
      </div>
    </section>
  );
};

export default CookiesPage;
