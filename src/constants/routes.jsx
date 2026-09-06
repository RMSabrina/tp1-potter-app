export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  DETAILS: '/:entity/:id',
  FAVORITES: '/favorites',
  HISTORY: '/history',
  CONTACT: '/contact',
};

export const NAV_ITEMS = [
  { label: 'Inicio', path: ROUTES.HOME },
  { label: 'Búsqueda', path: ROUTES.SEARCH },
  { label: 'Favoritos', path: ROUTES.FAVORITES },
  { label: 'Historial', path: ROUTES.HISTORY },
  { label: 'Contacto', path: ROUTES.CONTACT },
];

// Oculta "Inicio" si ya estamos en "/". 
export const getVisibleNavItems = (pathname) =>
  NAV_ITEMS.filter(item => !(item.path === '/' && pathname === '/'));