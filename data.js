/*
  ARCHIVO DE DATOS EDITABLE
  GitHub Pages sirve este proyecto como sitio estático. Los textos y catálogos
  pueden modificarse aquí sin tocar la estructura de index.html.
*/
window.IMPERIAL_DATA = {
  ranks: [
    { name: 'Aspirante', merits: 0, description: 'Posición inicial' },
    { name: 'Reconocido', merits: 3, description: 'Primer reconocimiento' },
    { name: 'Distinguido', merits: 8, description: 'Responsabilidades menores' },
    { name: 'Notable', merits: 16, description: 'Candidatura a posiciones intermedias' },
    { name: 'Eminente', merits: 28, description: 'Candidatura a posiciones superiores' },
    { name: 'Ilustre', merits: 45, description: 'Posiciones de gran influencia' },
    { name: 'Excelso', merits: 65, description: 'Máximo reconocimiento de trayectoria' }
  ],
  market: [
    { id: 'm01', name: 'Jarrón de porcelana azul y blanca', category: 'Porcelana', price: 35, type: 'Subasta', description: 'Pieza decorativa con motivos florales.', mark: '瓷', status: 'Lote de muestra' },
    { id: 'm02', name: 'Brocado de seda', category: 'Vestimenta', price: 24, type: 'Venta directa', description: 'Tejido bordado para confección ceremonial.', mark: '绸', status: 'Disponible' },
    { id: 'm03', name: 'Peineta de jade', category: 'Joyería', price: 48, type: 'Venta directa', description: 'Adorno tallado para el cabello.', mark: '玉', status: 'Disponible' },
    { id: 'm04', name: 'Álbum de caligrafía', category: 'Arte', price: 32, type: 'Subasta', description: 'Colección de composiciones y trazos.', mark: '书', status: 'Lote de muestra' },
    { id: 'm05', name: 'Antología de poemas', category: 'Literatura', price: 12, type: 'Venta directa', description: 'Volumen encuadernado de poesía clásica.', mark: '诗', status: 'Disponible' },
    { id: 'm06', name: 'Arreos de equitación', category: 'Equitación', price: 55, type: 'Venta directa', description: 'Conjunto de silla, riendas y accesorios.', mark: '马', status: 'Disponible' },
    { id: 'm07', name: 'Juego de té de porcelana', category: 'Porcelana', price: 42, type: 'Venta directa', description: 'Servicio de té para reuniones familiares.', mark: '茶', status: 'Disponible' },
    { id: 'm08', name: 'Pendientes de perla', category: 'Joyería', price: 28, type: 'Venta directa', description: 'Adorno de perlas para uso ceremonial.', mark: '珠', status: 'Disponible' }
  ],
  capital: [
    { family: 'Gran casa comerciante', balance: 600 },
    { family: 'Casa comerciante establecida', balance: 400 },
    { family: 'Gran casa erudita', balance: 300 },
    { family: 'Casa militar reconocida', balance: 250 },
    { family: 'Casa noble menor', balance: 150 },
    { family: 'Casa venida a menos', balance: 60 }
  ],
  auctions: [
    { item: 'Jarrón de porcelana azul y blanca', opening: 20, current: 35, increment: 5, closing: 'Por convocatoria' },
    { item: 'Álbum de caligrafía', opening: 18, current: 18, increment: 3, closing: 'Por convocatoria' }
  ]
};
