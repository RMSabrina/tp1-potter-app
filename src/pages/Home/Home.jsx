import Hero from '../../components/Hero/Hero.jsx';
import Grid from '../../components/Grid/Grid.jsx';
import Card from '../../components/Card/Card.jsx';
import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/entityService.js';
import { useNetworkStatus } from '../../hooks/useNetworkStatus.jsx';
import './Home.css';
import './magical-loader.css';
export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const isOffline = useNetworkStatus();
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data);
                setLoadingError(false);
            } catch (error) {
                console.error("Falló la carga en Home");
                setLoadingError(true);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="magical-loader-container">
                    <div className="snitch"></div>
                    {/* Usamos la misma clase que armamos antes para el texto */}
                    <p className="status-message glowing-text">Buscando pergaminos...</p>
                </div>
            );
        }

        if (isOffline && loadingError) {
            return (
                <div className="status-message offline">
                    <h2>Sin conexión 📡</h2>
                    <p>No tienes internet y estos personajes no están en tu caché.</p>
                </div>
            );
        }

        if (loadingError) {
            return <p className="status-message error">Hubo un problema al contactar con el Ministerio de Magia.</p>;
        }

        return (
            <Grid
                results={characters}
                renderItem={(item) => (
                    <Card key={item.id} {...item} entity="characters" />
                )}
            />
        );
    };

    return (
        <main className="home-container">
            <Hero />
            {/* Llamamos a la función que decide qué renderizar basado en los estados */}
            {renderContent()}
        </main>
    );
}