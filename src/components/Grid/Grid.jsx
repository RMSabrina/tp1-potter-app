import Card from '../Card/Card';
import './Grid.css'

export default function Grid({results}) {
  return (
    <div className="grid-container">
      {results.map((character) => (
        <Card key={character.id} name={character.name} image={character.image}/>
      ))}
    </div>
  );
}