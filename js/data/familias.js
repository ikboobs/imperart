// Los presupuestos son valores iniciales de juego, no equivalencias históricas exactas.
// Se registra el capital privado de cada casa por separado de los fondos públicos del cargo.
export const familyStandings = [
  {
    id: 'miya-soberana',
    name: 'Casa Miya · Rama soberana',
    status: 'Casa imperial reinante',
    budget: 50000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Muy alto · procedencia mercantil por línea materna',
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
    wealth: 'Alto · procedencia erudita por línea materna',
    members: [
      { name: 'Osamu Miya', position: 'Príncipe imperial', points: 0, merits: 0 },
      { name: 'Tarae', position: 'Consorte de la rama', points: 0, merits: 0 }
    ]
  },
  {
    id: 'miya-atsumu',
    name: 'Casa Miya · Rama de Atsumu',
    status: 'Rama colateral',
    budget: 18000,
    budgetLabel: 'Capital privado inicial',
    wealth: 'Alto · procedencia erudita por línea materna',
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
    wealth: 'Medio · ascenso reciente por mérito y servicio',
    members: [
      { name: 'Tadashi Yamaguchi', position: 'Ministro de Obras', points: 0, merits: 0 }
    ]
  }
];