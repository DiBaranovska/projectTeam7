import React, {useEffect} from 'react';
import fotoMain from '../../img/main-wineglass.jpg'
import css from './MainPage.module.scss'
import {selectedRecipes} from '../../redux/selectors'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesPopular } from '../../redux/resipes/thunks';
import '../MainPage/MainPage.module.scss';


const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesPopular());
  }, [dispatch]);
  const recipes = useSelector(selectedRecipes);
  
 console.log(recipes);

  return (<section>
  <div className={css.conteiner}>
  <h1 className={css.title}>Craft Your Perfect Drink with Drink Master</h1>
  <p>Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages.</p>
  <Link to="/add"><button className='buttonMain'>Add Your Cocktail</button></Link>
  
  <img src= {fotoMain} alt="wineglass" width="480" height="710"/>
  
  <ul> {recipes ? recipes.map(({_id, recipes })=> (
          <li key={_id}>
            <Link to={(`/drinks/${_id}`)}><p>{_id}</p></Link>
            <ul>{recipes.map(({_id, drink, drinkThumb})=>(
              <li key={_id}><div><img 
              src={drinkThumb}
              alt={drink}
              width="335"/></div>{drink}
              <Link to="/drinks/:categoryName">ingredients</Link></li>
  ))}</ul>
          </li>
        )) : null}</ul>
        <button>Other drinks</button>
</div></section>);
};

export default MainPage;



