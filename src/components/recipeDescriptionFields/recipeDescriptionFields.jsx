import React from 'react';
import css from './recipeDescriptionFields.module.scss';

const Field = ({ glass, category, drinkThumb }) => {
  return (
    <div className={css.field}>
      <div>
        <p className={css.field__glass}>{glass}</p>
        <h1 className={css.field__category}>{category}</h1>
        <p className={css.field__description}>Опис якого немає на беку</p>
          {/* <div>RecipePage</div> */}
        <button className={css.field__button}><span className={css.field__button_text}>Add to favorite recipe</span></button>
      </div>
      <img src={drinkThumb} alt="Drink Thumbnail" className={css.field__img}/>
    </div>
  );
};

export default Field;