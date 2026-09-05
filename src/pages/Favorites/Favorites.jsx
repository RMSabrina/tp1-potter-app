import { useEffect, useState } from 'react';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import './Favorites.css';

import {
  getFavorites,
  removeFromFavorites
} from '../../services/favoriteService.js';

export default function Wishlist() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id, entity) => {
    removeFromFavorites(id, entity);

    setFavorites(
      getFavorites()
    );
  };

  return (
    <main className='favorites-page'>
      <h1 className='favorites-title'>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>
          No tenés ítems agregados a favoritos.
        </p>
      ) : (
        <Grid
          results={favorites}
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