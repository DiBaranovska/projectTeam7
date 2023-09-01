import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteRecipes } from 'redux/favoriteRecipes/selectors';
import { fetchFavoriteRecipes } from '../../api/favoriteApi';

import RecipesListFavorite from '../../components/recipesListFavorite/recipeListFavorite';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import NotFound from '../../components/notFound/notFound';
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
      {isLoading ? (
        <div className={styles.wrap_main}>
          <MainPageTitle title="Favorites"></MainPageTitle>
          <Skeleton></Skeleton>
        </div>
      ) : items.length > 0 ? (
        <div className={styles.wrap_main}>
          <MainPageTitle title="Favorites"></MainPageTitle>
          <RecipesListFavorite
            items={items}
            total={total}
          ></RecipesListFavorite>
        </div>
      ) : (
        <div className={styles.wrap_main_empty}>
          <MainPageTitle title="Favorites"></MainPageTitle>
          <NotFound></NotFound>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
