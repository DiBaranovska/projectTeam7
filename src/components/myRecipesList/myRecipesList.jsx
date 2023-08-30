import RecipeItem from '../recipeItem/recipeItem';

import styles from './myRecipesList.module.scss';

const MyRecipesList = ({ cocktails, favorite }) => {
  return (
    <ul className={styles.gridCard}>
      {cocktails.map(({ _id, drink, drinkAlternate, drinkThumb }) => (
        <RecipeItem
          id={_id}
          name={drink}
          picture={drinkThumb}
          description={drinkAlternate}
          key={_id}
          favorite={favorite}
        ></RecipeItem>
      ))}
    </ul>
  );
};
export default MyRecipesList;
