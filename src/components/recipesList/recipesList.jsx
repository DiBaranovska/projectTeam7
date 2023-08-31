import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '../skeleton/skeleton';
import MyRecipesList from '../myRecipesList/myRecipesList';
import Paginator from '../paginator/paginator';
import { getMyRecipes } from '../../redux/myRecipes/selectors';
import { fetchMyRecipes } from '../../api/ownRecipeApi';


const RecipesList = () => {
  const itemsPerPage = 6;
  const [perPage, setPerPage] = useState(1);

  const dispatch = useDispatch();
  const { items, total, isLoading } = useSelector(getMyRecipes);

  useEffect(() => {
    dispatch(fetchMyRecipes({ page: perPage, limit: 6 }));
  }, [dispatch, perPage]);

  const pageCount = Math.ceil(total / itemsPerPage);
  const handlePageClick = event => {
    const numberPage = event.selected + 1;
    setPerPage(numberPage);
  };

  return (
    <div id="MyRecipes" >
      {isLoading && <Skeleton></Skeleton>}
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
