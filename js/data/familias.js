// Los presupuestos son valores iniciales de juego, no equivalencias históricas exactas.
// Se registra el capital privado de cada casa por separado de los fondos públicos del cargo.
export const familyStandings = [
  {
    id: 'miya-soberana',
    name: 'Casa Miya',
    status: 'Casa imperial reinante',
    budget: 50000,
    incomeLevel: 'Muy alto',
    incomeType: 'Rentas de propiedades privadas, patrimonio heredado y activos familiares',
    budgetLabel: 'Capital familiar disponible',
    housePoints: 0,
    houseMerits: 0,
    wealth: 'Muy alto · patrimonio privado, rentas y bienes de la casa reinante',
    incomeLevel: 'Muy alto',
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
    budget: 12000,
    incomeLevel: 'Medio-alto',
    incomeType: 'Rentas privadas, bienes familiares y actividad erudita; sin incluir fondos del Ministerio de Obras',
    budgetLabel: 'Capital familiar disponible',
    wealth: 'Medio-alto · patrimonio privado, rentas y bienes de tradición erudita',
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
    budget: 6000,
    incomeLevel: 'Medio',
    incomeType: 'Patrimonio residencial, bienes familiares y rentas moderadas; el equipo militar oficial no forma parte de la cuenta privada',
    budgetLabel: 'Capital familiar disponible',
    housePoints: 0,
    houseMerits: 0,
    wealth: 'Medio · patrimonio familiar y tradición de servicio militar',
    members: [
      { name: 'Tobio Kageyama', position: 'Cabeza de casa · General', points: 0, merits: 0 },
      { name: 'Mizuki', position: 'Sobrino del cabeza de casa', points: 0, merits: 0 }
    ]
  },
  {
    id: 'sakusa', name: 'Casa Sakusa', status: 'Casa noble · sucesión familiar por precisar', budget: 12000,
    incomeLevel: 'Medio-alto',
    incomeType: 'Rentas de propiedades, patrimonio noble y reservas familiares; separado de la remuneración por servicio militar',
    budgetLabel: 'Capital familiar disponible', housePoints: 0, houseMerits: 0,
    wealth: 'Medio-alto · propiedades privadas, rentas y reservas familiares',
    members: [
      { name: 'Sakusa Kiyoomi', position: 'Heredero de la familia Sakusa' },
      { name: 'Sakusa Khaowei', position: 'Antiguo heredero; abdicó de esa condición' }
    ]
  },
  {
    id: 'akaashi', name: 'Casa Akaashi', status: 'Casa de servicio civil', budget: 2500,
    incomeLevel: 'Bajo-medio',
    incomeType: 'Ingresos modestos por bienes domésticos, rentas menores y patrimonio familiar; el salario del cargo público se registra aparte',
    budgetLabel: 'Capital familiar disponible', housePoints: 0, houseMerits: 0,
    wealth: 'Bajo-medio · patrimonio doméstico y rentas limitadas',
    members: [ { name: 'Akaashi Sumire', position: 'Cabeza de casa · Ministerio de Personal' } ]
  }
];