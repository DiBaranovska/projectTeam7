import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilterCriteria,
  clearFilterCriteria,
} from '../../redux/search/filterSlice.js';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  setCategoriesList,
  setIngredientsList,
} from '../../redux/search/cocktailSlice';
import {
  fetchCategoriesList,
  fetchIngredientsList,
} from '..//../api/searchApi';

import './drinksForm.css';

function DrinksForm({ ingredientsList, categoriesList }) {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const filterCriteria = useSelector(state => state.filter);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get('category') || '';

  useEffect(() => {
    if (!location.pathname.startsWith('/search')) {
      dispatch(clearFilterCriteria());
    }
  }, [location.pathname, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    const categoryValue = encodeURIComponent(trimmedValue);
    const updatedFilterCriteria = {
      ...filterCriteria,
      [name]: categoryValue,
      page: 1,
    };

    dispatch(setFilterCriteria(updatedFilterCriteria));

    const url = `/search?category=${updatedFilterCriteria.category}&ingredient=${updatedFilterCriteria.ingredient}&name=${updatedFilterCriteria.name}`;
    navigate(url, { replace: true });
  };

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
    <form className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="Enter the text"
        name="name"
        value={filterCriteria.name}
        onChange={handleChange}
      />
      <select
        className="searchCategory"
        name="category"
        value={decodeURIComponent(filterCriteria.category || selectedCategory)}
        onChange={handleChange}
      >
        <option value="">All categories</option>
        {categoriesList.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        className="searchIngredient"
        name="ingredient"
        value={filterCriteria.ingredient}
        onChange={handleChange}
      >
        <option value="">Ingredients</option>
        {ingredientsList.map(ingredient => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
    </form>
  );
}

export default DrinksForm;
