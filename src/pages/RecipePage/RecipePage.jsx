import React, { useEffect, useState } from 'react';
import getRecipeData from '../../api/resipesApi.jsx';

import RecipeIngredientsList from '../../components/recipeInngredientsList/recipeInngredientsList.jsx';
import Preparation from '../../components/recipePreparation/recipePreparation.jsx';
import Field from '../../components/recipeDescriptionFields/recipeDescriptionFields.jsx';

const RecipePage = () => {
  const [recipeData, setRecipeData] = useState({
    category: "",
    glass: "",
    drinkThumb: "",
    ingredients: [],
    instructions: ""
  });

  useEffect(() => {
    const recipeId = '639b6de9ff77d221f190c56a';
    getRecipeData(recipeId)
      .then(data => {
        if (data) {
          console.log(data);
          setRecipeData({
            category: data.category,
            glass: data.glass,
            drinkThumb: data.drinkThumb,
            ingredients: data.ingredients,
            instructions: data.instructions
          });
        }
      });
  }, []);

  const { category, glass, drinkThumb, ingredients, instructions } = recipeData;

  return (
    <div>
      <Field glass={glass} category={category} drinkThumb={drinkThumb}/>

      <RecipeIngredientsList ingredients={ingredients} />

      <Preparation instructions={instructions} />
    </div>
  );
};

export default RecipePage;
