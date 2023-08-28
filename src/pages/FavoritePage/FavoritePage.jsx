import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { fetchFavoriteRecipes } from '../../api/favoriteApi';

import RecipesListFavorite from '../../components/recipesListFavorite/recipeListFavorite';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './FavoritePage.module.css';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(getFavoriteRecipes);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <main className={styles.wrap_main}>
        <MainPageTitle title="Favorites"></MainPageTitle>
        {items.length > 0 && (
          <RecipesListFavorite
            items={items}
            total={total}
          ></RecipesListFavorite>
        )}
      </main>
    </div>
  );
};

export default FavoritePage;
