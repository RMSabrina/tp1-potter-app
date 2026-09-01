import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail/Detail.jsx';
import Wishlist from './pages/Wishlist';
import History from './pages/History';
import Contact from './pages/Contact';

// Importamos el menú global
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* El Header queda por fuera de Routes para que se vea en todas las pantallas. */}
      <Header></Header>
      
      <main>
        <Routes>
          {/* RF1: Vista home */}
          <Route path="/" element={<Home />} />
          
          {/* RF2: Búsqueda con filtros */}
          <Route path="/search" element={<Search />} />
          
          {/* RF4: Vista de detalle (el :id es dinámico para saber qué ítem cargar) */}
          <Route path="/character/:id" element={<Detail />} />
          
          {/* RF5: Lista de deseos */}
          <Route path="/wishlist" element={<Wishlist />} />
          
          {/* RF6: Historial de ítems visitados */}
          <Route path="/history" element={<History />} />
          
          {/* RF7: Página de contacto */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;