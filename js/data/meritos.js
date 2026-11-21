export const pointTypes = [
  { code: '01', title: 'Puntos de participación', value: '1–2 pts', text: 'Se conceden cuando una intervención desarrolla una relación, una decisión o una consecuencia que aporta algo a la historia compartida, de modo que se valora la continuidad y el contenido de la escena antes que la cantidad de mensajes; por esa razón, los saludos aislados, las respuestas vacías y la repetición de una misma acción sin avance narrativo no generan puntos.' },
  { code: '02', title: 'Puntos de evento', value: '2–4 pts', text: 'Se obtienen mediante una participación activa en banquetes, fiestas de té, competencias, ceremonias y acontecimientos oficiales, teniendo en cuenta el papel que asume cada personaje y la manera en que su intervención contribuye al desarrollo del encuentro; no basta con aparecer en la convocatoria, pues el reconocimiento depende de lo que sucede dentro de la escena.' },
  { code: '03', title: 'Puntos de servicio', value: '2–3 pts', text: 'Reconocen el trabajo que guarda relación con el cargo, la formación o la procedencia del personaje, ya sea preparar una estrategia, atender una misión, colaborar en una curación, organizar un acto o resolver una necesidad concreta de la corte; su concesión exige que la labor tenga un propósito identificable y produzca algún resultado dentro de la narración.' },
  { code: '04', title: 'Puntos de creación', value: '2–4 pts', text: 'Se otorgan a quienes incorporan al mundo del grupo una contribución artística, intelectual o documental que pueda reconocerse dentro de la historia, como una obra, una composición musical, un manuscrito, una investigación, un diseño o una presentación narrativa; la creación debe tener un vínculo claro con el universo compartido y no limitarse a una mención sin desarrollo.' },
  { code: '05', title: 'Puntos de casa', value: '1–3 pts', text: 'Reconocen las acciones que benefician de manera comprobable a una casa y fortalecen su posición dentro de la sociedad, entre ellas una alianza desarrollada en escena, una gestión patrimonial, una actividad de patronazgo o una intervención que mejore su reputación; estos puntos se incorporan al registro familiar, aunque no sustituyen los méritos individuales de quien realizó la acción.' }
];

export const rankLadder = [
  { rank: 'Aspirante', merit: '0', reach: 'Quien comienza su trayectoria puede participar en actividades abiertas, recibir formación y establecer vínculos con otras casas, aunque todavía no cuenta con atribuciones para dirigir una institución ni para hablar en nombre de ella.' },
  { rank: 'Miembro reconocido', merit: '1 mérito', reach: 'Una vez reconocido por su casa, el integrante puede representarla en encuentros de menor alcance, recibir encargos concretos y ser recomendado para funciones de apoyo, siempre dentro de los límites que establece su experiencia.' },
  { rank: 'Oficial menor / discípulo avanzado', merit: '3 méritos', reach: 'Con una trayectoria más amplia, puede coordinar tareas delimitadas, asistir a quien ocupa un cargo superior y asumir responsabilidades supervisadas, adquiriendo experiencia antes de responder por un área de trabajo.' },
  { rank: 'Oficial / especialista', merit: '6 méritos', reach: 'Quien alcanza esta posición puede dirigir un área de trabajo, orientar a los aspirantes y emitir recomendaciones relacionadas con su especialidad, sin exceder las competencias que le han sido confiadas.' },
  { rank: 'Alto cargo / maestro', merit: '10 méritos', reach: 'Los titulares de mayor experiencia pueden dirigir una institución o una función especializada, presentar propuestas de nombramiento y participar en decisiones de mayor alcance, aunque sus atribuciones continúan sujetas a la autoridad imperial y a las normas del cargo.' },
  { rank: 'Titular de institución', merit: '15 méritos', reach: 'La titularidad concede la autoridad correspondiente al puesto asignado y permite responder por el funcionamiento de la institución, pero incluso quien ocupa la máxima posición administrativa debe actuar conforme a la ley, las disposiciones de la soberana y los límites propios de su competencia.' }
];

export const decorumRules = [
  'Reconocer la precedencia de la soberana, el consorte y los títulos imperiales',
  'Mantener el trato correspondiente al rango, la ocasión y el espacio ceremonial',
  'No atribuirse cargos, órdenes o privilegios que el personaje no posee',
  'Evitar insultos públicos, amenazas fuera de personaje y acciones que anulen la participación ajena',
  'Las sanciones narrativas se acuerdan con administración y participantes; nunca se imponen lesiones o castigos permanentes sin consentimiento'
];
