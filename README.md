# Laat Niks Liggen

Statische site voor [laatniksliggen.nl](https://laatniksliggen.nl). Hij laat in het Nederlands zien welk geld mensen kunnen aanvragen: toeslagen, belasting, vergeten geld en regelingen van de 15 grootste gemeenten.

Dit is geen advies en geen aanvraag. Elk feit heeft een officiële bron. Wat niet hard genoeg is, staat als **te controleren**.

## Lokaal

```bash
npm install
npm test
npm run build
npm run preview
```

De site leest YAML uit `src/data/regelingen` (één bestand per regeling). Opnieuw genereren vanuit de bronbestanden:

```bash
node scripts/generate-content.mjs
npm run check:data
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Configuratie: `netlify.toml`

## Nog leeg, expres

Kopieer `.env.example` naar `.env` als u later iets aanzet. Laat de waarden leeg tot die tijd.

- `PUBLIC_MAILERLITE_FORM_ID` — nieuwsbrief. Geen geheime sleutel.
- `PUBLIC_PLAUSIBLE_DOMAIN` — cookieloze analytics. Staat uit zolang dit leeg is. Pas dan ook de content-security-policy in `netlify.toml` aan.
