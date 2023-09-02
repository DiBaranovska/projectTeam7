import React from 'react';
import { useSelector } from 'react-redux';
import { getMyRecipes } from 'redux/myRecipes/selectors';
import RecipesList from '../../components/recipesList/recipesList';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './MyRecipesPage.module.scss';
import NotFound from '../../components/notFound/notFound';
import Skeleton from 'components/skeleton/skeleton';

const MyRecipesPage = () => {
  const { items, isLoading } = useSelector(getMyRecipes);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.wrap_main}>
          <MainPageTitle title="My recipes"></MainPageTitle>
          <Skeleton></Skeleton>
        </div>
      ) : items.length > 0 ? (
        <div className={styles.wrap_main}>
          <MainPageTitle title="My recipes"></MainPageTitle>
          <RecipesList></RecipesList>
        </div>
      ) : (
        <div className={styles.wrap_main_empty}>
          <MainPageTitle title="My recipes"></MainPageTitle>
          <NotFound text={"You haven't added any cocktails yet"}></NotFound>
        </div>
      )}
    </div>
  );
};

export default MyRecipesPage;
