import { useState } from 'react';
import MyRecipesList from '../myRecipesList/myRecipesList';
import Paginator from '../paginator/paginator';
import styles from './recipeListFavorite.module.css';

const RecipesListFavorite = ({ items, total }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(total / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % total;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
