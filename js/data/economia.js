export const inventories = [
  {
    family: 'Casa Miya',
    category: 'PATRIMONIO DE LA CASA REINANTE',
    items: [
      'Residencias familiares y pabellones de uso privado asignados a la casa',
      'Vestiduras, joyas, mobiliario y objetos ceremoniales de propiedad familiar',
      'Colecciones, obsequios diplomáticos recibidos a título privado y piezas heredadas',
      'Rentas y propiedades privadas administradas por la casa',
      'Los sellos de Estado, archivos oficiales, palacios públicos y tesoro imperial pertenecen a la corona o al Estado, no al capital privado familiar'
    ]
  },
  {
    family: 'Casa Yamaguchi',
    category: 'ERUDICIÓN Y SERVICIO IMPERIAL',
    items: [
      'Biblioteca familiar con clásicos, comentarios históricos y tratados de estudio',
      'Manuscritos, cuadernos de anotaciones y colecciones de caligrafía',
      'Pinceles, tintas, papel, sellos personales y mobiliario de estudio',
      'Instrumentos de medición y modelos didácticos relacionados con arquitectura e ingeniería',
      'Propiedades domésticas y rentas privadas; los planos oficiales, presupuestos y expedientes del Ministerio de Obras son bienes del Estado'
    ]
  },
  {
    family: 'Casa Kageyama',
    category: 'PATRIMONIO DE TRADICIÓN MILITAR',
    items: [
      'Armas, armaduras y equipo de entrenamiento de propiedad familiar',
      'Caballos, arreos, sillas y equipo ecuestre privado',
      'Manuales de estrategia, tratados militares y registros familiares de formación',
      'Propiedades residenciales y espacios privados destinados al entrenamiento',
      'Las armas de dotación, mapas operativos, registros de tropas y suministros imperiales permanecen bajo custodia del Estado'
    ]
  }
];

export const auctionLots = [
  { lot: 'LOTE 01', name: 'Compendio de fórmulas del Valle', kind: 'MANUSCRITO MÉDICO', text: 'Copia antigua de un recetario atribuido a un médico de renombre, en cuyas páginas se reúnen observaciones sobre hierbas, preparados y tratamientos tradicionales; su valor dependerá tanto del estado del manuscrito como de la escuela a la que se atribuya.', opening: 'Desde 120 taeles' },
  { lot: 'LOTE 02', name: 'Edición comentada de un clásico', kind: 'LIBRO DE COLECCIÓN', text: 'Volumen de un autor especialmente apreciado por la casa imperial, acompañado por anotaciones de una escuela erudita y una encuadernación de época que permite reconocer su procedencia; además de su valor como objeto de colección, conserva comentarios que pueden interesar a los estudiosos.', opening: 'Desde 180 taeles' },
  { lot: 'LOTE 03', name: 'Pintura de las cuatro estaciones', kind: 'OBRA DE ARTE', text: 'Pintura sobre seda atribuida a un taller reconocido, cuya procedencia y estado de conservación deberán constar en el catálogo definitivo para que los posibles compradores puedan valorar tanto su calidad artística como la legitimidad de su atribución.', opening: 'Desde 250 taeles' },
  { lot: 'LOTE 04', name: 'Sello de jade de una antigua prefectura', kind: 'ANTIGÜEDAD', text: 'Pieza ceremonial de procedencia documentada, apreciada por el valor histórico que se le atribuye y por la inscripción que conserva, cuya lectura y contexto serán presentados junto con los antecedentes del objeto antes de abrir la puja.', opening: 'Desde 300 taeles' }
];

export const games = [
  { name: 'Ocho', type: 'SALÓN · CARTAS', bet: '3 taeles', text: 'Juego de cartas de descarte en el que cada participante procura quedarse sin cartas antes que los demás, siguiendo el color o el número de la carta anterior y utilizando cartas especiales para cambiar el curso de la ronda.' },
  { name: 'Poker', type: 'SALÓN · CARTAS Y APUESTAS', bet: '5 taeles', text: 'Juego de cartas basado en combinaciones y rondas de apuesta; la lectura de los contrincantes, la prudencia y la administración del capital forman parte de cada partida.' },
  { name: 'Billar', type: 'SALÓN · PRECISIÓN', bet: '4 taeles', text: 'Los participantes golpean las bolas con un taco para introducirlas en las troneras siguiendo la modalidad acordada; se valora el cálculo de los ángulos, el control de la fuerza y la estrategia.' },
  { name: 'Carrom', type: 'SALÓN · DESTREZA', bet: '4 taeles', text: 'Sobre un tablero cuadrado, los jugadores impulsan fichas con un golpe de dedo para introducirlas en las troneras; requiere precisión, cálculo y control del rebote.' },
  { name: 'Dominó', type: 'SALÓN · ESTRATEGIA', bet: '3 taeles', text: 'Los jugadores enlazan fichas por sus extremos coincidentes y procuran quedarse sin piezas, anticipando las jugadas rivales y administrando las fichas que conservan.' },
  { name: 'Backgammon', type: 'SALÓN · ESTRATEGIA Y AZAR', bet: '4 taeles', text: 'Cada jugador mueve sus fichas por el tablero según el resultado de los dados, buscando retirarlas antes que su oponente; combina planificación, cálculo de riesgos y azar.' },
  { name: 'Gin Rummy', type: 'SALÓN · CARTAS', bet: '3 taeles', text: 'Juego de cartas en el que se forman grupos y secuencias, procurando reducir las cartas que quedan sin combinar; la memoria y la observación de los descartes son fundamentales.' },
  { name: 'Cribbage', type: 'SALÓN · CARTAS Y CÁLCULO', bet: '3 taeles', text: 'Juego de cartas en el que se suman puntos mediante combinaciones y secuencias, con apoyo de un tablero de puntuación; exige cálculo rápido y atención a cada reparto.' },
  { name: 'Bingo', type: 'SALÓN · AZAR', bet: '2 taeles', text: 'Cada participante marca los números que aparecen en su cartón conforme son anunciados; la ronda termina cuando alguien completa la combinación acordada.' },
  { name: 'Ludo', type: 'SALÓN · TABLERO Y AZAR', bet: '3 taeles', text: 'Los participantes desplazan sus fichas alrededor del tablero según los dados y procuran llevarlas hasta la meta, mientras intentan retrasar el avance de sus contrincantes.' },
  { name: 'Mancala', type: 'SALÓN · CÁLCULO', bet: '3 taeles', text: 'Juego de tablero en el que se distribuyen semillas o fichas entre pequeños hoyos; cada movimiento modifica las posibilidades de captura y exige anticipar la respuesta contraria.' },
  { name: 'Reversi', type: 'SALÓN · ESTRATEGIA', bet: '4 taeles', text: 'Los jugadores colocan fichas para encerrar y voltear las del contrario; controlar las esquinas y prever la ocupación del tablero resulta decisivo.' },
  { name: 'Batalla naval', type: 'SALÓN · DEDUCCIÓN', bet: '3 taeles', text: 'Cada participante dispone sus naves en secreto y trata de descubrir las posiciones del rival mediante coordenadas, combinando memoria, deducción y estrategia.' },
  { name: 'Picas', type: 'SALÓN · CARTAS', bet: '3 taeles', text: 'Juego de bazas por parejas en el que se anuncian las manos que se espera ganar; la coordinación entre compañeros y el cálculo de las cartas restantes determinan el resultado.' },
  { name: 'Bolos', type: 'PATIO · PRECISIÓN', bet: '4 taeles', text: 'Los participantes lanzan una bola por una pista para derribar el mayor número posible de bolos, compitiendo por rondas y sumando los puntos obtenidos.' },
  { name: 'Minigolf', type: 'PATIO · PRECISIÓN', bet: '4 taeles', text: 'Los jugadores recorren un circuito de hoyos y obstáculos procurando introducir la pelota con el menor número de golpes; gana quien complete el recorrido con mejor puntuación.' },
  { name: 'Fútbol', type: 'PATIO · JUEGO DE EQUIPO', bet: '5 taeles', text: 'Dos equipos compiten por llevar el balón hasta la portería contraria, coordinando pases, desplazamientos y defensa; las reglas y la duración se acuerdan antes del encuentro.' },
  { name: 'Tiro con arco', type: 'PATIO · PUNTERÍA', bet: '5 taeles', text: 'Los participantes disparan una cantidad acordada de flechas hacia una diana situada a distancia establecida; se comparan los puntos obtenidos y se exige respetar las medidas de seguridad.' },
  { name: 'Dardos', type: 'PATIO · PUNTERÍA', bet: '3 taeles', text: 'Cada jugador lanza dardos hacia una diana numerada y suma o resta puntos según la modalidad elegida; la precisión y la regularidad determinan el resultado.' },
  { name: 'Cup Pong', type: 'PATIO · DESTREZA', bet: '3 taeles', text: 'Por equipos o de manera individual, se lanzan pelotas ligeras hacia vasos colocados en el extremo opuesto de una mesa; cada acierto elimina un vaso según las reglas acordadas.' },
  { name: 'Dice Party', type: 'SALÓN · AZAR', bet: '2 taeles', text: 'Una ronda de minijuegos con dados en la que se combinan suerte y decisiones rápidas; antes de comenzar se anuncia la modalidad y la puntuación correspondiente.' },
  { name: 'Truco', type: 'SALÓN · CARTAS Y ESTRATEGIA', bet: '3 taeles', text: 'Juego de bazas en el que las apuestas y los desafíos forman parte de la partida; el engaño permitido por las reglas y la lectura de los rivales son tan importantes como las cartas.' }
];
