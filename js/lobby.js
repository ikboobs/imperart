import { institutions } from './data/instituciones.js';
import { members } from './data/miembros.js';

const holders = {
  'Ministerio de Obras': 'tadashi-yamaguchi',
  'Ministerio de Personal': 'akaashi-sumire',
  'Generales y comandantes': 'tobio-kageyama'
};
const order = ['ADMINISTRACIÓN CENTRAL', 'ADMINISTRACIÓN CIVIL', 'MANDO MILITAR'];
const root = document.querySelector('#lobby-institutions');
root.innerHTML = order.map(group => {
  const cards = institutions.filter(item => item.group === group);
  return `<section class="institution-group"><h3>${group}</h3><div class="institution-cards">${cards.map(item => {
    const member = members.find(person => person.id === holders[item.title]);
    const holder = member ? `<p class="institution-holder">${member.name} · ${member.house}</p><p class="institution-status">OCUPADO</p>` : `<p class="institution-status">DISPONIBLE / SIN TITULAR REGISTRADO</p>`;
    return `<article class="institution-card"><div class="card-top"><span>${item.no}</span><span>${item.group}</span></div><div class="card-kanji">${item.chinese}</div><h4>${item.title}</h4>${holder}<p>${item.text}</p></article>`;
  }).join('')}</div></section>`;
}).join('');
