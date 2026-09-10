# Enfoque del trabajo integrador

## Idea general

"Wizarding World Search" es una SPA temática sobre el universo de Harry Potter, construida con **React + Vite**. Consume la **API de PotterDB** para buscar y mostrar información de distintas entidades del universo mágico (personajes, hechizos y pociones). Además de la búsqueda, la app permite marcar elementos como **favoritos**, llevar un **historial** de las fichas visitadas, y cuenta con una sección de **contacto** con mapa.

## Tecnologías y stack elegido

- **React 19 + Vite**: elegido por la rapidez de desarrollo (HMR) y la simplicidad para armar una SPA con múltiples vistas.
- **React Router DOM**: maneja la navegación entre Home, Búsqueda, Detalle, Favoritos, Historial y Contacto, incluyendo una ruta genérica `/:entity/:id` para el detalle de cualquier entidad.
- **React Leaflet**: para el mapa interactivo de la página de contacto.
- **vite-plugin-pwa (Workbox)**: agrega soporte de Progressive Web App, con estrategias de cacheo para que la app funcione (parcialmente) offline e íconos personalizados.

## Estructura de recursos / organización del código

- `src/pages`: una carpeta por vista (Search, Detail, Favorites, History, Contact), cada una con su propio CSS.
- `src/components`: componentes reutilizables, como `Grid` (agnóstico al tipo de tarjeta gracias a un patrón *render-prop*), `Card`/`FavoriteCard`, `AddToFavoritesModal`, header, etc.
- `src/constants/entityConfig.js`: configuración centralizada por entidad (endpoints, campos a mostrar, filtros disponibles), para que agregar o modificar una entidad no implique tocar múltiples archivos.
- `src/services`: donde se centralizó la comunicación con la API. Capa de acceso a datos, incluyendo `searchService.js` (consumo de la API de PotterDB) y `searchStateService.js` (persistencia del estado de búsqueda en `sessionStorage`).
- `src/hooks`: hooks propios para lógica compartida entre vistas.
Esta separación busca evitar que toda la lógica quede concentrada en un único componente y facilita tanto el mantenimiento como la incorporación de nuevas funcionalidades.

## Relación con los requisitos funcionales

- **Búsqueda y filtrado de entidades**: resuelto mediante `Search.jsx` + `entityConfig.js`, que define qué filtros y campos corresponden a cada entidad sin duplicar lógica.
- **Persistencia de la búsqueda**: `searchStateService.js` guarda en `sessionStorage` la entidad, los filtros y los resultados, para que al volver a la vista de búsqueda no se pierda el contexto.
- **Detalle de una entidad**: ruta genérica `/:entity/:id` que reutiliza el mismo componente `Detail.jsx` para cualquier tipo de recurso.
- **Favoritos**: `AddToFavoritesModal.jsx` permite asignar prioridad (numérica), categoría y una nota opcional a cada favorito; se listan como tarjetas estilo "entrada de diario", con posibilidad de ordenarlos por prioridad.
- **Historial**: cada visita a una ficha de detalle se registra automáticamente y se muestra como una línea de tiempo vertical.
- **Contacto**: formulario temático ("correo por lechuza") con mapa de Leaflet centrado en un punto de referencia local.
- **Uso offline / PWA**: cacheo de assets y de las últimas búsquedas/resultados mediante Workbox.


## Diseño responsive y experiencia de usuario
El diseño fue pensado con un enfoque mobile-first, buscando que la aplicación pueda utilizarse correctamente desde celulares, tablets y computadoras. Se priorizó una navegación sencilla mediante un menú adaptable y una distribución de tarjetas que se ajusta al tamaño disponible.

También buscamos mantener una identidad visual coherente con la temática de Harry Potter, utilizando fondos, colores, imágenes y componentes que ayuden a diferenciar las distintas secciones sin perder claridad en la navegación.

## Decisiones destacadas

- Se prefirió una **configuración por entidad** (`entityConfig.js`) en lugar de if-else o componentes específicos por tipo de dato, para que el sistema escale mejor si se agregan nuevas entidades de la API.

*(Este documento fue elaborado con apoyo de IA a partir del desarrollo real del proyecto)*