import React, { useEffect, useState } from 'react';

import RecipesList from '../../components/recipesList/recipesList';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './MyRecipesPage.module.css';

const MyRecipesPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.wrap_main}>
        <MainPageTitle title="My recipes"></MainPageTitle>
        <RecipesList></RecipesList>
      </main>
    </div>
  );
};

export default MyRecipesPage;
