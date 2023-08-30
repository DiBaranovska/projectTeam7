import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRecipeData } from '../../api/resipesApi.jsx';
import css from './RecipePage.module.scss';

import RecipeIngredientsList from '../../components/recipeInngredientsList/recipeInngredientsList.jsx';
import Preparation from '../../components/recipePreparation/recipePreparation.jsx';
import Field from '../../components/recipePageHero/recipePageHero.jsx';

function RecipePage () {
  const [recipeId, setRecipeId] = useState("");
  const [recipeData, setRecipeData] = useState({
    category: "",
    drinkAlternate: "",
    glass: "",
    drinkThumb: "",
    ingredients: [],
    instructions: ""
  });

  const yourReceivedToken = useSelector(state => state.user.token);

  const [currentToken, setCurrentToken] = useState(null);

useEffect(() => {
  setCurrentToken(yourReceivedToken);
}, [yourReceivedToken]);

useEffect(() => {
  if (currentToken) {
    const pathParts = window.location.pathname.split('/');
    const extractedRecipeId = pathParts[pathParts.length - 1];
    setRecipeId(extractedRecipeId);

    const fetchData = async () => {
      try {
        const data = await getRecipeData(extractedRecipeId, currentToken);
        if (data) {
          console.log(data);
          setRecipeData({
            category: data.category,
            drinkAlternate: data.drinkAlternate,
            glass: data.glass,
            drinkThumb: data.drinkThumb,
            ingredients: data.ingredients,
            instructions: data.instructions
          });
        }
      } catch (error) {
        console.error('An error occurred:', error);
        console.log('Token:', currentToken);
      }
    };
    fetchData();
    }
  }, [currentToken]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipeId]);

  const { category, drinkAlternate, glass, drinkThumb, ingredients, instructions } = recipeData;

  return (
    <div className={`${css.conteiner} ${css.recipe__conteiner}`}>
      <Field glass={glass} drinkAlternate={drinkAlternate} category={category} drinkThumb={drinkThumb} recipeId={recipeId} />

      <RecipeIngredientsList ingredients={ingredients} />

      <Preparation instructions={instructions} />
    </div>
  );
};

export default RecipePage;
