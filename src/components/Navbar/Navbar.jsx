// src/components/Navbar/Navbar.jsx
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { getVisibleNavItems } from '../../constants/routes';

export default function Navbar({ isOpen, onClose }) {
  const location = useLocation();
  const visibleItems = getVisibleNavItems(location.pathname);

  return (
    <>
      {/* Fondo oscuro para cerrar al clickear afuera */}
      {isOpen && <div className="menu-backdrop" onClick={onClose} />}

      {/* Drawer lateral */}
      <aside className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="menu-drawer-header">
          <h3>Navegación</h3>
          <button className="menu-close-btn" onClick={onClose} aria-label="Cerrar menú">
            ✕
          </button>
        </div>

        <nav className="menu-drawer-nav">
          <ul>
            {visibleItems.map(item => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => (isActive ? 'drawer-link active' : 'drawer-link')}
                  onClick={onClose}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}