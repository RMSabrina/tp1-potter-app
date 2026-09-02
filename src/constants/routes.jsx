export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  CHARACTER: '/character/:id',
  WISHLIST: '/wishlist',
  HISTORY: '/history',
  CONTACT: '/contact',
};

export const NAV_ITEMS = [
  { label: 'Inicio', path: ROUTES.HOME },
  { label: 'Búsqueda', path: ROUTES.SEARCH },
  { label: 'Lista de Deseos', path: ROUTES.WISHLIST },
  { label: 'Historial', path: ROUTES.HISTORY },
  { label: 'Contacto', path: ROUTES.CONTACT },
];