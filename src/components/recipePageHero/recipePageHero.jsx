import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './recipePageHero.module.scss';
import { addToFavorites, removeFromFavorites } from '../../api/resipesApi.jsx';
import img from '../../img/recipeCocteile.jpg'

const Field = ({ glass, drinkAlternate, drink, drinkThumb, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const yourReceivedToken = useSelector((state) => state.user.token);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('favoriteRecipes');
      const favoriteRecipes = JSON.parse(savedData) || { recipes: [] };
      const recipesArray = favoriteRecipes.recipes;
      const desiredRecipeId = recipeId;
      const isRecipeIdInFavorites = recipesArray.some((recipe) => recipe._id === desiredRecipeId);
      setIsFavorite(isRecipeIdInFavorites);
    } catch (error) {
      console.error('Failed to fetch favorite status:', error);
    }
  }, [recipeId, yourReceivedToken]);

  const handleFavoriteToggle = async () => {
    try {
      const savedData = localStorage.getItem('favoriteRecipes');
      const favoriteRecipes = JSON.parse(savedData) || { recipes: [] };
      const recipesArray = favoriteRecipes.recipes;
      const desiredRecipeId = recipeId;
      const isRecipeIdInFavorites = recipesArray.some((recipe) => recipe._id === desiredRecipeId);

      if (!isRecipeIdInFavorites) {
        await addToFavorites(recipeId, yourReceivedToken);
        setIsFavorite(true);
        recipesArray.push({ _id: desiredRecipeId }); // Додавання до локального сховища
      } else {
        await removeFromFavorites(recipeId, yourReceivedToken);
        setIsFavorite(false);
        // Видалення з локального сховища
        const index = recipesArray.findIndex((recipe) => recipe._id === desiredRecipeId);
        if (index !== -1) {
          recipesArray.splice(index, 1);
        }
      }

      // Збереження оновленого масиву в локальному сховищі
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  };

  return (
    <div className={css.field}>
      <div>
        <p className={css.field__glass}>{glass}</p>
        <h1 className={css.field__drink}>{drink}</h1>
        <p className={css.field__description}>{drinkAlternate}</p>
        <button className={css.field__button} onClick={handleFavoriteToggle}>
          <span className={css.field__button_text}>
            {isFavorite ? 'Remove from favorite' : 'Add to favorite recipe'}
          </span>
        </button>

      </div>
      <div className={css.field__imageContainer}>
        {drinkThumb ? (
          <img src={drinkThumb} alt="Drink Thumbnail" className={css.field__img} />
        ) : (
          <img src={img} alt="Drink Thumbnail" className={css.field__img} />
        )}
      </div>
    </div>
  );
};

export default Field;
