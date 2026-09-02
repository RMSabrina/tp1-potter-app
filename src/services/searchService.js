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



// export const searchEntities = async (entity, filters) => {
//   const params = new URLSearchParams();
  
//   // Filtro común: Nombre
//   if (filters.name) params.append('filter[name_cont_any]', filters.name);

//   // Filtros dinámicos según la entidad
//   if (entity === 'characters') {
//     if (filters.house) params.append('filter[house_eq]', filters.house);
//     if (filters.gender) params.append('filter[gender_eq]', filters.gender);
//   } 
//   else if (entity === 'spells') {
//     if (filters.spellCategory) params.append('filter[category_eq]', filters.spellCategory);
//     if (filters.light) params.append('filter[light_eq]', filters.light);
//   }
//   else if (entity === 'potions') {
//     if (filters.difficulty) params.append('filter[difficulty_eq]', filters.difficulty);
//     if (filters.effect) params.append('filter[effect_cont_any]', filters.effect);
//   }

//   // Fetch API
//   const response = await fetch(`https://api.potterdb.com/v1/${entity}?${params.toString()}`);
  
//   if (!response.ok) {
//     throw new Error(`Error al conectar con la API para buscar ${entity}`);
//   }
  
//   const data = await response.json();
  
//   // Formateo de los datos para que el componente los reciba listos para usar
//   return data.data.map(item => ({
//     id: item.id,
//     type: item.type,
//     ...item.attributes
//   }));
// };