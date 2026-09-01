export const getCharacters = async () => {
  try {
    const response = await fetch("https://api.potterdb.com/v1/characters?page[size]=10");
    
    if (!response.ok) {
      throw new Error("Error al obtener los personajes");
    }
    
    const data = await response.json();

    // Filtrar y aplanar los datos para el front (como se habló en clase)
    const shortCharacters = data.data.map(character => ({
      id: character.id,
      name: character.attributes.name,
      image: character.attributes.image
    }));
    return shortCharacters;
  } 
  
  catch (error) {
    console.error("Error en characterService:", error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`https://api.potterdb.com/v1/characters/${id}`);
    if (!response.ok) throw new Error("Error al obtener el personaje");
    
    const data = await response.json();
    return data.data.attributes;
  } 
  
  catch (error) {
    console.error("Error obteniendo el detalle:", error);
    throw error;
  }
};