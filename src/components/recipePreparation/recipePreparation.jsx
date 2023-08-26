import React from 'react';
import css from './recipePreparation.module.scss'

const Preparation = ({ instructions }) => {
  return (
    <div className={css.preparation}>
      <h2 className={css.preparation__title}>Recipe Preparation</h2>
      <div className={css.preparation__container}>
        <p className={css.preparation__description}>{instructions}</p>
        <img src="src\img\recipePreparation.jpg" alt="Recipe Preparation" className={css.preparation__img}/>
      </div>
      </div>
  );
};

export default Preparation;