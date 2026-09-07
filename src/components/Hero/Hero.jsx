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
      <h1>Wizarding World Search</h1>
      <p>Explorá el mundo mágico...</p>
    </section>
  );
}