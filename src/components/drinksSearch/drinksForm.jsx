import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterCriteria } from '../../redux/search/filterSlice.js'; // Import your action creator
import { useNavigate } from 'react-router-dom';

import './drinksForm.css';

function DrinksForm() {
  const filterCriteria = useSelector(state => state.filter);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();

    dispatch(setFilterCriteria({ ...filterCriteria, [name]: trimmedValue }));

    if (name === 'category') {
      const url = `/drinks/${trimmedValue}`;
      navigate(url);
    }
  };

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
        value={filterCriteria.category}
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
