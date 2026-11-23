// Ficha única de personajes. Los registros alimentan casas, cargos e instituciones.
// Los campos desconocidos se dejan explícitos como pendientes; no se infieren parentescos ni legitimidad.
export const members = [
  {
    id: 'otoha-miya', name: 'Otoha Miya', age: null, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Casada con Aran', occupation: 'Emperatriz reinante', familyRole: 'Cabeza de la casa imperial',
    branch: 'Línea imperial directa', legitimacy: 'Descendencia legítima por confirmar en ficha genealógica',
    reportsTo: null, patron: null, points: 0, merits: 0, housePoints: 0, houseMerits: 0
  },
  {
    id: 'aran-miya', name: 'Aran Ojiro', age: 46, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Casado con Otoha Miya', occupation: 'Consorte imperial; antiguo general', familyRole: 'Consorte de la casa soberana',
    branch: 'Incorporado por matrimonio a la línea imperial', legitimacy: 'No aplica: vínculo por matrimonio',
    reportsTo: 'Otoha Miya', patron: null, points: 0, merits: 0, housePoints: 0, houseMerits: 0
  },
  {
    id: 'miya-principe-22', name: 'Príncipe Miya (nombre pendiente)', age: 22, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Pendiente', occupation: 'Formación y ocupación por definir', familyRole: 'Príncipe; descendiente de la emperatriz',
    branch: 'Línea imperial directa', legitimacy: 'Legítima: descendiente de la unión imperial reconocida', reportsTo: 'Otoha Miya y Aran', points: 0, merits: 0
  },
  {
    id: 'muyao-miya', name: 'Muyao Miya', age: 20, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Soltera', occupation: 'Aprendiz del arte de la espada y otras artes marciales', familyRole: 'Princesa imperial',
    branch: 'Línea imperial directa', legitimacy: 'Legítima: descendiente de la unión imperial reconocida', reportsTo: 'Otoha Miya y Aran', points: 0, merits: 0
  },
  {
    id: 'miya-princesa-18', name: 'Princesa Miya (nombre pendiente)', age: 18, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Pendiente', occupation: 'Formación y ocupación por definir', familyRole: 'Princesa imperial',
    branch: 'Línea imperial directa', legitimacy: 'Pendiente de registro', reportsTo: 'Otoha Miya', points: 0, merits: 0
  },
  {
    id: 'minghao-miya', name: 'Minghào Miya', age: 5, houseId: 'miya-soberana', house: 'Casa Miya',
    civilStatus: 'Soltero', occupation: 'Infancia y formación inicial', familyRole: 'Príncipe imperial; hijo menor de Otoha y Aran',
    branch: 'Línea imperial directa', legitimacy: 'Legítima: descendiente de la unión imperial reconocida', reportsTo: 'Otoha Miya y Aran',
    extra: 'Su mascota favorita es Gǒu, el tigre que recibió de regalo por su quinto cumpleaños.', points: 0, merits: 0
  },
  {
    id: 'osamu-miya', name: 'Osamu Miya', age: null, houseId: 'miya-colateral-osamu', house: 'Rama Miya de Osamu',
    civilStatus: 'Pendiente', occupation: 'Príncipe imperial', familyRole: 'Príncipe de rama colateral',
    branch: 'Rama colateral de Osamu', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  },
  {
    id: 'atsumu-miya', name: 'Atsumu Miya', age: null, houseId: 'miya-colateral-atsumu', house: 'Rama Miya de Atsumu',
    civilStatus: 'Pendiente', occupation: 'Príncipe imperial', familyRole: 'Príncipe de rama colateral',
    branch: 'Rama colateral de Atsumu', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  },
  {
    id: 'tadashi-yamaguchi', name: 'Tadashi Yamaguchi', age: null, houseId: 'yamaguchi', house: 'Casa Yamaguchi',
    civilStatus: 'Pendiente', occupation: 'Ministro de Obras', familyRole: 'Cabeza de familia',
    branch: 'Rama principal', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  },
  {
    id: 'kei-yamaguchi', name: 'Kei', age: null, houseId: 'yamaguchi', house: 'Casa Yamaguchi',
    civilStatus: 'Casado con Tadashi Yamaguchi', occupation: 'Consorte de casa', familyRole: 'Consorte de Tadashi',
    branch: 'Incorporado por matrimonio', legitimacy: 'No aplica: vínculo por matrimonio', reportsTo: 'Tadashi Yamaguchi', points: 0, merits: 0
  },
  {
    id: 'tarae-yamaguchi', name: 'Tarae Yamaguchi', age: null, houseId: 'yamaguchi', house: 'Casa Yamaguchi',
    civilStatus: 'Pendiente', occupation: 'Ocupación por definir', familyRole: 'Integrante de la casa',
    branch: 'Rama principal', legitimacy: 'Pendiente de registro', reportsTo: 'Tadashi Yamaguchi', points: 0, merits: 0
  },
  {
    id: 'tsubaru-yamaguchi', name: 'Tsubaru Yamaguchi', age: 22, houseId: 'yamaguchi', house: 'Casa Yamaguchi',
    civilStatus: 'Soltera', occupation: 'Ocupación por definir', familyRole: 'Integrante de la rama principal; hermana de Tadashi',
    branch: 'Rama principal', legitimacy: 'Pendiente de registro', reportsTo: 'Tadashi Yamaguchi', points: 0, merits: 0
  },
  {
    id: 'tobio-kageyama', name: 'Tobio Kageyama', age: 35, houseId: 'kageyama', house: 'Casa Kageyama',
    civilStatus: 'Soltero', occupation: 'General', familyRole: 'Cabeza de familia',
    branch: 'Rama principal', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  },
  {
    id: 'mizuki-kageyama', name: 'Mizuki Kageyama', age: 22, houseId: 'kageyama', house: 'Casa Kageyama',
    civilStatus: 'Soltero', occupation: 'Aprendiz del Valle de la Medicina', familyRole: 'Sobrino del cabeza de casa',
    branch: 'Rama colateral', legitimacy: 'Pendiente de registro', reportsTo: 'Tobio Kageyama',
    patron: 'Alissa Haiba', points: 0, merits: 0
  },
  {
    id: 'sakusa-khaowei', name: 'Sakusa Khaowei', age: 28, houseId: 'sakusa', house: 'Casa Sakusa',
    civilStatus: 'Soltero; voto de renuncia al matrimonio al ingresar a la Guardia Imperial',
    occupation: '千户 — qiānhù; comandante de una unidad nominal de mil hombres', familyRole: 'Antiguo heredero; abdicó de esa condición',
    branch: 'Rama familiar por confirmar', legitimacy: 'Pendiente de registro',
    points: 0, merits: 0
  },
  {
    id: 'akaashi-sumire', name: 'Akaashi Sumire', age: 21, houseId: 'akaashi', house: 'Casa Akaashi',
    civilStatus: 'Comprometida', occupation: 'Miembro del Ministerio de Personal', familyRole: 'Cabeza de la Casa Akaashi',
    branch: 'Rama principal', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  },
  {
    id: 'sakusa-kiyoomi', name: 'Sakusa Kiyoomi', age: 40, houseId: 'sakusa', house: 'Casa Sakusa',
    civilStatus: 'Comprometido con Morisuke Yaku', occupation: 'Funcionario del Ministerio de Justicia', familyRole: 'Heredero de la familia Sakusa',
    branch: 'Rama heredera por confirmar', legitimacy: 'Pendiente de registro', points: 0, merits: 0
  }
];

export const getMember = (id) => members.find(member => member.id === id);
