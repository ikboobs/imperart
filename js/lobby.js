import { institutions } from './data/instituciones.js';
import { members } from './data/miembros.js';

const holders = {
  'Ministerio de Obras': 'tadashi-yamaguchi',
  'Ministerio de Personal': 'akaashi-sumire',
  'Generales y comandantes': ['tobio-kageyama', 'sakusa-khaowei']
};
const order = ['ADMINISTRACIÓN CENTRAL', 'ADMINISTRACIÓN CIVIL', 'MANDO MILITAR'];
const root = document.querySelector('#lobby-institutions');
root.innerHTML = order.map(group => {
  const cards = institutions.filter(item => item.group === group);
  return `<section class="institution-group"><h3>${group}</h3><div class="institution-cards">${cards.map(item => {
    const holderIds = holders[item.title] ? (Array.isArray(holders[item.title]) ? holders[item.title] : [holders[item.title]]) : [];
    const assigned = holderIds.map(id => members.find(person => person.id === id)).filter(Boolean);
    const holder = assigned.length ? `${assigned.map(member => `<p class="institution-holder">${member.name} · ${member.house}</p>`).join('')}<p class="institution-status">OCUPADO</p>` : `<p class="institution-status">DISPONIBLE / SIN TITULAR REGISTRADO</p>`;
    return `<article class="institution-card"><div class="card-top"><span>${item.no}</span><span>${item.group}</span></div><div class="card-kanji">${item.chinese}</div><h4>${item.title}</h4>${holder}<p>${item.text}</p></article>`;
  }).join('')}</div></section>`;
}).join('');


// Organigrama de la familia soberana. Los nodos abren fichas individuales.
const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const findMember = id => members.find(person => person.id === id);
const node = (id, relation) => {
  const person = findMember(id);
  if (!person) return '';
  const initials = person.name.split(/\s+/).map(part => part[0]).slice(0,2).join('').toUpperCase();
  return `<button class="tree-person" type="button" data-lobby-person="${esc(id)}"><span class="tree-avatar">${esc(initials)}</span><span class="tree-person-copy"><strong>${esc(person.name)}</strong><small>${esc(relation || person.familyRole || person.occupation)}</small><small>${person.age ? esc(person.age + ' años') : 'Edad no consignada'} · ${esc(person.civilStatus || 'Estado civil pendiente')}</small></span><span class="tree-open">↗</span></button>`;
};
const branches = [
  { title: 'Línea imperial directa', description: 'Los cuatro hijos de Otoha y Aran; descendencia de la rama principal.', ids: ['miya-principe-22','muyao-miya','miya-princesa-18','minghao-miya'] },
  { title: 'Rama colateral · Osamu', description: 'Rama dinástica colateral; no equivale a la descendencia directa de la emperatriz.', ids: ['osamu-miya'] },
  { title: 'Rama colateral · Atsumu', description: 'Rama dinástica colateral; no equivale a la descendencia directa de la emperatriz.', ids: ['atsumu-miya'] }
];
const tree = document.querySelector('#lobby-imperial-tree');
if (tree) tree.innerHTML = `<div class="tree-chart lobby-tree-chart">
  <div class="tree-root"><span class="tree-kicker">Soberana · cabeza de la dinastía</span>${node('otoha-miya','Emperatriz reinante')}</div>
  <div class="tree-branch-line"></div>
  <section class="tree-branch tree-consort"><h4>Unión imperial</h4><p>El consorte forma parte de la familia soberana por matrimonio; no comparte la soberanía.</p><div class="tree-people">${node('aran-miya','Emperador Consorte · antiguo general')}</div></section>
  <div class="tree-branch-line"></div>
  <div class="tree-branch-grid">${branches.map(branch => `<section class="tree-branch"><h4>${esc(branch.title)}</h4><p>${esc(branch.description)}</p><div class="tree-people">${branch.ids.map(id => node(id)).join('')}</div></section>`).join('')}</div>
</div>`;
const lobbyDialog = document.querySelector('#lobby-profile-dialog');
const lobbyProfile = document.querySelector('#lobby-profile-content');
document.addEventListener('click', event => {
  const target = event.target.closest('[data-lobby-person]');
  if (target && lobbyDialog && lobbyProfile) {
    const person = findMember(target.dataset.lobbyPerson);
    if (!person) return;
    lobbyProfile.innerHTML = `<p class="eyebrow">Registro de la familia soberana</p><h2>${esc(person.name)}</h2><p class="profile-role">${esc(person.familyRole || person.occupation || 'Integrante')}</p><dl class="profile-facts"><div><dt>Edad</dt><dd>${person.age ? esc(person.age + ' años') : 'No consignada'}</dd></div><div><dt>Estado civil</dt><dd>${esc(person.civilStatus || 'Pendiente')}</dd></div><div><dt>Dinámica</dt><dd>${esc(person.occupation || 'Pendiente')}</dd></div><div><dt>Rama</dt><dd>${esc(person.branch || 'Pendiente')}</dd></div><div><dt>Filiación</dt><dd>${esc(person.legitimacy || 'Pendiente')}</dd></div><div><dt>Responde a</dt><dd>${esc(person.reportsTo || 'No consignado')}</dd></div></dl>${person.extra ? `<p class="profile-extra">${esc(person.extra)}</p>` : ''}`;
    lobbyDialog.showModal();
  }
  if (event.target.closest('#lobby-profile-dialog .profile-close')) lobbyDialog?.close();
});
