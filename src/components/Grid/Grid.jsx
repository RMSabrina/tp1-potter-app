import Card from '../Card/Card';
import './Grid.css'

export default function Grid({results, entity}) {
  return (
    <div className="grid-container">
      {results.map((item) => (
        <Card id={item.id} key={item.id} entity={entity} name={item.name} image={item.image}/>
      ))}
    </div>
  );
}