import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm } from './drinksForm';
import { SearchResults } from '../drinksResults/SearchResults';
import Paginator from '../../components/paginator/paginator';
import styles from './drinksSearch.module.scss';
import { searchCocktails } from '../../api/searchApi';
import {
  setIngredientsList,
  setCategoriesList,
  setResults,
} from '../../redux/search/cocktailSlice.js';

function SearchPage({ filterCriteria, onFilterChange }) {
  const [searchResults, setSearchResults] = useState([]);
  const token = useSelector(state => state.user.token);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);

  const dispatch = useDispatch();

  const handleSearch = async params => {
    try {
      const cocktails = await searchCocktails(token, params);

      setSearchResults(cocktails);
      dispatch(setResults(cocktails));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleSearch({
      ...filterCriteria,
      page: 1,
    });
  }, [filterCriteria]);

  const handlePageClick = e => {
    const newPage = e.selected + 1;

    // Create the new filter criteria including the page number
    const updatedFilterCriteria = {
      ...filterCriteria,
      page: newPage,
    };

    // Only include filter criteria that are selected
    const params = {};
    if (updatedFilterCriteria.ingredient) {
      params.ingredient = updatedFilterCriteria.ingredient;
    }
    if (updatedFilterCriteria.category) {
      params.category = updatedFilterCriteria.category;
    }
    if (updatedFilterCriteria.page) {
      params.page = updatedFilterCriteria.page;
    }
    if (updatedFilterCriteria.name) {
      params.name = updatedFilterCriteria.name;
    }

    handleSearch(params);
  };

  const totalCocktails = useSelector(
    state => state.cocktail.results.totalCocktails
  );
  const cocktailsPerPage = useSelector(state => state.cocktail.results.perPage);
  const totalPages = Math.ceil(totalCocktails / cocktailsPerPage);

  return (
    <div>
      <SearchForm
        ingredientsList={ingredientsList}
        categoriesList={categoriesList}
        onSearch={handleSearch}
        filterCriteria={filterCriteria}
        onFilterChange={onFilterChange}
      />
      <SearchResults results={searchResults} />
      {totalPages ? (
        <Paginator handlePageClick={handlePageClick} pageCount={totalPages} />
      ) : (
        <div className={styles.searchResults}>No search results</div>
      )}
    </div>
  );
}

export { SearchPage };
