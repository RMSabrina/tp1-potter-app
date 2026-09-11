import './Card.css';
import imageDefault from '../../img/hat1.png'
import { Link } from 'react-router-dom';

export default function Card({ id, entity, name, image }) {
  return (
    <Link to={`/${entity}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </Link>
  );
}