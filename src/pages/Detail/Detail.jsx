// src/pages/Detail/Detail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEntityById } from '../../services/entityService.js';
import { ENTITY_CONFIG } from '../../constants/entityConfig.js';
import './Detail.css';

export default function Detail() {
  const { entity, id } = useParams();

  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  const config = ENTITY_CONFIG[entity];

  useEffect(() => {
    // Reset al cambiar de entidad/id (ej. navegar de un personaje a otro)
    setItem(null);
    setError(null);

    const fetchDetail = async () => {
      try {
        const data = await getEntityById(entity, id);
        setItem(data);
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

  return (
    <main className="detail-container">
      <div className="detail-card">
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
          </div>
        </div>
      </div>
    </main>
  );
}