import React from 'react';
import styles from './SearchResults.module.scss';

function SearchResults({ results }) {
  const cocktails = results.cocktails || [];
  return (
    <div>
      <ul className={styles.container}>
        {cocktails.map(cocktail => (
          <li key={cocktail._id}>
            <ul className={styles.cocktail}>
              <li>
                <img
                  className={styles.cocktail__image}
                  src={cocktail.drinkThumb}
                  alt={cocktail._id}
                  width="100%"
                ></img>
              </li>
              <li className={styles.cocktail__title}>{cocktail.drink}</li>
              <li className={styles.cocktail__link}>
                <a href="./recipe">Ingredients</a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SearchResults };
