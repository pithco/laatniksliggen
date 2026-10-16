import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { nationaleRegelingen, deadlines, besparen } from './seed-national.mjs';
import { gemeenten, gemeentelijkeRegelingen } from './seed-gemeenten.mjs';

const root = path.resolve(import.meta.dirname, '..');
const regelingDir = path.join(root, 'src/data/regelingen');

fs.rmSync(regelingDir, { recursive: true, force: true });
fs.mkdirSync(regelingDir, { recursive: true });

const dump = (value) => yaml.dump(value, { lineWidth: 96, noRefs: true, quotingType: '"' });

for (const regeling of [...nationaleRegelingen, ...gemeentelijkeRegelingen]) {
  fs.writeFileSync(path.join(regelingDir, `${regeling.slug}.yaml`), dump(regeling), 'utf8');
}

fs.writeFileSync(path.join(root, 'src/data/gemeenten.yaml'), dump(gemeenten), 'utf8');
fs.writeFileSync(path.join(root, 'src/data/deadlines.yaml'), dump(deadlines), 'utf8');
fs.writeFileSync(path.join(root, 'src/data/besparen.yaml'), dump(besparen), 'utf8');

console.log(`geschreven: ${nationaleRegelingen.length + gemeentelijkeRegelingen.length} regelingen`);
