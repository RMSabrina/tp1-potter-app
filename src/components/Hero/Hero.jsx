import './Hero.css'
import potterIcon from '../../img/harry-potter.jpg'

export default function Hero() {
  return (
    <div className='hero-container'>
        <img src={potterIcon}
            alt="WikiPotter icon"
            className='hero-icon'
        />
        <h2>WikiPotter</h2>
        <p>Explorá el mundo mágico...</p>
    </div>
  );
}