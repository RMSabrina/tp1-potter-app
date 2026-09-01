import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/characterService.js';
import './Detail.css'

export default function Detail() {
  const { id } = useParams(); // Extrae el ID de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
    };
    fetchDetail();
  }, [id]);

  if (!character) return <p>Cargando detalles del personaje...</p>;

  return (
    <main className="detail-container">
      <h2>{character.name}</h2>
      {character.image && <img src={character.image} alt={character.name} />}
      <p>Casa: {character.house || 'Desconocida'}</p>
      <p>Especie: {character.species}</p>
      <p>Patronus: {character.patronus}</p>
      <p>Nacionalidad: {character.nationality}</p>
      <p>Nacimiento: {character.born}</p>
      <p>Sangre: {character.blood_status}</p>
      <p>Muerte: {character.died}</p>
    </main>
  );
}