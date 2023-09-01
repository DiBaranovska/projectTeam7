import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DrinksForm from './drinksForm';
import DrinksResults from '../drinksResults/drinksResults';
import Paginator from '../../components/paginator/paginator';
import styles from './drinksSearch.module.scss';
import { searchCocktails } from '../../api/searchApi';
import { setResults } from '../../redux/search/cocktailSlice.js';

function DrinksSearch({ formData }) {
  const [searchResults, setSearchResults] = useState([]);
  const token = useSelector(state => state.user.token);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);
  const filterCriteria = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleSearch = useCallback(
    async params => {
      try {
        const cocktails = await searchCocktails(token, params);

        setSearchResults(cocktails);
        dispatch(setResults(cocktails));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [dispatch, token]
  );

  useEffect(() => {
    handleSearch({
      ...filterCriteria,
      ...formData,
      page: 1,
    });
  }, [filterCriteria, handleSearch, formData]);

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
      <DrinksForm
        ingredientsList={ingredientsList}
        categoriesList={categoriesList}
        onSearch={handleSearch}
        formData={formData}
      />
      <DrinksResults results={searchResults} />
      {totalPages ? (
        <Paginator handlePageClick={handlePageClick} pageCount={totalPages} />
      ) : (
        <div className={styles.searchResults}>No search results</div>
      )}
    </div>
  );
}

export default DrinksSearch;
