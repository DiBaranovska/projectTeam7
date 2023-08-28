import React, { useState, useEffect } from 'react';
import css from './recipeDescriptionFields.module.scss';
import { addToFavorites, removeFromFavorites, checkFavorite } from '../../api/resipesApi.jsx';

const Field = ({ glass, category, drinkThumb, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const isRecipeFavorite = await checkFavorite(recipeId);
        setIsFavorite(isRecipeFavorite);
      } catch (error) {
        console.error('Failed to fetch favorite status:', error);
      }
    };

    fetchFavoriteStatus();
  }, [recipeId]);

  const handleFavoriteToggle = async () => {
    if (!isFavorite) {
      try {
        await addToFavorites(recipeId);
        setIsFavorite(true);
      } catch (error) {
        console.error('Failed to add to favorites:', error);
      }
    } else {
      try {
        await removeFromFavorites(recipeId);
        setIsFavorite(false);
      } catch (error) {
        console.error('Failed to remove from favorites:', error);
      }
    }
  };

  return (
    <div className={css.field}>
      <div>
        <p className={css.field__glass}>{glass}</p>
        <h1 className={css.field__category}>{category}</h1>
        <p className={css.field__description}>Опис якого немає на беку</p>
        <button className={css.field__button} onClick={handleFavoriteToggle}>
          <span className={css.field__button_text}>
            {isFavorite ? 'Remove from favorite' : 'Add to favorite recipe'}
          </span>
        </button>

      </div>
      <img src={drinkThumb} alt="Drink Thumbnail" className={css.field__img}/>
    </div>
  );
};

export default Field;
