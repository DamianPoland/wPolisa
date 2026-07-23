export const tabsOptions: tabsOptionsType[] = [
  { id: "48", label: "15 000 zł", desc: "48 zł/rok" },
  { id: "57", label: "20 000 zł", desc: "57 zł/rok" },
  { id: "73", label: "30 000 zł", desc: "73 zł/rok" },
  { id: "99", label: "40 000 zł", desc: "99 zł/rok" },
  { id: "136", label: "50 000 zł", desc: "136 zł/rok" },
  { id: "197", label: "70 000 zł", desc: "197 zł/rok" },
  { id: "299", label: "100 000 zł", desc: "299 zł/rok" },
  { id: "465", label: "150 000 zł", desc: "465 zł/rok" },
  { id: "680", label: "200 000 zł", desc: "680 zł/rok" },
];
export type tabsOptionsType = {
  id: string;
  label: string;
  desc: string;
};

export const schoolInsuranceComparisonBenefits: string[] = [
  "Ochrona przez cały rok 24/7 – w szkole, w domu i na wakacjach.",
  "Zniszczenia lub uszkodzenia okularów korekcyjnych.",
  "Pokrycie kosztów korepetycji dla uczniów szkół podstawowych oraz średnich.",
  "Profesjonalnej pomocy psychologa po wypadku.",
  "Wiele innych ... .",
];

export const howItWorks = [
  "Zwrot poniesionych kosztów leczenia następstw wypadków, w tym rehabilitacji.",
  "Organizacja i pokrycie kosztów konsultacji lekarskich oraz domowych wizyt fizjoterapeuty po wypadku (na terenie Polski).",
  "Wypłata świadczenia m.in. za złamania, zwichnięcia, pogryzienia, oparzenia i wstrząśnienia mózgu.",
  "Zwrot kosztów zakupu sprzętu ortopedycznego i odbudowy zębów stałych uszkodzonych w wypadku.",
  "Organizacja i opłacenie pomocy psychologicznej oraz korepetycji po wypadku dziecka.",
  "Świadczenie w razie poważnego zachorowania (m.in. cukrzyca typu 1, neuroborelioza).",
  "Świadczenie za drobne uszkodzenie ciała wymagające min. 1 stacjonarnej konsultacji lekarskiej.",
  "Ochrona następstw wypadków podczas uprawiania sportów rekreacyjnie i amatorsko (wyczynowo – do 20. roku życia).",
  "Zwrot kosztów naprawy lub zakupu nowych okularów korekcyjnych uszkodzonych w wypadku (do 500 zł).",
  "+50% świadczenia, gdy wypadek zdarzy się podczas wycieczki szkolnej lub zorganizowanej przez uczelnię.",
  "Zwrot kosztów wycieczki szkolnej (do 500 zł), w której dziecko nie wzięło udziału z powodu wypadku.",
];

export interface SchoolInsuranceComparisonOfferType {
  [key: string]: {
    title: string;
    rows: [string, string][];
  }[];
}

export const schoolInsuranceComparisonOffer: SchoolInsuranceComparisonOfferType = {
  "48": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "150 zł za 1% uszczerbku (do 15 000 zł)",
        ],
        ["Oparzenie skóry", "do 15 000 zł"],
        ["Oparzenie dróg oddechowych", "do 1 500 zł"],
        ["Odmrożenie", "do 450 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 450 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 600 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 600 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "75 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "100 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 3 750 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 1 500 zł / do 750 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 3 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 3 750 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "50 zł za dzień",
        ],
        ["Wystąpienie sepsy", "1 500 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "1 500 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "15 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "30 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "22 500 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "15 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "3 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "3 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "3 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "57": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "200 zł za 1% uszczerbku (do 20 000 zł)",
        ],
        ["Oparzenie skóry", "do 20 000 zł"],
        ["Oparzenie dróg oddechowych", "do 2 000 zł"],
        ["Odmrożenie", "do 600 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 600 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 800 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 800 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "100 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "100 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 5 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 2 000 zł / do 1 000 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 4 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 5 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "50 zł za dzień",
        ],
        ["Wystąpienie sepsy", "2 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "2 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "20 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "40 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "30 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "20 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "4 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "4 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "4 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "73": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "300 zł za 1% uszczerbku (do 30 000 zł)",
        ],
        ["Oparzenie skóry", "do 30 000 zł"],
        ["Oparzenie dróg oddechowych", "do 3 000 zł"],
        ["Odmrożenie", "do 900 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 900 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 200 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 200 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "150 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "100 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 7 500 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 3 000 zł / do 1 500 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 5 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 7 500 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "50 zł za dzień",
        ],
        ["Wystąpienie sepsy", "3 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "3 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "30 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "60 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "45 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "30 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "5 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "5 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "5 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "99": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "400 zł za 1% uszczerbku (do 40 000 zł)",
        ],
        ["Oparzenie skóry", "do 40 000 zł"],
        ["Oparzenie dróg oddechowych", "do 4 000 zł"],
        ["Odmrożenie", "do 1 200 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 200 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 600 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 600 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "100 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 4 000 zł / do 2 000 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 5 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "50 zł za dzień",
        ],
        ["Wystąpienie sepsy", "4 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "4 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "40 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "80 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "60 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "40 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "5 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "5 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "5 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "136": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "500 zł za 1% uszczerbku (do 50 000 zł)",
        ],
        ["Oparzenie skóry", "do 50 000 zł"],
        ["Oparzenie dróg oddechowych", "do 5 000 zł"],
        ["Odmrożenie", "do 1 500 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 1 500 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 2 000 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 2 000 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "150 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 5 000 zł / do 2 500 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 5 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "75 zł za dzień",
        ],
        ["Wystąpienie sepsy", "5 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "5 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "50 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "100 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "75 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "50 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "5 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "5 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "5 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "197": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "700 zł za 1% uszczerbku (do 70 000 zł)",
        ],
        ["Oparzenie skóry", "do 70 000 zł"],
        ["Oparzenie dróg oddechowych", "do 7 000 zł"],
        ["Odmrożenie", "do 2 100 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 2 100 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 2 800 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 2 800 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "150 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 7 000 zł / do 3 500 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 7 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "75 zł za dzień",
        ],
        ["Wystąpienie sepsy", "7 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "7 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "70 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "140 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "105 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "70 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "7 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "7 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "7 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "299": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "1 000 zł za 1% uszczerbku (do 100 000 zł)",
        ],
        ["Oparzenie skóry", "do 100 000 zł"],
        ["Oparzenie dróg oddechowych", "do 10 000 zł"],
        ["Odmrożenie", "do 3 000 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 3 000 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 4 000 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 4 000 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "200 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 10 000 zł / do 5 000 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 10 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "100 zł za dzień",
        ],
        ["Wystąpienie sepsy", "10 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "10 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "100 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "200 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "150 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "100 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "10 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "10 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "10 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "465": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "1 500 zł za 1% uszczerbku (do 150 000 zł)",
        ],
        ["Oparzenie skóry", "do 150 000 zł"],
        ["Oparzenie dróg oddechowych", "do 15 000 zł"],
        ["Odmrożenie", "do 4 500 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 4 500 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 6 000 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 6 000 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "200 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 15 000 zł / do 7 500 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 15 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "100 zł za dzień",
        ],
        ["Wystąpienie sepsy", "15 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "15 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "150 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "300 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "225 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "150 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "15 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "15 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "15 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
  "680": [
    {
      title: "Świadczenia w razie wypadku w szkole i poza nią – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Uszkodzenie ciała (np. złamanie kości lub zwichnięcie stawu) / Trwały uszczerbek na zdrowiu spowodowany zawałem serca, krwotokiem śródczaszkowym lub poważnym uszkodzeniem ciała",
          "2 000 zł za 1% uszczerbku (do 200 000 zł)",
        ],
        ["Oparzenie skóry", "do 200 000 zł"],
        ["Oparzenie dróg oddechowych", "do 20 000 zł"],
        ["Odmrożenie", "do 6 000 zł"],
        [
          "Wstrząśnienie lub podejrzenie wstrząśnienia mózgu - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 6 000 zł",
        ],
        [
          "Pogryzienie przez zwierzęta - jeśli było związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 8 000 zł",
        ],
        [
          "Wdychanie szkodliwych gazów, dymów, pyłów lub oparów związków chemicznych, porażenie prądem lub piorunem - jeśli były związane z pobytem w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "do 8 000 zł",
        ],
        ["Inne zdarzenie, które wymaga leczenia (min. 1 stacjonarnej konsultacji lekarskiej)", "200 zł"],
        ["Bonus: wypadek na wycieczce szkolnej lub zorganizowanej przez uczelnię", "+50% do świadczenia"],
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 2 dni)",
          "200 zł za dzień",
        ],
        ["Zwrot kosztów wycieczki szkolnej niewykorzystanej z powodu nieszczęśliwego wypadku", "do 500 zł"],
        [
          "Zwrot kosztów naprawy okularów korekcyjnych zniszczonych lub uszkodzonych w wyniku nieszczęśliwego wypadku albo zakupu nowych",
          "do 500 zł",
        ],
        [
          "Zwrot kosztów nabycia przedmiotów ortopedycznych i środków pomocniczych, w tym kosztów odbudowy stomatologicznej zębów stałych",
          "do 10 000 zł",
        ],
        ["Zwrot kosztów leczenia, w tym zwrot kosztów rehabilitacji", "do 20 000 zł / do 10 000 zł"],
        ["Zwrot kosztów dostosowania mieszkania", "do 20 000 zł"],
        ["Zwrot kosztów przeszkolenia zawodowego osób z niepełnosprawnością", "do 10 000 zł"],
      ],
    },
    {
      title: "Świadczenia w razie choroby – również podczas wakacji i ferii – na całym świecie",
      rows: [
        [
          "Dieta szpitalna wypłacana od 1. dnia pobytu w szpitalu (hospitalizacja musi trwać min. 5 dni)",
          "100 zł za dzień",
        ],
        ["Wystąpienie sepsy", "20 000 zł"],
        ["Poważne zachorowanie, w tym m.in. cukrzyca typu 1 i neuroborelioza", "20 000 zł"],
      ],
    },
    {
      title: "Usługi assistance w Polsce w szkole i poza nią – również podczas wakacji i ferii",
      rows: [
        [
          "Korepetycje dla uczniów szkół podstawowych oraz średnich (z wyłączeniem uczniów szkół policealnych)",
          "do 1 200 zł",
        ],
        ["Organizacja i pokrycie kosztów rehabilitacji", "do 500 zł"],
        ["Domowa opieka pielęgniarki po hospitalizacji", "do 1 000 zł"],
        [
          "Pomoc w dostarczeniu do miejsca pobytu ubezpieczonego sprzętu rehabilitacyjnego lub medycznego niewymagającego specjalnego transportu",
          "do 300 zł",
        ],
        ["Dostarczenie leków przepisanych przez lekarza do miejsca pobytu ubezpieczonego", "do 300 zł"],
        ["Pomoc psychologa po wypadku", "do 2 000 zł"],
        [
          "Konsultacja lekarska, wizyta pielęgniarki lub transport ubezpieczonego (np. do szpitala lub między placówkami)",
          "do 2 000 zł",
        ],
      ],
    },
    {
      title: "Świadczenia w razie śmierci",
      rows: [
        [
          "Śmierć ubezpieczonego spowodowana nieszczęśliwym wypadkiem, obrażeniami ciała powstałymi wskutek napadu padaczki albo omdlenia, zawałem serca, krwotokiem śródczaszkowym lub sepsą",
          "200 000 zł",
        ],
        ["Śmierć ubezpieczonego na terenie placówki szkolnej", "400 000 zł"],
        ["Śmierć ubezpieczonego podczas wycieczki szkolnej lub zorganizowanej przez uczelnię", "300 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wypadkiem komunikacyjnym", "200 000 zł"],
        ["Śmierć ubezpieczonego spowodowana nowotworem złośliwym", "20 000 zł"],
        ["Śmierć ubezpieczonego spowodowana wrodzoną wadą serca", "20 000 zł"],
        ["Śmierć rodzica lub opiekuna prawnego ubezpieczonego spowodowana nieszczęśliwym wypadkiem", "20 000 zł"],
        ["Pomoc psychologa dla rodziny w razie śmierci ubezpieczonego", "do 2 000 zł"],
      ],
    },
  ],
};
