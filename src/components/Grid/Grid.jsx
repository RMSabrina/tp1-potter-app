import Card from '../Card/Card';

export default function Grid() {
  // Datos temporales para probar la maqueta
  const mockItems = [1, 2, 3, 4]; 

  return (
    <div className="grid-container">
      {mockItems.map((item) => (
        <Card key={item} id={item} />
      ))}
    </div>
  );
}