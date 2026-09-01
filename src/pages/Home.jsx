import Hero from '../components/Hero/Hero.jsx';
import Grid from '../components/Grid/Grid.jsx';
import { useState, useEffect } from 'react';
import {getCharacters} from '../services/characterService.js'

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [charging, setCharging] = useState(true);

    useEffect(() => {
        // Definimos una función local para manejar el async/await
        const loadData = async () => {
        try {
            const data = await getCharacters(); 
            setCharacters(data);
        } catch (error) {
            console.error("Falló la carga en Home"); 
        } finally {
            setCharging(false);
        }
        };

        loadData();
    }, []);

    return (
        <main className="home-container">
            <Hero />
            {charging ? (<p>Cargando información...</p>) : 
                        (<Grid results={characters} />)
            }
        </main>
    );
}