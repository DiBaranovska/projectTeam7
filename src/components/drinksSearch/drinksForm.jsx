import React, { useEffect, useState } from 'react';
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

import Select from 'react-select';
import './drinksForm.css';
import { customSelectStyles } from './selectStyles';

import debounce from 'lodash.debounce';

function DrinksForm({ ingredientsList, categoriesList }) {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const filterCriteria = useSelector(state => state.filter);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get('category') || '';
  const [searchValue, setSearchValue] = useState(filterCriteria.name);

  useEffect(() => {
    if (!location.pathname.startsWith('/search')) {
      dispatch(clearFilterCriteria());
    }
  }, [location.pathname, dispatch]);

  const handleCategoryChange = selectedOption => {
    let selectedCategory;
    if (selectedOption.value === 'All categories') {
      selectedCategory = '';
    } else {
      selectedCategory = selectedOption.value;
    }

    const updatedFilterCriteria = {
      ...filterCriteria,
      category: selectedCategory,
      page: 1,
    };

    dispatch(setFilterCriteria(updatedFilterCriteria));

    const url = `/search?category=${selectedCategory}&ingredient=${filterCriteria.ingredient}&name=${filterCriteria.name}`;
    navigate(url, { replace: true });
  };

  const handleIngredientChange = selectedOption => {
    let selectedIngredient;
    if (selectedOption.value === 'Ingredients') {
      selectedIngredient = '';
    } else {
      selectedIngredient = selectedOption.value;
    }

    const updatedFilterCriteria = {
      ...filterCriteria,
      ingredient: selectedIngredient,
      page: 1,
    };

    dispatch(setFilterCriteria(updatedFilterCriteria));

    const url = `/search?category=${filterCriteria.category}&ingredient=${selectedIngredient}&name=${filterCriteria.name}`;
    navigate(url, { replace: true });
  };

  const debouncedHandleInputChange = debounce(value => {
    const trimmedValue = value.trim();
    const updatedFilterCriteria = {
      ...filterCriteria,
      name: trimmedValue,
      page: 1,
    };
    dispatch(setFilterCriteria(updatedFilterCriteria));
    const url = `/search?category=${updatedFilterCriteria.category}&ingredient=${updatedFilterCriteria.ingredient}&name=${updatedFilterCriteria.name}`;
    navigate(url, { replace: true });
  }, 1000);

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const handleInputBlur = () => {
    debouncedHandleInputChange(searchValue);
  };
  const handleEnterKeyPress = e => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  useEffect(() => {
    if (token) {
      fetchIngredientsList(token)
        .then(ingredients => {
          ingredients.sort();
          ingredients.unshift('Ingredients');
          dispatch(setIngredientsList(ingredients));
        })
        .catch(error => console.error('Error fetching ingredients:', error));

      fetchCategoriesList(token)
        .then(categories => {
          categories.push('All categories');
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
        value={searchValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleEnterKeyPress}
      />
      <Select
        name="category"
        placeholder={
          filterCriteria.category || selectedCategory || 'All categories'
        }
        defaultValue="All categories"
        value={filterCriteria.category || selectedCategory}
        onChange={handleCategoryChange}
        options={categoriesList.map(category => ({
          value: category,
          label: category,
        }))}
        isSearchable
        styles={customSelectStyles}
      />
      <Select
        name="ingredient"
        placeholder={filterCriteria.ingredient || 'Ingredients'}
        defaultValue="Ingredients"
        value={filterCriteria.ingredient}
        onChange={handleIngredientChange}
        options={ingredientsList.map(ingredient => ({
          value: ingredient,
          label: ingredient,
        }))}
        isSearchable
        styles={customSelectStyles}
      />
    </form>
  );
}

export default DrinksForm;
