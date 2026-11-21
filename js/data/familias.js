// Los presupuestos son valores iniciales de juego, no equivalencias históricas exactas.
// Se registra el capital privado de cada casa por separado de los fondos públicos del cargo.
export const familyStandings = [
  {
    id: 'miya-soberana',
    name: 'Casa Miya · Rama soberana',
    status: 'Casa imperial reinante',
    budget: 50000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Muy alto · patrimonio privado y activos mercantiles',
    members: [
      { name: 'Otoha Miya', position: 'Emperatriz reinante', points: 0, merits: 0 },
      { name: 'Aran', position: 'Consorte imperial', points: 0, merits: 0 }
    ]
  },
  {
    id: 'miya-osamu',
    name: 'Casa Miya · Rama de Osamu',
    status: 'Rama colateral',
    budget: 18000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Alto · patrimonio, colecciones y patronazgo cultural',
    members: [
      { name: 'Osamu Miya', position: 'Príncipe imperial · Consejero de asuntos civiles', points: 0, merits: 0 }
    ]
  },
  {
    id: 'miya-atsumu',
    name: 'Casa Miya · Rama de Atsumu',
    status: 'Rama colateral',
    budget: 18000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Alto · patrimonio, colecciones y patronazgo cultural',
    members: [
      { name: 'Atsumu Miya', position: 'Príncipe imperial', points: 0, merits: 0 }
    ]
  },
  {
    id: 'yamaguchi',
    name: 'Casa Yamaguchi',
    status: 'Casa de servicio',
    budget: 6000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Medio · patrimonio modesto y ascenso reciente por servicio',
    members: [
      { name: 'Tadashi Yamaguchi', position: 'Ministro de Obras', points: 0, merits: 0 }
    ]
  }
];