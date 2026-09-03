import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard.jsx';
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
        <div className="wishlist-list">
          {favorites.map((item) => (
            <FavoriteCard
              key={`${item.entity}-${item.id}`}
              item={item}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </main>
  );
}