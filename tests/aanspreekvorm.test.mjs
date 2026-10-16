import assert from 'node:assert/strict';
import test from 'node:test';
import { regelsMetAanspreekvorm } from '../src/lib/aanspreekvorm.mjs';

const u = String.fromCharCode(117);
const U = String.fromCharCode(85);

test('je en jij blijven staan', () => {
  assert.deepEqual(regelsMetAanspreekvorm('Hoi, hoe gaat het met je? Jij regelt dit zelf.'), []);
});

test('losse formele aanspreekvorm valt door de mand', () => {
  assert.ok(regelsMetAanspreekvorm(`Hoe oud bent ${u}?`).length > 0);
  assert.ok(regelsMetAanspreekvorm(`${u}w gemeente`).length > 0);
  assert.ok(regelsMetAanspreekvorm(`${U} woont hier`).length > 0);
  assert.ok(regelsMetAanspreekvorm(`Klopt dit, ${U}?`).length > 0);
});

test('namen en links blijven buiten de check', () => {
  assert.deepEqual(
    regelsMetAanspreekvorm('De U-pas in Utrecht staat op https://www.u-pas.nl/aanvragen en op u-pas.nl.'),
    [],
  );
  assert.deepEqual(regelsMetAanspreekvorm('Aangifte moet uiterlijk 31 december binnen zijn.'), []);
});
