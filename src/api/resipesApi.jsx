const getRecipeData = async (recipeId) => {
  const API_URL = `https://projectteam7-backend.onrender.com/recipes/${recipeId}`;
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTlhNjI1MzJkYTU4ODc4NWI5NDI1MSIsImlhdCI6MTY5MzAzNDAyMSwiZXhwIjoxNjkzMTE2ODIxfQ.YK41zRMmSN06PNyQFuddAvVzNL2iE0ahySvqEODTNM8'; // Ваш токен

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

export default getRecipeData;
