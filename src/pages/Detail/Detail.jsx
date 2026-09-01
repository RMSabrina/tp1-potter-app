import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/characterService.js';
import './Detail.css'; // <-- Importamos los estilos

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
    };
    fetchDetail();
  }, [id]);

  if (!character) return <p className="loading-text">Cargando detalles del personaje...</p>;

  return (
    <main className="detail-container">
      <div className="detail-card">
        <div className="detail-image-wrapper">
          {character.image ? (
            <img src={character.image} alt={character.name} className="detail-image" />
          ) : (
            <div className="detail-no-image">Sin imagen disponible</div>
          )}
        </div>

        {/* Contenedor de la Información */}
        <div className="detail-content">
          <h2 className="detail-name">{character.name}</h2>
          
          {/* Grilla de datos */}
          <div className="detail-grid">
            <p className="detail-item"><strong>Casa:</strong> {character.house || 'Desconocida'}</p>
            <p className="detail-item"><strong>Especie:</strong> {character.species || 'Desconocida'}</p>
            <p className="detail-item"><strong>Sangre:</strong> {character.blood_status || 'Desconocida'}</p>
            <p className="detail-item"><strong>Género:</strong> {character.gender || 'Desconocido'}</p>
            
            {/* && para que solo se rendericen si el dato existe en la API */}
            {character.nationality && <p className="detail-item"><strong>Nacionalidad:</strong> {character.nationality}</p>}
            {character.born && <p className="detail-item"><strong>Nacimiento:</strong> {character.born}</p>}
            {character.died && <p className="detail-item"><strong>Fallecimiento:</strong> {character.died}</p>}
            {character.patronus && <p className="detail-item"><strong>Patronus:</strong> {character.patronus}</p>}
            {character.boggart && <p className="detail-item"><strong>Boggart:</strong> {character.boggart}</p>}
            {character.animagus && <p className="detail-item"><strong>Animago:</strong> {character.animagus}</p>}
            {character.eye_color && <p className="detail-item"><strong>Ojos:</strong> {character.eye_color}</p>}
            {character.hair_color && <p className="detail-item"><strong>Pelo:</strong> {character.hair_color}</p>}
          </div>
        </div>
        
      </div>
    </main>
  );
}