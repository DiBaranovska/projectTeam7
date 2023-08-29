import React from 'react';
import css from './recipePreparation.module.scss';
import img from "../../img/recipePreparation.jpg";

const Preparation = ({ instructions }) => {
  return (
    <div className={css.preparation}>
      <h2 className={css.preparation__title}>Recipe Preparation</h2>
      <div className={css.preparation__container}>
        <p className={css.preparation__description}>{instructions}</p>
        <div className={css.preparation__imageContainer}>
          <img src={img} alt="Recipe Preparation" className={css.preparation__img}/>
        </div>        
      </div>
      </div>
  );
};

export default Preparation;