// Los presupuestos son valores iniciales de juego, no equivalencias históricas exactas.
// Se registra el capital privado de cada casa por separado de los fondos públicos del cargo.
export const familyStandings = [
  {
    id: 'miya-soberana',
    name: 'Casa Miya',
    status: 'Casa imperial reinante',
    budget: 50000,
    budgetLabel: 'Cuenta familiar · capital privado inicial',
    housePoints: 0,
    houseMerits: 0,
    wealth: 'Muy alto · patrimonio privado, rentas y bienes de la casa reinante',
    members: [
      { name: 'Otoha Miya', position: 'Emperatriz reinante · cabeza de la casa', points: 0, merits: 0 },
      { name: 'Aran', position: 'Consorte imperial · antiguo general', points: 0, merits: 0 },
      { name: 'Cuatro hijos imperiales', position: 'Descendencia de la soberana · nombres pendientes', points: 0, merits: 0 },
      { name: 'Osamu Miya y Atsumu Miya', position: 'Príncipes imperiales · ramas colaterales', points: 0, merits: 0 }
    ]
  },
  {
    id: 'yamaguchi',
    name: 'Casa Yamaguchi',
    status: 'Casa de eruditos · servicio imperial',
    budget: 6000,
    budgetLabel: 'Estipendio alto · servicio civil imperial',
    wealth: 'Alto · ingresos vinculados al servicio ministerial, obras y patrimonio familiar',
    members: [
      { name: 'Tadashi Yamaguchi', position: 'Cabeza de casa · Ministro de Obras', points: 0, merits: 0 },
      { name: 'Kei', position: 'Consorte de Tadashi', points: 0, merits: 0 },
      { name: 'Tarae Yamaguchi', position: 'Integrante de la casa · hermana de Tadashi', points: 0, merits: 0 },
      { name: 'Tsubaru Yamaguchi', position: 'Integrante de la casa · hermana de Tadashi', points: 0, merits: 0 }
    ]
  },
  {
    id: 'kageyama',
    name: 'Casa Kageyama',
    status: 'Casa militar',
    budget: 12000,
    budgetLabel: 'Cuenta familiar · estipendio medio provisional',
    housePoints: 0,
    houseMerits: 0,
    wealth: 'Medio · patrimonio familiar y tradición de servicio militar',
    members: [
      { name: 'Tobio Kageyama', position: 'Cabeza de casa · General', points: 0, merits: 0 },
      { name: 'Mizuki', position: 'Sobrino del cabeza de casa', points: 0, merits: 0 }
    ]
  },
  {
    id: 'sakusa', name: 'Casa Sakusa', status: 'Casa noble · sucesión familiar por precisar', budget: 0,
    budgetLabel: 'Estipendio pendiente de establecer', housePoints: 0, houseMerits: 0,
    wealth: 'Por determinar · patrimonio pendiente de registro',
    members: [
      { name: 'Sakusa Kiyoomi', position: 'Heredero de la familia Sakusa' },
      { name: 'Sakusa Khaowei', position: 'Antiguo heredero; abdicó de esa condición' }
    ]
  },
  {
    id: 'akaashi', name: 'Casa Akaashi', status: 'Casa de servicio civil', budget: 0,
    budgetLabel: 'Estipendio pendiente de establecer', housePoints: 0, houseMerits: 0,
    wealth: 'Por determinar · patrimonio pendiente de registro',
    members: [ { name: 'Akaashi Sumire', position: 'Cabeza de casa · Ministerio de Personal' } ]
  }
];