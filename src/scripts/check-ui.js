import { beoordeelAlles, vragen as basisVragen } from '../lib/check.mjs';

export function startCheck() {
  const root = document.querySelector('#check-app');
  const payloadNode = document.querySelector('#check-payload');
  if (!root || !payloadNode?.textContent) return;

  const payload = JSON.parse(payloadNode.textContent);
  const vragen = basisVragen.map((vraag) => {
    if (vraag.id !== 'gemeente') return vraag;
    return {
      ...vraag,
      opties: [
        ...payload.gemeenten.map((gemeente) => ({ waarde: gemeente.slug, label: gemeente.naam })),
        { waarde: 'anders', label: 'Een andere gemeente' },
        { waarde: 'buitenland', label: 'Ik woon niet in Nederland' },
      ],
    };
  });

  const antwoorden = {};
  let stap = 0;

  const voortgang = root.querySelector('#voortgang');
  const balk = root.querySelector('#balk');
  const veld = root.querySelector('#vraag');
  const terug = root.querySelector('#terug');
  const verder = root.querySelector('#verder');
  const resultaat = root.querySelector('#resultaat');

  function teken() {
    const vraag = vragen[stap];
    const gekozen = antwoorden[vraag.id];
    voortgang.textContent = `Vraag ${stap + 1} van ${vragen.length}`;
    balk.style.width = `${((stap + 1) / vragen.length) * 100}%`;
    veld.innerHTML = '';

    const titel = document.createElement('h2');
    titel.id = 'vraag-titel';
    titel.textContent = vraag.tekst;
    veld.append(titel);

    const hulp = document.createElement('p');
    hulp.textContent = vraag.hulp;
    veld.append(hulp);

    if (vraag.id === 'gemeente') {
      const label = document.createElement('label');
      label.htmlFor = 'gemeente-keuze';
      label.textContent = 'Kies uw gemeente';
      const select = document.createElement('select');
      select.id = 'gemeente-keuze';
      select.name = 'gemeente';
      const leeg = document.createElement('option');
      leeg.value = '';
      leeg.textContent = 'Maak een keuze';
      select.append(leeg);
      for (const optie of vraag.opties) {
        const option = document.createElement('option');
        option.value = optie.waarde;
        option.textContent = optie.label;
        option.selected = gekozen === optie.waarde;
        select.append(option);
      }
      select.addEventListener('change', () => {
        antwoorden.gemeente = select.value;
        verder.disabled = !select.value;
      });
      veld.append(label, select);
    } else {
      const groep = document.createElement('fieldset');
      groep.setAttribute('aria-labelledby', 'vraag-titel');
      groep.style.border = '0';
      groep.style.margin = '0';
      groep.style.padding = '0';
      for (const optie of vraag.opties) {
        const label = document.createElement('label');
        label.className = 'choice';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = vraag.id;
        input.value = optie.waarde;
        input.checked = gekozen === optie.waarde;
        input.addEventListener('change', () => {
          antwoorden[vraag.id] = optie.waarde;
          verder.disabled = false;
        });
        const tekst = document.createElement('span');
        tekst.textContent = optie.label;
        label.append(input, tekst);
        groep.append(label);
      }
      veld.append(groep);
    }

    terug.hidden = stap === 0;
    verder.textContent = stap === vragen.length - 1 ? 'Laat de regelingen zien' : 'Volgende vraag';
    verder.disabled = !gekozen;
    resultaat.hidden = true;
    root.querySelector('#vragenblok').hidden = false;
  }

  function toonResultaat() {
    root.querySelector('#vragenblok').hidden = true;
    resultaat.hidden = false;
    resultaat.innerHTML = '';
    const kop = document.createElement('h2');
    kop.textContent = 'Dit kan bij u passen';
    const intro = document.createElement('p');
    intro.textContent = 'Dit is geen besluit en geen advies. Het is een zeef op uw antwoorden. Kijk altijd op de officiële pagina. Niets is opgeslagen.';
    resultaat.append(kop, intro);

    const uitkomst = beoordeelAlles(antwoorden, payload.regelingen);
    const volgorde = { waarschijnlijk: 0, misschien: 1 };
    uitkomst.sort((a, b) => volgorde[a.niveau] - volgorde[b.niveau] || a.regeling.naam.localeCompare(b.regeling.naam, 'nl'));

    if (uitkomst.length === 0) {
      const leeg = document.createElement('p');
      leeg.textContent = 'Op basis van deze antwoorden zien we geen regeling. Kijk toch even in het overzicht, vooral als uw situatie net anders is.';
      resultaat.append(leeg);
    }

    for (const item of uitkomst) {
      const artikel = document.createElement('article');
      artikel.className = 'result';
      const badge = document.createElement('span');
      badge.className = item.niveau === 'waarschijnlijk' ? 'badge ok' : 'badge warn';
      badge.textContent = item.niveau === 'waarschijnlijk' ? 'waarschijnlijk' : 'misschien';
      const titel = document.createElement('h3');
      const link = document.createElement('a');
      link.href = `/regelingen/${item.regeling.slug}`;
      link.textContent = item.regeling.naam;
      titel.append(link);
      const reden = document.createElement('p');
      reden.textContent = item.reden;
      const bedrag = document.createElement('p');
      bedrag.textContent = item.regeling.bedragKort;
      artikel.append(badge, titel, reden, bedrag);
      if (item.regeling.onzeker) {
        const extra = document.createElement('span');
        extra.className = 'badge warn';
        extra.textContent = 'te controleren';
        artikel.append(extra);
      }
      resultaat.append(artikel);
    }

    const opnieuw = document.createElement('button');
    opnieuw.className = 'button secondary';
    opnieuw.type = 'button';
    opnieuw.textContent = 'Opnieuw beginnen';
    opnieuw.addEventListener('click', () => {
      for (const key of Object.keys(antwoorden)) delete antwoorden[key];
      stap = 0;
      resultaat.hidden = true;
      teken();
    });
    resultaat.append(opnieuw);
    resultaat.focus();
  }

  terug.addEventListener('click', () => {
    stap = Math.max(0, stap - 1);
    teken();
  });
  verder.addEventListener('click', () => {
    if (stap === vragen.length - 1) toonResultaat();
    else {
      stap += 1;
      teken();
    }
  });

  teken();
}
