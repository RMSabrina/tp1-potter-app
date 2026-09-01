import Header from '../components/Header/Header.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Grid from '../components/Grid/Grid.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="featured-section">
          <Grid />
        </section>
      </main>
    </>
  );
}