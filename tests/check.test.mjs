import assert from 'node:assert/strict';
import test from 'node:test';
import { beoordeelAlles, vragen } from '../src/lib/check.mjs';

const voorbeeld = (slug, soort, extra = {}) => ({
  slug,
  naam: slug,
  gemeente: extra.gemeente ?? '',
  bedragKort: 'x',
  check: { soort, minLeeftijd: extra.minLeeftijd ?? 18, geenAow: extra.geenAow ?? false, ...extra.check },
});

const set = [
  voorbeeld('zorgtoeslag', 'zorgtoeslag'),
  voorbeeld('huurtoeslag', 'huurtoeslag'),
  voorbeeld('kinderopvangtoeslag', 'kinderopvang'),
  voorbeeld('kindgebonden-budget', 'kindgebonden'),
  voorbeeld('amsterdam-bijzondere-bijstand', 'bijzondere-bijstand', { gemeente: 'amsterdam' }),
  voorbeeld('amsterdam-inkomenstoeslag', 'inkomenstoeslag', { gemeente: 'amsterdam', minLeeftijd: 21, geenAow: true }),
  voorbeeld('aio-aanvulling', 'aio'),
];

test('er zijn 10 vragen', () => {
  assert.equal(vragen.length, 10);
});

test('huurder met kinderen en laag inkomen in Amsterdam ziet de hoofdtoeslagen', () => {
  const uitkomst = beoordeelAlles({
    leeftijd: '21-66',
    zorgverzekering: 'ja',
    inkomen: 'laag',
    huur: 'ja',
    kinderen: 'ja',
    opvang: 'werk-en-opvang',
    belasting: 'terugvragen',
    gemeente: 'amsterdam',
    situatie: 'allebei',
    vergeten: 'nee',
  }, set);
  const slugs = uitkomst.filter((item) => item.niveau === 'waarschijnlijk').map((item) => item.slug);
  for (const slug of ['zorgtoeslag', 'huurtoeslag', 'kinderopvangtoeslag', 'kindgebonden-budget', 'amsterdam-bijzondere-bijstand', 'amsterdam-inkomenstoeslag']) {
    assert.ok(slugs.includes(slug), slug);
  }
  assert.equal(slugs.includes('aio-aanvulling'), false);
});

test('hoog inkomen en koopwoning vallen buiten zorg- en huurtoeslag', () => {
  const uitkomst = beoordeelAlles({
    leeftijd: '21-66',
    zorgverzekering: 'ja',
    inkomen: 'hoog',
    huur: 'koop',
    kinderen: 'nee',
    opvang: 'nvt',
    belasting: 'nee',
    gemeente: 'rotterdam',
    situatie: 'nee',
    vergeten: 'nee',
  }, set);
  const slugs = uitkomst.map((item) => item.slug);
  assert.equal(slugs.includes('zorgtoeslag'), false);
  assert.equal(slugs.includes('huurtoeslag'), false);
  assert.equal(slugs.includes('amsterdam-bijzondere-bijstand'), false);
});
