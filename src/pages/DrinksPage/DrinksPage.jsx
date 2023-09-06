import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFilteredCocktails,
  fetchAllCocktails,
} from '../../redux/search/cocktailSlice';
import { setFilterCriteria } from '../../redux/search/filterSlice.js';
import { useLocation } from 'react-router-dom';
import DrinksForm from '../../components/drinksSearch/drinksForm';
import DrinksResults from '../../components/drinksResults/drinksResults';
import Paginator from '../../components/paginator/paginator';
import MainPageTitle from '../../components/mainPageTitle/mainPageTitle';
import styles from './DrinksPage.module.scss';
import Skeleton from 'components/skeleton/skeleton';
import { selectedIsLoadingDrink } from '../../redux/selectors';

function DrinksPage() {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isLoading = useSelector(selectedIsLoadingDrink);

  const selectedName = searchParams.get('name') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedIngredient = searchParams.get('ingredient') || '';

  const searchResults = useSelector(state => state.cocktail.results);
  const totalCocktails = useSelector(
    state => state.cocktail.results.totalCocktails
  );
  const cocktailsPerPage = useSelector(state => state.cocktail.results.perPage);
  const totalPages = Math.ceil(totalCocktails / cocktailsPerPage);
  const filterCriteria = useSelector(state => state.filter);
  const currentPage = useSelector(state => state.filter.page);

  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);

  useEffect(() => {
    // Determine if any filters are selected
    if (selectedName || selectedCategory || selectedIngredient) {
      const filters = {
        name: selectedName,
        category: selectedCategory,
        ingredient: selectedIngredient,
        page: currentPage,
      };
      dispatch(fetchFilteredCocktails({ filters, token }));
    } else {
      dispatch(fetchAllCocktails(token));
    }
  }, [
    selectedName,
    selectedCategory,
    selectedIngredient,
    dispatch,
    token,
    currentPage,
  ]);

  const handlePageClick = e => {
    const newPage = e.selected + 1;

    const updatedFilterCriteria = {
      ...filterCriteria,
      page: newPage,
    };
    dispatch(setFilterCriteria(updatedFilterCriteria));

    dispatch(fetchFilteredCocktails({ filters: updatedFilterCriteria, token }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap_main}>
        <div className={styles.drink_page_tittle}>
          <MainPageTitle
            className={styles.drink_page_tittle}
            title="Drinks"
          ></MainPageTitle>
        </div>
        <DrinksForm
          ingredientsList={ingredientsList}
          categoriesList={categoriesList}
        />
        {isLoading ? (
          <div className={styles.drink_skeleton_wrapper}>
            {' '}
            <Skeleton></Skeleton>
          </div>
        ) : (
          <>
            <DrinksResults results={searchResults} />
            {totalPages ? (
              <Paginator
                handlePageClick={handlePageClick}
                pageCount={totalPages}
              />
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DrinksPage;
