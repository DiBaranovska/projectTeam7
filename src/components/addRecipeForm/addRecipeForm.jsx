import { useState, useEffect, useRef } from 'react';
import { nanoid } from "@reduxjs/toolkit";
import css from './addRecipeForm.module.scss';
import { useDispatch } from "react-redux";
import { addMyRecipes} from '../../api/ownRecipeApi'
// import { addMyRecipe } from "../../redux/myRecipes/myRecipesSlice";
import { useSelector } from "react-redux";
import IngridientItem from './ingridientItem';
import { toast } from 'react-hot-toast';
import { logout } from 'redux/user/thunk';
import plusIcon from '../../assets/icons/addBtn.png';
import { selectToken } from "redux/user/user-selectors";
import {
  fetchIngredientsList,
  fetchCategoriesList,
  fetchGlassesList,
} from '../../api/searchApi';

import {
  setIngredientsList,
  setCategoriesList,
  setGlassesList,
} from '../../redux/search/cocktailSlice.js';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const ingredientsList = useSelector(state => state.cocktail.ingredientsList);
  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const glassesList = useSelector(state => state.cocktail.glassesList);
  const measureList = [
    '1/2 oz',
    '1/4 oz',
    '3/4 oz',
    '1 oz'
  ]
  useEffect(() => {
    if (token) {
      fetchIngredientsList(token)
        .then(ingredients => {
          ingredients.sort();
          dispatch(setIngredientsList(ingredients));
        })
        .catch(error => console.error('Error fetching ingredients:', error));

      fetchCategoriesList(token)
        .then(categories => {
          categories.sort();
          dispatch(setCategoriesList(categories));
        })
        .catch(error => console.error('Error fetching categories:', error));

        fetchGlassesList(token)
        .then(glasses => {
          glasses.sort();
          dispatch(setGlassesList(glasses));
        })
        .catch(error => console.error('Error fetching glasses:', error));
    }
  }, [dispatch, token]);

let initialIngridients = [
  {title: '',
    measure: measureList[0],
  id:1},
  {title: '',
    measure: measureList[0],
  id:2},
  {title: '',
    measure: measureList[0],
  id:3}
]
  const [drink, setDrink] = useState('');
  const [drinkAlternate, setDrinkAlternate] = useState('');
  const [category, setCategory] = useState(categoriesList[0]);
  const [glass, setGlass] = useState(glassesList[0]);
  const [instructions, setInstructions] = useState('');
  const [drinkThumb, setDrinkThumb] = useState('');
  const [ingredients, setIngredients] = useState(initialIngridients);
  const [count, setCount] = useState(3)

  const formRef = useRef();
  const fileRef = useRef();

  const handleChange = (event) => {
    const { name, value, files, type } = event.currentTarget;

    if (type === 'file' && !files?.[0]) {
      return;
    }

    if (Boolean(files?.[0])) {
      const isValidFile =
        files[0].name.endsWith('.jpg') ||
        files[0].name.endsWith('.png') ||
        files[0].name.endsWith('.jpeg');

      if (!isValidFile)
        return alert('Only jpg/jpeg and png files are allowed!');
    }

    if (name === 'drink') { setDrink(value) }
    else if (name === 'drinkAlternate') { setDrinkAlternate(value) }
    else if (name === 'category') { setCategory(value) }
    else if (name === 'glass') { setGlass(value) }
    else if (name === 'instructions') { setInstructions(value) }
    else if (type === 'file') { setDrinkThumb(files?.[0]) }
    else if (name === 'ingredients') { setIngredients(value) }
  }

  const handleAddRecipe = (event) => {
    event.preventDefault();
   const formdata = new FormData();
formdata.append("drink", drink);
formdata.append("drinkAlternate", drinkAlternate);
formdata.append("category", category);
formdata.append("glass", glass);
formdata.append("instructions", instructions);
formdata.append("drinkThumb", drinkThumb);
formdata.append("ingredients[0][title]", "Sherry");
formdata.append("ingredients[0][measure]", "10 ml");
formdata.append("ingredients[1][title]", "Egg");
formdata.append("ingredients[1][measure]", "1 cl");

    dispatch(addMyRecipes(formdata)).unwrap().then(() => {
      reset()
      toast.success('Recipe is added.')
    }).catch((error) => {
      if (error.message.includes('401')) {
        dispatch(logout());
        toast.error('Your session is over. Log In again.')
      } else {
        toast.error('Some error happened :(')
      }
    });
  }

  const reset = () => {
    setDrink('');
    setDrinkAlternate('');
    setCategory('');
    setGlass('');
    setInstructions('');
    setDrinkThumb('');
    setIngredients('')
  }
  const handlePicker = () => {
    fileRef.current.click();
  };

  const handleChangeIngredient =(item) => {
    console.log('handleChangeIngredient');
    console.log('item', item);
    const ingrs = [...ingredients]
    const index = ingrs.findIndex(
      ingrs => ingrs.id === item.id);
    ingrs.splice(index, 1, item);
    setIngredients(ingrs);

    console.log('ingredients', ingredients);

    }
  
  const handleDeleteIngredient=(id) => {
    console.log('handleDeleteIngredient');
    console.log('id', id);

    const ingrs = [...ingredients]
    const index = ingrs.findIndex(
      ingrs => ingrs.id === id);
    ingrs.splice(index, 1);
    setIngredients(ingrs);
    console.log('ingredients', ingredients);

  }

  const increaseCount = () =>
  {
    setCount(count + 1)
   const newItem =  {title: '',
      measure: measureList[0],
    id:nanoid()};
    const ingrs = [...ingredients]
    ingrs.splice(0, 0, newItem);
    setIngredients(ingrs);
  }

  const reduceCount = () =>
  {
    setCount(count - 1);
    const ingrs = [...ingredients]
    ingrs.splice(0, 1);
    setIngredients(ingrs);
  }

  return ( 
    <form ref={formRef}
    className={css.addForm}
      onSubmit={handleAddRecipe}>
  <div className={css.recipePhoto}>
          <img className={css.recipeImg} src={drinkThumb} alt="Recipe" />
          <img
            className={css.addPhotoBtn}
            src={plusIcon}
            alt="Add button"
            onClick={handlePicker}
          />

          <input
            className={css.file}
            ref={fileRef}
            type="file"
            name="photoURL"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            defaultValue={drinkThumb}
          />
          <p>Add image</p>
        </div>
        <input
        className="drinkfield"
        type="text"
        name="drink"
        value={drink}
        onChange={handleChange}
      />
              <input
        className="drinkAlternateField"
        type="text"
        name="drinkAlternate"
        value={drinkAlternate}
        onChange={handleChange}
      />
      <select
        className="categoryField"
        name="category"
        value={category}
        onChange={handleChange}
      >
        {categoriesList.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select
        className="glassField"
        name="glass"
        value={glass}
        onChange={handleChange}
      >
        {glassesList.map(glass => (
          <option key={glass} value={glass}>
            {glass}
          </option>
        ))}
      </select>

      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={increaseCount}>
        +
      </button>
      <p>{count}</p>
      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={reduceCount}>
        -
      </button>


      {ingredients && ingredients.length !== 0 ?
        (
          <ul className={css.contact__list}>
            {ingredients.map((ingredient) => {
              return (<IngridientItem
                key={ingredient.id}
                item={ingredient}
                ingredientsList = {ingredientsList}
                onChange={handleChangeIngredient}
                handleDeleteIngredient = {handleDeleteIngredient}
                 />)
            })}
          </ul>)
        : (
          <p className={css.message}>No contacts</p>
        )
      }

       <input
        className="instructionsfield"
        type="text"
        name="instructions"
        value={instructions}
        onChange={handleChange}
      />      
     
      <button
        type="submit"
        className={css.contact__deleteBtn}>
        Add recipe
      </button>
    </form>
  )
}

export default AddRecipeForm



