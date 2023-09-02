import React, {useEffect} from 'react';
import fotoMain from '../../img/main-descktop.jpeg'
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

  return (<section className={css.section}>
  <div className={css.main_container}>
  <div>
  
    <h1 className={css.title}>
            Craft Your Perfect
            <br /> Drink with Drink Master{' '}
          </h1>
          <p className={css.text}>
            Unlock your inner mixologist with Drink Master, your one-
            <br />
            stop destination for exploring, crafting, and mastering the
            <br /> world's finest beverages.
          </p>
 <div className={css.btn_add}>
  <ButtonNav title="Add recipe" path={`/add`} ></ButtonNav>
  </div></div>
  <div className={css.main_foto}>
   <img src= {fotoMain} alt="wineglass"/>
   </div>
  <div className={css.wrap_main}>
    <ul > <li>{category ?<PopularRecipeList category = {category}/> : null}</li>
    </ul>
    <div className={css.btn_other}>
    <ButtonNav title="Other drinks" path={`/drinks`}></ButtonNav>
</div>
  </div>
        
</div></section>);
};

export default MainPage;



