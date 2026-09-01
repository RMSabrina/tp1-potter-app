import './Header.css'

export default function Header() {
  return (
    <>
        <header className="header-container">

            {/*Menu hamburguesa*/}
            <button className="menu-btn" aria-label="Open menu">
                <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

            {/*Contenedor del buscador*/}

            <div className="search-container">
                <svg
                    className="search-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                </svg>
                
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="search-input"
                />
            </div>

        </header>

    </>
  );
}