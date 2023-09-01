import { useState } from 'react';
import MyRecipesList from '../myRecipesList/myRecipesList';
import Paginator from '../paginator/paginator';
import styles from './recipeListFavorite.module.scss';

const RecipesListFavorite = ({ items, total }) => {
  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % total;
    setItemOffset(newOffset);
  };
  return (
    <div id="RecipesFavorite" className={styles.container_pagination}>
      <MyRecipesList cocktails={currentItems} favorite={true} />
      <Paginator
        handlePageClick={handlePageClick}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
      ></Paginator>
    </div>
  );
};

export default RecipesListFavorite;
