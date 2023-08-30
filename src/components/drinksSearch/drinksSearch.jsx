import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm } from './drinksForm';
import { SearchResults } from '../drinksResults/SearchResults';
import styles from './drinksSearch.module.scss';
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
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem'; // Import PaginationItem
import Button from '@mui/material/Button'; // Import Button

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const totalCocktails = useSelector(
    state => state.cocktail.results.totalCocktails
  );
  const cocktailsPerPage = useSelector(state => state.cocktail.results.perPage);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    async params => {
      try {
        const cocktails = await searchCocktails(token, params);

        dispatch(setResults(cocktails));
        setSearchResults(cocktails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [dispatch, token]
  );

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

      handleSearch({ page: currentPage });
    }
  }, [dispatch, token, currentPage, handleSearch]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    handleSearch({ page: newPage });
  };

  const totalPages = Math.ceil(totalCocktails / cocktailsPerPage);

  return (
    <>
      {token ? (
        <div>
          <SearchForm
            ingredientsList={ingredientsList}
            categoriesList={categoriesList}
            onSearch={handleSearch}
          />
          {totalPages ? (
            <div>
              <SearchResults results={searchResults} />
              <div className={styles.pagination}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, newPage) => handlePageChange(newPage)}
                  color="primary"
                  size="small"
                  renderItem={item => (
                    <PaginationItem
                      component={Button}
                      {...item}
                      sx={{
                        backgroundColor: item.selected
                          ? '#1976d2'
                          : 'transparent',
                        color: item.selected ? '#fff' : 'inherit',
                        '&:hover': {
                          backgroundColor: item.selected
                            ? '#4070CD'
                            : '#4070FD',
                        },
                      }}
                    />
                  )}
                  boundaryCount={0}
                  siblingCount={2}
                />
              </div>
            </div>
          ) : (
            <div>
              <h2 className={styles.searchResults}>No results have found</h2>
            </div>
          )}
        </div>
      ) : (
        <h1>Пошук доступний після авторізації!</h1>
      )}
    </>
  );
}

export { SearchPage };
