// src/components/Card.js
import './Card.css';
import imageDefault from '../../img/hat1.png'

export default function Card({ name, image }) {
  return (
      <article className="card">
        <div className="card-image-container">
          {image ? (<img src={image} alt={`Imagen de ${name}`} className="card-image" />) 
          : 
          (
            // Fallback si el ítem no tiene imagen
            <div className="card-image-placeholder">
              <img src={imageDefault} alt={`Imagen por defecto`} className="card-image" />
            </div>
          )}
        </div>

        <div className="card-content">
          <h3 className="card-title">{name || 'Nombre desconocido'}</h3>
        </div>
      </article>
  );
}