import axios from 'axios';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const fetchGlassesList = async token => {
  try {
    const response = await axios.get(`recipes/glass`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching glasses:', error);
    throw error;
  }
};

export const fetchIngredientsList = async token => {
  try {
    const response = await axios.get(`recipes/ingredients`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw error;
  }
};

export const fetchCategoriesList = async token => {
  try {
    const response = await axios.get(`recipes/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const searchCocktails = async (token, params) => {
  try {
    const response = await axios.get(`/search`, {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
