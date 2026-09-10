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
    // [Campos que se muestran en la vista de Detail
    detail: {
      primaryFields: [
        { key: 'house', label: 'Casa', fallback: 'Desconocida' },
        { key: 'species', label: 'Especie', fallback: 'Desconocida' },
        { key: 'blood_status', label: 'Sangre', fallback: 'Desconocida' },
        { key: 'gender', label: 'Género', fallback: 'Desconocido' },
      ],
      optionalFields: [
        { key: 'nationality', label: 'Nacionalidad' },
        { key: 'born', label: 'Nacimiento' },
        { key: 'died', label: 'Fallecimiento' },
        { key: 'patronus', label: 'Patronus' },
        { key: 'boggart', label: 'Boggart' },
        { key: 'animagus', label: 'Animago' },
        { key: 'eye_color', label: 'Ojos' },
        { key: 'hair_color', label: 'Pelo' },
      ],
    },
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
    detail: {
      primaryFields: [
        { key: 'category', label: 'Categoría', fallback: 'Desconocida' },
        { key: 'light', label: 'Color de luz', fallback: 'Desconocido' },
      ],
      optionalFields: [
        { key: 'incantation', label: 'Encantamiento' },
        { key: 'creator', label: 'Creador' },
        { key: 'effect', label: 'Efecto' },
        { key: 'hand', label: 'Movimiento de mano' },
      ],
    },
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
    detail: {
      primaryFields: [
        { key: 'difficulty', label: 'Dificultad', fallback: 'Desconocida' },
      ],
      optionalFields: [
        { key: 'effect', label: 'Efecto' },
        { key: 'side_effects', label: 'Efectos secundarios' },
        { key: 'time', label: 'Tiempo de preparación' },
        { key: 'ingredients', label: 'Ingredientes' },
        { key: 'characteristics', label: 'Características' },
      ],
    },
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