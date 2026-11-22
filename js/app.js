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
const holderByTitle = { 'Ministerio de Obras': 'tadashi-yamaguchi', 'Ministerio de Personal': 'akaashi-sumire' };
el('#institutions-grid').innerHTML = groupOrder.map(group => {
  const cards = institutions.filter(x => x.group === group);
  if (!cards.length) return '';
  return `<section class="institution-group"><h3>${group}</h3><div class="institution-cards">${cards.map(x => `
    <article class="institution-card"><div class="card-top"><span>${x.no}</span><span>${x.group}</span></div><div class="card-kanji">${x.chinese}</div><h4>${x.title}</h4>${(holderByTitle[x.title] && members.find(m => m.id === holderByTitle[x.title]) ? `<p class="institution-holder">${members.find(m => m.id === holderByTitle[x.title]).name} · ${members.find(m => m.id === holderByTitle[x.title]).house}</p>` : x.holder ? `<p class="institution-holder">${x.holder}</p>` : '')}<p>${x.text}</p></article>`).join('')}</div></section>`;
}).join('');

el('#obediences-list').innerHTML = obediences.map((x, i) => `
  <article class="obedience"><span class="obedience-no">0${i + 1}</span><div><span class="chinese-label">${x.chinese}</span><h3>${x.title}</h3><p>${x.text}</p></div></article>`).join('');
el('#agency-list').innerHTML = agency.map(([title, text], i) => `<div class="agency-item"><span>0${i + 1}</span><div><b>${title}</b><small>${text}</small></div></div>`).join('');
const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const memberNode = (member) => `
  <button class="tree-person" type="button" data-member-profile="${esc(member.id)}">
    <span class="tree-avatar">${esc(member.name.split(/\\s+/).map(part => part[0]).slice(0,2).join('').toUpperCase())}</span>
    <span class="tree-person-copy"><strong>${esc(member.name)}</strong><small>${esc(member.familyRole || member.occupation || 'Integrante')}</small><small>${member.age ? esc(member.age + ' años') : 'Edad no consignada'} · ${esc(member.civilStatus || 'Estado civil pendiente')}</small></span>
    <span class="tree-open">↗</span>
  </button>`;
const showMemberProfile = (member) => {
  const dialog = el('#archive-profile-dialog');
  const content = el('#archive-profile-content');
  if (!dialog || !content) return;
  content.innerHTML = `
    <p class="eyebrow">Registro individual · ${esc(member.house || 'Casa sin registrar')}</p>
    <h2>${esc(member.name)}</h2>
    <p class="profile-role">${esc(member.familyRole || member.occupation || 'Integrante')}</p>
    <dl class="profile-facts">
      <div><dt>Edad</dt><dd>${member.age ? esc(member.age + ' años') : 'No consignada'}</dd></div>
      <div><dt>Estado civil</dt><dd>${esc(member.civilStatus || 'Pendiente')}</dd></div>
      <div><dt>Ocupación / dinámica</dt><dd>${esc(member.occupation || 'Pendiente')}</dd></div>
      <div><dt>Rama</dt><dd>${esc(member.branch || 'Pendiente de registro')}</dd></div>
      <div><dt>Filiación</dt><dd>${esc(member.legitimacy || 'Pendiente de registro')}</dd></div>
      <div><dt>Vínculo / responde a</dt><dd>${esc(member.reportsTo || 'No consignado')}</dd></div>
      <div><dt>Patrocinio</dt><dd>${esc(member.patron || 'No aplica / no consignado')}</dd></div>
      <div><dt>Trayectoria individual</dt><dd>${member.points || 0} puntos · ${member.merits || 0} méritos</dd></div>
    </dl>
    ${member.extra ? `<p class="profile-extra">${esc(member.extra)}</p>` : ''}`;
  dialog.showModal();
};
el('#houses-grid').innerHTML = familyBranches.map((family, index) => {
  const familyMembers = members.filter(member => family.name === 'Casa Miya'
    ? member.houseId === 'miya-soberana' || String(member.houseId || '').startsWith('miya-colateral-')
    : member.houseId === (family.name.toLowerCase().replace('casa ', '')) || member.house === family.name);
  const inventory = inventories.find(item => item.family === family.name);
  const head = familyMembers.find(member => /cabeza|emperatriz reinante/i.test(member.familyRole || member.occupation || ''));
  const consorts = familyMembers.filter(member => /consorte/i.test(member.familyRole || member.occupation || '') && member.id !== head?.id);
  const direct = familyMembers.filter(member => /línea imperial directa|rama principal/i.test(member.branch || '') && member.id !== head?.id && !consorts.some(item => item.id === member.id));
  const collateral = familyMembers.filter(member => /colateral/i.test(member.branch || '') || String(member.houseId || '').startsWith('miya-colateral-'));
  const placed = new Set([head, ...consorts, ...direct, ...collateral].filter(Boolean).map(member => member.id));
  const other = familyMembers.filter(member => !placed.has(member.id));
  const branchPanel = (title, description, list) => list.length ? `<section class="tree-branch"><h4>${title}</h4><p>${description}</p><div class="tree-people">${list.map(memberNode).join('')}</div></section>` : '';
  return `
    <article class="house-organigram" id="casa-${esc(family.name.toLowerCase().replace(/[^a-z0-9]+/g,'-'))}">
      <header class="house-organigram-head">
        <div><span class="house-index">0${index + 1}</span><span class="house-type">${esc(family.type)}</span><h3>${esc(family.name)}</h3><p>${esc(family.text)}</p></div>
        <div class="house-summary"><span>CAPITAL FAMILIAR</span><strong>${(familyStandings.find(item => item.name === family.name)?.budget || 0).toLocaleString('es-CO')}</strong><small>taeles disponibles</small><em>${esc(familyStandings.find(item => item.name === family.name)?.incomeLevel || 'Ingreso pendiente')}</em></div>
      </header>
      <div class="tree-chart">
        ${head ? `<div class="tree-root"><span class="tree-kicker">Cabeza de casa</span>${memberNode(head)}</div>` : ''}
        ${consorts.length ? `<div class="tree-branch-line"></div>${branchPanel('Consorte de casa','Incorporación por vínculo matrimonial',consorts)}` : ''}
        ${direct.length ? `<div class="tree-branch-line"></div>${branchPanel(family.name === 'Casa Miya' ? 'Descendencia · línea directa' : 'Rama principal','Integrantes registrados en la línea principal',direct)}` : ''}
        ${collateral.length ? `<div class="tree-branch-line"></div>${branchPanel('Ramas colaterales','Vínculos pertenecientes al linaje, fuera de la línea directa',collateral)}` : ''}
        ${other.length ? `<div class="tree-branch-line"></div>${branchPanel('Otros integrantes','Posición familiar pendiente de clasificación o registro',other)}` : ''}
        ${!familyMembers.length ? '<p class="tree-empty">No hay integrantes registrados.</p>' : ''}
      </div>
      <footer class="house-organigram-foot"><span>${familyMembers.length} integrantes registrados</span><span>${familyStandings.find(item => item.name === family.name)?.housePoints || 0} puntos de casa · ${familyStandings.find(item => item.name === family.name)?.houseMerits || 0} méritos de casa</span></footer>
      ${inventory ? `<details class="house-inventory"><summary>Patrimonio e inventario de la casa</summary><span>${esc(inventory.category)}</span><ul>${inventory.items.map(item => `<li>${esc(item)}</li>`).join('')}</ul></details>` : ''}
    </article>`;
}).join('');
document.addEventListener('click', event => {
  const button = event.target.closest('[data-member-profile]');
  if (button) {
    const member = members.find(item => item.id === button.dataset.memberProfile);
    if (member) showMemberProfile(member);
  }
  if (event.target.closest('#archive-profile-dialog .profile-close')) el('#archive-profile-dialog')?.close();
});
el('#points-grid').innerHTML = pointTypes.map(x => `<article class="point-card"><div class="point-head"><span>${x.code}</span><b>${x.value}</b></div><h3>${x.title}</h3><p>${x.text}</p></article>`).join('');
el('#reward-grid').innerHTML = meritRewards.map(x => `<article class="reward-card"><span>${x.merit} ${x.merit === 1 ? 'MÉRITO' : 'MÉRITOS'}</span><h3>${x.title}</h3><p>${x.benefits}</p></article>`).join('');
// Los inventarios se renderizan dentro de la ficha de cada casa, no en Economía.
el('#salon-games').innerHTML = games.filter(x => x.space === 'SALÓN' && x.points).map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>${x.points} ${x.points === 1 ? 'punto' : 'puntos'} por partida ganada</strong></article>`).join('');
if (el('#patio-games')) el('#patio-games').innerHTML = games.filter(x => x.space === 'PATIO').map(x => `<article class="game-card"><span>${x.type}</span><h3>${x.name}</h3><p>${x.text}</p><strong>Apuesta inicial sugerida: ${x.bet}</strong></article>`).join('');
el('#auction-list').innerHTML = auctionLots.map(x => `<article class="auction-lot"><div><span>${x.lot} · ${x.kind}</span><h3>${x.name}</h3><p>${x.text}</p></div><strong>${x.opening}</strong></article>`).join('');
el('#agenda-grid').innerHTML = publicAgenda.map((x, i) => { const dayNumber = Number(String(x.day).replace(/[^0-9]/g, '')) || 1; const week = String(Math.max(1, Math.ceil(dayNumber / 3))).padStart(2, '0'); return `<article class="agenda-card"><div class="agenda-meta"><span>${x.day} · SEMANA ${week}</span><span>${x.type}</span></div><h3>${x.title}</h3><p>${x.desc}</p><div class="agenda-opportunity"><b>Ocasión de mérito</b><span>${x.opportunity}</span></div></article>`; }).join('');

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
          <a class="family-view-link" href="#casa-${family.id === 'miya-soberana' ? 'casa-miya' : family.id}">Consultar organigrama de la casa ↗</a>
        </div>
        <div class="family-budget"><strong>${family.budget.toLocaleString('es-CO')}</strong><small>TAELES</small><span>Ingreso: ${family.incomeLevel || 'Pendiente'}</span><span>${family.budgetLabel}</span><em>${totalPoints} puntos de casa · ${totalMerits} méritos de casa</em></div>
      </article>`;
  }).join('');
} else {
  el('#standings').innerHTML = `<div class="empty-ledger"><span>名簿</span><p>El libro de familias todavía no contiene registros publicados</p><small>Los puntajes y miembros se incorporarán desde js/data/familias.js</small></div>`;
}

el('#conduct-content').innerHTML = `<div class="family-subtag">05.2 · CONVIVENCIA Y PRECEDENCIA</div><div class="conduct-layout"><div><p class="eyebrow">Convivencia, precedencia y límites</p><h3>El orden de la conducta</h3></div><div><p>El decoro sostiene la convivencia y permite que el mundo narrativo conserve una lógica compartida, pues establece cómo deben tratarse los rangos, qué formas corresponden a cada espacio y hasta dónde puede llegar la conducta de un personaje frente a los demás; no exige que cada intervención esté cargada de fórmulas ceremoniales ni que todos hablen de manera rígida, pero sí que las diferencias de posición se reconozcan y que ninguna escena anule la participación o la autonomía de otra persona.</p><ul>${decorumRules.map(x => `<li>${x}</li>`).join('')}</ul><p class="deduction-note">Cuando una conducta afecte de manera significativa la reputación de una casa o rompa los acuerdos de convivencia, la administración podrá revisar lo ocurrido y aplicar descuentos en el registro familiar de acuerdo con la gravedad del caso, procurando que cualquier consecuencia sea proporcional y esté debidamente justificada.</p></div></div>`;
