// ============================================================
// searchStateService.js
// Persiste la última búsqueda (entidad + filtros + resultados)
// para poder restaurarla al volver desde el detalle
// ============================================================

const STORAGE_KEY = 'hp_last_search';

// Guarda el estado completo de la búsqueda actual
export function saveSearchState({ entity, filters, results }) {
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ entity, filters, results })
  );
}

// Recupera la última búsqueda guardada (o null si no hay ninguna)
export function getSearchState() {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}