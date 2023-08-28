import React, { useEffect, useState } from 'react';
import {getRecipeData} from '../../api/resipesApi.jsx';
import css from './RecipePage.module.scss';

import RecipeIngredientsList from '../../components/recipeInngredientsList/recipeInngredientsList.jsx';
import Preparation from '../../components/recipePreparation/recipePreparation.jsx';
import Field from '../../components/recipeDescriptionFields/recipeDescriptionFields.jsx';

const RecipePage = () => {
  const [recipeId, setRecipeId] = useState("");
  const [recipeData, setRecipeData] = useState({
    category: "",
    glass: "",
    drinkThumb: "",
    ingredients: [],
    instructions: ""
  });

  useEffect(() => {
    const recipeId = '639b6de9ff77d221f190c62e';
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
      setRecipeId(recipeId);
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, []);

  const { category, glass, drinkThumb, ingredients, instructions } = recipeData;

  return (
    <div className={css.conteiner__recipe}>
      <Field glass={glass} category={category} drinkThumb={drinkThumb} recipeId={recipeId} />

      <RecipeIngredientsList ingredients={ingredients} />

      <Preparation instructions={instructions} />
    </div>
  );
};

export default RecipePage;
