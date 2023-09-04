import React from 'react';
import { useSelector } from 'react-redux';

import styles from './AddRecipePage.module.scss';
import AddRecipeForm from '../../components/addRecipeForm/addRecipeForm';
import AddRecipePopularContainer from 'components/AddRecipePopularContainer/AddRecipePopularContainer';
import { Toaster } from 'react-hot-toast';
import Skeleton from 'components/skeleton/skeleton';
import { selectedPopularRecipes } from 'redux/selectors';

const AddRecipePage = () => {
  const { isLoading } = useSelector(selectedPopularRecipes);
  return (
    <section className={styles.section}>
      {isLoading && <Skeleton />}
      <Toaster />
      <h1 className={styles.title}> Add recipe </h1>
      <div className={styles.container}>
        <AddRecipeForm />
        <AddRecipePopularContainer />
      </div>
    </section>
  );
};

export default AddRecipePage;
