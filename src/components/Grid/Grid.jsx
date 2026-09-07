import './Grid.css'

export default function Grid({results, renderItem, variant = 'default'}) {
  return (
    <div className={`grid-container grid-container--${variant}`}>
        {results.map((item) => renderItem(item))}
    </div>
  );
}