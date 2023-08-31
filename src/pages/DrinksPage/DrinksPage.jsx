import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchPage } from '../../components/drinksSearch/drinksSearch';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './DrinksPage.module.scss';
import { fetchIngredientsList, fetchCategoriesList } from '../../api/searchApi';
import {
  setIngredientsList,
  setCategoriesList,
} from '../../redux/search/cocktailSlice.js';

const DrinksPage = () => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const [filterCriteria, setFilterCriteria] = useState({
    ingredient: '',
    category: '',
  });

  const handleFilterChange = useCallback(criteria => {
    setFilterCriteria(criteria);
  }, []);

  useEffect(() => {
    if (token) {
      fetchIngredientsList(token)
        .then(ingredients => {
          ingredients.sort();
          dispatch(setIngredientsList(ingredients));
        })
        .catch(error => console.error('Error fetching ingredients:', error));

      fetchCategoriesList(token)
        .then(categories => {
          categories.sort();
          dispatch(setCategoriesList(categories));
        })
        .catch(error => console.error('Error fetching categories:', error));
    }
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      <main className={styles.wrap_main}>
        <MainPageTitle title="Drinks"></MainPageTitle>
        <SearchPage
          filterCriteria={filterCriteria}
          onFilterChange={handleFilterChange}
        />
      </main>
    </div>
  );
};

export default DrinksPage;
