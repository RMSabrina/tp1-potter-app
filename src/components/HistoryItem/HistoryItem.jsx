// src/components/HistoryItem/HistoryItem.jsx
import { Link } from 'react-router-dom';
import './HistoryItem.css';

export default function HistoryItem({ item }) {
  const { id, entity, name, image } = item;

  return (
    <Link to={`/${entity}/${id}`} className="history-item">
      <span className="history-item-dot" aria-hidden="true" />

      <div className="history-item-thumb">
        {image ? (
          <img src={image} alt={`Imagen de ${name}`} />
        ) : (
          <span className="history-item-thumb-placeholder">?</span>
        )}
      </div>

      <span className="history-item-name">{name}</span>
    </Link>
  );
}