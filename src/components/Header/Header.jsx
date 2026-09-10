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
                {location.pathname !== '/' && (
                    <NavLink
                        to="/"
                        className="home-btn"
                        aria-label="Volver al inicio"
                    >
                        <svg
                            className="icon-home"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 11.5L12 4l9 7.5M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"
                            />
                        </svg>
                    </NavLink>
                )}
                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive ? 'favorites-btn active' : 'favorites-btn'
                    }
                    aria-label="Favoritos"
                >
                    <svg
                        className="icon-heart"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={undefined}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21s-6.7-4.35-9.3-8.2C1.1 10.4 1.6 7 4.3 5.4c2.2-1.3 4.9-.6 6.3 1.4l1.4 2 1.4-2c1.4-2 4.1-2.7 6.3-1.4 2.7 1.6 3.2 5 1.6 7.4C18.7 16.65 12 21 12 21z"
                        />
                    </svg>
                </NavLink>
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
            <Navbar isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}