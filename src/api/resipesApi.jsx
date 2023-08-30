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
    console.log('Recipe added to favorites');
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
    console.log('Recipe removed from favorites');
  } else {
    console.error('Failed to remove recipe from favorites');
  }
};

export const checkFavorite = async (recipeId, token) => {
  const API_URL = `https://projectteam7-backend.onrender.com/favorite?page=1`;

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    const favoriteRecipes = data.recipes;

    const isFavorite = favoriteRecipes.some(recipe => recipe._id === recipeId);
    return isFavorite;
  } else {
    console.error('Failed to check if recipe is favorite');
    throw new Error('Failed to check if recipe is favorite');
  }
};
