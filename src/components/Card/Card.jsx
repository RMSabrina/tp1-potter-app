// src/components/Card.js
import './Card.css';

export default function Card({ id, name, image, description }) {
  return (
      <article className="card">
        {/* Contenedor de la imagen */}
        <div className="card-image-container">
          {image ? (
            <img src={image} alt={`Imagen de ${name}`} className="card-image" />
          ) : (
            // Fallback si el ítem no tiene imagen
            <div className="card-image-placeholder">
              <span>N/A</span>
            </div>
          )}
        </div>

        {/* Contenido resumido (RF3) */}
        <div className="card-content">
          <h3 className="card-title">{name || 'Nombre Desconocido'}</h3>
          {description && <p className="card-description">{description}</p>}
        </div>
      </article>
  );
}