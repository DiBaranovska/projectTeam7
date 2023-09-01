import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import DrinksSearch from '../../components/drinksSearch/drinksSearch';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './DrinksPage.module.scss';
import { fetchIngredientsList, fetchCategoriesList } from '../../api/searchApi';
import {
  setIngredientsList,
  setCategoriesList,
} from '../../redux/search/cocktailSlice.js';
import { setFilterCriteria } from '../../redux/search/filterSlice';

const DrinksPage = () => {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const filterCriteria = useSelector(state => state.filter);

  const [formData] = useState({});

  const handleFilterChange = useCallback(
    criteria => {
      // Dispatch the setFilterCriteria action to update the Redux store
      dispatch(setFilterCriteria(criteria));

      if (criteria.category) {
        navigate(`/drinks/${criteria.category}`);
      } else {
        navigate('/drinks');
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (categoryName && filterCriteria.category !== categoryName) {
      // If category name is present in URL and it's different from the current filter category
      dispatch(
        setFilterCriteria({
          ...filterCriteria,
          category: categoryName,
        })
      );
    }
  }, [categoryName, filterCriteria, dispatch]);

  useEffect(() => {
    // Update filter criteria and trigger search when category changes in URL
    if (categoryName !== filterCriteria.category) {
      dispatch(
        setFilterCriteria({
          ...filterCriteria,
          category: categoryName,
        })
      );
      handleFilterChange({ category: categoryName });
    }
  }, [categoryName, filterCriteria, handleFilterChange, dispatch]);

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
      <div className={styles.wrap_main}>
        <MainPageTitle title="Drinks"></MainPageTitle>
        <DrinksSearch
          filterCriteria={filterCriteria}
          onFilterChange={handleFilterChange}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default DrinksPage;
