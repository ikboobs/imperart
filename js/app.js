import { dynastyStory, familyBranches } from './data/dinastia.js';
import { institutions, obediences, agency } from './data/instituciones.js';
import { pointTypes, rankLadder, decorumRules } from './data/meritos.js';
import { inventories, auctionLots, games } from './data/economia.js';
import { publicAgenda } from './data/agenda.js';
import { familyStandings } from './data/familias.js';

const el = (selector) => document.querySelector(selector);
const prose = (items) => items.map(p => `<p>${p}</p>`).join('');

el('#dynasty-story').innerHTML = prose(dynastyStory);
el('#institutions-grid').innerHTML = institutions.map(x => `
  <article class="institution-card"><div class="card-top"><span>${x.no}</span><span>${x.group}</span></div><div class="card-kanji">${x.chinese}</div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
el('#obediences-list').innerHTML = obediences.map((x, i) => `
  <article class="obedience"><span class="obedience-no">0${i + 1}</span><div><span class="chinese-label">${x.chinese}</span><h3>${x.title}</h3><p>${x.text}</p></div></article>`).join('');
el('#agency-list').innerHTML = agency.map(([title, text], i) => `<div class="agency-item"><span>0${i + 1}</span><div><b>${title}</b><small>${text}</small></div></div>`).join('');
el('#houses-grid').innerHTML = familyBranches.map((x, i) => `<article class="house-card"><span class="house-index">0${i + 1}</span><span class="house-type">${x.type}</span><h3>${x.name}</h3><p>${x.text}</p></article>`).join('');
el('#points-grid').innerHTML = pointTypes.map(x => `<article class="point-card"><div class="point-head"><span>${x.code}</span><b>${x.value}</b></div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
el('#rank-table').innerHTML = rankLadder.map((x, i) => `<div class="rank-row"><span class="rank-no">0${i + 1}</span><b>${x.rank}</b><span class="rank-merit">${x.merit}</span><p>${x.reach}</p></div>`).join('');
el('#inventory-grid').innerHTML = inventories.map((x, i) => `<article class="inventory-card"><span>INVENTARIO · 0${i + 1}</span><h3>${x.family}</h3><small>${x.category}</small><ul>${x.items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('');
el('#games-grid').innerHTML = games.map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>${x.bet}</strong></article>`).join('');
el('#auction-list').innerHTML = auctionLots.map(x => `<article class="auction-lot"><div><span>${x.lot} · ${x.kind}</span><h3>${x.name}</h3><p>${x.text}</p></div><strong>${x.opening}</strong></article>`).join('');
el('#agenda-grid').innerHTML = publicAgenda.map((x, i) => `<article class="agenda-card"><div class="agenda-meta"><span>${x.day}</span><span>${x.type}</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="agenda-opportunity"><b>Ocasión de mérito</b><span>${x.opportunity}</span></div></article>`).join('');

if (familyStandings.length) {
  el('#standings').innerHTML = familyStandings.sort((a, b) => b.points - a.points).map((x, i) => `
    <article class="standing"><div class="standing-rank">${String(i + 1).padStart(2, '0')}</div><div class="standing-main"><h3>${x.name}</h3><span>${x.members.length} integrantes registrados</span><div class="member-list">${x.members.map(m => `<span>${m.name} <b>${m.points} pts</b></span>`).join('')}</div></div><strong>${x.points}<small>PTS.</small></strong></article>`).join('');
} else {
  el('#standings').innerHTML = `<div class="empty-ledger"><span>名簿</span><p>El libro de familias todavía no contiene registros publicados</p><small>Los puntajes y miembros se incorporarán desde js/data/familias.js</small></div>`;
}

const decorum = document.createElement('section');
decorum.className = 'section decorum-section';
decorum.innerHTML = `<div class="section-tag"><span>11</span> DECORO Y PROTOCOLO</div><div class="decorum-layout"><div><p class="eyebrow">La forma también es una obligación</p><h2>El orden<br><em>de la conducta</em></h2></div><div><p>El decoro regula la convivencia y protege la coherencia del mundo narrativo; no exige fórmulas ceremoniales extensas en cada intervención, pero sí respeto por la precedencia, los títulos, los espacios y los límites de los demás participantes</p><ul>${decorumRules.map(x => `<li>${x}</li>`).join('')}</ul><p class="deduction-note">Las infracciones que afecten la reputación de una casa podrán ocasionar descuentos en sus puntos familiares, según gravedad y revisión administrativa</p></div></div>`;
el('#archivo').before(decorum);
