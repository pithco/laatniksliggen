/**
 * Anonieme zeef. Draait in de browser en in tests.
 * Niets wordt opgeslagen of verstuurd.
 */

export const vragen = [
  {
    id: 'leeftijd',
    tekst: 'Hoe oud bent u?',
    hulp: 'Veel regelingen beginnen bij 18, 21 of de AOW-leeftijd. In 2026 is de AOW-leeftijd 67 jaar.',
    opties: [
      { waarde: 'onder-18', label: 'Jonger dan 18' },
      { waarde: '18-20', label: '18, 19 of 20' },
      { waarde: '21-66', label: '21 tot de AOW-leeftijd' },
      { waarde: 'aow', label: 'Ik heb de AOW-leeftijd, of ik bereik die binnen 2 maanden' },
    ],
  },
  {
    id: 'zorgverzekering',
    tekst: 'Hebt u een Nederlandse zorgverzekering?',
    hulp: 'Die hebt u meestal nodig voor zorgtoeslag. Een aanvullende verzekering telt niet mee.',
    opties: [
      { waarde: 'ja', label: 'Ja' },
      { waarde: 'nee', label: 'Nee' },
      { waarde: 'weet-niet', label: 'Weet ik niet' },
    ],
  },
  {
    id: 'inkomen',
    tekst: 'Hoe is uw inkomen, ongeveer?',
    hulp: 'Een grove inschatting is genoeg. We vragen geen bedrag en bewaren niets.',
    opties: [
      { waarde: 'laag', label: 'Laag. Rond een uitkering of het minimum, of ik red het moeilijk' },
      { waarde: 'midden', label: 'Midden. Ik heb werk of een pensioen, maar het is niet ruim' },
      { waarde: 'hoog', label: 'Hoog. Duidelijk ruim boven een modaal inkomen' },
      { waarde: 'weet-niet', label: 'Wisselend, of ik weet het niet' },
    ],
  },
  {
    id: 'huur',
    tekst: 'Huurt u zelf een woning?',
    hulp: 'Huurtoeslag is bedoeld voor een huurwoning. Een koopwoning telt niet mee.',
    opties: [
      { waarde: 'ja', label: 'Ja, ik huur' },
      { waarde: 'koop', label: 'Nee, ik heb een koopwoning' },
      { waarde: 'anders', label: 'Nee, ik woon bij iemand anders of op een andere manier' },
    ],
  },
  {
    id: 'kinderen',
    tekst: 'Hebt u kinderen die jonger zijn dan 18 jaar?',
    hulp: 'Kinderen die bij u horen, ook stief- of pleegkinderen.',
    opties: [
      { waarde: 'ja', label: 'Ja' },
      { waarde: 'nee', label: 'Nee' },
    ],
  },
  {
    id: 'opvang',
    tekst: 'Gaat een kind naar de kinderopvang?',
    hulp: 'Dagopvang, buitenschoolse opvang of een gastouder. Kinderopvangtoeslag hangt ook af van werk.',
    opties: [
      { waarde: 'werk-en-opvang', label: 'Ja, en ik of mijn partner werkt' },
      { waarde: 'opvang-zonder-werk', label: 'Ja, maar niemand in huis werkt' },
      { waarde: 'geen', label: 'Nee' },
      { waarde: 'nvt', label: 'Niet van toepassing' },
    ],
  },
  {
    id: 'belasting',
    tekst: 'Kan er belasting van u zijn blijven liggen?',
    hulp: 'Bijvoorbeeld omdat u niet het hele jaar werkte, studeerde, of AOW én een klein pensioen krijgt.',
    opties: [
      { waarde: 'terugvragen', label: 'Ja, ik wil kijken of ik belasting terugkrijg' },
      { waarde: 'meerdere-inkomens', label: 'Ik krijg AOW of een uitkering én nog ander inkomen' },
      { waarde: 'nee', label: 'Nee, of ik heb dit al gecontroleerd' },
    ],
  },
  {
    id: 'gemeente',
    tekst: 'In welke gemeente woont u?',
    hulp: 'We hebben de 15 grootste gemeenten opgenomen. Woont u ergens anders, dan laten we de landelijke regelingen zien.',
    opties: [],
  },
  {
    id: 'situatie',
    tekst: 'Hebt u al lang weinig geld, of ineens een rekening die u niet kunt betalen?',
    hulp: 'Dit helpt bij gemeentelijke regelingen. Het is geen aanvraag.',
    opties: [
      { waarde: 'lang-laag', label: 'Al een paar jaar een laag inkomen' },
      { waarde: 'extra-kosten', label: 'Ineens extra kosten, zoals ziekte, verhuizing of school' },
      { waarde: 'allebei', label: 'Allebei' },
      { waarde: 'nee', label: 'Nee' },
    ],
  },
  {
    id: 'vergeten',
    tekst: 'Wilt u zoeken naar geld dat ergens is blijven liggen?',
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
  let reden = 'Op basis van uw antwoorden lijkt deze regeling niet te passen.';

  if (soort === 'zorgtoeslag') {
    const verzekering = antwoorden.zorgverzekering === 'ja' ? 'ja' : antwoorden.zorgverzekering === 'nee' ? 'nee' : 'twijfel';
    niveau = combine([leeftijd, verzekering, inkomen]);
    reden = redenVoor(niveau, {
      ja: 'U bent 18 jaar of ouder, u hebt een zorgverzekering en uw inkomen lijkt niet te hoog.',
      misschien: 'Zorgtoeslag kan passen, maar uw inkomen of verzekering is niet zeker. Maak een proefberekening.',
      nee: 'Zorgtoeslag vraagt een Nederlandse zorgverzekering, leeftijd vanaf 18 en een inkomen onder de grens.',
    });
  } else if (soort === 'huurtoeslag') {
    const huur = antwoorden.huur === 'ja' ? 'ja' : antwoorden.huur === 'anders' ? 'twijfel' : 'nee';
    niveau = combine([leeftijd, huur, inkomen]);
    reden = redenVoor(niveau, {
      ja: 'U huurt en uw inkomen lijkt niet te hoog. Er is in 2026 geen maximale huurprijs meer om mee te mogen doen.',
      misschien: 'Huurtoeslag hangt af van de woning, het inkomen en het vermogen. Controleer dit met een proefberekening.',
      nee: 'Huurtoeslag is voor mensen vanaf 18 jaar die een woning huren en geen hoog inkomen hebben.',
    });
  } else if (soort === 'kinderopvang') {
    const kind = antwoorden.kinderen === 'ja' ? 'ja' : 'nee';
    const opvang = antwoorden.opvang === 'werk-en-opvang' ? 'ja' : antwoorden.opvang === 'opvang-zonder-werk' ? 'twijfel' : 'nee';
    niveau = combine([kind, opvang]);
    reden = redenVoor(niveau, {
      ja: 'Er is kinderopvang en er wordt gewerkt. Vraag de toeslag op tijd aan: meestal binnen 3 maanden.',
      misschien: 'Zonder werk is kinderopvangtoeslag vaak niet mogelijk. Er zijn uitzonderingen. Controleer die bij Dienst Toeslagen.',
      nee: 'Kinderopvangtoeslag is voor ouders met kinderopvang. Meestal moet u of uw partner ook werken.',
    });
  } else if (soort === 'kindgebonden') {
    const kind = antwoorden.kinderen === 'ja' ? 'ja' : 'nee';
    const geld = antwoorden.inkomen === 'hoog' ? 'twijfel' : 'ja';
    niveau = combine([kind, geld]);
    reden = redenVoor(niveau, {
      ja: 'U hebt een kind onder de 18 en uw inkomen lijkt niet hoog. Alleenstaande ouders krijgen meer.',
      misschien: 'Bij een hoger inkomen wordt het kindgebonden budget lager of valt het weg. Doe een proefberekening.',
      nee: 'Kindgebonden budget is een bijdrage voor ouders van kinderen onder de 18.',
    });
  } else if (soort === 'heffingskorting') {
    niveau = leeftijd === 'nee' ? 'nee' : antwoorden.belasting === 'nee' && antwoorden.inkomen === 'hoog' ? 'misschien' : 'waarschijnlijk';
    reden = redenVoor(niveau, {
      ja: 'Heffingskortingen verlagen uw belasting. Die worden vaak al via loon of uitkering verrekend. Controleer ze in uw aangifte.',
      misschien: 'Misschien hebt u toch een korting die nog niet verrekend is. Dat ziet u in een aangifte.',
      nee: 'Heffingskortingen gelden voor mensen die belasting of premie betalen, meestal vanaf 18 jaar.',
    });
  } else if (soort === 'aangifte') {
    const wil = antwoorden.belasting === 'nee' ? 'twijfel' : 'ja';
    niveau = combine([leeftijd === 'nee' ? 'nee' : 'ja', wil]);
    reden = redenVoor(niveau, {
      ja: 'U kunt aangifte doen om te zien of u geld terugkrijgt. Invullen is nog geen aangifte, zolang u niets verstuurt.',
      misschien: 'Ook zonder vermoeden kan een aangifte teruggeven. In 2026 kunt u nog terug naar 2021.',
      nee: 'Deze route is bedoeld voor volwassenen die inkomstenbelasting kunnen terugvragen.',
    });
  } else if (soort === 'te-veel-belasting') {
    const wil = antwoorden.belasting === 'terugvragen' || antwoorden.belasting === 'meerdere-inkomens' ? 'ja' : 'nee';
    niveau = combine([leeftijd === 'nee' ? 'nee' : 'ja', wil]);
    reden = redenVoor(niveau, {
      ja: 'Bij meerdere uitkeringen of een wisselend jaar houdt de betaler soms te veel loonheffing in. Aangifte laat dat zien.',
      misschien: '',
      nee: 'U gaf aan dat u dit al hebt gecontroleerd, of dat het niet speelt.',
    });
  } else if (soort === 'aio') {
    const leeftijdAow = antwoorden.leeftijd === 'aow' ? 'ja' : 'nee';
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' ? 'ja' : 'twijfel';
    niveau = combine([leeftijdAow, geld]);
    reden = redenVoor(niveau, {
      ja: 'Met de AOW-leeftijd en een laag inkomen is een AIO-aanvulling het nakijken waard. Doe de check bij de SVB.',
      misschien: 'Een AIO-aanvulling kan ook bij een onvolledige AOW. Het hangt af van inkomen en vermogen.',
      nee: 'De AIO-aanvulling is voor mensen rond de AOW-leeftijd met weinig inkomen en vermogen.',
    });
  } else if (soort === 'noodfonds') {
    const volwassen = leeftijd === 'nee' ? 'nee' : 'ja';
    niveau = combine([volwassen, inkomen === 'nee' ? 'nee' : inkomen === 'ja' ? 'ja' : 'twijfel']);
    reden = redenVoor(niveau, {
      ja: 'Het Noodfonds Energie is er voor een laag inkomen en een hoge energierekening. Aanvragen kan van 4 januari tot en met 7 mei 2027.',
      misschien: 'Of u geld krijgt, hangt af van uw energierekening. De precieze inkomensgrens staat als te controleren bij deze regeling.',
      nee: 'Het Noodfonds is niet bedoeld bij een hoog inkomen, en niet voor kinderen die zelf een aanvraag doen.',
    });
  } else if (soort === 'slapend') {
    niveau = antwoorden.vergeten === 'ja' ? 'waarschijnlijk' : 'nee';
    reden = redenVoor(niveau, {
      ja: 'Het loket is voor erfgenamen of executeurs die niet weten bij welke bank nog geld staat. Weet u de bank wel, bel dan die bank.',
      misschien: '',
      nee: 'Dit loket is niet nodig als u alleen uw eigen OV-chipkaart of pensioen wilt checken.',
    });
  } else if (soort === 'consignatie') {
    niveau = antwoorden.vergeten === 'ja' ? 'misschien' : 'nee';
    reden = redenVoor(niveau, {
      ja: '',
      misschien: 'In de consignatiekas zit geld waarvan de rechthebbende niet bekend is. Zoeken kan op naam. U moet uw recht kunnen aantonen.',
      nee: 'U gaf aan dat u niet breed naar achtergebleven geld wilt zoeken.',
    });
  } else if (soort === 'ov') {
    niveau = antwoorden.vergeten === 'ja' || antwoorden.vergeten === 'ov' ? 'waarschijnlijk' : 'nee';
    reden = redenVoor(niveau, {
      ja: 'Restsaldo vraagt u terug via ov-chipkaart.nl. Een verlopen kaart kan nog tot 5 jaar na de einddatum.',
      misschien: '',
      nee: 'U koos ervoor om het OV-saldo niet te checken.',
    });
  } else if (soort === 'pensioen') {
    const wil = antwoorden.vergeten === 'ja' || antwoorden.vergeten === 'pensioen';
    niveau = !wil ? 'nee' : antwoorden.leeftijd === 'onder-18' ? 'misschien' : 'waarschijnlijk';
    reden = redenVoor(niveau, {
      ja: 'Op mijnpensioenoverzicht.nl ziet u met DigiD welk pensioen er op uw naam staat.',
      misschien: 'Minderjarigen hebben meestal nog weinig pensioen. Ouders kunnen wel hun eigen overzicht bekijken.',
      nee: 'U koos ervoor om pensioen niet te checken.',
    });
  } else if (soort === 'bijzondere-bijstand') {
    const kosten = antwoorden.situatie === 'extra-kosten' || antwoorden.situatie === 'allebei' || antwoorden.inkomen === 'laag' ? 'ja' : antwoorden.situatie === 'lang-laag' ? 'twijfel' : 'nee';
    niveau = combine([pastGemeente(), leeftijd, kosten]);
    reden = redenVoor(niveau, {
      ja: 'U woont in deze gemeente en noemt extra kosten of een laag inkomen. De gemeente beslist per aanvraag.',
      misschien: 'Bijzondere bijstand hangt af van de kosten. Vraag dit het liefst aan voordat u betaalt.',
      nee: pastGemeente() === 'nee'
        ? 'Deze regeling geldt alleen voor inwoners van deze gemeente.'
        : 'Bijzondere bijstand is voor noodzakelijke kosten die u niet zelf kunt betalen.',
    });
  } else if (soort === 'kwijtschelding') {
    const geld = antwoorden.inkomen === 'hoog' ? 'nee' : antwoorden.inkomen === 'laag' || antwoorden.inkomen === 'weet-niet' ? 'ja' : 'twijfel';
    niveau = combine([pastGemeente(), leeftijd === 'nee' ? 'nee' : 'ja', geld]);
    reden = redenVoor(niveau, {
      ja: 'Met een laag inkomen hoeft u gemeentelijke belastingen soms niet, of maar voor een deel, te betalen.',
      misschien: 'Of u kwijtschelding krijgt, hangt af van inkomen, vermogen en het soort belasting.',
      nee: pastGemeente() === 'nee'
        ? 'Deze kwijtschelding vraagt u aan in de gemeente waar de aanslag vandaan komt.'
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
      reden = 'U woont hier en hebt lang een laag inkomen. Deze gemeente vraagt een minimumleeftijd boven 21. Controleer of u oud genoeg bent.';
    } else {
      reden = redenVoor(niveau, {
        ja: 'U lijkt te voldoen aan de hoofdlijn: wonen in deze gemeente, volwassen en al lang een laag inkomen.',
        misschien: 'De termijn en het vermogen verschillen per gemeente. Lees de voorwaarden na.',
        nee: pastGemeente() === 'nee'
          ? 'De individuele inkomenstoeslag vraagt u aan in uw eigen gemeente.'
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
