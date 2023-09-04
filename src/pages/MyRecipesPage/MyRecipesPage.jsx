import React from 'react';
import RecipesList from '../../components/recipesList/recipesList';

import styles from './MyRecipesPage.module.scss';

const MyRecipesPage = () => {

  return (
     <div  className={styles.container}>
          <RecipesList></RecipesList>
     </div>
  );
};

export default MyRecipesPage;
