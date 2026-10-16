import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const root = path.resolve(import.meta.dirname, '..');
const dir = path.join(root, 'src/data/regelingen');
const files = fs.readdirSync(dir).filter((name) => name.endsWith('.yaml'));
const soorten = new Set([
  'zorgtoeslag',
  'huurtoeslag',
  'kinderopvang',
  'kindgebonden',
  'heffingskorting',
  'aangifte',
  'te-veel-belasting',
  'aio',
  'noodfonds',
  'slapend',
  'consignatie',
  'ov',
  'pensioen',
  'bijzondere-bijstand',
  'kwijtschelding',
  'minima',
  'inkomenstoeslag',
]);

const hosts = new Set([
  'www.belastingdienst.nl',
  'www.rijksoverheid.nl',
  'www.overtoeslagen.nl',
  'www.svb.nl',
  'www.amsterdam.nl',
  'www.rotterdam.nl',
  'www.rotterdampas.nl',
  'www.denhaag.nl',
  'ooievaarspas.nl',
  'www.utrecht.nl',
  'loket.digitaal.utrecht.nl',
  'www.u-pas.nl',
  'www.eindhoven.nl',
  'gemeente.groningen.nl',
  'gemeenteraad.groningen.nl',
  'stadjerspas.gemeente.groningen.nl',
  'www.tilburghelpt.nl',
  'www.breda.nl',
  'www.nijmegen.nl',
  'vergoedingen.nijmegen.nl',
  'www.arnhem.nl',
  'www.gelrepas.nl',
  'www.apeldoorn.nl',
  'haarlem.nl',
  'www.haarlemmermeer.nl',
  'programmabegroting.haarlemmermeer.nl',
  'jaarstukken.haarlemmermeer.nl',
  'www.almere.nl',
  'www.stadspasalmere.nl',
  'www.zaanstad.nl',
  'www.slapendetegoeden.nl',
  'www.nvb.nl',
  'www.ov-chipkaart.nl',
  'www.mijnpensioenoverzicht.nl',
  'lokaleregelgeving.overheid.nl',
]);

const gemeenten = yaml.load(fs.readFileSync(path.join(root, 'src/data/gemeenten.yaml'), 'utf8'));
const gemeenteSlugs = new Set(gemeenten.map((item) => item.slug));
const deadlines = yaml.load(fs.readFileSync(path.join(root, 'src/data/deadlines.yaml'), 'utf8'));
const errors = [];
const slugs = new Set();

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

for (const file of files) {
  const data = yaml.load(fs.readFileSync(path.join(dir, file), 'utf8'));
  if (data.slug !== file.replace(/\.yaml$/, '')) fail(file, 'slug komt niet overeen met bestandsnaam');
  if (slugs.has(data.slug)) fail(file, 'slug bestaat al');
  slugs.add(data.slug);
  for (const key of ['naam', 'samenvatting', 'voorWie', 'bedragKort', 'bedrag', 'deadline']) {
    if (typeof data[key] !== 'string' || data[key].trim().length < 8) fail(file, `${key} is te kort`);
  }
  if (!['toeslag', 'belasting', 'vergeten', 'gemeente'].includes(data.categorie)) fail(file, 'categorie');
  if (data.categorie === 'gemeente' && !gemeenteSlugs.has(data.gemeente)) fail(file, 'gemeente onbekend');
  if (data.categorie !== 'gemeente' && data.gemeente !== '') fail(file, 'landelijke regeling heeft een gemeente');
  if (typeof data.bedragZeker !== 'boolean' || typeof data.deadlineZeker !== 'boolean') fail(file, 'zekerheid');
  if (!data.bedragZeker && data.onzeker.length === 0) fail(file, 'onzeker bedrag zonder toelichting');
  if (!data.deadlineZeker && data.onzeker.length === 0) fail(file, 'onzekere deadline zonder toelichting');
  if (!Array.isArray(data.stappen) || data.stappen.length < 1) fail(file, 'stappen');
  if (!Array.isArray(data.voorwaarden) || data.voorwaarden.length < 1) fail(file, 'voorwaarden');
  if (!Array.isArray(data.bronnen) || data.bronnen.length < 1) fail(file, 'bronnen');
  for (const bron of data.bronnen) {
    let url;
    try {
      url = new URL(bron.url);
    } catch {
      fail(file, `bron geen url: ${bron.url}`);
      continue;
    }
    if (url.protocol !== 'https:') fail(file, `bron niet https: ${bron.url}`);
    if (!hosts.has(url.hostname)) fail(file, `bronhost niet toegestaan: ${url.hostname}`);
  }
  if (data.laatstGecontroleerd !== '2026-10-16') fail(file, 'controledatum');
  if (!soorten.has(data.check?.soort)) fail(file, `soort ${data.check?.soort}`);
  if (data.bedrag.toLowerCase().includes('verzekering') && data.categorie !== 'toeslag' && data.slug !== 'den-haag-bijzondere-bijstand' && data.slug !== 'amsterdam-bijzondere-bijstand') {
    // zorgverzekering mag alleen als uitsluiting of bij zorgtoeslag. Geen harde fout.
  }
}

for (const deadline of deadlines) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline.start)) fail(deadline.id, 'startdatum');
  if (deadline.eind && !/^\d{4}-\d{2}-\d{2}$/.test(deadline.eind)) fail(deadline.id, 'einddatum');
  for (const slug of deadline.regelingen) {
    if (!slugs.has(slug)) fail(deadline.id, `onbekende regeling ${slug}`);
  }
}

const nodig = ['zorgtoeslag', 'huurtoeslag', 'kinderopvangtoeslag', 'kindgebonden-budget', 'heffingskortingen', 'teruggaaf-aangifte', 'aio-aanvulling', 'noodfonds-energie', 'slapende-tegoeden', 'consignatiekas', 'ov-chipkaart-restsaldo', 'vergeten-pensioen', 'onterecht-betaalde-belasting'];
for (const slug of nodig) {
  if (!slugs.has(slug)) fail(slug, 'landelijke regeling ontbreekt');
}
for (const gemeente of gemeenten) {
  for (const suffix of ['bijzondere-bijstand', 'kwijtschelding', 'minimaregeling', 'inkomenstoeslag']) {
    const slug = `${gemeente.slug}-${suffix}`;
    if (!slugs.has(slug)) fail(slug, 'gemeentelijke regeling ontbreekt');
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`gegevens ok: ${files.length} regelingen, ${deadlines.length} deadlines`);
