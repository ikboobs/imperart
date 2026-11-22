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
  { name: 'Ocho', type: 'CARTAS', space: 'SALÓN', points: 1, text: 'Juego de descarte en el que cada participante procura quedarse sin cartas siguiendo el color o número de la carta anterior.' },
  { name: 'Poker', type: 'CARTAS', space: 'SALÓN', points: 1, text: 'Juego de combinaciones y rondas de apuesta; la lectura de los contrincantes y la administración del capital forman parte de cada partida.' },
  { name: 'Dominó', type: 'ESTRATEGIA', space: 'SALÓN', points: 2, text: 'Los jugadores enlazan fichas por sus extremos coincidentes y anticipan las jugadas rivales.' },
  { name: 'Backgammon', type: 'ESTRATEGIA', space: 'SALÓN', points: 2, text: 'Los jugadores mueven sus fichas según los dados y combinan planificación, cálculo de riesgos y azar.' },
  { name: 'Gin Rummy', type: 'CARTAS', space: 'SALÓN', points: 1, text: 'Se forman grupos y secuencias procurando reducir las cartas que quedan sin combinar.' },
  { name: 'Cribbage', type: 'CÁLCULO', space: 'SALÓN', points: 2, text: 'Juego de cartas en el que se suman puntos mediante combinaciones y secuencias.' },
  { name: 'Bingo', type: 'AZAR', space: 'SALÓN', points: 1, text: 'Cada participante marca los números anunciados hasta completar la combinación acordada.' },
  { name: 'Ludo', type: 'AZAR', space: 'SALÓN', points: 1, text: 'Los participantes desplazan sus fichas según los dados y procuran llevarlas hasta la meta.' },
  { name: 'Mancala', type: 'CÁLCULO', space: 'SALÓN', points: 2, text: 'Se distribuyen semillas o fichas entre pequeños hoyos; cada movimiento exige anticipar la respuesta contraria.' },
  { name: 'Reversi', type: 'ESTRATEGIA', space: 'SALÓN', points: 2, text: 'Los jugadores colocan fichas para encerrar y voltear las del contrario, procurando controlar el tablero.' },
  { name: 'Batalla naval', type: 'DEDUCCIÓN', space: 'SALÓN', points: 2, text: 'Cada participante dispone sus naves en secreto y trata de descubrir las posiciones del rival mediante coordenadas.' },
  { name: 'Picas', type: 'CARTAS', space: 'SALÓN', points: 1, text: 'Juego de bazas por parejas en el que se anuncian las manos que se espera ganar.' },
  { name: 'Dice Party', type: 'AZAR', space: 'SALÓN', points: 1, text: 'Ronda de minijuegos con dados; la modalidad y su puntuación se anuncian antes de comenzar.' },
  { name: 'Truco', type: 'CARTAS', space: 'SALÓN', points: 1, text: 'Juego de bazas en el que los desafíos y la lectura de los rivales forman parte de la partida.' },
  { name: 'Billar', type: 'PRECISIÓN', space: 'SALÓN', points: 1, text: 'Los participantes golpean las bolas con un taco para introducirlas en las troneras según la modalidad acordada.', bet: '4 taeles' },
  { name: 'Carrom', type: 'DESTREZA', space: 'SALÓN', points: 1, text: 'Sobre un tablero cuadrado, los jugadores impulsan fichas con un golpe de dedo para introducirlas en las troneras.', bet: '4 taeles' },
  { name: 'Bolos', type: 'PRECISIÓN', space: 'PATIO', text: 'Los participantes lanzan una bola por una pista para derribar el mayor número posible de bolos.', bet: '4 taeles' },
  { name: 'Minigolf', type: 'PRECISIÓN', space: 'PATIO', text: 'Los jugadores recorren un circuito de hoyos y obstáculos procurando completar el recorrido con el menor número de golpes.', bet: '4 taeles' },
  { name: 'Fútbol', type: 'EQUIPO', space: 'PATIO', text: 'Dos equipos compiten por llevar el balón hasta la portería contraria; las reglas y la duración se acuerdan antes del encuentro.', bet: '5 taeles' },
  { name: 'Tiro con arco', type: 'PUNTERÍA', space: 'PATIO', text: 'Los participantes disparan una cantidad acordada de flechas hacia una diana y comparan sus resultados, respetando las medidas de seguridad.', bet: '5 taeles' },
  { name: 'Dardos', type: 'PUNTERÍA', space: 'PATIO', text: 'Cada jugador lanza dardos hacia una diana numerada; la modalidad se acuerda antes de empezar.', bet: '3 taeles' },
  { name: 'Cup Pong', type: 'DESTREZA', space: 'PATIO', text: 'Por equipos o de manera individual, se lanzan pelotas ligeras hacia vasos colocados al extremo opuesto de una mesa.', bet: '3 taeles' }
];
