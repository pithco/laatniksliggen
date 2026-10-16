import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export type Bron = { naam: string; url: string };

export type CheckMeta = {
  soort: string;
  minLeeftijd?: number;
  geenAow?: boolean;
  leeftijdZeker?: boolean;
};

export type Regeling = {
  slug: string;
  naam: string;
  categorie: 'toeslag' | 'belasting' | 'vergeten' | 'gemeente';
  gemeente: string;
  samenvatting: string;
  voorWie: string;
  bedragKort: string;
  bedrag: string;
  bedragZeker: boolean;
  deadline: string;
  deadlineZeker: boolean;
  stappen: string[];
  voorwaarden: string[];
  bronnen: Bron[];
  laatstGecontroleerd: string;
  onzeker: string[];
  trefwoorden: string[];
  check: CheckMeta;
};

export type Gemeente = {
  slug: string;
  naam: string;
  provincie: string;
  site: string;
  rang: number;
};

export type Deadline = {
  id: string;
  titel: string;
  start: string;
  eind: string | null;
  zeker: boolean;
  regelingen: string[];
  toelichting: string;
};

export type BespaarSlot = {
  id: string;
  naam: string;
  tekst: string;
};

const dataDir = path.join(process.cwd(), 'src/data');

function readYaml<T>(file: string): T {
  return yaml.load(fs.readFileSync(path.join(dataDir, file), 'utf8')) as T;
}

export const categorieLabel: Record<Regeling['categorie'], string> = {
  toeslag: 'Toeslag',
  belasting: 'Belasting',
  vergeten: 'Vergeten geld',
  gemeente: 'Gemeente',
};

export function formatDatum(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const namen = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  return `${day} ${namen[month - 1]} ${year}`;
}

export function loadRegelingen(): Regeling[] {
  const dir = path.join(dataDir, 'regelingen');
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.yaml'))
    .map((name) => yaml.load(fs.readFileSync(path.join(dir, name), 'utf8')) as Regeling)
    .sort((a, b) => a.naam.localeCompare(b.naam, 'nl'));
}

export function loadGemeenten(): Gemeente[] {
  return readYaml<Gemeente[]>('gemeenten.yaml').sort((a, b) => a.rang - b.rang);
}

export function loadDeadlines(): Deadline[] {
  return readYaml<Deadline[]>('deadlines.yaml').sort((a, b) => a.start.localeCompare(b.start));
}

export function loadBesparen(): BespaarSlot[] {
  return readYaml<BespaarSlot[]>('besparen.yaml');
}

export function gemeenteNaam(slug: string, gemeenten: Gemeente[]): string {
  return gemeenten.find((item) => item.slug === slug)?.naam ?? slug;
}

export function zoektekst(regeling: Regeling, gemeenten: Gemeente[]): string {
  return [
    regeling.naam,
    regeling.samenvatting,
    regeling.bedragKort,
    regeling.voorWie,
    regeling.trefwoorden.join(' '),
    regeling.gemeente ? gemeenteNaam(regeling.gemeente, gemeenten) : '',
    categorieLabel[regeling.categorie],
  ]
    .join(' ')
    .toLocaleLowerCase('nl');
}
