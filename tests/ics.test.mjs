import assert from 'node:assert/strict';
import test from 'node:test';
import { buildIcs } from '../src/lib/ics.mjs';

test('agenda bevat een meerdaags blok en escapet tekst', () => {
  const ics = buildIcs([
    {
      id: 'kort',
      titel: 'Toeslag, laatste dag',
      start: '2026-12-31',
      eind: null,
      toelichting: 'Regel 1\nRegel 2',
    },
    {
      id: 'lang',
      titel: 'Noodfonds',
      start: '2027-01-04',
      eind: '2027-05-07',
      toelichting: 'Open',
    },
  ], { nu: new Date('2026-10-16T12:00:00Z') });

  assert.match(ics, /DTSTART;VALUE=DATE:20261231/);
  assert.match(ics, /DTEND;VALUE=DATE:20270101/);
  assert.match(ics, /DTSTART;VALUE=DATE:20270104/);
  assert.match(ics, /DTEND;VALUE=DATE:20270508/);
  assert.match(ics, /SUMMARY:Toeslag\\, laatste dag/);
  assert.match(ics, /DESCRIPTION:Regel 1\\nRegel 2/);
  assert.match(ics, /UID:kort@laatniksliggen.nl/);
  assert.ok(ics.endsWith('\r\n'));
});
