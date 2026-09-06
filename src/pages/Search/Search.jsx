import { useState } from 'react';
import Grid from '../../components/Grid/Grid.jsx';
import { searchEntities } from '../../services/searchService.js';
import { ENTITY_CONFIG, COMMON_FIELD } from '../../constants/entityConfig.js';
import Card from '../../components/Card/Card.jsx';
import { getSearchState, saveSearchState } from '../../services/searchStateService.js';
import './Search.css'


// Componente genérico para renderizar cualquier campo (select o text)
function FilterField({ field, value, onChange }) {
  if (field.type === 'select') {
    return (
      <div className="filter-group">
        <label htmlFor={field.name}>{field.label}</label>
        <select name={field.name} id={field.name} value={value} onChange={onChange}>
          <option value="">{field.placeholder}</option>
          {field.options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="filter-group">
      <label htmlFor={field.name}>{field.label}</label>
      <input
        type="text"
        id={field.name}
        name={field.name}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
      />
    </div>
  );
}

// Helper: arma el objeto de filtros vacío para una entidad dada,
//     incluyendo siempre el filtro común (name) + los propios de la entidad
function getEmptyFilters(entity) {
  const fields = [COMMON_FIELD, ...(ENTITY_CONFIG[entity]?.fields || [])];
  return fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});
}


export default function Search() {
  const savedSearch = getSearchState(); // se lee UNA sola vez

  // Estado para la categoría actual (endpoint de la API)
  const [entity, setEntity] = useState(savedSearch?.entity || 'characters');

  // Estado unificado para todos los posibles filtros (derivado del config)
  const [filters, setFilters] = useState(savedSearch?.filters || getEmptyFilters('characters'));

  const [results, setResults] = useState(savedSearch?.results || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(!!savedSearch);

  // Manejar cambio de categoría (limpiar los filtros y resultados al cambiar)
  const handleEntityChange = (e) => {
    const newEntity = e.target.value;
    setEntity(newEntity);
    setFilters(getEmptyFilters(newEntity));
    setResults([]);
    setHasSearched(false);
  };

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const formattedData = await searchEntities(entity, filters);
      setResults(formattedData);
      saveSearchState({ entity, filters, results: formattedData }); // <-- agregar esta línea
    } catch (err) {
      console.error(err);
      setError("Hubo un problema al realizar la búsqueda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="search-container">

      <section className="search-section">
        <h1>Búsqueda en el Mundo Mágico</h1>

        <form onSubmit={handleSearch} className="search-form">
          {/* SELECTOR DE ENTIDAD / CATEGORÍA (generado desde el config) */}
          <div className="filter-group category-selector">
            <label htmlFor="entity">¿Qué estás buscando?</label>
            <select name="entity" id="entity" value={entity} onChange={handleEntityChange}>
              {Object.entries(ENTITY_CONFIG).map(([key, cfg]) => (
                <option key={key} value={key}>{cfg.label}</option>
              ))}
            </select>
          </div>

          <hr />

          {/* FILTRO COMÚN: NOMBRE */}
          <FilterField
            field={COMMON_FIELD}
            value={filters.name}
            onChange={handleInputChange}
          />

          {/* FILTROS DINÁMICOS SEGÚN ENTIDAD ACTIVA */}
          {(ENTITY_CONFIG[entity]?.fields || []).map(field => (
            <FilterField
              key={field.name}
              field={field}
              value={filters[field.name] ?? ''}
              onChange={handleInputChange}
            />
          ))}

          <button type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>
      </section>

      {/* RESULTADOS */}
      <section className="results-section">
        {loading && <p>Cargando resultados...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && hasSearched && results.length > 0 && (
          <Grid
            results={results}
            renderItem={(item) =>
              <Card key={item.id} {...item} entity={entity} />}
          />
        )}

        {!loading && !error && hasSearched && results.length === 0 && (
          <p>No se encontraron resultados con esos filtros.</p>
        )}
      </section>
    </main>
  );
}

