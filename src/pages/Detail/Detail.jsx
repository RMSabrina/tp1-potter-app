// src/pages/Detail/Detail.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEntityById } from '../../services/entityService.js';
import { ENTITY_CONFIG } from '../../constants/entityConfig.js';
import { addToHistory } from '../../services/historyService.js';
import './Detail.css';

import {
  isFavorite,
  addToFavorites,
  removeFromFavorites
} from '../../services/favoriteService.js';
import AddToFavoritesModal from '../../components/AddToFavoritesModal/AddToFavoritesModal.jsx';


export default function Detail() {
  const { entity, id } = useParams();
  const navigate = useNavigate(); 

  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  const [isFav, setIsFav] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);

  const config = ENTITY_CONFIG[entity];

  useEffect(() => {
    // Reset al cambiar de entidad/id (ej. navegar de un personaje a otro)
    setItem(null);
    setError(null);

    const fetchDetail = async () => {
      try {
        const data = await getEntityById(entity, id);
        setItem(data);

        setIsFav(isFavorite(id, entity));

        addToHistory({
          id,
          entity,
          name: data.name,
          image: data.image || null
        });

      } catch {
        setError('No se pudo cargar el detalle.');
      }
    };

    fetchDetail();
  }, [entity, id]);

  // Entidad no reconocida en la config (URL inválida)
  if (!config) return <p className="loading-text">Categoría desconocida.</p>;
  if (error) return <p className="loading-text">{error}</p>;
  if (!item) return <p className="loading-text">Cargando detalles...</p>;

  const { primaryFields = [], optionalFields = [] } = config.detail || {};

  // Favoritos: si ya es favorito, lo quita
  const handleToggleFavorite = () => {
    if (isFav) {
      removeFromFavorites(id, entity);
      setIsFav(false);
      return;
    }

    setShowFavoriteModal(true);
  };

  const handleConfirmFavorite = (formData) => {
    const favoriteItem = {
      id,
      entity,
      name: item.name,
      image: item.image || null,
      ...formData // priority, category, note
    };

    addToFavorites(favoriteItem);
    setIsFav(true);
    setShowFavoriteModal(false);
  };


  return (
    <main className="detail-container">
      <div className="detail-card">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Volver">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="detail-image-wrapper">
          {item.image ? (
            <img src={item.image} alt={item.name} className="detail-image" />
          ) : (
            <div className="detail-no-image">Sin imagen disponible</div>
          )}
        </div>

        <div className="detail-content">
          <h2 className="detail-name">{item.name}</h2>

          <div className="detail-grid">
            {/* Campos siempre visibles, con fallback si faltan */}
            {primaryFields.map(({ key, label, fallback }) => (
              <p className="detail-item" key={key}>
                <strong>{label}:</strong> {item[key] || fallback}
              </p>
            ))}

            {/* Campos opcionales, solo si la API los trae */}
            {optionalFields.map(({ key, label }) => (
              item[key] && (
                <p className="detail-item" key={key}>
                  <strong>{label}:</strong> {item[key]}
                </p>
              )
            ))}
          <button
            className={isFav ? 'favorite-btn active' : 'favorite-btn'}
            onClick={handleToggleFavorite}
          >
            {isFav ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
          </button>
          </div>
          
        </div>
      </div>

      {/* --- modal de favoritos --- */}
      {showFavoriteModal && (
        <AddToFavoritesModal
          item={item}
          defaultCategory={config.label || entity}
          onConfirm={handleConfirmFavorite}
          onClose={() => setShowFavoriteModal(false)}
        />
      )}


    </main>
  );
}