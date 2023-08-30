import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyRecipesList from '../myRecipesList/myRecipesList';
import Paginator from '../paginator/paginator';
import { getMyRecipes } from '../../redux/myRecipes/selectors';
import { fetchMyRecipes } from '../../api/ownRecipeApi';
import styles from './recipesList.module.scss';

const RecipesList = () => {
  const itemsPerPage = 6;
  const [perPage, setPerPage] = useState(1);

  const dispatch = useDispatch();
  const { items, total } = useSelector(getMyRecipes);

  useEffect(() => {
    dispatch(fetchMyRecipes({ page: perPage, limit: 6 }));
  }, [dispatch, perPage]);

  const pageCount = Math.ceil(total / itemsPerPage);
  const handlePageClick = event => {
    const numberPage = event.selected + 1;
    setPerPage(numberPage);
  };

  return (
    <div id="MyRecipes" className={styles.container_pagination}>
      <MyRecipesList cocktails={items} />
      <Paginator
        handlePageClick={handlePageClick}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
      ></Paginator>
    </div>
  );
};

export default RecipesList;
