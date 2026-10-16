/**
 * Anonieme zeef. Draait in de browser en in tests.
 * Niets wordt opgeslagen of verstuurd.
 */

export const vragen = [
  {
    id: 'leeftijd',
    tekst: 'Hoe oud ben je?',
    hulp: 'Veel regelingen starten bij 18, bij 21, of als je AOW krijgt. In 2026 is de AOW-leeftijd 67.',
    opties: [
      { waarde: 'onder-18', label: 'Jonger dan 18' },
      { waarde: '18-20', label: '18, 19 of 20' },
      { waarde: '21-66', label: '21 tot de AOW-leeftijd' },
      { waarde: 'aow', label: 'Ik heb de AOW-leeftijd, of ik ben er binnen 2 maanden' },
    ],
  },
  {
    id: 'zorgverzekering',
    tekst: 'Heb je een Nederlandse zorgverzekering?',
    hulp: 'Die heb je meestal nodig voor zorgtoeslag. Een extra verzekering telt niet mee.',
    opties: [
      { waarde: 'ja', label: 'Ja' },
      { waarde: 'nee', label: 'Nee' },
      { waarde: 'weet-niet', label: 'Weet ik niet' },
    ],
  },
  {
    id: 'inkomen',
    tekst: 'Hoe zit het ongeveer met je inkomen?',
    hulp: 'Een grove gok is genoeg. We vragen geen bedrag en we bewaren niks.',
    opties: [
      { waarde: 'laag', label: 'Laag. Rond een uitkering of het minimum, of ik kom moeilijk rond' },
      { waarde: 'midden', label: 'Midden. Ik werk of ik heb pensioen, maar het is niet ruim' },
      { waarde: 'hoog', label: 'Hoog. Duidelijk ruim boven een modaal inkomen' },
      { waarde: 'weet-niet', label: 'Wisselend, of ik weet het niet' },
    ],
  },
  {
    id: 'huur',
    tekst: 'Huur je zelf een huis?',
    hulp: 'Huurtoeslag is voor een huurwoning. Een koophuis telt niet.',
    opties: [
      { waarde: 'ja', label: 'Ja, ik huur' },
      { waarde: 'koop', label: 'Nee, ik heb een koophuis' },
      { waarde: 'anders', label: 'Nee, ik woon bij iemand anders of op een andere manier' },
    ],
  },
  {
    id: 'kinderen',
    tekst: 'Heb je kinderen onder de 18?',
    hulp: 'Kinderen die bij jou horen, ook stief- of pleegkinderen.',
    opties: [
      { waarde: 'ja', label: 'Ja' },
      { waarde: 'nee', label: 'Nee' },
    ],
  },
  {
    id: 'opvang',
    tekst: 'Gaat een kind naar de opvang?',
    hulp: 'Dagopvang, buitenschoolse opvang of een gastouder. Voor kinderopvangtoeslag telt ook of je werkt.',
    opties: [
      { waarde: 'werk-en-opvang', label: 'Ja, en ik of mijn partner werkt' },
      { waarde: 'opvang-zonder-werk', label: 'Ja, maar niemand in huis werkt' },
      { waarde: 'geen', label: 'Nee' },
      { waarde: 'nvt', label: 'Niet van toepassing' },
    ],
  },
  {
    id: 'belasting',
    tekst: 'Kan er belasting van jou zijn blijven liggen?',
    hulp: 'Bijvoorbeeld omdat je niet het hele jaar werkte, studeerde, of AOW én een klein pensioen krijgt.',
    opties: [
      { waarde: 'terugvragen', label: 'Ja, ik wil kijken of ik belasting terugkrijg' },
      { waarde: 'meerdere-inkomens', label: 'Ik krijg AOW of een uitkering én nog ander inkomen' },
      { waarde: 'nee', label: 'Nee, of ik heb dit al gecheckt' },
    ],
  },
  {
    id: 'gemeente',
    tekst: 'In welke gemeente woon je?',
    hulp: 'We hebben de 15 grootste gemeenten. Woon je ergens anders, dan laten we de landelijke regelingen zien.',
    opties: [],
  },
  {
    id: 'situatie',
    tekst: 'Heb je al lang weinig geld, of ineens een rekening die je niet kunt betalen?',
    hulp: 'Dit helpt bij regelingen van je gemeente. Het is geen aanvraag.',
    opties: [
      { waarde: 'lang-laag', label: 'Al een paar jaar een laag inkomen' },
      { waarde: 'extra-kosten', label: 'Ineens extra kosten, zoals ziekte, verhuizing of school' },
      { waarde: 'allebei', label: 'Allebei' },
      { waarde: 'nee', label: 'Nee' },
    ],
  },
  {
    id: 'vergeten',
    tekst: 'Wil je zoeken naar geld dat ergens is blijven liggen?',
    hulp: 'Denk aan een oude OV-chipkaart, pensioen, een erfenis of geld bij het ministerie van Financiën.',
    opties: [
      { waarde: 'ja', label: 'Ja, ik wil breed kijken' },
      { waarde: 'ov', label: 'Alleen mijn OV-chipkaart' },
      { waarde: 'pensioen', label: 'Alleen pensioen' },
      { waarde: 'nee', label: 'Nee, dat heb ik al gedaan' },
    ],
  },
];

function inkomenNiveau(inkomen) {
  if (inkomen === 'laag') return 'ja';
  if (inkomen === 'hoog') return 'nee';
  return 'twijfel';
}

function leeftijdNiveau(leeftijd, minLeeftijd, geenAow, zeker = true) {
  if (leeftijd === 'onder-18') return minLeeftijd <= 17 ? 'ja' : 'nee';
  if (leeftijd === '18-20') {
    if (minLeeftijd <= 18) return 'ja';
    return zeker ? 'nee' : 'twijfel';
  }
  if (leeftijd === 'aow') return geenAow ? 'nee' : 'ja';
  if (minLeeftijd <= 21) return 'ja';
  return 'twijfel';
}

function combine(delen) {
  if (delen.includes('nee')) return 'nee';
  if (delen.includes('twijfel')) return 'misschien';
  return 'waarschijnlijk';
}

function redenVoor(niveau, zinnen) {
  if (niveau === 'nee') return zinnen.nee;
  if (niveau === 'misschien') return zinnen.misschien;
  return zinnen.ja;
}

export function beoordeel(antwoorden, regeling) {
  const soort = regeling.check?.soort;
  const minLeeftijd = regeling.check?.minLeeftijd ?? 18;
  const geenAow = Boolean(regeling.check?.geenAow);
  const leeftijdZeker = regeling.check?.leeftijdZeker !== false;
  const leeftijd = leeftijdNiveau(antwoorden.leeftijd, minLeeftijd, geenAow, leeftijdZeker);
  const inkomen = inkomenNiveau(antwoorden.inkomen);

  const pastGemeente = () => {
    if (!regeling.gemeente) return 'ja';
    if (antwoorden.gemeente === regeling.gemeente) return 'ja';
    return 'nee';
  };

  let niveau = 'nee';
  let reden = 'Op basis van je antwoorden lijkt deze regeling niet te passen.';

  if (soort === 'zorgtoeslag') {
    const verzekering = antwoorden.zorgverzekering === 'ja' ? 'ja' : antwoorden.zorgverzekering === 'nee' ? 'nee' : 'twijfel';
    niveau = combine([leeftijd, verzekering, inkomen]);
    reden = redenVoor(niveau, {
      ja: 'Je bent 18 of ouder, je hebt een zorgverzekering en je inkomen lijkt niet te hoog.',
      misschien: 'Zorgtoeslag kan passen, maar je inkomen of je verzekering is niet zeker. Maak even een proefberekening.',
      nee: 'Voor zorgtoeslag heb je een Nederlandse zorgverzekering nodig. Je bent 18 of ouder, en je inkomen zit onder de grens.',
    });
  } else if (soort === 'huurtoeslag') {
    const huur = antwoorden.huur === 'ja' ? 'ja' : antwoorden.huur === 'anders' ? 'twijfel' : 'nee';
    niveau = combine([leeftijd, huur, inkomen]);
    reden = redenVoor(niveau, {
      ja: 'Je huurt en je inkomen lijkt niet te hoog. In 2026 is er geen maximale huurprijs meer om mee te mogen doen.',
      misschien: 'Huurtoeslag hangt af van je huis, je inkomen en je vermogen. Kijk dat na met een proefberekening.',
      nee: 'Huurtoeslag is voor mensen vanaf 18 die een huis huren en geen hoog inkomen hebben.',
    });
  } else if (soort === 'kinderopvang') {
    const kind = antwoorden.kinderen === 'ja' ? 'ja' : 'nee';
    const opvang = antwoorden.opvang === 'werk-en-opvang' ? 'ja' : antwoorden.opvang === 'opvang-zonder-werk' ? 'twijfel' : 'nee';
    niveau = combine([kind, opvang]);
    reden = redenVoor(niveau, {
      ja: 'Er is opvang en er wordt gewerkt. Vraag de toeslag op tijd aan: meestal binnen 3 maanden.',
      misschien: 'Zonder werk lukt kinderopvangtoeslag vaak niet. Er zijn uitzonderingen. Die staan bij Dienst Toeslagen.',
      nee: 'Kinderopvangtoeslag is voor ouders met opvang. Meestal moet jij of je partner ook werken.',
    });
  } else if (soort === 'kindgebonden') {
    const kind = antwoorden.kinderen === 'ja' ? 'ja' : 'nee';
    const geld = antwoorden.inkomen === 'hoog' ? 'twijfel' : 'ja';
    niveau = combine([kind, geld]);
    reden = redenVoor(niveau, {
      ja: 'Je hebt een kind onder de 18 en je inkomen lijkt niet hoog. Alleenstaande ouders krijgen meer.',
      misschien: 'Bij een hoger inkomen wordt het kindgebonden budget lager, of het valt weg. Doe een proefberekening.',
      nee: 'Kindgebonden budget is een bijdrage voor ouders van kinderen onder de 18.',
    });
  } else if (soort === 'heffingskorting') {
    niveau = leeftijd === 'nee' ? 'nee' : antwoorden.belasting === 'nee' && antwoorden.inkomen === 'hoog' ? 'misschien' : 'waarschijnlijk';
    reden = redenVoor(niveau, {
      ja: 'Heffingskortingen verlagen je belasting. Die zitten vaak al in je loon of uitkering. Kijk ze na in je aangifte.',
      misschien: 'Misschien heb je toch een korting die nog niet verrekend is. Dat zie je als je de aangifte invult.',
      nee: 'Heffingskortingen gelden voor mensen die belasting of premie betalen, meestal vanaf 18 jaar.',
    });
  } else if (soort === 'aangifte') {
    const wil = antwoorden.belasting === 'nee' ? 'twijfel' : 'ja';
    niveau = combine([leeftijd === 'nee' ? 'nee' : 'ja', wil]);
    reden = redenVoor(niveau, {
      ja: 'Je kunt aangifte doen om te zien of je geld terugkrijgt. Invullen is nog geen aangifte, zolang je niks verstuurt.',
      misschien: 'Ook als je het niet verwacht, kan een aangifte geld teruggeven. In 2026 kun je nog terug naar 2021.',
      nee: 'Deze route is bedoeld voor volwassenen die inkomstenbelasting kunnen terugvragen.',
    });
  } else if (soort === 'te-veel-belasting') {
    const wil = antwoorden.belasting === 'terugvragen' || antwoorden.belasting === 'meerdere-inkomens' ? 'ja' : 'nee';
    niveau = combine([leeftijd === 'nee' ? 'nee' : 'ja', wil]);
    reden = redenVoor(niveau, {
      ja: 'Bij meerdere uitkeringen of een wisselend jaar houdt de betaler soms te veel loonheffing in. Aangifte laat dat zien.',
      misschien: '',
      nee: 'Je gaf aan dat je dit al hebt gecheckt, of dat het niet speelt.',
    });
  } else if (soort === 'aio') {
    const leeftijdAow = antwoorden.leeftijd === 'aow' ? 'ja' : 'nee';
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' ? 'ja' : 'twijfel';
    niveau = combine([leeftijdAow, geld]);
    reden = redenVoor(niveau, {
      ja: 'Je hebt de AOW-leeftijd en een laag inkomen. De AIO-aanvulling is het nakijken waard. Doe de check bij de SVB.',
      misschien: 'Een AIO-aanvulling kan ook als je AOW niet compleet is. Het hangt af van je inkomen en je vermogen.',
      nee: 'De AIO-aanvulling is voor mensen rond de AOW-leeftijd met weinig inkomen en vermogen.',
    });
  } else if (soort === 'noodfonds') {
    const volwassen = leeftijd === 'nee' ? 'nee' : 'ja';
    niveau = combine([volwassen, inkomen === 'nee' ? 'nee' : inkomen === 'ja' ? 'ja' : 'twijfel']);
    reden = redenVoor(niveau, {
      ja: 'Het Noodfonds Energie is er voor een laag inkomen en een hoge energierekening. Aanvragen kan van 4 januari tot en met 7 mei 2027.',
      misschien: 'Of je geld krijgt, hangt af van je energierekening. De precieze inkomensgrens staat als te controleren bij deze regeling.',
      nee: 'Het Noodfonds is niet bedoeld bij een hoog inkomen, en niet voor kinderen die zelf een aanvraag doen.',
    });
  } else if (soort === 'slapend') {
    niveau = antwoorden.vergeten === 'ja' ? 'waarschijnlijk' : 'nee';
    reden = redenVoor(niveau, {
      ja: 'Dit loket is voor erfgenamen of executeurs die niet weten bij welke bank nog geld staat. Weet je de bank wel, bel die bank dan zelf.',
      misschien: '',
      nee: 'Dit loket heb je niet nodig als je alleen je OV-chipkaart of je pensioen wil checken.',
    });
  } else if (soort === 'consignatie') {
    niveau = antwoorden.vergeten === 'ja' ? 'misschien' : 'nee';
    reden = redenVoor(niveau, {
      ja: '',
      misschien: 'In de consignatiekas zit geld waarvan niet duidelijk is van wie het is. Je kunt op naam zoeken. Je moet wel kunnen laten zien dat het van jou is.',
      nee: 'Je gaf aan dat je niet breed naar achtergebleven geld wil zoeken.',
    });
  } else if (soort === 'ov') {
    niveau = antwoorden.vergeten === 'ja' || antwoorden.vergeten === 'ov' ? 'waarschijnlijk' : 'nee';
    reden = redenVoor(niveau, {
      ja: 'Restsaldo vraag je terug via ov-chipkaart.nl. Een verlopen kaart kan nog tot 5 jaar na de einddatum.',
      misschien: '',
      nee: 'Je koos ervoor om het OV-saldo niet te checken.',
    });
  } else if (soort === 'pensioen') {
    const wil = antwoorden.vergeten === 'ja' || antwoorden.vergeten === 'pensioen';
    niveau = !wil ? 'nee' : antwoorden.leeftijd === 'onder-18' ? 'misschien' : 'waarschijnlijk';
    reden = redenVoor(niveau, {
      ja: 'Op mijnpensioenoverzicht.nl zie je met DigiD welk pensioen er op je naam staat.',
      misschien: 'Minderjarigen hebben meestal nog weinig pensioen. Ouders kunnen wel hun eigen overzicht bekijken.',
      nee: 'Je koos ervoor om pensioen niet te checken.',
    });
  } else if (soort === 'bijzondere-bijstand') {
    const kosten = antwoorden.situatie === 'extra-kosten' || antwoorden.situatie === 'allebei' || antwoorden.inkomen === 'laag' ? 'ja' : antwoorden.situatie === 'lang-laag' ? 'twijfel' : 'nee';
    niveau = combine([pastGemeente(), leeftijd, kosten]);
    reden = redenVoor(niveau, {
      ja: 'Je woont in deze gemeente en noemt extra kosten of een laag inkomen. De gemeente beslist per aanvraag.',
      misschien: 'Bijzondere bijstand hangt af van de kosten. Vraag dit het liefst aan vóór je betaalt.',
      nee: pastGemeente() === 'nee'
        ? 'Deze regeling geldt alleen voor inwoners van deze gemeente.'
        : 'Bijzondere bijstand is voor kosten die je nodig hebt en zelf niet kunt betalen.',
    });
  } else if (soort === 'kwijtschelding') {
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' || antwoorden.inkomen === 'weet-niet' ? 'ja' : 'twijfel';
    niveau = combine([pastGemeente(), leeftijd === 'nee' ? 'nee' : 'ja', geld]);
    reden = redenVoor(niveau, {
      ja: 'Met een laag inkomen hoef je gemeentelijke belastingen soms niet te betalen, of maar voor een deel.',
      misschien: 'Of je kwijtschelding krijgt, hangt af van je inkomen, je vermogen en het soort belasting.',
      nee: pastGemeente() === 'nee'
        ? 'Deze kwijtschelding vraag je aan in de gemeente waar de aanslag vandaan komt.'
        : 'Bij een hoog inkomen is kwijtschelding meestal niet mogelijk.',
    });
  } else if (soort === 'minima') {
    const hier = pastGemeente();
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' ? 'ja' : 'twijfel';
    const kind = antwoorden.leeftijd === 'onder-18' ? 'twijfel' : 'ja';
    niveau = combine([hier, geld, kind]);
    reden = redenVoor(niveau, {
      ja: 'Met een laag inkomen in deze gemeente is een pas of meedoenregeling vaak de moeite waard.',
      misschien: antwoorden.leeftijd === 'onder-18'
        ? 'Kinderen doen soms mee via een ouder. Kijk op de pagina van de gemeente.'
        : 'De inkomensgrens verschilt per gemeente. Controleer die op de officiële pagina.',
      nee: hier === 'nee'
        ? 'Deze pas of regeling is van een andere gemeente.'
        : 'Bij een hoog inkomen is een minimaregeling meestal niet mogelijk.',
    });
  } else if (soort === 'inkomenstoeslag') {
    const lang = antwoorden.situatie === 'lang-laag' || antwoorden.situatie === 'allebei' ? 'ja' : 'nee';
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' ? 'ja' : 'twijfel';
    niveau = combine([pastGemeente(), leeftijd, lang, geld]);
    if (leeftijd === 'twijfel' && niveau === 'misschien') {
      reden = 'Je woont hier en je hebt lang een laag inkomen. Deze gemeente vraagt een minimumleeftijd boven 21. Kijk even of je oud genoeg bent.';
    } else {
      reden = redenVoor(niveau, {
        ja: 'Dit lijkt te passen: je woont in deze gemeente, je bent volwassen en je hebt al lang een laag inkomen.',
        misschien: 'Hoe lang je inkomen laag moet zijn, en hoeveel vermogen mag, verschilt per gemeente. Lees de voorwaarden na.',
        nee: pastGemeente() === 'nee'
          ? 'De individuele inkomenstoeslag vraag je aan in je eigen gemeente.'
          : 'Deze toeslag is voor mensen die al lang een laag inkomen hebben en nog geen AOW krijgen.',
      });
    }
  }

  return {
    slug: regeling.slug,
    niveau,
    reden,
  };
}

export function beoordeelAlles(antwoorden, regelingen) {
  return regelingen
    .map((regeling) => ({ regeling, ...beoordeel(antwoorden, regeling) }))
    .filter((item) => item.niveau !== 'nee');
}
