// src/components/FavoriteCard/FavoriteCard.jsx
import { Link } from 'react-router-dom';
import './FavoriteCard.css';

export default function FavoriteCard({ item, onRemove }) {
  const { id, entity, name, image, priority, category, note } = item;

  return (
    <article className="favorite-card">
      <Link to={`/${entity}/${id}`} className="favorite-card-image-link">
        {image ? (
          <img src={image} alt={`Imagen de ${name}`} className="favorite-card-image" />
        ) : (
          <div className="favorite-card-image-placeholder">?</div>
        )}
      </Link>

      <div className="favorite-card-body">
        <div className="favorite-card-header">
          <Link to={`/${entity}/${id}`} className="favorite-card-title-link">
            <h3 className="favorite-card-title">{name}</h3>
          </Link>

          {/* Prioridad como sello de lacre */}
          <span className="favorite-card-seal" title="Prioridad">
            {priority}
          </span>
        </div>

        <span className="favorite-card-tag">{category}</span>

        {note && <p className="favorite-card-note">&ldquo;{note}&rdquo;</p>}

        <button
          className="favorite-card-remove"
          onClick={() => onRemove(id, entity)}
        >
          Quitar de la lista
        </button>
      </div>
    </article>
  );
}