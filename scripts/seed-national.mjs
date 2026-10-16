const b = (naam, url) => ({ naam, url });

const toeslagenAanvragen = [
  'Maak een proefberekening bij Dienst Toeslagen.',
  'Vraag de toeslag aan met DigiD via Mijn Toeslagen.',
  'Kijk daarna elk jaar of uw gegevens nog kloppen. Een te hoge toeslag moet u terugbetalen.',
];

export const nationaleRegelingen = [
  {
    slug: 'zorgtoeslag',
    naam: 'Zorgtoeslag',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'Zorgtoeslag is geld van de overheid voor de premie van uw zorgverzekering. Veel mensen laten dit liggen. Als u 18 jaar of ouder bent en uw inkomen en spaargeld niet te hoog zijn, kunt u het aanvragen.',
    voorWie:
      'Mensen van 18 jaar of ouder met een Nederlandse zorgverzekering. Uw toetsingsinkomen en uw vermogen moeten onder de grens blijven. Hebt u een toeslagpartner, dan telt die mee.',
    bedragKort: 'Maximaal € 129 per maand als u alleen bent (2026)',
    bedrag:
      'In 2026 krijgt u maximaal € 129 per maand als u alleen bent en uw toetsingsinkomen niet hoger is dan € 29.500. Met een toeslagpartner is het maximum dan € 246 per maand samen. Het bedrag daalt als het inkomen stijgt. U krijgt geen zorgtoeslag als uw toetsingsinkomen hoger is dan € 40.857. Samen met een toeslagpartner is die grens € 51.142. Op 1 januari 2026 mag uw vermogen niet hoger zijn dan € 146.011, of € 184.633 samen met een toeslagpartner.',
    bedragZeker: true,
    deadline:
      'Zorgtoeslag over 2026 kunt u aanvragen tot en met 31 december 2027. Over 2025 kan dat nog tot en met 31 december 2026. Hebt u uitstel voor uw belastingaangifte, dan kunt u soms langer de tijd hebben.',
    deadlineZeker: true,
    stappen: toeslagenAanvragen,
    voorwaarden: [
      'U hebt een Nederlandse zorgverzekering.',
      'U bent 18 jaar of ouder.',
      'Uw toetsingsinkomen in 2026 is niet hoger dan € 40.857, of € 51.142 samen met een toeslagpartner.',
      'Uw vermogen op 1 januari 2026 is niet hoger dan € 146.011, of € 184.633 samen.',
    ],
    bronnen: [
      b('Dienst Toeslagen — hoeveel zorgtoeslag', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/hoeveel-zorgtoeslag'),
      b('Dienst Toeslagen — maximaal inkomen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/maximaal-inkomen-voor-zorgtoeslag'),
      b('Dienst Toeslagen — kan ik zorgtoeslag krijgen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/kan-ik-zorgtoeslag-krijgen'),
      b('Dienst Toeslagen — tot wanneer aanvragen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/tot-wanneer-kan-ik-toeslag-aanvragen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['zorgverzekering', 'premie', 'toeslag', 'digid'],
    check: { soort: 'zorgtoeslag', minLeeftijd: 18 },
  },
  {
    slug: 'huurtoeslag',
    naam: 'Huurtoeslag',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'Huurtoeslag is een bijdrage voor de huur van uw woning. In 2026 is de huurprijs zelf geen drempel meer: ook bij een hogere huur kunt u toeslag krijgen, zolang u aan de andere voorwaarden voldoet.',
    voorWie:
      'Mensen van 18 jaar of ouder die een zelfstandige woning huren. Uw inkomen en vermogen mogen niet te hoog zijn. Servicekosten tellen vanaf 2026 niet meer mee, alleen de kale huur.',
    bedragKort: 'Hangt af van huur en inkomen. Rekenhuur tot € 932,93 (21+)',
    bedrag:
      'Er is geen vast bedrag. Dienst Toeslagen rekent voor mensen van 21 jaar of ouder in 2026 met een huur tot maximaal € 932,93. Voor jongeren onder de 21 geldt vaak een lagere berekening. Het exacte bedrag ziet u in een proefberekening. Op 1 januari 2026 mag uw vermogen niet hoger zijn dan € 38.479. Met een toeslagpartner is dat samen € 76.958. Het vermogen van medebewoners kan meetellen.',
    bedragZeker: true,
    deadline:
      'Huurtoeslag over 2026 kunt u aanvragen tot en met 31 december 2027. Over 2025 kan dat nog tot en met 31 december 2026.',
    deadlineZeker: true,
    stappen: toeslagenAanvragen,
    voorwaarden: [
      'U huurt een zelfstandige woonruimte en u bent 18 jaar of ouder.',
      'In 2026 mag de huur niet meer te hoog zijn om mee te doen. De hoogte van de toeslag hangt nog wel af van de kale huur.',
      'Voor 21 jaar en ouder rekent de dienst met een huur tot maximaal € 932,93.',
      'Vermogen op 1 januari 2026: maximaal € 38.479, of € 76.958 samen met een toeslagpartner.',
    ],
    bronnen: [
      b('Dienst Toeslagen — wat verandert er in 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen-2026/topics/veranderingen-toeslagen-2026'),
      b('Over Toeslagen — bedragen 2026', 'https://www.overtoeslagen.nl/actueel/nieuws/2025/11/24/bedragen-huurtoeslag-en-andere-toeslagen-2026-bekend'),
      b('Dienst Toeslagen — maximaal vermogen huurtoeslag', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/maximaal-vermogen-huurtoeslag'),
      b('Dienst Toeslagen — tot wanneer aanvragen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/tot-wanneer-kan-ik-toeslag-aanvragen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'De lagere rekenhuur voor jongeren onder de 21 staat niet als eurobedrag in de bronnen die wij hebben gelezen. Dat bedrag is te controleren.',
    ],
    trefwoorden: ['huur', 'woning', 'kale huur', 'toeslag'],
    check: { soort: 'huurtoeslag', minLeeftijd: 18 },
  },
  {
    slug: 'kinderopvangtoeslag',
    naam: 'Kinderopvangtoeslag',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'Kinderopvangtoeslag betaalt een deel van de opvang mee: dagopvang, buitenschoolse opvang of een gastouder. Wacht niet te lang. Deze toeslag kunt u maar beperkt met terugwerkende kracht aanvragen.',
    voorWie:
      'Ouders van wie een kind naar de kinderopvang gaat. Meestal moet u of uw partner ook werken. De minst werkende ouder bepaalt voor hoeveel maanden u toeslag krijgt.',
    bedragKort: 'Tot 96% van de maximale uurprijs, afhankelijk van het inkomen',
    bedrag:
      'De overheid vergoedt in 2026 maximaal deze uurprijzen: dagopvang € 11,23, buitenschoolse opvang € 9,98 en gastouderopvang € 8,49. Is uw opvang duurder, dan betaalt u het verschil zelf. Ouders met een gezamenlijk inkomen tot ongeveer € 56.400 krijgen 96% van die maximale uurprijs. Per kind vergoedt de overheid maximaal 230 uur per maand. Het precieze percentage bij een hoger inkomen staat in de tabel van Dienst Toeslagen.',
    bedragZeker: false,
    deadline:
      'Vraag kinderopvangtoeslag aan binnen 3 maanden na de maand waarin uw kind voor het eerst naar de opvang gaat. Daarna kunt u maanden missen.',
    deadlineZeker: true,
    stappen: [
      'Regel eerst de opvang en een contract.',
      'Vraag de toeslag binnen 3 maanden aan met DigiD via Mijn Toeslagen.',
      'Geef wijzigingen door, zoals meer of minder uren of een ander inkomen.',
    ],
    voorwaarden: [
      'Uw kind gaat naar dagopvang, buitenschoolse opvang of een gastouder.',
      'U krijgt toeslag over de gewerkte maanden van de ouder die het minst werkt.',
      'Maximaal 230 uur per kind per maand, en maximaal 2.760 uur per jaar.',
      'U betaalt zelf het deel van het uurtarief dat boven de maximale uurprijs uitkomt.',
    ],
    bronnen: [
      b('Rijksoverheid — bedragen kinderopvangtoeslag 2026', 'https://www.rijksoverheid.nl/themas/belastingen-uitkeringen-en-toeslagen/kinderopvangtoeslag/bedragen-kinderopvangtoeslag-2026'),
      b('Dienst Toeslagen — wat verandert er in 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen-2026/topics/veranderingen-toeslagen-2026'),
      b('Over Toeslagen — bedragen 2026', 'https://www.overtoeslagen.nl/actueel/nieuws/2025/11/24/bedragen-huurtoeslag-en-andere-toeslagen-2026-bekend'),
      b('Dienst Toeslagen — wisselend inkomen en termijnen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/ik-heb-een-wisselend-inkomen-heb-ik-recht-op-toeslagen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'De inkomensgrens voor 96% vergoeding verschilt € 1 tussen twee officiële pagina’s: € 56.412 bij Over Toeslagen en € 56.413 bij Dienst Toeslagen. De precieze grens is te controleren.',
    ],
    trefwoorden: ['kinderopvang', 'gastouder', 'bso', 'ouders'],
    check: { soort: 'kinderopvang', minLeeftijd: 18 },
  },
  {
    slug: 'kindgebonden-budget',
    naam: 'Kindgebonden budget',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'Het kindgebonden budget is een bijdrage voor de kosten van kinderen onder de 18. Alleenstaande ouders krijgen meer. Voor kinderen vanaf 12 jaar en vanaf 16 jaar komt er een verhoging bij.',
    voorWie:
      'Ouders met een kind jonger dan 18 jaar, een inkomen dat niet te hoog is en vermogen onder de grens. U hoeft hiervoor geen kinderopvang te hebben.',
    bedragKort: 'Geen vast bedrag. Alleenstaande ouders en oudere kinderen krijgen meer',
    bedrag:
      'Dienst Toeslagen publiceert geen enkel maximum dat voor iedereen geldt. Het bedrag hangt af van uw inkomen, of u een toeslagpartner hebt, het aantal kinderen en hun leeftijd. In 2026 gaat het budget iets omhoog voor alleenstaande ouders met een inkomen tot € 29.736 en voor stellen met een inkomen tot € 39.141. Daarboven wordt het in 2026 wat lager. Maak een proefberekening voor uw eigen bedrag. Het vermogen op 1 januari 2026 mag niet hoger zijn dan € 146.011, of € 184.633 samen met een toeslagpartner.',
    bedragZeker: false,
    deadline:
      'Kindgebonden budget over 2026 kunt u aanvragen tot en met 31 december 2027. Over 2025 kan dat nog tot en met 31 december 2026.',
    deadlineZeker: true,
    stappen: toeslagenAanvragen,
    voorwaarden: [
      'U hebt een kind jonger dan 18 jaar.',
      'Uw vermogen op 1 januari blijft onder de grens.',
      'Alleenstaande ouders krijgen meer dan stellen.',
      'De verhoging voor 12 jaar en 16 jaar gaat in ná de maand waarin het kind die leeftijd bereikt.',
    ],
    bronnen: [
      b('Dienst Toeslagen — hoeveel kindgebonden budget', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/kindgebonden-budget/content/hoeveel-kindgebonden-budget'),
      b('Dienst Toeslagen — maximaal vermogen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/kindgebonden-budget/content/maximaal-vermogen-kindgebonden-budget'),
      b('Dienst Toeslagen — wat verandert er in 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen-2026/topics/veranderingen-toeslagen-2026'),
      b('Dienst Toeslagen — tot wanneer aanvragen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/tot-wanneer-kan-ik-toeslag-aanvragen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'Een maximaal jaarbedrag in euro’s hebben we niet op de pagina van Dienst Toeslagen gevonden. Gebruik de proefberekening. Een vast maximum overnemen zou giswerk zijn.',
    ],
    trefwoorden: ['kinderen', 'alleenstaande ouder', 'school', 'budget'],
    check: { soort: 'kindgebonden', minLeeftijd: 18 },
  },
  {
    slug: 'heffingskortingen',
    naam: 'Heffingskortingen',
    categorie: 'belasting',
    gemeente: '',
    samenvatting:
      'Een heffingskorting is korting op uw inkomstenbelasting en premies. De algemene heffingskorting krijgt bijna iedereen. Werkt u, dan is er ook arbeidskorting. Andere kortingen hangen af van uw situatie. Soms wordt de korting niet helemaal verrekend en kunt u geld terugkrijgen via uw aangifte.',
    voorWie:
      'Mensen die in Nederland wonen en loonbelasting of inkomstenbelasting betalen. Welke korting u krijgt, hangt af van inkomen, werk, kinderen en of u de AOW-leeftijd hebt.',
    bedragKort: 'Algemene heffingskorting tot € 3.115 en arbeidskorting tot € 5.685 (2026)',
    bedrag:
      'In 2026 is de algemene heffingskorting maximaal € 3.115 als u nog niet de AOW-leeftijd hebt. Hebt u het hele jaar de AOW-leeftijd, dan is het maximum € 1.556. De korting bouwt af vanaf een verzamelinkomen van € 29.736 en is € 0 vanaf € 78.426. De arbeidskorting is maximaal € 5.685 (of € 2.840 als u het hele jaar de AOW-leeftijd hebt) en wordt € 0 vanaf een arbeidsinkomen van € 132.921. De ouderenkorting is € 2.067 tot een verzamelinkomen van € 46.002. De alleenstaandeouderenkorting is € 540. De jonggehandicaptenkorting is € 923. De inkomensafhankelijke combinatiekorting is maximaal € 3.032.',
    bedragZeker: true,
    deadline:
      'De korting loopt meestal via uw loon of uitkering. Klopt dat niet, dan regelt u het in de aangifte. Aangifte over een jaar moet vaak vóór 1 mei van het jaar erna binnen zijn. De datum op uw aangiftebrief telt. Zonder brief kunt u tot 5 jaar terug belasting terugvragen.',
    deadlineZeker: true,
    stappen: [
      'Kijk op uw jaaropgave of de heffingskorting is toegepast.',
      'Vul de aangifte in op Mijn Belastingdienst. Zolang u niets verstuurt, is het een proef.',
      'Verstuur de aangifte als u geld terugkrijgt of als u verplicht bent aangifte te doen.',
    ],
    voorwaarden: [
      'De algemene heffingskorting geldt als u in Nederland woont en belasting of premie betaalt.',
      'Arbeidskorting krijgt u over loon, winst of ander werk.',
      'Ouderenkorting krijgt u als u aan het eind van het jaar de AOW-leeftijd hebt.',
      'De inkomensafhankelijke combinatiekorting kan gelden bij een kind onder de 12 en arbeidsinkomen boven € 6.239.',
    ],
    bronnen: [
      b('Rijksoverheid — wat is een heffingskorting', 'https://www.rijksoverheid.nl/vraag-en-antwoord/inkomstenbelasting/wat-is-een-heffingskorting-en-welke-heffingskortingen-zijn-er'),
      b('Belastingdienst — tabel algemene heffingskorting 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/tabel-algemene-heffingskorting-2026'),
      b('Belastingdienst — tabel arbeidskorting 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/tabel-arbeidskorting-2026'),
      b('Belastingdienst — heffingskortingen voor AOW', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/heffingskortingen_voor_aow_gerechtigden'),
      b('Belastingdienst — handboek heffingskortingen 2026', 'https://www.belastingdienst.nl/wps/wcm/connect/fisin/fisin2026/heffingskortingen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['arbeidskorting', 'algemene heffingskorting', 'ouderenkorting', 'aangifte', 'iack'],
    check: { soort: 'heffingskorting', minLeeftijd: 18 },
  },
  {
    slug: 'teruggaaf-aangifte',
    naam: 'Teruggaaf via de belastingaangifte',
    categorie: 'belasting',
    gemeente: '',
    samenvatting:
      'Hebt u geen aangiftebrief gehad? Dan kunt u toch geld terugkrijgen. Bijvoorbeeld als u niet het hele jaar werkte, studeerde, kinderen hebt of maar een deel van het jaar in Nederland woonde. U ziet het bedrag als u de aangifte invult.',
    voorWie:
      'Mensen van wie loonheffing is ingehouden en die misschien te veel hebben betaald. Ook als u niet verplicht bent om aangifte te doen.',
    bedragKort: 'Verschilt per jaar. U ziet het bedrag in de aangifte',
    bedrag:
      'Er is geen vast bedrag. De Belastingdienst laat het zien zodra u de aangifte invult. Invullen is nog geen aangifte: pas als u verstuurt, doet u aangifte. Denkt u dat u over het lopende jaar geld terugkrijgt, dan kunt u een voorlopige aanslag aanvragen.',
    bedragZeker: true,
    deadline:
      'Zonder aangiftebrief kunt u tot 5 jaar na afloop van een jaar aangifte doen. In 2026 kunt u dus nog over 2021 tot en met 2025 belasting terugvragen. Aangifte over 2021 moet uiterlijk op 31 december 2026 binnen zijn. Moet u wel aangifte doen, dan geldt de datum op uw aangiftebrief. Dat is vaak 1 mei.',
    deadlineZeker: true,
    stappen: [
      'Log in op Mijn Belastingdienst met DigiD.',
      'Vul de aangifte als proef in en controleer de gegevens die al ingevuld zijn.',
      'Verstuur alleen als u geld terugkrijgt, of als u verplicht bent aangifte te doen.',
    ],
    voorwaarden: [
      'Er is loonheffing ingehouden op loon of een uitkering.',
      'U hebt geen aangiftebrief nodig om geld terug te vragen.',
      'Ziet u bij het invullen dat u € 58 of meer moet betalen, dan bent u in veel gevallen wél verplicht de aangifte te versturen.',
    ],
    bronnen: [
      b('Belastingdienst — check of u belasting terugkrijgt', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/belasting_betalen_terugvragen/check_of_u_belasting_terugkrijgt/check_of_u_belasting_terugkrijgt'),
      b('Belastingdienst — hoeveel jaar terug', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen'),
      b('Belastingdienst — wanneer moet de aangifte binnen zijn', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-moet-ik-aangifte-doen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['aangifte', 'teruggaaf', 'voorlopige aanslag', 'mijn belastingdienst'],
    check: { soort: 'aangifte', minLeeftijd: 18 },
  },
  {
    slug: 'aio-aanvulling',
    naam: 'AOW en AIO-aanvulling',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'AOW is het basispensioen van de SVB. Is uw AOW niet compleet, of hebt u naast een volledige AOW bijna geen ander inkomen? Dan is er soms een aanvulling: de AIO. Die vraagt u zelf aan. Doe eerst de AIO-check.',
    voorWie:
      'Mensen die in Nederland wonen, de AOW-leeftijd hebben en weinig ander inkomen en vermogen hebben. Ook met een volledige AOW kan het soms, als uw partner de AOW-leeftijd nog niet heeft en u samen weinig inkomen en vermogen hebt.',
    bedragKort: 'Aanvulling tot maximaal € 1.486,46 netto per maand als u alleen woont (2026)',
    bedrag:
      'De AIO vult aan tot een maximum. Vanaf 1 januari 2026 is dat netto per maand, exclusief vakantiegeld: € 1.486,46 als u alleen woont, en € 2.036,95 samen als u met uw partner woont. Het vakantiegeld komt daar bovenop en wordt in mei betaald: € 78,23 als u alleen woont. Van de AIO gaan nog loonheffing en een bijdrage voor de zorgverzekering af. Hebt u zelf AOW of ander inkomen, dan krijgt u alleen het verschil.',
    bedragZeker: true,
    deadline:
      'Er is geen vaste sluitingsdatum. Vanaf 2 maanden voor uw AOW-leeftijd kunt u de AIO-check doen en het formulier downloaden. In 2026 is de AOW-leeftijd 67 jaar. Uw eigen leeftijd hangt af van uw geboortedatum. Die vult u in bij de SVB.',
    deadlineZeker: true,
    stappen: [
      'Kijk op svb.nl wat uw AOW-leeftijd is.',
      'Doe de AIO-check vanaf 2 maanden voor die leeftijd.',
      'Download het formulier als de check zegt dat aanvragen zin heeft, en stuur het naar de SVB.',
    ],
    voorwaarden: [
      'U hebt de AOW-leeftijd en u woont in Nederland.',
      'U hebt geen AOW of geen volledige AOW, weinig ander inkomen en niet te veel vermogen.',
      'Of: u hebt wel een volledige AOW, maar uw partner nog niet, en u hebt samen weinig inkomen en vermogen.',
    ],
    bronnen: [
      b('SVB — voorwaarden AIO', 'https://www.svb.nl/nl/aio/kijk-of-u-een-aio-aanvulling-krijgt'),
      b('SVB — bedragen AIO vanaf 1 januari 2026', 'https://www.svb.nl/nl/aio/bedragen-aio-aanvulling/aio-bedragen'),
      b('SVB — AIO-check', 'https://www.svb.nl/nl/aio/doe-de-aio-check'),
      b('SVB — lagere AOW en AIO', 'https://www.svb.nl/nl/aow/hoeveel-aow-en-andere-pensioenen/lagere-aow-en-aio-aanvulling'),
      b('Rijksoverheid — AOW-leeftijd', 'https://www.rijksoverheid.nl/themas/belastingen-uitkeringen-en-toeslagen/algemene-ouderdomswet-aow/aow-leeftijd'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'De vermogensgrens voor de AIO staat niet in de bedragenpagina die wij hebben gelezen. Die grens is te controleren bij de SVB.',
    ],
    trefwoorden: ['aow', 'aio', 'ouderdom', 'svb', 'aanvulling'],
    check: { soort: 'aio', minLeeftijd: 67, geenAow: false },
  },
  {
    slug: 'noodfonds-energie',
    naam: 'Noodfonds Energie',
    categorie: 'toeslag',
    gemeente: '',
    samenvatting:
      'De landelijke energietoeslag bestaat niet meer. Wel komt het Noodfonds Energie weer open voor huishoudens met een laag inkomen en een hoge energierekening. Uw gemeente kan daarnaast eigen hulp hebben. Dat verschilt per gemeente.',
    voorWie:
      'Huishoudens die een groot deel van hun inkomen aan energie betalen. De Rijksoverheid beschrijft een groep met een lager inkomen (minstens 8% van het inkomen aan energie) en een groep met een iets hoger inkomen (minstens 10%).',
    bedragKort: 'Minimaal € 120 en maximaal € 1.800 in totaal',
    bedrag:
      'U krijgt in totaal minimaal € 120 en maximaal € 1.800 vergoed. Hoeveel het wordt, hangt af van uw inkomen en uw energierekening. De vergoeding wordt waar mogelijk in 12 maanden verrekend via uw energieleverancier. Reken op 4 tot 6 weken na uw aanvraag.',
    bedragZeker: true,
    deadline:
      'Vragen stellen kan vanaf 1 december 2026. Een aanvraag indienen kan van 4 januari 2027 tot en met 7 mei 2027. Lukt digitaal niet, dan kunt u een papieren formulier vragen bij het klantcontactcentrum van het Noodfonds.',
    deadlineZeker: true,
    stappen: [
      'Bewaar uw jaaropgave van het inkomen en een overzicht van de energiekosten.',
      'Vanaf 1 december 2026 kunt u het Noodfonds bellen met vragen.',
      'Dien de aanvraag in tussen 4 januari en 7 mei 2027.',
    ],
    voorwaarden: [
      'U hebt een laag of middeninkomen en een relatief hoge energierekening.',
      'Er is geen landelijke energietoeslag meer met één bedrag voor iedereen.',
      'Lokale energiehulp van uw gemeente is iets anders. Of die bestaat, staat bij uw gemeente.',
    ],
    bronnen: [
      b('Rijksoverheid — geld uit het Noodfonds Energie', 'https://www.rijksoverheid.nl/vraag-en-antwoord/koopkracht/hoe-krijg-ik-geld-terug-uit-het-noodfonds-energie'),
      b('Rijksoverheid — Noodfonds gaat open', 'https://www.rijksoverheid.nl/actueel/nieuws/2026/09/29/noodfonds-energie-gaat-open'),
      b('Rijksoverheid — hulp bij een hoge energierekening', 'https://www.rijksoverheid.nl/vraag-en-antwoord/koopkracht/hoe-krijg-ik-ondersteuning-bij-een-hoge-energierekening'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'De inkomensgrenzen wijken af tussen twee pagina’s van de Rijksoverheid. De vraag-en-antwoordpagina noemt eurobedragen met een gat ertussen. Het nieuwsbericht noemt 130% en 200% van het sociaal minimum. De precieze grens is te controleren.',
      'Of uw eigen gemeente in 2026 nog een lokale energietoeslag heeft, is te controleren op de site van de gemeente.',
    ],
    trefwoorden: ['energie', 'energietoeslag', 'noodfonds', 'energierekening'],
    check: { soort: 'noodfonds', minLeeftijd: 18 },
  },
  {
    slug: 'slapende-tegoeden',
    naam: 'Slapende banktegoeden',
    categorie: 'vergeten',
    gemeente: '',
    samenvatting:
      'Soms staat er nog geld op een bankrekening van iemand die is overleden, terwijl de erfgenamen de bank niet kennen. Banken hebben daar samen een loket voor: slapendetegoeden.nl. Weet u de bank wél, dan belt u die bank zelf.',
    voorWie:
      'Erfgenamen en executeurs die een nalatenschap afhandelen en geen spoor van een rekening vinden, maar wel vermoeden dat die er is.',
    bedragKort: 'Geen vast bedrag. De bank zegt pas later om hoeveel het gaat',
    bedrag:
      'Het loket zegt niet hoeveel geld er staat. Vindt een bank een tegoed, dan krijgt u een e-mail met de naam van de bank. U neemt zelf contact op. De bank vertelt dan het bedrag en welke papieren nog nodig zijn.',
    bedragZeker: true,
    deadline:
      'Er staat geen vaste aanvraagdatum op het loket. Verzamel eerst de papieren. Zonder die papieren wordt het verzoek niet in behandeling genomen.',
    deadlineZeker: true,
    stappen: [
      'Lees de voorwaarden op slapendetegoeden.nl en verzamel de gevraagde documenten.',
      'Weet u bij welke bank het geld staat, neem dan rechtstreeks contact op met die bank. Gebruik het loket niet.',
      'Weet u de bank niet, dien dan één verzoek in. Het loket stuurt het naar de aangesloten banken.',
    ],
    voorwaarden: [
      'U bent erfgenaam of executeur.',
      'U hebt een legitimatie en bewijs, zoals een verklaring van erfrecht of een akte van overlijden.',
      'Het loket is niet bedoeld voor een rekening die u zelf nog kent.',
    ],
    bronnen: [
      b('Loket Slapende Tegoeden', 'https://www.slapendetegoeden.nl/'),
      b('Nederlandse Vereniging van Banken — loket', 'https://www.nvb.nl/themas/dienstverlening-nvb/loket-slapende-tegoeden/'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['bank', 'erfenis', 'rekening', 'nvb', 'nabestaanden'],
    check: { soort: 'slapend', minLeeftijd: 18 },
  },
  {
    slug: 'consignatiekas',
    naam: 'Consignatiekas',
    categorie: 'vergeten',
    gemeente: '',
    samenvatting:
      'In de consignatiekas bewaart het ministerie van Financiën geld waarvan niet duidelijk is wie het mag ontvangen, of waarvan de rechthebbende het nog niet heeft aangenomen. U kunt op naam zoeken en daarna een claim indienen.',
    voorWie:
      'Mensen die denken dat er geld op hun naam of op naam van een erfgenaam in bewaring staat. Bijvoorbeeld uit een erfenis, een faillissement, schuldsanering of onteigening.',
    bedragKort: 'Geen exact bedrag online. U ziet alleen een indicatie',
    bedrag:
      'Het zoekformulier toont geen exact bedrag. U ziet een indicatie: minder dan € 50, € 50 tot en met € 200, of meer dan € 200. Voor het beheer rekent het ministerie geen kosten. Over consignaties vanaf € 45,38 krijgt u bij uitbetaling enkelvoudige rente.',
    bedragZeker: true,
    deadline:
      'Consignaties vanaf 1980 blijven 20 jaar bewaard. Daarna vervalt het geld aan de Staat. Voor consignaties van vóór 1980 en voor bedragen tot € 45,38 is de termijn 60 jaar. Er is geen aparte aanvraagmaand.',
    deadlineZeker: true,
    stappen: [
      'Zoek op het formulier van de Rijksoverheid of uw naam voorkomt.',
      'Verzamel bewijs dat u recht hebt op het bedrag, plus een legitimatie.',
      'Stuur het verzoek naar de Consignatiekas van het ministerie van Financiën.',
    ],
    voorwaarden: [
      'U kunt aantonen dat u de rechthebbende bent, of dat u namens die persoon mag handelen.',
      'In de kas zit alleen geld, geen spullen.',
      'Het geld kan onder meer komen uit nalatenschappen, faillissementen, schuldsanering, onteigening of niet-opgeëiste waardepapieren.',
    ],
    bronnen: [
      b('Rijksoverheid — wat is de consignatiekas', 'https://www.rijksoverheid.nl/vraag-en-antwoord/consignatiekas/wat-is-de-consignatiekas-en-heb-ik-recht-op-geld-uit-de-consignatiekas'),
      b('Rijksoverheid — zoeken', 'https://www.rijksoverheid.nl/themas/overheid-en-democratie/consignatiekas/zoeken-naar-een-uitkering-uit-de-consignatiekas'),
      b('Rijksoverheid — claim indienen', 'https://www.rijksoverheid.nl/themas/overheid-en-democratie/consignatiekas/claim-indienen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['ministerie van financiën', 'erfenis', 'bewaring', 'claim'],
    check: { soort: 'consignatie', minLeeftijd: 18 },
  },
  {
    slug: 'ov-chipkaart-restsaldo',
    naam: 'Restsaldo OV-chipkaart',
    categorie: 'vergeten',
    gemeente: '',
    samenvatting:
      'Staat er nog geld op een oude OV-chipkaart? Dat kunt u terugvragen op uw rekening. Ook als de kaart al verlopen is, zolang u binnen 5 jaar na de einddatum bent.',
    voorWie:
      'Mensen met een persoonlijke of anonieme OV-chipkaart waarop nog saldo staat. Een zakelijke kaart regelt u via uw werkgever.',
    bedragKort: 'Het saldo dat nog op de kaart staat',
    bedrag:
      'U krijgt het restsaldo terug dat nog op de kaart staat. Er is geen vast bedrag. Op ov-chipkaart.nl staat dat het bedrag binnen 15 dagen op uw rekening wordt gestort.',
    bedragZeker: true,
    deadline:
      'Is de kaart verlopen, dan kunt u het saldo tot 5 jaar na de vervaldatum terugvragen. Is de kaart nog geldig, dan kan terugvragen ook. Een nog geldige kaart moet u soms eerst beëindigen bij een automaat.',
    deadlineZeker: true,
    stappen: [
      'Zoek het kaartnummer en de einddatum. Die staan op de kaart.',
      'Vul het formulier in op ov-chipkaart.nl/saldo-terugvragen.',
      'Houd uw IBAN bij de hand. Een zakelijke kaart vraagt u niet hier terug, maar via uw werkgever.',
    ],
    voorwaarden: [
      'Het gaat om saldo op een OV-chipkaart, niet om een abonnement bij een vervoerder.',
      'Bij een kaart die nog geldig is, kunt u de kaart soms pas beëindigen nadat abonnementen zijn stopgezet.',
      'Na beëindigen werkt de kaart niet meer voor OV-fiets, stalling of P+R.',
    ],
    bronnen: [
      b('OV-chipkaart — saldo terugvragen', 'https://www.ov-chipkaart.nl/saldo-terugvragen'),
      b('OV-chipkaart — saldo checken en termijn', 'https://www.ov-chipkaart.nl/check'),
      b('OV-chipkaart — kaart beëindigen', 'https://www.ov-chipkaart.nl/kaart-beeindigen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['ov', 'chipkaart', 'saldo', 'ovpay'],
    check: { soort: 'ov', minLeeftijd: 0 },
  },
  {
    slug: 'vergeten-pensioen',
    naam: 'Vergeten pensioen',
    categorie: 'vergeten',
    gemeente: '',
    samenvatting:
      'Hebt u ergens gewerkt en bent u vergeten dat u daar pensioen opbouwde? Of is een pensioenfonds uw adres kwijt? Op Mijnpensioenoverzicht.nl ziet u welk pensioen er op uw naam staat. U logt in met DigiD.',
    voorWie:
      'Mensen die in Nederland wonen of een DigiD hebben en willen zien welk pensioen er voor hen klaarstaat. Ook als u al met pensioen bent, is het de moeite waard om te kijken of er een klein potje mist.',
    bedragKort: 'Hangt af van wat u hebt opgebouwd. Geen vast bedrag',
    bedrag:
      'Er is geen standaardbedrag. U ziet op het overzicht wat er is opgebouwd en vanaf wanneer het ingaat. Een pensioenfonds kan geld niet uitkeren als het uw adres niet heeft. De contactgegevens voor zo’n vergeten pensioen staan bij het overzicht.',
    bedragZeker: true,
    deadline:
      'Inloggen kan het hele jaar. Per pensioenfonds kunnen eigen termijnen gelden om een pensioen alsnog uit te laten keren. Die termijn is te controleren bij het fonds dat u op het overzicht ziet.',
    deadlineZeker: false,
    stappen: [
      'Vraag een DigiD aan als u die nog niet hebt.',
      'Log in op mijnpensioenoverzicht.nl.',
      'Mist u een pensioen, neem dan contact op met het fonds dat daarbij hoort.',
    ],
    voorwaarden: [
      'U hebt DigiD nodig om uw eigen gegevens te zien.',
      'Het overzicht gaat over pensioen dat in Nederland is opgebouwd bij fondsen en verzekeraars die meedoen.',
      'AOW ziet u apart bij de SVB. Die staat niet als vervanging van dit overzicht.',
    ],
    bronnen: [
      b('Mijnpensioenoverzicht.nl', 'https://www.mijnpensioenoverzicht.nl/'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [
      'Een algemene uiterste datum om vergeten pensioen alsnog op te eisen hebben we niet op mijnpensioenoverzicht.nl gevonden. Die termijn is te controleren bij het pensioenfonds.',
    ],
    trefwoorden: ['pensioen', 'digid', 'mijnpensioenoverzicht', 'fonds'],
    check: { soort: 'pensioen', minLeeftijd: 18 },
  },
  {
    slug: 'onterecht-betaalde-belasting',
    naam: 'Te veel betaalde belasting',
    categorie: 'belasting',
    gemeente: '',
    samenvatting:
      'Krijgt u AOW én een klein pensioen, of meerdere uitkeringen naast elkaar? Dan houdt elke betaler apart belasting in. Samen kan dat te veel zijn. Dat geld krijgt u alleen terug als u aangifte doet.',
    voorWie:
      'Mensen met meer dan één inkomen, zoals AOW plus pensioen, of een uitkering plus een klein baantje. Ook als u geen brief kreeg dat u aangifte moet doen.',
    bedragKort: 'Het te veel ingehouden bedrag. Zichtbaar in de aangifte',
    bedrag:
      'Er is geen vast bedrag. De Belastingdienst schrijft dat u het ziet zodra u de aangifte invult. Hebt u het hele jaar de AOW-leeftijd, dan gelden lagere tarieven en andere heffingskortingen. Daardoor kan er te veel zijn ingehouden, maar soms ook te weinig. Zie u dat u € 58 of meer moet betalen, dan moet u de aangifte juist wél insturen.',
    bedragZeker: true,
    deadline:
      'U kunt tot 5 jaar terug aangifte doen. In 2026 gaat dat over 2021 tot en met 2025. Aangifte over 2021 moet uiterlijk 31 december 2026 binnen zijn.',
    deadlineZeker: true,
    stappen: [
      'Verzamel de jaaropgaven van SVB, pensioenfonds, UWV of werkgever.',
      'Vul de aangifte als proef in op Mijn Belastingdienst.',
      'Verstuur de aangifte als u geld terugkrijgt.',
    ],
    voorwaarden: [
      'Er is loonheffing ingehouden door meer dan één instantie, of de heffingskorting is niet volledig gebruikt.',
      'U hoeft de aangifte niet te versturen als u alleen wilt kijken, behalve als u moet bijbetalen of een aangiftebrief hebt.',
    ],
    bronnen: [
      b('Belastingdienst — AOW en kleinere pensioenen', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/doe-aangifte-met-aow-en-pensioen'),
      b('Belastingdienst — hoeveel jaar terug', 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aangifte_doen/hoeveel-jaar-terug-belastingaangifte-doen'),
    ],
    laatstGecontroleerd: '2026-10-16',
    onzeker: [],
    trefwoorden: ['loonheffing', 'aow', 'pensioen', 'teruggaaf', 'jaaropgave'],
    check: { soort: 'te-veel-belasting', minLeeftijd: 18 },
  },
];

export const deadlines = [
  {
    id: 'toeslag-2025',
    titel: 'Laatste dag: toeslag over 2025 aanvragen',
    start: '2026-12-31',
    eind: null,
    zeker: true,
    regelingen: ['zorgtoeslag', 'huurtoeslag', 'kindgebonden-budget'],
    toelichting:
      'Zorgtoeslag, huurtoeslag en kindgebonden budget over 2025 vraagt u aan tot en met 31 december 2026. Kinderopvangtoeslag heeft een kortere termijn. Bron: Dienst Toeslagen.',
  },
  {
    id: 'aangifte-2021',
    titel: 'Laatste dag: belasting terugvragen over 2021',
    start: '2026-12-31',
    eind: null,
    zeker: true,
    regelingen: ['teruggaaf-aangifte', 'onterecht-betaalde-belasting'],
    toelichting:
      'Aangifte over 2021 moet uiterlijk op 31 december 2026 binnen zijn als u nog geld wilt terugvragen. Bron: Belastingdienst.',
  },
  {
    id: 'noodfonds-vragen',
    titel: 'Noodfonds Energie: u kunt vragen stellen',
    start: '2026-12-01',
    eind: null,
    zeker: true,
    regelingen: ['noodfonds-energie'],
    toelichting:
      'Vanaf 1 december 2026 kunt u het Noodfonds Energie bellen om u voor te bereiden. De aanvraag zelf start op 4 januari 2027. Bron: Rijksoverheid.',
  },
  {
    id: 'noodfonds-aanvraag',
    titel: 'Noodfonds Energie: aanvraag open',
    start: '2027-01-04',
    eind: '2027-05-07',
    zeker: true,
    regelingen: ['noodfonds-energie'],
    toelichting:
      'Een aanvraag indienen kan van 4 januari 2027 tot en met 7 mei 2027. Bron: Rijksoverheid.',
  },
  {
    id: 'aangifte-seizoen-2027',
    titel: 'Aangifte inkomstenbelasting: vaak vóór 1 mei',
    start: '2027-05-01',
    eind: null,
    zeker: false,
    regelingen: ['teruggaaf-aangifte', 'heffingskortingen'],
    toelichting:
      'De Belastingdienst schrijft dat uw aangifte binnen moet zijn vóór de datum op uw aangiftebrief. Vaak is dat 1 mei. Kijk op uw eigen brief. Deze datum is daarmee te controleren voor uw situatie.',
  },
  {
    id: 'rotterdampas-2026',
    titel: 'Rotterdampas 2026-2027 loopt af',
    start: '2027-02-28',
    eind: null,
    zeker: true,
    regelingen: ['rotterdam-minimaregeling'],
    toelichting:
      'De gemeente Rotterdam schrijft dat de Rotterdampas geldig is van 1 maart 2026 tot en met 28 februari 2027.',
  },
  {
    id: 'nijmegen-meedoen-2026',
    titel: 'Meedoenregeling Nijmegen aanvragen',
    start: '2026-12-31',
    eind: null,
    zeker: true,
    regelingen: ['nijmegen-minimaregeling'],
    toelichting:
      'De gemeente Nijmegen schrijft dat u de Meedoenregeling kunt aanvragen tot en met 31 december 2026.',
  },
  {
    id: 'upas-koelkast',
    titel: 'U-pas: korting op een zuinige koelkast loopt tot 30 juni 2027',
    start: '2027-06-30',
    eind: null,
    zeker: true,
    regelingen: ['utrecht-minimaregeling'],
    toelichting:
      'Op u-pas.nl staat dat u tot en met 30 juni 2027 € 275 korting kunt krijgen op een energiezuinige koelkast, zolang de voorraad strekt.',
  },
  {
    id: 'toeslag-2026',
    titel: 'Laatste dag: toeslag over 2026 aanvragen',
    start: '2027-12-31',
    eind: null,
    zeker: true,
    regelingen: ['zorgtoeslag', 'huurtoeslag', 'kindgebonden-budget'],
    toelichting:
      'Zorgtoeslag, huurtoeslag en kindgebonden budget over 2026 vraagt u aan tot en met 31 december 2027. Bron: Dienst Toeslagen.',
  },
  {
    id: 'aangifte-2022',
    titel: 'Laatste dag: belasting terugvragen over 2022',
    start: '2027-12-31',
    eind: null,
    zeker: true,
    regelingen: ['teruggaaf-aangifte'],
    toelichting:
      'Aangifte over 2022 moet uiterlijk op 31 december 2027 binnen zijn. Bron: Belastingdienst.',
  },
];

export const besparen = [
  {
    id: 'vergelijker',
    naam: 'Energie vergelijken',
    tekst: 'Placeholder voor een vergelijker waarmee u later een energiecontract kunt vergelijken. Er is nog geen link.',
  },
  {
    id: 'overstap',
    naam: 'Overstappen van energieleverancier',
    tekst: 'Placeholder voor een affiliate-link over overstappen. Alleen energie. Geen verzekering.',
  },
  {
    id: 'bespaarcheck',
    naam: 'Bespaarcheck voor uw energierekening',
    tekst: 'Placeholder. Als hier later een betaalde link komt, blijft die in dit reklameblok staan.',
  },
];
