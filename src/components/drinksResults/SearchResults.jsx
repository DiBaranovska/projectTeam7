import React from 'react';
import styles from './SearchResults.module.scss';

function SearchResults({ results }) {
  const cocktails = results.cocktails || [];
  return (
    <div>
      <ul className={styles.container}>
        {cocktails.map(cocktail => (
          <li key={cocktail._id}>
            <ul>
              <li>
                <img
                  src={cocktail.drinkThumb}
                  alt={cocktail._id}
                  width="400"
                ></img>
              </li>
              <li>{cocktail.drink}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SearchResults };
