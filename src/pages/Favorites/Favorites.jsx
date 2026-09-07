import { useEffect, useState, useMemo  } from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import './Favorites.css';

import { getFavorites, removeFromFavorites } from '../../services/favoriteService.js';

const SORT_OPTIONS = [
  { value: 'priority-desc', label: 'Prioridad (mayor a menor)' },
  { value: 'priority-asc', label: 'Prioridad (menor a mayor)' },
  { value: 'category', label: 'Categoría (A-Z)' },
];


function sortFavorites(items, sortBy) {
  const sorted = [...items];

  switch (sortBy) {
    case 'priority-desc':
      return sorted.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    case 'priority-asc':
      return sorted.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
    case 'category':
      return sorted.sort((a, b) =>
        (a.category || '').localeCompare(b.category || '')
      );
    default:
      return sorted;
  }
}


export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('priority-desc');

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

   const handleRemove = (id, entity) => {
    removeFromFavorites(id, entity);
    setFavorites(getFavorites());
  };

  const sortedFavorites = useMemo(
    () => sortFavorites(favorites, sortBy),
    [favorites, sortBy]
  );
  return (
    <main className='favorites-page'>
      <div className='favorites-header'>
        <h1 className='favorites-title'>Favoritos</h1>

        {favorites.length > 0 && (
          <div className='favorites-sort'>
            <label htmlFor='sort-select'>Ordenar por:</label>
            <select
              id='sort-select'
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {favorites.length === 0 ? (
        <p>No tenés ítems agregados a favoritos.</p>
      ) : (
        <Grid
          results={sortedFavorites}
          variant="compact"
          renderItem={(item) => (
            <FavoriteCard
              key={`${item.entity}-${item.id}`}
              item={item}
              onRemove={handleRemove}
            />
          )}
        />
      )}
    </main>
  );
}