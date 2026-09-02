// Configuración única por entidad: cada campo define
//     - name: clave local (la que usa el estado `filters`)
//     - apiKey: clave que espera la API potterdb
//     - label / type / placeholder / options: para renderizar el form
export const ENTITY_CONFIG = {
  characters: {
    label: 'Personajes',
    fields: [
      {
        name: 'house',
        apiKey: 'filter[house_eq]',
        label: 'Casa:',
        type: 'select',
        placeholder: 'Todas',
        options: [
          { value: 'Gryffindor', label: 'Gryffindor' },
          { value: 'Slytherin', label: 'Slytherin' },
          { value: 'Hufflepuff', label: 'Hufflepuff' },
          { value: 'Ravenclaw', label: 'Ravenclaw' },
        ],
      },
      {
        name: 'gender',
        apiKey: 'filter[gender_eq]',
        label: 'Género:',
        type: 'select',
        placeholder: 'Todos',
        options: [
          { value: 'Male', label: 'Masculino' },
          { value: 'Female', label: 'Femenino' },
        ],
      },
    ],
  },

  spells: {
    label: 'Hechizos',
    fields: [
      {
        name: 'spellCategory',
        apiKey: 'filter[category_eq]',
        label: 'Tipo de Hechizo:',
        type: 'select',
        placeholder: 'Todos',
        options: [
          { value: 'Charm', label: 'Encantamiento (Charm)' },
          { value: 'Curse', label: 'Maldición (Curse)' },
          { value: 'Hex', label: 'Embrujo (Hex)' },
          { value: 'Jinx', label: 'Maleficio (Jinx)' },
        ],
      },
      {
        name: 'light',
        apiKey: 'filter[light_eq]',
        label: 'Color de luz:',
        type: 'select',
        placeholder: 'Cualquiera',
        options: [
          { value: 'Red', label: 'Rojo' },
          { value: 'Blue', label: 'Azul' },
          { value: 'Green', label: 'Verde' },
          { value: 'White', label: 'Blanco' },
        ],
      },
    ],
  },

  potions: {
    label: 'Pociones',
    fields: [
      {
        name: 'difficulty',
        apiKey: 'filter[difficulty_eq]',
        label: 'Dificultad:',
        type: 'select',
        placeholder: 'Cualquiera',
        options: [
          { value: 'Beginner', label: 'Principiante' },
          { value: 'Moderate', label: 'Moderada' },
          { value: 'Advanced', label: 'Avanzada' },
        ],
      },
      {
        name: 'effect',
        apiKey: 'filter[effect_cont_any]',
        label: 'Efecto contiene:',
        type: 'text',
        placeholder: 'Ej. Healing, poison...',
      },
    ],
  },
};

// Filtro común a todas las entidades
export const COMMON_FIELD = {
  name: 'name',
  apiKey: 'filter[name_cont_any]',
  label: 'Nombre:',
  type: 'text',
  placeholder: 'Ej. Harry, Lumos, Felix...',
};