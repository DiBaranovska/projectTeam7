import axios from 'axios';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const getRecipeData = async (recipeId, token) => {
  try {
    const response = await axios.get(`recipes/${recipeId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export const addToFavorites = async (recipeId, token) => {
  const API_URL = 'https://projectteam7-backend.onrender.com/favorite';

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: recipeId })
  });

  if (response.ok) {
  } else {
    console.error('Failed to add recipe to favorites');
  }
};

export const removeFromFavorites = async (recipeId, token) => {
  const API_URL = `https://projectteam7-backend.onrender.com/favorite/${recipeId}`;

  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.ok) {
  } else {
    console.error('Failed to remove recipe from favorites');
  }
};
