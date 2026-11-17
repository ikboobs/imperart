# El peso de una corona — Archivo imperial

Primera versión de un sitio estático para GitHub Pages. Está construido con HTML, CSS y JavaScript sin proceso de compilación.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repositorio (el archivo `index.html` debe quedar en la raíz).
3. En el repositorio, entra en **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub publique el sitio y abre la URL indicada en Settings → Pages.

No requiere Node, npm ni servidor propio.

## Editar contenido

- `index.html`: textos, secciones y estructura.
- `styles.css`: paleta, tipografías, composición y diseño adaptable.
- `data.js`: escalafones, catálogo de mercado y valores económicos de muestra.
- `app.js`: filtros, calculadora de méritos y formulario de ficha.
- `assets/ink-landscape.svg`: ilustración ornamental vectorial local.

## Importante: límites de esta primera versión

GitHub Pages es alojamiento estático. No incluye base de datos, autenticación ni servidor. Por ello:

- La calculadora de méritos funciona en el navegador.
- El catálogo y los filtros de mercado funcionan con los datos de `data.js`.
- El formulario de registro prepara y descarga una ficha `.txt`; no crea un personaje compartido.
- Las cuentas familiares, inventarios, solicitudes y subastas están definidos como arquitectura y contenido de referencia, pero todavía no realizan operaciones económicas reales ni se sincronizan entre usuarios.
- Los cambios de contenido requieren editar los archivos y volver a publicarlos en GitHub.

Para habilitar cuentas compartidas, solicitudes reales, saldo protegido y subastas con pujas simultáneas, la siguiente etapa deberá conectar este frontend con un backend (por ejemplo, Supabase/PostgreSQL) y reglas de seguridad en el servidor. No se deben guardar claves privadas ni confiar en saldos enviados desde el navegador.

## Criterios de ambientación

La ambientación es una dinastía ficticia inspirada en instituciones y estética de la China imperial. No se fija todavía una dinastía histórica concreta. Los nombres de rangos, títulos y cargos pueden adaptarse al período que se elija más adelante.

Los saldos familiares y precios del catálogo son propuestas iniciales de juego, no equivalencias históricas exactas.
