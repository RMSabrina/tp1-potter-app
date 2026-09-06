import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getVisibleNavItems } from '../../constants/routes';
import Navbar from '../Navbar/Navbar.jsx';
import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const visibleItems = getVisibleNavItems(location.pathname);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="header-container">
{/* Botón hamburguesa: solo visible en mobile/tablet (CSS) */}
                <button
                    className="menu-btn"
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <svg
                        className="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navegación horizontal: solo visible en desktop (CSS) */}
                <nav className="desktop-nav">
                    <ul>
                        {visibleItems.map(item => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? 'desktop-nav-link active' : 'desktop-nav-link'
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* El menú lateral va acá: hermano del header, fuera del contenedor flex */}
            <Navbar isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}