(() => {
  const data = window.IMPERIAL_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const menuToggle = $('#menuToggle');
  const nav = $('#mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  $$('#mainNav a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  const rankTable = $('#rankTable');
  rankTable.innerHTML = data.ranks.map((rank, index) => `
    <div class="rank-row"><span class="rank-number">${String(index + 1).padStart(2, '0')}</span><b>${rank.name}</b><strong>${rank.merits} <small>méritos</small></strong><span>${rank.description}</span></div>
  `).join('');

  const pointsInput = $('#pointsInput');
  function updateProgress() {
    const points = Math.max(0, Math.floor(Number(pointsInput.value) || 0));
    const merits = Math.floor(points / 10);
    let current = data.ranks[0];
    let next = null;
    data.ranks.forEach((rank, i) => {
      if (merits >= rank.merits) current = rank;
      if (next === null && merits < rank.merits) next = rank;
    });
    $('#meritOutput').textContent = merits;
    $('#rankOutput').textContent = current.name;
    $('#nextRank').textContent = next ? `Te faltan ${Math.max(0, (next.merits * 10) - points)} puntos para alcanzar ${next.name}.` : 'Has alcanzado el último nivel del escalafón.';
  }
  pointsInput.addEventListener('input', updateProgress);
  updateProgress();

  const marketGrid = $('#marketGrid');
  function renderMarket(category = 'Todos') {
    const products = data.market.filter(item => category === 'Todos' || item.category === category);
    marketGrid.innerHTML = products.map(item => `
      <article class="market-item">
        <div class="market-object"><span>${item.mark}</span><small>${item.category.toUpperCase()}</small></div>
        <div class="market-item-info"><span class="item-type">${item.type}</span><h4>${item.name}</h4><p>${item.description}</p><div class="item-price"><b>${item.price} <small>taeles</small></b><span>${item.status}</span></div><button type="button" class="request-product" data-id="${item.id}">Solicitar adquisición</button></div>
      </article>
    `).join('');
  }
  renderMarket();
  const auctionGrid = $('#auctionGrid');
  auctionGrid.innerHTML = data.auctions.map((lot, index) => `
    <article class="auction-lot"><span>LOTE ${String(index + 1).padStart(2, '0')} · SUBASTA</span><h4>${lot.item}</h4><div><small>Salida</small><b>${lot.opening} taeles</b></div><div><small>Oferta actual de muestra</small><b>${lot.current} taeles</b></div><div><small>Incremento mínimo</small><b>${lot.increment} taeles</b></div><p>Cierre: ${lot.closing}</p></article>
  `).join('');
  $$('#marketFilters .filter').forEach(button => button.addEventListener('click', () => {
    $$('#marketFilters .filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderMarket(button.dataset.filter);
  }));

  const form = $('#characterForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const line = `${values.name}, de ${values.age} años, nacido/a en la rama ${values.branch.toLowerCase()} de una familia ${values.family.toLowerCase()}, busca ${values.purpose}.${values.kinship ? ` Vínculo familiar: ${values.kinship}.` : ''}`;
    $('#formFeedback').textContent = `Borrador preparado: ${line} Esta ficha todavía no se ha enviado a un registro compartido.`;
    const blob = new Blob([line], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'ficha-personaje.txt'; a.click();
    URL.revokeObjectURL(url);
  });

  // Solicitudes demostrativas: se guardan únicamente en el navegador actual.
  const dialog = $('#requestDialog');
  const requestForm = $('#requestForm');
  const requestList = $('#requestList');
  const REQUEST_KEY = 'archivoImperial.demoRequests.v1';
  let selectedProduct = null;
  const safe = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function getRequests() {
    try { return JSON.parse(localStorage.getItem(REQUEST_KEY) || '[]'); }
    catch { return []; }
  }
  function renderRequests() {
    const requests = getRequests();
    requestList.innerHTML = requests.length ? requests.slice().reverse().map(item => `
      <article class="request-card"><b>${safe(item.product)}</b><span>Casa: ${safe(item.family)}</span><span>Solicitante: ${safe(item.requester)}</span><small>Estado: <em>Pendiente · borrador local</em></small></article>
    `).join('') : '<span class="empty-state">Todavía no hay solicitudes en este navegador.</span>';
  }
  marketGrid.addEventListener('click', event => {
    const button = event.target.closest('.request-product');
    if (!button) return;
    selectedProduct = data.market.find(item => item.id === button.dataset.id);
    if (!selectedProduct) return;
    $('#requestProductName').textContent = `${selectedProduct.name} · ${selectedProduct.price} taeles`;
    requestForm.reset();
    dialog.showModal();
  });
  $('#closeDialog').addEventListener('click', () => dialog.close());
  requestForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!selectedProduct) return;
    const values = Object.fromEntries(new FormData(requestForm).entries());
    const requests = getRequests();
    requests.push({ id: `REQ-${Date.now()}`, product: selectedProduct.name, price: selectedProduct.price, family: values.family, requester: values.requester, note: values.note, createdAt: new Date().toISOString(), status: 'Pendiente' });
    localStorage.setItem(REQUEST_KEY, JSON.stringify(requests));
    renderRequests();
    dialog.close();
  });
  renderRequests();
})();
