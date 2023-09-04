import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from '../skeleton/skeleton';
import MyRecipesList from '../myRecipesList/myRecipesList';
import MainPageTitle from '../mainPageTitle/mainPageTitle';
import Paginator from '../paginator/paginator';
import NotFound from '../notFound/notFound';
import { getMyRecipes } from '../../redux/myRecipes/selectors';
import { fetchMyRecipes } from '../../api/ownRecipeApi';
import styles from './recipesList.module.scss';

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
    <div id="MyRecipes">
    {isLoading ? (
      <div className={styles.wrap_main}>
        <MainPageTitle title="My recipes"></MainPageTitle>
        <Skeleton></Skeleton>
      </div>
    ) : items.length > 0 ? (
      <div className={styles.wrap_main}>
        <MainPageTitle title="My recipes"></MainPageTitle>
        <MyRecipesList cocktails={items} />
      </div>
    ) : (
      <div className={styles.wrap_main_empty}>
        <MainPageTitle title="My recipes"></MainPageTitle>
        <NotFound
          text={"You haven't added any own cocktails yet"}
        ></NotFound>
      </div>
    )}
    {!isLoading  & items.length > 0  &&  <Paginator
         handlePageClick={handlePageClick}
         //itemsPerPage={itemsPerPage}
         pageCount={pageCount}
        ></Paginator>}

</div>
  );
};

export default RecipesList;
