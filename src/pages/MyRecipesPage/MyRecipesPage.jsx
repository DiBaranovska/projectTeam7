import React from 'react';

import RecipesList from '../../components/recipesList/recipesList';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './MyRecipesPage.module.scss';

const MyRecipesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_main}>
        <MainPageTitle title="My recipes"></MainPageTitle>
        <RecipesList></RecipesList>
      </div>
    </div>
  );
};

export default MyRecipesPage;
