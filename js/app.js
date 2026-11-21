import { dynastyStory, familyBranches } from './data/dinastia.js';
import { institutions, obediences, agency } from './data/instituciones.js';
import { pointTypes, rankLadder, decorumRules } from './data/meritos.js';
import { inventories, auctionLots, games } from './data/economia.js';
import { publicAgenda } from './data/agenda.js';
import { familyStandings } from './data/familias.js';

const el = (selector) => document.querySelector(selector);
const prose = (items) => items.map(p => `<p>${p}</p>`).join('');

el('#dynasty-story').innerHTML = prose(dynastyStory);

const groupOrder = ['ADMINISTRACIÓN CENTRAL', 'ADMINISTRACIÓN CIVIL', 'MANDO MILITAR', 'AUTORIDAD RELIGIOSA', 'INSTITUCIONES ESPECIALIZADAS'];
el('#institutions-grid').innerHTML = groupOrder.map(group => {
  const cards = institutions.filter(x => x.group === group);
  if (!cards.length) return '';
  return `<section class="institution-group"><h3>${group}</h3><div class="institution-cards">${cards.map(x => `
    <article class="institution-card"><div class="card-top"><span>${x.no}</span><span>${x.group}</span></div><div class="card-kanji">${x.chinese}</div><h4>${x.title}</h4><p>${x.text}</p></article>`).join('')}</div></section>`;
}).join('');

el('#obediences-list').innerHTML = obediences.map((x, i) => `
  <article class="obedience"><span class="obedience-no">0${i + 1}</span><div><span class="chinese-label">${x.chinese}</span><h3>${x.title}</h3><p>${x.text}</p></div></article>`).join('');
el('#agency-list').innerHTML = agency.map(([title, text], i) => `<div class="agency-item"><span>0${i + 1}</span><div><b>${title}</b><small>${text}</small></div></div>`).join('');
el('#houses-grid').innerHTML = familyBranches.map((x, i) => `<article class="house-card"><span class="house-index">0${i + 1}</span><span class="house-type">${x.type}</span><h3>${x.name}</h3><p>${x.text}</p></article>`).join('');
el('#points-grid').innerHTML = pointTypes.map(x => `<article class="point-card"><div class="point-head"><span>${x.code}</span><b>${x.value}</b></div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
el('#rank-table').innerHTML = rankLadder.map((x, i) => `<div class="rank-row"><span class="rank-no">0${i + 1}</span><b>${x.rank}</b><span class="rank-merit">${x.merit}</span><p>${x.reach}</p></div>`).join('');
el('#inventory-grid').innerHTML = inventories.map((x, i) => `<article class="inventory-card"><span>INVENTARIO · 0${i + 1}</span><h3>${x.family}</h3><small>${x.category}</small><ul>${x.items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('');
el('#games-grid').innerHTML = games.map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>Apuesta sugerida: ${x.bet}</strong></article>`).join('');
el('#auction-list').innerHTML = auctionLots.map(x => `<article class="auction-lot"><div><span>${x.lot} · ${x.kind}</span><h3>${x.name}</h3><p>${x.text}</p></div><strong>${x.opening}</strong></article>`).join('');
el('#agenda-grid').innerHTML = publicAgenda.map((x, i) => { const week = String(Math.ceil((i + 1) / 3)).padStart(2, '0'); return `<article class="agenda-card"><div class="agenda-meta"><span>${x.day} · SEMANA ${week}</span><span>${x.type}</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="agenda-opportunity"><b>Ocasión de mérito</b><span>${x.opportunity}</span></div></article>`; }).join('');

if (familyStandings.length) {
  el('#standings').innerHTML = familyStandings.map((family, i) => {
    const totalPoints = family.members.reduce((sum, member) => sum + member.points, 0);
    const totalMerits = family.members.reduce((sum, member) => sum + member.merits, 0);
    return `
      <article class="standing family-record">
        <div class="standing-rank">0${i + 1}</div>
        <div class="standing-main">
          <h3>${family.name}</h3><span>${family.status} · ${family.members.length} integrantes</span>
          <p class="family-wealth">${family.wealth}</p>
          <div class="member-list">${family.members.map(member => `<span><b>${member.name}</b> · ${member.position} · ${member.points} pts · ${member.merits} méritos</span>`).join('')}</div>
        </div>
        <div class="family-budget"><strong>${family.budget.toLocaleString('es-CO')}</strong><small>TAELES</small><span>${family.budgetLabel}</span><em>${totalPoints} puntos · ${totalMerits} méritos</em></div>
      </article>`;
  }).join('');
} else {
  el('#standings').innerHTML = `<div class="empty-ledger"><span>名簿</span><p>El libro de familias todavía no contiene registros publicados</p><small>Los puntajes y miembros se incorporarán desde js/data/familias.js</small></div>`;
}

el('#conduct-content').innerHTML = `<div class="family-subtag">05.2 · CONVIVENCIA Y PRECEDENCIA</div><div class="conduct-layout"><div><p class="eyebrow">Convivencia, precedencia y límites</p><h3>El orden de la conducta</h3></div><div><p>El decoro sostiene la convivencia y permite que el mundo narrativo conserve una lógica compartida, pues establece cómo deben tratarse los rangos, qué formas corresponden a cada espacio y hasta dónde puede llegar la conducta de un personaje frente a los demás; no exige que cada intervención esté cargada de fórmulas ceremoniales ni que todos hablen de manera rígida, pero sí que las diferencias de posición se reconozcan y que ninguna escena anule la participación o la autonomía de otra persona.</p><ul>${decorumRules.map(x => `<li>${x}</li>`).join('')}</ul><p class="deduction-note">Cuando una conducta afecte de manera significativa la reputación de una casa o rompa los acuerdos de convivencia, la administración podrá revisar lo ocurrido y aplicar descuentos en el registro familiar de acuerdo con la gravedad del caso, procurando que cualquier consecuencia sea proporcional y esté debidamente justificada.</p></div></div>`;
