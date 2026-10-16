/**
 * Zoekt de formele aanspreekvorm in lezerstekst.
 * De letters worden opgebouwd zodat dit bestand zelf niet matcht.
 */

const u = String.fromCharCode(117);
const U = String.fromCharCode(85);
const w = String.fromCharCode(119);
const W = String.fromCharCode(87);

const verboden = new RegExp(
  `(?:^|[^A-Za-z0-9_])(?:${u}|${u}${w}|${U}${w}|${U}${W})(?=$|[^A-Za-z0-9_])|(?:^|[^A-Za-z0-9_])${U}(?=$|[^A-Za-z0-9_])`,
  'g',
);

export function regelsMetAanspreekvorm(text) {
  const cleaned = String(text)
    .replace(/https?:\/\/\S+/g, ' ')
    .replaceAll(`${U}-pas`, ' ')
    .replaceAll(`${u}-pas`, ' ');
  const hits = [];
  cleaned.split('\n').forEach((line, index) => {
    verboden.lastIndex = 0;
    if (verboden.test(line)) hits.push(index + 1);
  });
  return hits;
}
