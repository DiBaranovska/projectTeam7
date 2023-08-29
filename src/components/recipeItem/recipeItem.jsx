import { useDispatch } from 'react-redux';
import { deleteFavoriteRecipes } from '../../api/favoriteApi';
import { deleteMyRecipes } from '../../api/ownRecipeApi';
import ButtonNav from '../buttonNav/buttonNav';
import ButtonDelete from '../buttonDelete/buttonDelete';
import styles from './recipeItem.module.css';

const RecipeItem = ({ id, name, picture, description, favorite = false }) => {
  const dispatch = useDispatch();

  const handleDelete = (idRecipes, favorite) => {
    if (favorite) {
      dispatch(deleteFavoriteRecipes(idRecipes));
    } else {
      dispatch(deleteMyRecipes(idRecipes));
    }
  };

  return (
    <li className={styles.card_recept}>
      <div className={styles.container_img}>
        <img alt="movie" src={picture} width="400" height="400"></img>
      </div>
      <div className={styles.text_recipe}>
        <h2 className={styles.subtitle}>{name} </h2>
        <p className={styles.ingredient_text}>Ingredients</p>
        <p className={styles.description_text}>{description}</p>
      </div>
      <div className={styles.wrap_navigation}>
        <ButtonNav title="See recipe" path={`/recipe/${id}`}></ButtonNav>
        <ButtonDelete onClick={() => handleDelete(id, favorite)}></ButtonDelete>
      </div>
    </li>
  );
};
export default RecipeItem;
