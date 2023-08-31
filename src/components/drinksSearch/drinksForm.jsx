import React, { useState } from 'react';

import './drinksForm.css';

function SearchForm({ ingredientsList, categoriesList, onFilterChange }) {
  const [formData, setFormData] = useState({
    name: '',
    ingredient: '',
    category: '',
  });

  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const customDebounce = (func, delay) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    return setTimeout(func, delay);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    setFormData(prevData => ({
      ...prevData,
      [name]: trimmedValue,
    }));

    if (name === 'name') {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      const timeout = customDebounce(() => {
        onFilterChange(formData);
      }, 1000);

      setDebounceTimeout(timeout);
    } else {
      onFilterChange({ ...formData, [name]: value });
    }
  };

  return (
    <form className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="Enter the text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <select
        className="searchCategory"
        name="category"
        value={formData.category}
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
        value={formData.ingredient}
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

export { SearchForm };
