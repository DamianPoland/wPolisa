"use client";

import { useState, useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Dane zoptymalizowane pod SEO i AI (Frazy kluczowe + Definicje)
const faqItems = [
  // --- UBEZPIECZENIA KOMUNIKACYJNE ---
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Jak znaleźć tanie ubezpieczenie OC i obniżyć składkę?",
    answer:
      "Tanie ubezpieczenie OC można uzyskać przede wszystkim poprzez porównanie ofert wielu towarzystw oraz wypracowanie zniżek za bezszkodową jazdę. Aby obniżyć składkę, warto rozważyć bezpieczny garaż, niski roczny przebieg lub dopisanie do dowodu współwłaściciela z dłuższym stażem. Ceny polis zmieniają się dynamicznie, dlatego jako multiagencja sprawdzamy dostępne opcje w czasie rzeczywistym, by znaleźć dla Ciebie najkorzystniejszą ofertę.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Czym różni się AC od OC?",
    answer:
      "OC (odpowiedzialność cywilna) jest obowiązkowe i chroni osoby trzecie przed skutkami szkód spowodowanych przez Ciebie. AC (Autocasco) jest dobrowolne i chroni Twój pojazd przed kradzieżą, zniszczeniem czy skutkami żywiołów. Wyobraź sobie: OC to ochrona dla portfela sąsiada, a AC to ochrona dla Twojego mienia. Idealne rozwiązanie to pakiet OC+AC.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Czym jest ubezpieczenie GAP i dla kogo jest przeznaczone?",
    answer:
      "Ubezpieczenie GAP (Guaranteed Asset Protection) pokrywa różnicę między wartością fakturową nowo zakupionego auta a jego wartością rynkową z dnia szkody całkowitej lub kradzieży. Jest to kluczowe rozwiązanie dla osób biorących auto w leasing lub kredyt, ponieważ w razie nieszczęścia GAP pozwala spłacić zobowiązanie i zachować środki na wkład własny na nowy samochód.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Co się dzieje z ubezpieczeniem OC po sprzedaży samochodu?",
    answer:
      "Po sprzedaży samochodu ubezpieczenie OC przechodzi na nowego właściciela wraz z pojazdem, a zbywca ma obowiązek zgłosić ten fakt ubezpieczycielowi w ciągu 14 dni. Sprzedający nie otrzymuje automatycznie zwrotu składki za OC (chyba że nowy nabywca wypowie polisę), natomiast może ubiegać się o zwrot za niewykorzystany okres ubezpieczenia AC i innych polis dobrowolnych.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Co to jest szkoda całkowita w ubezpieczeniu komunikacyjnym?",
    answer:
      "Szkoda całkowita następuje, gdy koszt naprawy pojazdu przekracza określony procent jego wartości rynkowej (zazwyczaj 100% przy OC i 70% przy AC). W takiej sytuacji ubezpieczyciel wypłaca odszkodowanie równe wartości auta sprzed wypadku, pomniejszone o wartość pozostałości (wraku), które właściciel może sprzedać na specjalnej aukcji zorganizowanej przez firmę ubezpieczeniową.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Co obejmuje assistance samochodowe na wakacje?",
    answer:
      "Assistance samochodowe zapewnia pomoc techniczną w trasie, taką jak holowanie pojazdu, dowóz paliwa, naprawa na miejscu zdarzenia lub wynajem auta zastępczego. Przy wyjazdach zagranicznych warto wybrać wariant z wysokim limitem kilometrów holowania (np. 1000 km lub bez limitu), aby w razie awarii bezpiecznie wrócić do kraju wraz z pasażerami.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Czy brak przeglądu technicznego wpływa na wypłatę odszkodowania?",
    answer:
      "Brak ważnego przeglądu technicznego może być podstawą do odmowy wypłaty odszkodowania z polisy AC, jeśli stan techniczny pojazdu miał wpływ na powstanie szkody. W przypadku obowiązkowego OC, ubezpieczyciel musi wypłacić odszkodowanie poszkodowanemu, jednak w skrajnych przypadkach może próbować dochodzić regresu od właściciela pojazdu.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Jak uzyskać auto zastępcze z OC sprawcy?",
    answer:
      "Auto zastępcze z OC sprawcy przysługuje każdemu poszkodowanemu na czas naprawy pojazdu lub do dnia wypłaty odszkodowania w przypadku szkody całkowitej. Koszt wynajmu pokrywa ubezpieczyciel sprawcy, pod warunkiem, że stawka za dobę jest rynkowa. Jako Twoja multiagencja, pomagamy w formalnościach, aby proces najmu przebiegł bezgotówkowo i bezstresowo.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Co to jest Zielona Karta?",
    answer:
      "Zielona Karta to międzynarodowy dowód ubezpieczenia OC, niezbędny w krajach takich jak Albania, Turcja czy Ukraina. Potwierdza ona ważną ochronę ubezpieczeniową poza Unią Europejską. W krajach UE wystarczy standardowa polisa OC, jednak przed wyjazdem na wschód warto zadbać o ten dokument odpowiednio wcześniej.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Co to jest system Direct Help (BLS) i jak z niego skorzystać?",
    answer:
      "Bezpośrednia Likwidacja Szkód (BLS) pozwala na zgłoszenie szkody z OC u swojego ubezpieczyciela, zamiast u firmy sprawcy. Twój ubezpieczyciel wypłaca odszkodowanie i zajmuje się naprawą auta, a następnie sam rozlicza się z firmą sprawcy. To rozwiązanie znacznie przyspiesza proces i oszczędza stres, ponieważ współpracujesz z firmą, którą sam wybrałeś.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Czy ubezpieczenie OC obejmuje pasażerów mojego auta?",
    answer:
      "Tak, ubezpieczenie OC posiadacza pojazdu mechanicznego chroni wszystkich pasażerów znajdujących się w aucie w momencie zdarzenia, w tym członków Twojej rodziny. Odszkodowanie z OC sprawcy pokrywa koszty ich leczenia, rehabilitacji oraz ewentualne zadośćuczynienie. Pamiętaj jednak, że OC nie chroni kierowcy-sprawcy – do tego służy dobrowolne ubezpieczenie NNW.",
  },
  {
    category: "Ubezpieczenia Komunikacyjne",
    question: "Jak działa ubezpieczenie szyb samochodowych?",
    answer:
      "Ubezpieczenie szyb to dodatkowa polisa, która pokrywa koszty naprawy lub wymiany uszkodzonej szyby bez utraty zniżek na główne ubezpieczenie AC. Jest to szczególnie przydatne, gdy kamień spod kół innego auta uszkodzi przednią szybę. Wymiana odbywa się zazwyczaj bezgotówkowo w warsztatach partnerskich ubezpieczyciela.",
  },

  // --- DOM I NIERUCHOMOŚCI ---
  {
    category: "Dom i Nieruchomości",
    question: "Co obejmuje ubezpieczenie mieszkania i jak wybrać najlepsze?",
    answer:
      "Kompleksowe ubezpieczenie mieszkania chroni nieruchomość przed pożarem, zalaniem, kradzieżą oraz skutkami wandalizmu. Analizując ranking ubezpieczeń mieszkań, warto zwrócić uwagę na zakres Assistance (np. pomoc hydraulika) oraz OC w życiu prywatnym. Nasza analiza obejmuje zestawienie ofert najpopularniejszych ubezpieczycieli w Polsce.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Jakie ubezpieczenie chroni przed skutkami zalania sąsiada?",
    answer:
      "Przed skutkami finansowymi zalania mieszkania sąsiada chroni klauzula OC w życiu prywatnym dodawana do ubezpieczenia nieruchomości. Jeśli awaria nastąpiła z Twojej winy (np. pęknięty wężyk w pralce), odszkodowanie dla sąsiada zostanie wypłacone z Twojej polisy, dzięki czemu unikniesz pokrywania kosztów remontu z własnych oszczędności.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy warto ubezpieczyć dom w budowie?",
    answer:
      "Ubezpieczenie domu w budowie chroni inwestycję przed ogniem, huraganem, zalaniem oraz kradzieżą materiałów budowlanych i elementów stałych. Polisa ta jest często wymagana przez bank przy kredycie hipotecznym, ale warto ją mieć niezależnie od tego, by chronić zgromadzony kapitał przed zdarzeniami losowymi.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy ubezpieczenie mieszkania chroni też rower lub hulajnogę?",
    answer:
      "Standardowe ubezpieczenie mieszkania chroni rower i hulajnogę, o ile znajdują się one wewnątrz lokalu lub w zamkniętej komórce lokatorskiej. Aby ochrona działała również w przypadku kradzieży 'z ulicy', konieczne jest dokupienie rozszerzenia o kradzież poza miejscem ubezpieczenia. Warto zadbać o dokumentację i certyfikowane zabezpieczenia.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Jak działają ubezpieczenia 'all risks' dla nieruchomości?",
    answer:
      "Ubezpieczenie nieruchomości w wariancie 'all risks' (od wszystkich ryzyk) chroni przed wszelkimi zdarzeniami, które nie zostały wyraźnie wyłączone w umowie. Obejmuje również nietypowe sytuacje, jak np. graffiti na elewacji czy przypadkowe stłuczenie drogiej płyty indukcyjnej.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy można ubezpieczyć nieruchomość pod wynajem krótkoterminowy?",
    answer:
      "Tak, ubezpieczenie mieszkania pod wynajem (np. przez Airbnb czy Booking) wymaga specjalnego rozszerzenia o najem krótkoterminowy. Chroni ono nie tylko mury i wyposażenie przed zniszczeniem przez gości, ale może również pokrywać utracone dochody z najmu w wyniku zdarzenia losowego (np. zalania).",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy ubezpieczenie chroni mienie na balkonie lub tarasie?",
    answer:
      "Ochrona mienia na balkonie zależy od OWU – często meble ogrodowe czy rośliny są chronione przed zdarzeniami losowymi, ale nie przed kradzieżą ze względu na łatwy dostęp. Jeśli przechowujesz tam drogi sprzęt, upewnij się, że Twoja polisa zawiera odpowiednie rozszerzenie i wymagania dotyczące zabezpieczeń.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy ubezpieczenie mieszkania obejmuje piwnicę i strych?",
    answer:
      "Standardowe ubezpieczenie nieruchomości obejmuje pomieszczenia przynależne, takie jak piwnica, strych czy komórka lokatorska, o ile znajdują się one w tym samym budynku. Ważne jest jednak, aby były one odpowiednio zabezpieczone (np. solidne drzwi i kłódka). Warto sprawdzić limity odpowiedzialności za mienie przechowywane w piwnicy, gdyż mogą być one niższe niż dla wnętrza mieszkania.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Co to jest ubezpieczenie murów, a co ubezpieczenie wyposażenia?",
    answer:
      "Ubezpieczenie murów chroni konstrukcję budynku (ściany, dach, fundamenty), natomiast ubezpieczenie wyposażenia (mienia ruchomego) obejmuje meble, sprzęt RTV/AGD, odzież i przedmioty osobiste. Przy kredycie hipotecznym bank wymaga zazwyczaj tylko ubezpieczenia murów, ale dla pełnego bezpieczeństwa warto ubezpieczyć również to, co znajduje się wewnątrz domu.",
  },
  {
    category: "Dom i Nieruchomości",
    question: "Czy polisa mieszkaniowa chroni przed przepięciem elektrycznym?",
    answer:
      "Ubezpieczenie od przepięć chroni sprzęt elektroniczny przed uszkodzeniem w wyniku nagłego wzrostu napięcia w sieci, np. po uderzeniu pioruna lub awarii instalacji. Wiele nowoczesnych polis oferuje to w standardzie lub jako tanie rozszerzenie. Jest to kluczowa ochrona w dobie drogich telewizorów, komputerów i systemów smart home.",
  },

  // --- ZDROWIE I ŻYCIE ---
  {
    category: "Zdrowie i Życie",
    question: "Jak działa ubezpieczenie na życie i czy warto je mieć?",
    answer:
      "Ubezpieczenie na życie to polisa gwarantująca wypłatę świadczenia finansowego w przypadku śmierci ubezpieczonego lub wystąpienia poważnego zachorowania. Stanowi ono kluczową poduszkę bezpieczeństwa dla rodziny, pozwalając na spłatę kredytów czy utrzymanie standardu życia bliskich.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Czy prywatne ubezpieczenie zdrowotne jest lepsze niż NFZ?",
    answer:
      "Prywatne ubezpieczenie zdrowotne zapewnia szybki dostęp do lekarzy specjalistów i badań diagnostycznych bez kolejek typowych dla publicznego systemu (NFZ). Główne korzyści to nowoczesna infrastruktura, krótki czas oczekiwania na wizytę oraz szeroki zakres profilaktyki.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Co to jest karencja w ubezpieczeniu zdrowotnym lub na życie?",
    answer:
      "Karencja to określony w umowie czas po zawarciu polisy, w którym ochrona jeszcze nie obowiązuje mimo opłacania składki. Ubezpieczyciele stosują ją, aby uniknąć sytuacji, w których klient kupuje polisę wiedząc o planowanej operacji lub ciąży. Im szybciej zawrzesz umowę, tym szybciej miną okresy karencji.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Jakie ubezpieczenie dla seniora jest najlepsze?",
    answer:
      "Dla seniorów polecane są ubezpieczenia zdrowotne z szybkim dostępem do geriatrów i kardiologów oraz polisy typu 'Whole Life'. Ważnym elementem jest także Assistance medyczny, oferujący wizyty domowe lekarza i pielęgniarki oraz dowóz leków, co zapewnia starszym osobom poczucie bezpieczeństwa.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Czy ubezpieczenie NNW szkolne jest obowiązkowe?",
    answer:
      "Ubezpieczenie NNW szkolne nie jest obowiązkowe, a rodzic ma prawo wybrać dowolną polisę zamiast tej oferowanej przez szkołę. Często indywidualne ubezpieczenie dziecka oferuje znacznie wyższe sumy ubezpieczenia i szerszy zakres ochrony za podobną cenę. Warto porównać warunki przed wyborem.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Czym różni się ubezpieczenie indywidualne od grupowego?",
    answer:
      "Ubezpieczenie grupowe (zazwyczaj w pracy) ma niższą składkę i uproszczone formalności, ale oferuje uśrednione sumy ubezpieczenia. Ubezpieczenie indywidualne pozwala na precyzyjne dopasowanie zakresu i bardzo wysokich sum wypłaty do Twoich osobistych potrzeb. Indywidualna polisa jest zazwyczaj droższa, ale gwarantuje znacznie szerszą i pewniejszą ochronę finansową.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Czy ubezpieczenie na życie wypłaci pieniądze po zdiagnozowaniu raka?",
    answer:
      "Wypłata środków po diagnozie nowotworu jest możliwa, jeśli polisa na życie została rozszerzona o klauzulę poważnego zachorowania. W takim przypadku ubezpieczyciel wypłaca określoną sumę pieniędzy tuż po diagnozie, co pozwala na sfinansowanie prywatnego leczenia, nierefundowanych leków lub zagranicznych konsultacji medycznych.",
  },
  {
    category: "Zdrowie i Życie",
    question: "Jakie ubezpieczenie chroni dziecko podczas uprawiania sportu?",
    answer:
      "Dla dzieci uprawiających sport najlepsze jest dedykowane ubezpieczenie NNW z rozszerzeniem o sport wyczynowy lub wysokiego ryzyka. Taka polisa działa nie tylko w szkole i na treningach, ale przez 24h na dobę, zapewniając środki na rehabilitację, wizyty u ortopedy czy zakup stabilizatorów po kontuzji.",
  },

  // --- PODRÓŻE ---
  {
    category: "Podróże i Turystyka",
    question: "Czy ubezpieczenie turystyczne pokrywa koszty ratownictwa w górach?",
    answer:
      "Ubezpieczenie turystyczne z odpowiednim rozszerzeniem pokrywa koszty akcji ratowniczych i poszukiwawczych za granicą, które są płatne. W krajach takich jak Słowacja czy Austria jeden przelot helikoptera może kosztować kilka tysięcy euro. Przed wyjazdem na narty zawsze sprawdzaj sumę ubezpieczenia kosztów ratownictwa.",
  },
  {
    category: "Podróże i Turystyka",
    question: "Czy ubezpieczenie podróżne chroni w przypadku COVID-19?",
    answer:
      "Współczesne ubezpieczenia turystyczne standardowo pokrywają koszty leczenia związane z COVID-19 za granicą, w tym hospitalizację i kwarantannę. Przed zakupem sprawdź, czy polisa obejmuje również koszty rezygnacji z wyjazdu w przypadku pozytywnego testu przed podróżą.",
  },
  {
    category: "Podróże i Turystyka",
    question: "Co obejmuje ubezpieczenie kosztów rezygnacji z podróży?",
    answer:
      "Ubezpieczenie to gwarantuje zwrot pieniędzy za bilety i noclegi, jeśli nie możesz wyjechać z przyczyn losowych, takich jak nagła choroba lub wypadek. Umowę taką należy zawrzeć zazwyczaj w ciągu kilku dni od zakupu wycieczki, aby ochrona była aktywna.",
  },
  {
    category: "Podróże i Turystyka",
    question: "Czy ubezpieczenie turystyczne działa po spożyciu alkoholu?",
    answer:
      "Wiele ubezpieczeń zawiera tzw. 'klauzulę alkoholową', która pokrywa koszty leczenia nawet po spożyciu alkoholu. Należy jednak pamiętać, że nie dotyczy ona prowadzenia pojazdów pod wpływem oraz szkód wyrządzonych osobom trzecim po spożyciu.",
  },
  {
    category: "Podróże i Turystyka",
    question: "Czy ubezpieczenie turystyczne działa podczas pracy za granicą?",
    answer:
      "Standardowe ubezpieczenie turystyczne chroni podczas wypoczynku. Jeśli planujesz pracować za granicą (nawet dorywczo), musisz rozszerzyć polisę o 'wykonywanie pracy'. Dotyczy to zwłaszcza pracy fizycznej, gdzie ryzyko wypadku jest wyższe. Brak takiego rozszerzenia może skutkować odmową pokrycia kosztów leczenia przez ubezpieczyciela.",
  },
  {
    category: "Podróże i Turystyka",
    question: "Jak działa ubezpieczenie bagażu podróżnego?",
    answer:
      "Ubezpieczenie bagażu zapewnia odszkodowanie w przypadku jego kradzieży, zagubienia lub zniszczenia podczas podróży (np. przez przewoźnika). Chroni nie tylko walizkę, ale i jej zawartość. Warto pamiętać, że elektronika, biżuteria i gotówka często podlegają osobnym limitom lub wyłączeniom, dlatego cenne przedmioty warto ubezpieczyć dodatkowo.",
  },

  // --- FIRMA I SPECJALISTYCZNE ---
  {
    category: "Firma i Specjalistyczne",
    question: "Jakie ubezpieczenie dla freelancera i programisty (OC zawodowe)?",
    answer:
      "OC zawodowe dla freelancera chroni przed roszczeniami klientów wynikającymi z błędów w sztuce, niedotrzymania terminów lub utraty danych. W świecie IT, gdzie błąd w kodzie może przynieść ogromne straty kontrahentowi, profesjonalne OC jest standardem wymaganym w kontraktach B2B.",
  },
  {
    category: "Firma i Specjalistyczne",
    question: "Czym jest ubezpieczenie ochrony prawnej?",
    answer:
      "Ubezpieczenie ochrony prawnej pokrywa koszty adwokata, opłat sądowych i opinii biegłych w sporach prawnych. Pozwala ono na dochodzenie swoich praw bez ryzyka finansowego, na przykład w sporze z nieuczciwym pracodawcą czy sprzedawcą wadliwego towaru.",
  },
  {
    category: "Firma i Specjalistyczne",
    question: "Co obejmuje ubezpieczenie Cyber dla osób prywatnych?",
    answer:
      "Ubezpieczenie Cyber chroni przed skutkami ataków hakerskich, kradzieży tożsamości oraz hejtu internetowego. Zapewnia dostęp do specjalistów IT, którzy pomogą odzyskać dane, oraz wsparcie prawne w przypadku naruszenia dóbr osobistych w sieci.",
  },
  {
    category: "Firma i Specjalistyczne",
    question: "Co to jest ubezpieczenie D&O dla zarządu firmy?",
    answer:
      "Ubezpieczenie D&O (Directors and Officers) chroni prywatny majątek członków zarządów i dyrektorów przed roszczeniami wynikającymi z błędnych decyzji menedżerskich. W dobie rosnącej odpowiedzialności osobistej za losy spółki, polisa D&O jest fundamentem bezpieczeństwa dla osób zarządzających przedsiębiorstwami.",
  },
  {
    category: "Firma i Specjalistyczne",
    question: "Jak ubezpieczyć flotę samochodów w firmie?",
    answer:
      "Ubezpieczenie flotowe to zbiorcza polisa dla firm posiadających co najmniej kilka pojazdów. Pozwala na wynegocjowanie znacznie niższych stawek niż przy ubezpieczeniach indywidualnych oraz upraszcza administrację (jedna data płatności, wspólne warunki dla wszystkich aut). Dodatkowo, historia szkodowości liczona jest dla całej firmy, a nie dla pojedynczych kierowców.",
  },

  // --- WIEDZA OGÓLNA I PROCEDURY ---
  {
    category: "Wiedza Ogólna",
    question: "Dlaczego warto wybrać multiagencję ubezpieczeniową?",
    answer:
      "Wybór multiagencji pozwala na porównanie ofert ponad 20 towarzystw ubezpieczeniowych w jednym miejscu, co gwarantuje oszczędność czasu i pieniędzy. Zamiast samodzielnie sprawdzać każdy ranking, otrzymujesz gotowe zestawienie najtańszych polis dopasowanych do Twojego budżetu.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Co to jest regres ubezpieczeniowy i kiedy występuje?",
    answer:
      "Regres ubezpieczeniowy to roszczenie ubezpieczyciela do sprawcy o zwrot wypłaconego odszkodowania. Występuje, gdy sprawca prowadził pod wpływem alkoholu, nie posiadał uprawnień lub zbiegł z miejsca zdarzenia. Polisa chroni poszkodowanego, ale sprawca pokrywa koszty z własnej kieszeni.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jak działa ubezpieczenie OC w życiu prywatnym?",
    answer:
      "OC w życiu prywatnym chroni Cię przed skutkami szkód wyrządzonych osobom trzecim przez Ciebie, Twoje dzieci lub zwierzęta. Przykłady to zalanie sąsiada, potrącenie pieszego podczas jazdy rowerem czy zniszczenie towaru w sklepie przez dziecko. To jedna z najtańszych i najbardziej przydatnych polis.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jak szybko otrzymam ofertę ubezpieczenia?",
    answer:
      "Większość ofert przygotowujemy w czasie rzeczywistym podczas rozmowy, a porównania mailowe wysyłamy w ciągu 24-48 godzin. W sytuacjach pilnych działamy w trybie ekspresowym – wystarczy skontaktować się z naszym agentem telefonicznie.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Czym różni się udział własny od franszyzy redukcyjnej?",
    answer:
      "Udział własny to określona część szkody, którą pokrywasz z własnej kieszeni (np. 500 zł). Franszyza redukcyjna to kwota, o którą ubezpieczyciel pomniejsza każde odszkodowanie. Stosowanie tych mechanizmów pozwala na znaczne obniżenie składki za polisę.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Co to jest suma ubezpieczenia i jak ją określić?",
    answer:
      "Suma ubezpieczenia to maksymalna kwota, jaką otrzymasz w razie straty całkowitej. Przy domu powinna ona odpowiadać kosztowi budowy od nowa, a przy życiu – potrzebom finansowym rodziny. Zaniżenie sumy może skutkować zbyt niskim odszkodowaniem.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Kiedy ubezpieczyciel może odmówić wypłaty odszkodowania?",
    answer:
      "Odmowa może nastąpić w przypadku rażącego niedbalstwa (np. kluczyki w stacyjce), działania umyślnego lub bycia pod wpływem środków odurzających. Dokładna lista wyłączeń znajduje się zawsze w OWU – pomagamy je analizować, abyś znał zakres swojej ochrony.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Czy ubezpieczenie dla psa lub kota jest opłacalne?",
    answer:
      "Ubezpieczenie pet insurance pokrywa koszty leczenia weterynaryjnego w razie nagłej choroby oraz OC właściciela. Biorąc pod uwagę rosnące ceny usług weterynaryjnych, polisa ta pozwala na szybką diagnostykę bez obciążania budżetu nagłymi wydatkami rzędu kilku tysięcy złotych.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jak ubezpieczyć sprzęt elektroniczny poza domem?",
    answer:
      "Można to zrobić poprzez rozszerzenie polisy mieszkaniowej o mienie ruchome poza miejscem ubezpieczenia. Chroni ona laptopa czy aparat przed kradzieżą z auta lub rabunkiem na ulicy. Jest to rozwiązanie szczególnie polecane dla osób pracujących mobilnie.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jakie ubezpieczenie dla sportowców amatorów?",
    answer:
      "Dla aktywnych amatorów najlepszym rozwiązaniem jest polisa NNW z rozszerzeniem o sport wysokiego ryzyka oraz OC. Warto sprawdzić, czy polisa pokrywa koszty rehabilitacji i zakupu sprzętu ortopedycznego po kontuzji, co pozwala na szybszy powrót do treningów.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Czy mogę odstąpić od umowy ubezpieczenia zawartej przez telefon?",
    answer:
      "Tak, przy umowach zawieranych na odległość (telefon, internet), konsument ma prawo do odstąpienia od umowy w ciągu 30 dni od jej zawarcia bez podania przyczyny. Wystarczy wysłać pisemne oświadczenie do ubezpieczyciela. Prawo to chroni Cię przed pochopnymi decyzjami podjętymi pod wpływem rozmowy sprzedażowej.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Co zrobić, gdy agent ubezpieczeniowy popełnił błąd?",
    answer:
      "Jeśli błąd agenta (np. błędne dane w polisie) doprowadził do szkody lub braku wypłaty odszkodowania, możesz żądać naprawienia szkody z polisy OC zawodowego agenta. Każdy agent ubezpieczeniowy w Polsce musi posiadać obowiązkowe ubezpieczenie OC, które chroni klientów przed skutkami jego pomyłek lub niedopatrzeń.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jak sprawdzić historię swoich szkód ubezpieczeniowych?",
    answer:
      "Historię swoich szkód komunikacyjnych oraz okresy ubezpieczenia OC i AC możesz bezpłatnie sprawdzić w Ubezpieczeniowym Funduszu Gwarancyjnym (UFG). Wystarczy założyć konto na portalu ufg.pl, aby wygenerować raport, który jest podstawą do naliczania zniżek przez firmy ubezpieczeniowe.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Czy odszkodowanie z ubezpieczenia jest opodatkowane?",
    answer:
      "Większość odszkodowań wypłacanych osobom fizycznym (np. za stłuczkę, zalanie mieszkania czy uszczerbek na zdrowiu) jest zwolniona z podatku dochodowego (PIT). Podatek może pojawić się jedynie w specyficznych sytuacjach biznesowych lub przy ubezpieczeniach z elementem inwestycyjnym (tzw. podatek Belki), o czym zawsze informujemy przy zawieraniu umowy.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Co to jest ubezpieczenie Assistance Domowy?",
    answer:
      "Home Assistance to usługa dodawana do ubezpieczenia mieszkania, która zapewnia natychmiastową pomoc fachowców w nagłych awariach. Obejmuje m.in. wizytę hydraulika, ślusarza, elektryka czy naprawę sprzętu RTV/AGD po gwarancji. Koszt dojazdu i robocizny pokrywa ubezpieczyciel, co oszczędza mnóstwo czasu i stresu w sytuacjach kryzysowych.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Jakie dokumenty są potrzebne do wyceny ubezpieczenia?",
    answer:
      "Do przygotowania oferty zazwyczaj potrzebujemy: dowodu rejestracyjnego pojazdu (przy OC/AC), numeru PESEL właściciela oraz informacji o przedmiocie ubezpieczenia (np. metraż domu, suma ubezpieczenia na życie). Dzięki nowoczesnym systemom, większość Twoich zniżek pobieramy automatycznie z baz centralnych, co maksymalnie skraca proces wyceny.",
  },
  {
    category: "Wiedza Ogólna",
    question: "Czy polisa ubezpieczeniowa odnawia się automatycznie?",
    answer:
      "Automatycznie odnawia się tylko obowiązkowe ubezpieczenie OC posiadaczy pojazdów mechanicznych (o ile nie zostało wypowiedziane). Inne polisy, takie jak AC, ubezpieczenie mieszkania czy podróżne, wygasają z końcem okresu ochrony. Zawsze przypominamy naszym klientom o kończących się polisach, aby zachować ciągłość ochrony bez ryzyka kary z UFG.",
  },
];

const KnowledgePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrowanie z memoizacją dla wydajności
  const filteredFaqItems = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return faqItems;
    return faqItems.filter(
      (item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Generowanie danych strukturalnych FAQPage dla Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    })),
  };

  return (
    <main>
      {/* Wstrzyknięcie skryptu SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-hero px-4 md:px-2 py-16 md:py-24">
        <div className="container m-auto">
          <div className="animate-slide-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Ubezpieczenia</h1>
            <h1 className="text-4xl font-bold text-accent md:text-5xl mt-6 pb-4">Baza wiedzy i Poradnik</h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Eksperckie odpowiedzi na najczęściej zadawane pytania dotyczące ubezpieczeń.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-primary-foreground/80 text-lg md:text-xl">
              🛡️ My czytamy drobny druk, żebyś ty nie musiał.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-2 py-16 md:py-24 bg-background">
        <div className="container m-auto">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Najczęściej zadawane <span className="text-accent text-blue-600">pytania (FAQ)</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Szukasz informacji o ubezpieczeniach? Skorzystaj z naszej wyszukiwarki.
            </p>

            {/* Search Input */}
            <div className="relative mt-8">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Np. tanie OC, ubezpieczenie mieszkania..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg shadow-sm"
              />
            </div>

            {/* Accordion z poprawną semantyką */}
            <Accordion type="single" collapsible className="mt-8 border-t">
              {filteredFaqItems.length > 0 ? (
                filteredFaqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b">
                    <AccordionTrigger className="text-left py-4 hover:no-underline hover:text-blue-600 transition-colors">
                      {/* Użycie h3 wewnątrz triggera dla hierarchii SEO */}
                      <h3 className="text-base font-semibold pr-4 leading-tight">{item.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-xl text-muted-foreground">
                    Nie znaleźliśmy odpowiedzi na &ldquo;<strong>{searchQuery}</strong>&rdquo;.
                  </p>
                  <p className="mt-2">Zadzwoń do nas – odpowiemy osobiście!</p>
                </div>
              )}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgePage;
