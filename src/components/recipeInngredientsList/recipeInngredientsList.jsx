import React from 'react';
import css from './recipeInngredientsList.module.scss'

const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <div className={css.ingredients}>
      <h2 className={css.ingredients__title}>Ingredients</h2>
      <ul className={css.ingredients__list}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={css.ingredients__card}>
            <div className={css.ingredients__card__background}>
              {ingredient.ingredientThumb && (
              <img src={ingredient.ingredientThumb} alt={ingredient.title} className={css.ingredients__card__img}/>
            )}
            </div>
            <div className={css.ingredients__card__description }>
              <p className={css.ingredients__card__title}>{ingredient.title}</p>
              {ingredient.measure && <p className={css.ingredients__card__measure}>{ingredient.measure}</p>}   
            </div>            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredientsList;
