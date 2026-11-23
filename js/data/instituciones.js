export const institutions = [
  { no: '01', title: 'Gran Consejo y secretaría imperial', chinese: '內閣', group: 'ADMINISTRACIÓN CENTRAL', text: 'Apoya a la emperatriz y coordina el trabajo de los ministerios. Reúne informes, revisa memoriales y prepara las disposiciones del gobierno; no sustituye la autoridad de la soberana.' },
  { no: '02', title: 'Ministerio de Personal', chinese: '吏部', group: 'ADMINISTRACIÓN CIVIL', text: 'Registra a los funcionarios y revisa sus nombramientos, ascensos y evaluaciones. Puede recomendar candidatos, pero la designación final corresponde a la autoridad competente.' },
  { no: '03', title: 'Ministerio de Hacienda', chinese: '戶部', group: 'ADMINISTRACIÓN CIVIL', text: 'Administra los ingresos del Estado, los tributos, los censos y la tesorería. Controla el uso del dinero público y lo mantiene separado del patrimonio privado de las casas.' },
  { no: '04', title: 'Ministerio de Ritos', chinese: '禮部', group: 'ADMINISTRACIÓN CIVIL', text: 'Organiza las ceremonias oficiales, el protocolo y el orden de precedencia. También atiende las relaciones diplomáticas y los exámenes imperiales.' },
  { no: '05', title: 'Ministerio de Guerra', chinese: '兵部', group: 'ADMINISTRACIÓN CIVIL', text: 'Lleva los registros militares y coordina nombramientos, suministros y logística. Su labor es administrativa; las tropas están bajo el mando de los generales autorizados.' },
  { no: '06', title: 'Ministerio de Justicia', chinese: '刑部', group: 'ADMINISTRACIÓN CIVIL', text: 'Supervisa investigaciones, procesos y sentencias. Los casos que requieren una decisión superior se remiten a la autoridad imperial.' },
  { no: '07', title: 'Ministerio de Obras', chinese: '工部', group: 'ADMINISTRACIÓN CIVIL', holder: 'Tadashi Yamaguchi · Ministro de Obras', text: 'Planifica y supervisa caminos, puentes, canales, edificios oficiales y talleres estatales. Coordina presupuestos, materiales y personal con Hacienda y las autoridades locales.' },
  { no: '08', title: 'General en Jefe', chinese: '大將軍', group: 'MANDO MILITAR', text: 'Dirige las fuerzas imperiales y responde por su estrategia, disciplina y preparación. Ejecuta las órdenes de defensa emitidas por la Corona.' },
  { no: '09', title: 'Generales y comandantes', chinese: '將領', group: 'MANDO MILITAR', holder: 'Tobio Kageyama · General; Sakusa Khaowei · 千户 (qiānhù)', text: 'Dirigen ejércitos, guarniciones y unidades regionales. Sus operaciones y decisiones deben respetar el cargo recibido y la cadena de mando.' },
  { no: '10', title: 'Guardia Imperial', chinese: '禁衛', group: 'MANDO MILITAR', text: 'Protege a la soberana, al consorte, a los príncipes y los espacios de seguridad especial. También cumple funciones de escolta y guardia ceremonial; no administra asuntos civiles.' },
  { no: '11', title: 'Abad o maestro del templo', chinese: '住持', group: 'AUTORIDAD RELIGIOSA', text: 'Custodia los espacios sagrados, dirige ceremonias y orienta la enseñanza espiritual. Su autoridad es religiosa y no reemplaza las leyes ni al gobierno.' },
  { no: '12', title: 'Clero y servidores del templo', chinese: '僧侶', group: 'AUTORIDAD RELIGIOSA', text: 'Atienden los ritos cotidianos, conservan el templo y reciben a quienes buscan orientación o ayuda. Sus actividades pueden sostenerse mediante donaciones y patronazgo.' },
  { no: '13', title: 'Maestro del Valle de la Medicina', chinese: '醫谷', group: 'INSTITUCIONES ESPECIALIZADAS', text: 'Dirige la atención médica y el estudio de plantas y tratamientos. También forma aprendices y conserva los conocimientos de la institución.' },
  { no: '14', title: 'Artistas y eruditos', chinese: '藝', group: 'INSTITUCIONES ESPECIALIZADAS', text: 'Músicos, pintores, calígrafos, poetas, médicos y estudiosos pueden trabajar por encargo o recibir patrocinio. Su oficio no concede nobleza ni determina su posición familiar.' }
];

export const obediences = [
  { title: 'La cabeza de casa', chinese: '家主', text: 'La cabeza representa a la familia ante la corte y otras casas. Cuida el patrimonio común y responde por los compromisos del linaje; su autoridad depende de la sucesión y del reconocimiento familiar, no de su género.' },
  { title: 'El consorte', chinese: '配偶', text: 'El consorte se incorpora a la casa mediante el matrimonio y participa en la organización del hogar, las visitas y las ceremonias. Puede ser hombre o mujer; el título no elimina su autonomía ni le concede autoridad pública por sí solo.' },
  { title: 'Los demás integrantes', chinese: '家人', text: 'Los hijos y demás parientes participan en la vida familiar según su edad y circunstancias. Pueden estudiar, administrar bienes propios y asumir responsabilidades; enviudar no implica perder automáticamente sus bienes ni sus vínculos familiares.' }
];

export const agency = [
  ['Representación', 'La cabeza de casa habla en nombre del linaje; el consorte puede representarla en reuniones familiares y ceremonias cuando corresponda'],
  ['Administración', 'La cabeza de casa supervisa el patrimonio general y el consorte organiza los recursos y tareas del hogar'],
  ['Mediación', 'Ambos pueden intervenir en disputas, compromisos y reconciliaciones, respetando sus atribuciones'],
  ['Educación y crianza', 'La formación de hijos y protegidos puede organizarse entre los adultos responsables y tutores designados'],
  ['Vida pública', 'Hombres y mujeres pueden asistir a ceremonias, cultivar artes, estudiar y participar en actividades acordes con su rango y el decoro'],
  ['Patronazgo', 'Los miembros con recursos pueden financiar templos, estudios, artistas, obras y actividades de beneficencia']
];