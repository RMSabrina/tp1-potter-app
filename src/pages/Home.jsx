import Hero from '../components/Hero/Hero.jsx';
import Grid from '../components/Grid/Grid.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/entityService.js';

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
        try {
            const data = await getCharacters(); 
            setCharacters(data);
        } catch (error) {
            console.error("Falló la carga en Home"); 
        } finally {
            setLoading(false);
        }
        };

        loadData();
    }, []);

    return (
        <main className="home-container">
            <Hero />
            {loading ? (<p>Cargando información...</p>) : 
                        (<Grid results={characters} entity="characters"/>)
            }
        </main>
    );
}