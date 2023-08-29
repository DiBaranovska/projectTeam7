import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm } from './drinksForm';
import { SearchResults } from '../drinksResults/SearchResults';
import {
  fetchIngredientsList,
  fetchCategoriesList,
  searchCocktails,
} from '../../api/searchApi';

import {
  setIngredientsList,
  setCategoriesList,
  setResults,
} from '../../redux/search/cocktailSlice.js';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

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

      searchCocktails(token, {})
        .then(cocktails => {
          dispatch(setResults(cocktails));
          setSearchResults(cocktails);
        })
        .catch(error => console.error('Error fetching cocktails:', error));
    }
  }, [dispatch, token]);

  const handleSearch = async params => {
    try {
      const cocktails = await searchCocktails(token, params);

      dispatch(setResults(cocktails));
      setSearchResults(cocktails);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {token ? (
        <div>
          <SearchForm
            ingredientsList={ingredientsList}
            categoriesList={categoriesList}
            onSearch={handleSearch}
          />
          <SearchResults results={searchResults} />
        </div>
      ) : (
        <h1>Пошук доступний після авторізації!</h1>
      )}
    </>
  );
}

export { SearchPage };
