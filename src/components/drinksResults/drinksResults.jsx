import React from 'react';
import { Link } from 'react-router-dom';
import styles from './drinksResults.module.scss';

function DrinksResults({ results }) {
  const cocktails = results.cocktails || [];
  return (
    <div>
      <ul className={styles.container}>
        {cocktails.map(cocktail => (
          <li key={cocktail._id} className={styles.container__item}>
            <ul className={styles.cocktail}>
              <li>
                <img
                  className={styles.cocktail__image}
                  src={cocktail.drinkThumb}
                  alt={cocktail._id}
                  width="400"
                  height="400"
                ></img>
              </li>
              <li className={styles.cocktail__title}>{cocktail.drink}</li>
              <li className={styles.cocktail__link}>
                <Link to={`/recipe/${cocktail._id}`}>Ingredients</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrinksResults;
