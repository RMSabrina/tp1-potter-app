import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES, NAV_ITEMS } from './constants/routes'; 

import Home from './pages/Home';
import Search from './pages/Search/Search.jsx';
import Detail from './pages/Detail/Detail.jsx';
import Wishlist from './pages/Wishlist';
import History from './pages/History';
import Contact from './pages/Contact';

import Header from './components/Header/Header.jsx';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      {/* El Header queda por fuera de Routes para que se vea en todas las pantallas. */}
      <Header navItems={NAV_ITEMS}></Header>
        <Routes>
          {/* RF1: Vista home */}
          <Route path={ROUTES.HOME} element={<Home />} />
          
          {/* RF2: Búsqueda con filtros */}
          <Route path={ROUTES.SEARCH} element={<Search />} />
          
          {/* RF4: Vista de detalle (el :id es dinámico para saber qué ítem cargar) */}
          <Route path={ROUTES.CHARACTER} element={<Detail />} />
          
          {/* RF5: Lista de deseos */}
          <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
          
          {/* RF6: Historial de ítems visitados */}
          <Route path={ROUTES.HISTORY} element={<History />} />
          
          {/* RF7: Página de contacto */}
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;