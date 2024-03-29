import React, { useEffect } from 'react';
import { fetchPopularForAddPage } from '../../redux/addRecipes/thunks';
import { selectedPopularRecipes } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AddRecipePopularContainer.module.scss';
import { FollowUs } from 'components/followUs/followUs';

const AddRecipePopularContainer = () => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectedPopularRecipes);
  useEffect(() => {
    dispatch(fetchPopularForAddPage());
  }, [dispatch]);
  return (
    <div className={styles.popular_container}>
      <div>
        <h2 className={styles.follow_title}>Follow Us</h2>
        <FollowUs />
        <h3 className={styles.recipes_title}>Popular recipe</h3>

        <ul className={styles.card}>
          {recipes.map(({ _id, drink, drinkAlternate, drinkThumb }) => (
            <li key={_id} className={styles.card_item}>
              <Link to={`/recipe/${_id}`} className={styles.card_container}>
                <div>
                  <img
                    src={drinkThumb}
                    alt={drink}
                    width="90"
                    className={styles.container_img}
                  />
                </div>
                <div className={styles.recipe_name}>
                  <p className={styles.ingridient}>{drink}</p>
                  <p className={styles.description}>{drinkAlternate}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddRecipePopularContainer;
