import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { fetchFavoriteRecipes } from '../../api/favoriteApi';

import RecipesListFavorite from '../../components/recipesListFavorite/recipeListFavorite';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import Skeleton from 'components/skeleton/skeleton';
import styles from './FavoritePage.module.scss';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const { items, total, isLoading } = useSelector(getFavoriteRecipes);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.wrap_main}>
        <MainPageTitle title="Favorites"></MainPageTitle>
        {isLoading && <Skeleton></Skeleton>}
        {!isLoading & (items.length > 0) && (
          <RecipesListFavorite
            items={items}
            total={total}
          ></RecipesListFavorite>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
