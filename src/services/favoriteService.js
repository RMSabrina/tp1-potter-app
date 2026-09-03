const STORAGE_KEY = 'favoriteItems';

export const getFavorites = () => {
  const favorites = localStorage.getItem(STORAGE_KEY);

  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites);
};

export const isFavorite = (id, entity) => {
  const favorites = getFavorites();

  return favorites.some(
    (item) => item.id === id && item.entity === entity
  );
};

export const addToFavorites = (item) => {
  const favorites = getFavorites();

  // Evitamos guardar dos veces el mismo ítem
  const alreadyExists = favorites.some(
    (favorite) =>
      favorite.id === item.id &&
      favorite.entity === item.entity
  );

  if (alreadyExists) {
    return false;
  }

  const newFavorites = [
    ...favorites,
    item
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(newFavorites)
  );

  return true;
};

export const removeFromFavorites = (id, entity) => {
  const favorites = getFavorites();

  const newFavorites = favorites.filter(
    (item) =>
      !(item.id === id && item.entity === entity)
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(newFavorites)
  );
};