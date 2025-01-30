const API_BASE_URL = 'https://api.datoslab.cl/datoslab';

export const fetchMembers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/members`);
    if (!response.ok) {
      throw new Error('Error al obtener los miembros');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
