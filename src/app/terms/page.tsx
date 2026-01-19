import Link from "next/link";
import React from "react";

const TermsPage = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-4xl m-auto">
        <h1 className="mb-8 text-3xl font-bold text-primary md:text-4xl">Regulamin serwisu wPolisa</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
          {/* §1 Postanowienia ogólne */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§1. Postanowienia ogólne</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Niniejszy Regulamin określa zasady i warunki korzystania z serwisu internetowego wPolisa, dostępnego pod
                adresem wpolisa.pl (dalej: &ldquo;Serwis&rdquo;), a także prawa, obowiązki i warunki odpowiedzialności
                Usługodawcy oraz Użytkowników.
              </li>
              <li>
                Właścicielem i administratorem Serwisu jest wPolisa sp. z o.o. z siedzibą w Gdyni (81-388), ul.
                Świętojańska 118, NIP: 5862425740, REGON: 54367189200000 (dalej: &ldquo;Usługodawca&rdquo; lub
                &ldquo;Dystrybutor Ubezpieczeń&rdquo;).
              </li>
              <li>
                Usługodawca jest agentem ubezpieczeniowym wpisanym do Rejestru Agentów Ubezpieczeniowych prowadzonego
                przez Komisję Nadzoru Finansowego{/* pod numerem RAU: [TO_DO] */}. Wpis można zweryfikować pod adresem:{" "}
                <a
                  href="https://rpu.knf.gov.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://rpu.knf.gov.pl
                </a>
                .
              </li>
              <li>
                Usługodawca prowadzi działalność w zakresie dystrybucji ubezpieczeń jako agent ubezpieczeniowy,
                działając na podstawie ustawy z dnia 15 grudnia 2017 r. o dystrybucji ubezpieczeń (Dz.U. 2017 poz. 2486
                ze zm.).
              </li>
              <li>
                Serwis działa zgodnie z przepisami prawa polskiego, w szczególności:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>ustawy z dnia 15 grudnia 2017 r. o dystrybucji ubezpieczeń (Dz.U. 2017 poz. 2486 ze zm.),</li>
                  <li>
                    ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2002 nr 144 poz. 1204
                    ze zm.),
                  </li>
                  <li>ustawy z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2014 poz. 827 ze zm.),</li>
                  <li>
                    Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                    ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO),
                  </li>
                  <li>ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny (Dz.U. 1964 nr 16 poz. 93 ze zm.).</li>
                </ul>
              </li>
              <li>
                Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu oraz{" "}
                <Link href="/cookies" className="text-accent hover:underline">
                  Polityki Prywatności i Cookies
                </Link>
                .
              </li>
              <li>
                Regulamin jest udostępniany Użytkownikom nieodpłatnie, w formie umożliwiającej jego pobranie, utrwalenie
                i wydrukowanie.
              </li>
            </ol>
          </div>

          {/* §2 Definicje */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§2. Definicje</h2>
            <p className="mb-4">Użyte w niniejszym Regulaminie pojęcia oznaczają:</p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Serwis</strong> – strona internetowa wPolisa wraz ze wszystkimi podstronami, dostępna pod
                adresem wpolisa.pl, za pośrednictwem której Usługodawca świadczy usługi drogą elektroniczną.
              </li>
              <li>
                <strong>Użytkownik</strong> – każda osoba fizyczna posiadająca pełną zdolność do czynności prawnych,
                osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, której ustawa przyznaje
                zdolność prawną, korzystająca z Serwisu.
              </li>
              <li>
                <strong>Konsument</strong> – osoba fizyczna dokonująca czynności prawnej niezwiązanej bezpośrednio z jej
                działalnością gospodarczą lub zawodową.
              </li>
              <li>
                <strong>Usługodawca / Dystrybutor Ubezpieczeń</strong> – wPolisa sp. z o.o. z siedzibą w Gdyni, ul.
                Świętojańska 118, prowadzący działalność w zakresie dystrybucji ubezpieczeń jako agent ubezpieczeniowy.
              </li>
              <li>
                <strong>Zakład Ubezpieczeń</strong> – przedsiębiorca prowadzący działalność ubezpieczeniową na podstawie
                odpowiedniego zezwolenia, z którym Usługodawca współpracuje w ramach dystrybucji ubezpieczeń.
              </li>
              <li>
                <strong>Dystrybucja ubezpieczeń</strong> – działalność polegająca na wykonywaniu czynności agencyjnych w
                rozumieniu ustawy o dystrybucji ubezpieczeń, obejmująca w szczególności doradzanie, proponowanie i
                przygotowywanie do zawarcia umów ubezpieczenia.
              </li>
              <li>
                <strong>Formularz kontaktowy / Formularz zapytania</strong> – narzędzie elektroniczne dostępne w
                Serwisie, umożliwiające przesłanie zapytania ofertowego (lead generation) lub kontakt z Usługodawcą.
              </li>
              <li>
                <strong>Umowa ubezpieczenia</strong> – umowa zawierana pomiędzy Użytkownikiem a Zakładem Ubezpieczeń,
                przy udziale Usługodawcy jako dystrybutora ubezpieczeń.
              </li>
              <li>
                <strong>OWU</strong> – Ogólne Warunki Ubezpieczenia, dokument określający szczegółowe warunki umowy
                ubezpieczenia wydawany przez Zakład Ubezpieczeń.
              </li>
              <li>
                <strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
                swobodnego przepływu takich danych.
              </li>
            </ol>
          </div>

          {/* §3 Rodzaj i zakres usług */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§3. Rodzaj i zakres usług</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Usługodawca świadczy za pośrednictwem Serwisu następujące usługi drogą elektroniczną:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    <strong>Dystrybucja ubezpieczeń</strong> – wykonywanie czynności agencyjnych w rozumieniu ustawy o
                    dystrybucji ubezpieczeń, obejmujące prezentowanie ofert ubezpieczeniowych, porównywanie produktów
                    ubezpieczeniowych, przygotowywanie indywidualnych ofert oraz pomoc przy zawieraniu umów
                    ubezpieczenia;
                  </li>
                  <li>
                    <strong>Formularze zapytań ofertowych (lead generation)</strong> – udostępnianie formularzy
                    umożliwiających Użytkownikom przesłanie zapytania w celu otrzymania oferty ubezpieczeniowej;
                  </li>
                  <li>
                    <strong>Narzędzia porównawcze</strong> – prezentowanie i porównywanie produktów ubezpieczeniowych
                    oferowanych przez współpracujące Zakłady Ubezpieczeń;
                  </li>
                  <li>
                    <strong>Informacje o produktach ubezpieczeniowych</strong> – prezentowanie informacji na temat
                    różnych rodzajów ubezpieczeń, ich zakresu i zastosowania;
                  </li>
                  <li>
                    <strong>Obsługa posprzedażowa</strong> – wsparcie Użytkowników w zakresie posiadanych polis
                    ubezpieczeniowych.
                  </li>
                </ul>
              </li>
              <li>
                Usługodawca, działając jako agent ubezpieczeniowy, pośredniczy w zawieraniu umów ubezpieczenia w imieniu
                i na rzecz współpracujących Zakładów Ubezpieczeń. Listę Zakładów Ubezpieczeń, z którymi Usługodawca
                współpracuje, można uzyskać kontaktując się z Usługodawcą.
              </li>
              <li>
                Usługodawca nie pobiera od Użytkowników opłat za korzystanie z Serwisu ani za świadczone usługi
                pośrednictwa ubezpieczeniowego. Wynagrodzenie Usługodawcy pochodzi z prowizji wypłacanych przez Zakłady
                Ubezpieczeń.
              </li>
              <li className="font-semibold bg-muted/50 p-3 rounded-lg">
                <strong>WAŻNE:</strong> Wszelkie informacje, materiały i treści prezentowane w Serwisie, w tym opisy
                produktów ubezpieczeniowych, kalkulacje składek oraz prezentowane oferty, mają charakter wyłącznie
                informacyjny i{" "}
                <strong>
                  nie stanowią oferty w rozumieniu art. 66 ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny
                </strong>
                . Prezentowane informacje stanowią zaproszenie do zawarcia umowy w rozumieniu art. 71 Kodeksu cywilnego.
              </li>
              <li>
                Ostateczne warunki umowy ubezpieczenia, w tym zakres ochrony, wysokość składki, wyłączenia
                odpowiedzialności oraz prawa i obowiązki stron, określa wyłącznie Zakład Ubezpieczeń w polisie
                ubezpieczeniowej oraz Ogólnych Warunkach Ubezpieczenia (OWU).
              </li>
              <li>
                Przed zawarciem umowy ubezpieczenia Usługodawca przekazuje Użytkownikowi dokumenty wymagane przepisami
                prawa, w tym ustandaryzowany dokument zawierający informacje o produkcie ubezpieczeniowym (IPID) oraz
                OWU.
              </li>
            </ol>
          </div>

          {/* §4 Warunki świadczenia usług drogą elektroniczną */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">
              §4. Warunki świadczenia usług drogą elektroniczną
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Korzystanie z Serwisu jest bezpłatne i nie wymaga rejestracji konta użytkownika.</li>
              <li>
                Do prawidłowego korzystania z Serwisu niezbędne są:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>urządzenie końcowe z dostępem do sieci Internet (komputer, tablet, smartfon),</li>
                  <li>
                    aktualna przeglądarka internetowa obsługująca JavaScript i pliki cookies (np. Google Chrome, Mozilla
                    Firefox, Safari, Microsoft Edge w aktualnej wersji),
                  </li>
                  <li>
                    aktywne konto poczty elektronicznej (e-mail) – w przypadku korzystania z formularzy kontaktowych,
                  </li>
                  <li>minimalna rozdzielczość ekranu: 320x480 pikseli.</li>
                </ul>
              </li>
              <li>
                Usługodawca nie ponosi odpowiedzialności za problemy techniczne wynikające z niespełnienia przez
                Użytkownika wymagań technicznych określonych w ust. 2.
              </li>
              <li>
                Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z obowiązującym prawem, zasadami współżycia
                społecznego, dobrymi obyczajami oraz niniejszym Regulaminem.
              </li>
              <li>
                Zabrania się dostarczania przez Użytkownika treści o charakterze bezprawnym, w szczególności:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>treści naruszających dobra osobiste osób trzecich,</li>
                  <li>treści obraźliwych, wulgarnych lub nawołujących do nienawiści,</li>
                  <li>treści naruszających prawa autorskie lub inne prawa własności intelektualnej,</li>
                  <li>
                    treści zawierających wirusy, złośliwe oprogramowanie lub inne elementy mogące zakłócić działanie
                    Serwisu,
                  </li>
                  <li>spamu, niechcianych wiadomości reklamowych lub marketingowych,</li>
                  <li>danych osobowych osób trzecich bez ich zgody.</li>
                </ul>
              </li>
              <li>
                Zabrania się:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>podejmowania działań mogących zakłócić prawidłowe funkcjonowanie Serwisu,</li>
                  <li>wykorzystywania Serwisu do celów niezgodnych z jego przeznaczeniem,</li>
                  <li>automatycznego zbierania danych z Serwisu (scraping) bez pisemnej zgody Usługodawcy,</li>
                  <li>podawania nieprawdziwych lub wprowadzających w błąd danych w formularzach.</li>
                </ul>
              </li>
              <li>
                Użytkownik ponosi pełną odpowiedzialność za prawdziwość, aktualność i kompletność danych podanych w
                formularzach. Podanie nieprawdziwych danych może skutkować odmową przygotowania oferty lub zawarcia
                umowy ubezpieczenia.
              </li>
              <li>
                Umowa o świadczenie usług drogą elektroniczną zostaje zawarta z chwilą rozpoczęcia korzystania z Serwisu
                przez Użytkownika. Użytkownik może w każdej chwili zakończyć korzystanie z Serwisu poprzez opuszczenie
                strony internetowej.
              </li>
            </ol>
          </div>

          {/* §5 Procedura reklamacyjna */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§5. Procedura reklamacyjna</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Użytkownik ma prawo składać reklamacje dotyczące:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>funkcjonowania Serwisu i świadczonych usług drogą elektroniczną,</li>
                  <li>
                    <strong>usług dystrybucji ubezpieczeń świadczonych przez Usługodawcę</strong> – zgodnie z ustawą z
                    dnia 5 sierpnia 2015 r. o rozpatrywaniu reklamacji przez podmioty rynku finansowego, o Rzeczniku
                    Finansowym i o Funduszu Edukacji Finansowej (Dz.U. 2015 poz. 1348 ze zm.).
                  </li>
                </ul>
              </li>
              <li>
                Reklamacje można składać:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>pisemnie na adres: wPolisa sp. z o.o., ul. Lipnowska 17/1, 81-504 Gdynia,</li>
                  <li>elektronicznie na adres e-mail: kontakt@wpolisa.pl,</li>
                  <li>telefonicznie pod numerem: +48 888 970 510.</li>
                </ul>
              </li>
              <li>
                Reklamacja powinna zawierać:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>imię i nazwisko (lub nazwę) Użytkownika,</li>
                  <li>adres korespondencyjny lub adres e-mail,</li>
                  <li>szczegółowy opis problemu stanowiącego podstawę reklamacji,</li>
                  <li>oczekiwany sposób rozpatrzenia reklamacji.</li>
                </ul>
              </li>
              <li>
                Usługodawca rozpatrzy reklamację i udzieli odpowiedzi:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    w terminie 30 dni od daty otrzymania reklamacji – w przypadku reklamacji dotyczących usług
                    dystrybucji ubezpieczeń (zgodnie z ustawą o rozpatrywaniu reklamacji przez podmioty rynku
                    finansowego),
                  </li>
                  <li>w terminie 14 dni od daty otrzymania reklamacji – w przypadku pozostałych reklamacji.</li>
                </ul>
              </li>
              <li>
                W szczególnie skomplikowanych przypadkach, uniemożliwiających rozpatrzenie reklamacji w terminie
                określonym w ust. 4, Usługodawca poinformuje Użytkownika o przyczynach opóźnienia i przewidywanym
                terminie rozpatrzenia reklamacji, który nie może przekroczyć 60 dni od daty otrzymania reklamacji.
              </li>
              <li>
                Odpowiedź na reklamację zostanie przekazana Użytkownikowi w formie papierowej lub za pośrednictwem
                poczty elektronicznej – zgodnie z preferencjami Użytkownika.
              </li>
              <li>
                W przypadku nieuwzględnienia reklamacji dotyczącej usług dystrybucji ubezpieczeń, Użytkownik ma prawo:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>zwrócić się o pomoc do Rzecznika Finansowego (https://rf.gov.pl),</li>
                  <li>skorzystać z pozasądowego rozwiązywania sporów przy Rzeczniku Finansowym,</li>
                  <li>wystąpić z powództwem do właściwego sądu powszechnego.</li>
                </ul>
              </li>
              <li>
                Reklamacje dotyczące umów ubezpieczenia (np. likwidacji szkód, wypłaty odszkodowań, odmowy zawarcia
                umowy) należy kierować bezpośrednio do właściwego Zakładu Ubezpieczeń. Usługodawca może pośredniczyć w
                przekazaniu reklamacji do Zakładu Ubezpieczeń.
              </li>
            </ol>
          </div>

          {/* §6 Ochrona danych osobowych */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§6. Ochrona danych osobowych</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Administratorem danych osobowych Użytkowników jest wPolisa sp. z o.o. z siedzibą w Gdyni, ul.
                Świętojańska 118, 81-388 Gdynia.
              </li>
              <li>
                Dane osobowe Użytkowników przetwarzane są zgodnie z:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>
                    Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                    ochrony osób fizycznych w związku z przetwarzaniem danych osobowych (RODO),
                  </li>
                  <li>ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000 ze zm.),</li>
                  <li>ustawą z dnia 15 grudnia 2017 r. o dystrybucji ubezpieczeń.</li>
                </ul>
              </li>
              <li>
                Dane osobowe zbierane są w zakresie niezbędnym do świadczenia usług dystrybucji ubezpieczeń oraz obsługi
                zapytań Użytkowników.
              </li>
              <li>
                Szczegółowe informacje dotyczące przetwarzania danych osobowych, w tym cele i podstawy prawne
                przetwarzania, kategorie odbiorców danych, okresy przechowywania oraz prawa przysługujące Użytkownikom,
                zawiera{" "}
                <Link href="/cookies" className="text-accent hover:underline">
                  Polityka Prywatności i Cookies
                </Link>
                .
              </li>
              <li>
                Użytkownikowi przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych.
              </li>
            </ol>
          </div>

          {/* §7 Prawa własności intelektualnej */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§7. Prawa własności intelektualnej</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki, logo wPolisa, zdjęcia, elementy
                multimedialne, układ strony oraz oprogramowanie, są własnością Usługodawcy lub podmiotów, z którymi
                Usługodawca zawarł stosowne umowy licencyjne, i podlegają ochronie na podstawie ustawy z dnia 4 lutego
                1994 r. o prawie autorskim i prawach pokrewnych.
              </li>
              <li>
                Kopiowanie, rozpowszechnianie, modyfikowanie, publiczne udostępnianie lub jakiekolwiek inne
                wykorzystywanie treści Serwisu bez uprzedniej pisemnej zgody Usługodawcy jest zabronione i może stanowić
                naruszenie praw autorskich.
              </li>
              <li>
                Logo, nazwy i znaki towarowe Zakładów Ubezpieczeń prezentowane w Serwisie są własnością ich właścicieli
                i są wykorzystywane wyłącznie w celach informacyjnych, w związku z prowadzoną przez Usługodawcę
                działalnością dystrybucji ubezpieczeń.
              </li>
              <li>
                Użytkownik ma prawo korzystać z treści Serwisu wyłącznie na własny użytek osobisty, w zakresie
                dozwolonego użytku określonego przepisami prawa.
              </li>
            </ol>
          </div>

          {/* §8 Postanowienia końcowe */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-primary">§8. Postanowienia końcowe</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu w przypadku:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>zmiany przepisów prawa mających wpływ na treść Regulaminu,</li>
                  <li>zmiany zakresu lub charakteru świadczonych usług,</li>
                  <li>zmiany warunków technicznych świadczenia usług,</li>
                  <li>
                    konieczności dostosowania Regulaminu do wydanych orzeczeń sądowych lub decyzji administracyjnych.
                  </li>
                </ul>
              </li>
              <li>
                O zmianach Regulaminu Użytkownicy zostaną poinformowani poprzez publikację nowej wersji Regulaminu w
                Serwisie z co najmniej 14-dniowym wyprzedzeniem przed wejściem zmian w życie.
              </li>
              <li>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w
                szczególności:
                <ul className="list-disc mt-2 space-y-1 pl-6">
                  <li>ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny,</li>
                  <li>ustawy z dnia 15 grudnia 2017 r. o dystrybucji ubezpieczeń,</li>
                  <li>ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną,</li>
                  <li>ustawy z dnia 30 maja 2014 r. o prawach konsumenta,</li>
                  <li>Rozporządzenia RODO.</li>
                </ul>
              </li>
              <li>
                Ewentualne spory wynikające z korzystania z Serwisu będą rozstrzygane przez sąd właściwy zgodnie z
                przepisami Kodeksu postępowania cywilnego. W przypadku sporów z Konsumentami właściwy jest sąd miejsca
                zamieszkania Konsumenta.
              </li>
              <li>
                Konsumenci mają możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia
                roszczeń, w tym z platformy ODR dostępnej pod adresem:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </li>
              <li>
                Jeżeli którekolwiek z postanowień niniejszego Regulaminu zostanie uznane za nieważne lub niewykonalne,
                pozostałe postanowienia pozostają w mocy.
              </li>
              <li>Regulamin wchodzi w życie z dniem publikacji w Serwisie.</li>
            </ol>
          </div>

          {/* Kontakt */}
          <div className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="mb-4 text-xl font-semibold text-primary">Dane Usługodawcy / Kontakt</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">wPolisa sp. z o.o.</h3>
                <ul className="list-none space-y-1 mt-2">
                  <li>
                    <strong>Adres siedziby:</strong> ul. Świętojańska 118, 81-388 Gdynia
                  </li>
                  <li>
                    <strong>NIP:</strong> 5862425740
                  </li>
                  <li>
                    <strong>REGON:</strong> 54367189200000
                  </li>
                  {/* <li>
                    <strong>Numer RAU (KNF):</strong> [TO_DO]
                  </li> */}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Kontakt:</h3>
                <ul className="list-none space-y-1 mt-2">
                  <li>
                    <strong>E-mail:</strong> kontakt@wpolisa.pl
                  </li>
                  <li>
                    <strong>Telefon:</strong> +48 888 970 510
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Wpis do Rejestru Agentów Ubezpieczeniowych można zweryfikować na stronie Komisji Nadzoru Finansowego:{" "}
                  <a
                    href="https://rpu.knf.gov.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://rpu.knf.gov.pl
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">Ostatnia aktualizacja: 19.01.2026</p>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
