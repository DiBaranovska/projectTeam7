import React, {useEffect} from 'react';
import fotoMain from '../../img/glassesMainDesktop.jpeg'
import css from './MainPage.module.scss'
import {selectedRecipes} from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesPopular } from '../../redux/resipes/thunks';
import '../MainPage/MainPage.module.scss';
import ButtonNav from '../../components/buttonNav/buttonNav';
import PopularRecipeList from '../../components/popularRecipe/popularRecipe'



const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesPopular());
  }, [dispatch]);
  const category = useSelector(selectedRecipes);
  
 console.log(category);

  return (<section>
  <div className={css.conteiner}>
  <div className={css.info}><h1 className={css.title}>
            Craft Your Perfect
            <br /> Drink with Drink Master{' '}
          </h1>
          <p className={css.text}>
            Unlock your inner mixologist with Drink Master, your one-
            <br />
            stop destination for exploring, crafting, and mastering the
            <br /> world's finest beverages.
          </p>
  <ButtonNav title="Add Your Cocktail" path={`/add`}></ButtonNav></div>
   <img src= {fotoMain} alt="wineglass" width="480" height="710"/>
  
  <div><ul> {category ?<PopularRecipeList category = {category}/> : null}</ul></div>
  <ButtonNav title="Other drinks" path={`/drinks/:categoryName`}></ButtonNav>
        
</div></section>);
};

export default MainPage;



