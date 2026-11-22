import { dynastyStory, familyBranches } from './data/dinastia.js';
import { institutions, obediences, agency } from './data/instituciones.js';
import { pointTypes, meritRewards, decorumRules } from './data/meritos.js';
import { inventories, auctionLots, games } from './data/economia.js';
import { publicAgenda } from './data/agenda.js';
import { familyStandings } from './data/familias.js';
import { members } from './data/miembros.js';

const el = (selector) => document.querySelector(selector);
const prose = (items) => items.map(p => `<p>${p}</p>`).join('');

el('#dynasty-story').innerHTML = prose(dynastyStory);

const groupOrder = ['ADMINISTRACIÓN CENTRAL', 'ADMINISTRACIÓN CIVIL', 'MANDO MILITAR', 'AUTORIDAD RELIGIOSA', 'INSTITUCIONES ESPECIALIZADAS'];
const holderByTitle = { 'Ministerio de Obras': 'tadashi-yamaguchi', 'Generales y comandantes': 'tobio-kageyama', 'Ministerio de Personal': 'akaashi-sumire' };
el('#institutions-grid').innerHTML = groupOrder.map(group => {
  const cards = institutions.filter(x => x.group === group);
  if (!cards.length) return '';
  return `<section class="institution-group"><h3>${group}</h3><div class="institution-cards">${cards.map(x => `
    <article class="institution-card"><div class="card-top"><span>${x.no}</span><span>${x.group}</span></div><div class="card-kanji">${x.chinese}</div><h4>${x.title}</h4>${(holderByTitle[x.title] && members.find(m => m.id === holderByTitle[x.title]) ? `<p class="institution-holder">${members.find(m => m.id === holderByTitle[x.title]).name} · ${members.find(m => m.id === holderByTitle[x.title]).house}</p>` : x.holder ? `<p class="institution-holder">${x.holder}</p>` : '')}<p>${x.text}</p></article>`).join('')}</div></section>`;
}).join('');

el('#obediences-list').innerHTML = obediences.map((x, i) => `
  <article class="obedience"><span class="obedience-no">0${i + 1}</span><div><span class="chinese-label">${x.chinese}</span><h3>${x.title}</h3><p>${x.text}</p></div></article>`).join('');
el('#agency-list').innerHTML = agency.map(([title, text], i) => `<div class="agency-item"><span>0${i + 1}</span><div><b>${title}</b><small>${text}</small></div></div>`).join('');
el('#houses-grid').innerHTML = familyBranches.map((x, i) => {
  const key = x.name === 'Casa Miya' ? 'miya-soberana' : x.name.toLowerCase().replace('casa ', '');
  const roster = members.filter(member => member.houseId === key || member.house === x.name);
  const inventory = inventories.find(item => item.family === x.name);
  return `<article class="house-card"><span class="house-index">0${i + 1}</span><span class="house-type">${x.type}</span><h3>${x.name}</h3><p>${x.text}</p>
    <div class="house-roster"><b>Integrantes registrados</b>${roster.map(member => `<div class="house-member"><strong>${member.name}</strong><span>${member.familyRole || member.occupation}</span><small>${member.age ? member.age + ' años · ' : ''}${member.civilStatus || 'Estado civil pendiente'}</small><small>${member.branch || 'Rama pendiente'} · ${member.legitimacy || 'Filiación pendiente'}</small><small>${member.occupation || 'Ocupación pendiente'}${member.reportsTo ? ' · Responde a: ' + member.reportsTo : ''}${member.patron ? ' · Patrocinio: ' + member.patron : ''}</small><small>${member.points || 0} puntos personales · ${member.merits || 0} méritos personales</small></div>`).join('')}</div>
    ${inventory ? `<div class="house-inventory"><b>Patrimonio e inventario</b><ul>${inventory.items.map(item => `<li>${item}</li>`).join('')}</ul></div>` : ''}
  </article>`;
}).join('');
el('#points-grid').innerHTML = pointTypes.map(x => `<article class="point-card"><div class="point-head"><span>${x.code}</span><b>${x.value}</b></div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
el('#reward-grid').innerHTML = meritRewards.map(x => `<article class="reward-card"><span>${x.merit} ${x.merit === 1 ? 'MÉRITO' : 'MÉRITOS'}</span><h3>${x.title}</h3><p>${x.benefits}</p></article>`).join('');
// Los inventarios se renderizan dentro de la ficha de cada casa, no en Economía.
el('#salon-games').innerHTML = games.filter(x => x.space === 'SALÓN' && x.points).map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>${x.points} ${x.points === 1 ? 'punto' : 'puntos'} por partida ganada</strong></article>`).join('');
if (el('#patio-games')) el('#patio-games').innerHTML = games.filter(x => x.space === 'PATIO').map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>Apuesta inicial sugerida: ${x.bet}</strong></article>`).join('');
el('#auction-list').innerHTML = auctionLots.map(x => `<article class="auction-lot"><div><span>${x.lot} · ${x.kind}</span><h3>${x.name}</h3><p>${x.text}</p></div><strong>${x.opening}</strong></article>`).join('');
el('#agenda-grid').innerHTML = publicAgenda.map((x, i) => { const week = String(Math.ceil((i + 1) / 3)).padStart(2, '0'); return `<article class="agenda-card"><div class="agenda-meta"><span>${x.day} · SEMANA ${week}</span><span>${x.type}</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="agenda-opportunity"><b>Ocasión de mérito</b><span>${x.opportunity}</span></div></article>`; }).join('');

if (familyStandings.length) {
  el('#standings').innerHTML = familyStandings.map((family, i) => {
    const totalPoints = family.housePoints || 0;
    const totalMerits = family.houseMerits || Math.floor(totalPoints / 10);
    const familyMembers = members.filter(member => member.houseId === family.id || member.house === family.name);
    return `
      <article class="standing family-record">
        <div class="standing-rank">0${i + 1}</div>
        <div class="standing-main">
          <h3>${family.name}</h3><span>${family.status} · ${familyMembers.length} integrantes</span>
          <p class="family-wealth">${family.wealth}</p>
          <div class="member-list">${familyMembers.map(member => `<span><b>${member.name}</b> · ${member.familyRole || member.occupation} · ${member.points || 0} pts / ${member.merits || 0} méritos</span>`).join('')}</div>
        </div>
        <div class="family-budget"><strong>${family.budget.toLocaleString('es-CO')}</strong><small>TAELES</small><span>Ingreso: ${family.incomeLevel || 'Pendiente'}</span><span>${family.budgetLabel}</span><em>${totalPoints} puntos de casa · ${totalMerits} méritos de casa</em></div>
      </article>`;
  }).join('');
} else {
  el('#standings').innerHTML = `<div class="empty-ledger"><span>名簿</span><p>El libro de familias todavía no contiene registros publicados</p><small>Los puntajes y miembros se incorporarán desde js/data/familias.js</small></div>`;
}

el('#conduct-content').innerHTML = `<div class="family-subtag">05.2 · CONVIVENCIA Y PRECEDENCIA</div><div class="conduct-layout"><div><p class="eyebrow">Convivencia, precedencia y límites</p><h3>El orden de la conducta</h3></div><div><p>El decoro sostiene la convivencia y permite que el mundo narrativo conserve una lógica compartida, pues establece cómo deben tratarse los rangos, qué formas corresponden a cada espacio y hasta dónde puede llegar la conducta de un personaje frente a los demás; no exige que cada intervención esté cargada de fórmulas ceremoniales ni que todos hablen de manera rígida, pero sí que las diferencias de posición se reconozcan y que ninguna escena anule la participación o la autonomía de otra persona.</p><ul>${decorumRules.map(x => `<li>${x}</li>`).join('')}</ul><p class="deduction-note">Cuando una conducta afecte de manera significativa la reputación de una casa o rompa los acuerdos de convivencia, la administración podrá revisar lo ocurrido y aplicar descuentos en el registro familiar de acuerdo con la gravedad del caso, procurando que cualquier consecuencia sea proporcional y esté debidamente justificada.</p></div></div>`;
