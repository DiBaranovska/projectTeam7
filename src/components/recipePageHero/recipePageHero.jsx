import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './recipePageHero.module.scss';
import { addToFavorites, removeFromFavorites, checkFavorite } from '../../api/resipesApi.jsx';
import img from '../../img/recipeCocteile.jpg'


const Field = ({ glass, drinkAlternate, category, drinkThumb, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const yourReceivedToken = useSelector(state => state.user.token);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const isRecipeFavorite = await checkFavorite(recipeId, yourReceivedToken);
        setIsFavorite(isRecipeFavorite);
      } catch (error) {
        console.error('Failed to fetch favorite status:', error);
      }
    };

    fetchFavoriteStatus();
  }, [recipeId, yourReceivedToken]);

  const handleFavoriteToggle = async () => {
  try {
    if (!isFavorite) {
      await addToFavorites(recipeId, yourReceivedToken);
      setIsFavorite(true);
    } else {
      await removeFromFavorites(recipeId, yourReceivedToken);
      setIsFavorite(false);
    }
  } catch (error) {
    console.error('Failed to toggle favorite:', error);
  }
};

  return (
    <div className={css.field}>
      <div>
        <p className={css.field__glass}>{glass}</p>
        <h1 className={css.field__category}>{category}</h1>
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
