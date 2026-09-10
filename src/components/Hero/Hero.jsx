import './Hero.css'
import potterIcon from '../../img/harry-potter.jpg'

export default function Hero() {
  return (
       <section className='hero-container' aria-label="Presentación">
      <img
        src={potterIcon}
        alt="Siglas HP, ícono de Wizarding World Search"
        className='hero-icon'
      />
      <h1>Explorá el Mundo Mágico</h1>
      <p>Descubrí personajes, hechizos y pociones mientras explorás todo lo que el mundo mágico tiene para ofrecer.</p>
    </section>
  );
}