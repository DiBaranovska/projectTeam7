const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWJhNzY1MjZhYTJlNDBmYWU1ZjUxZCIsImlhdCI6MTY5MzIzNTA3NCwiZXhwIjoxNjkzMzE3ODc0fQ.A5meq6tMr1SzWTte8dUPS-d3YBHVmVAuHvOc9DJtF1M';

export const getRecipeData = async (recipeId) => {
  const API_URL = `https://projectteam7-backend.onrender.com/recipes/${recipeId}`;

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};

export const addToFavorites = async (recipeId) => {
  const API_URL = 'https://projectteam7-backend.onrender.com/favorite';

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${TOKEN}`,
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

export const removeFromFavorites = async (recipeId) => {
  const API_URL = `https://projectteam7-backend.onrender.com/favorite/${recipeId}`;

  const response = await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });

  if (response.ok) {
    console.log('Recipe removed from favorites');
  } else {
    console.error('Failed to remove recipe from favorites');
  }
};

export const checkFavorite = async (recipeId) => {
  const API_URL = `https://projectteam7-backend.onrender.com/favorite?page=1`;

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });

  if (response.ok) {
    const data = await response.json();
    const favoriteRecipes = data.recipes;

    const isFavorite = favoriteRecipes.some(recipe => recipe._id === recipeId);
    // console.log(isFavorite)
    return isFavorite;
  } else {
    console.error('Failed to check if recipe is favorite');
    throw new Error('Failed to check if recipe is favorite');
  }
};
