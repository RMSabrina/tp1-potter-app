import { ENTITY_CONFIG, COMMON_FIELD } from '../constants/entityConfig.js';
 
export const searchEntities = async (entity, filters) => {
  const params = new URLSearchParams();

  // Aplicar filtros comunes + filtros específicos de la entidad
  const fields = [COMMON_FIELD, ...(ENTITY_CONFIG[entity]?.fields || []) ];

  fields.forEach(({ name, apiKey }) => {
    if (filters[name]) params.append(apiKey, filters[name]);
  });

  const response = await fetch(`https://api.potterdb.com/v1/${entity}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`Error al conectar con la API para buscar ${entity}`);
  }

  const data = await response.json();

  // Formateo de los datos para que el componente los reciba listos para usar
  return data.data.map(item => ({
    id: item.id,
    type: item.type,
    ...item.attributes,
  }));
};
