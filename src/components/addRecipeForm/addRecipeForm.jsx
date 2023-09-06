import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import css from './addRecipeForm.module.scss';
import { useDispatch } from 'react-redux';
import { addMyRecipes } from '../../api/ownRecipeApi';
import { useSelector } from 'react-redux';

import IngridientItem from './ingridientItem';
import { toast } from 'react-hot-toast';
import { logout } from 'redux/user/thunk';
import { GoPlus, GoDash, GoTrash } from 'react-icons/go';
import { selectToken } from 'redux/user/user-selectors';
import {
  fetchIngredientsList,
  fetchCategoriesList,
  fetchGlassesList,
} from '../../api/searchApi';

import {
  setCategoriesList,
  setGlassesList,
} from '../../redux/search/cocktailSlice.js';
import SelectInput from 'components/addRecipeSelectForm/addRecipeSelectForm';
import Skeleton from 'components/skeleton/skeleton';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const measureList = ['1/2 oz', '1/4 oz', '3/4 oz', '1 oz'];
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    if (token) {
      fetchIngredientsList(token)
        .then(ingredients => {
          ingredients.sort();
          setIngredientsList(ingredients);
        })
        .catch(error => console.error('Error fetching ingredients:', error));

      fetchCategoriesList(token)
        .then(categories => {
          categories.sort();
          dispatch(setCategoriesList(categories));
          setCategory(categories[0]);
        })
        .catch(error => console.error('Error fetching categories:', error));

      fetchGlassesList(token)
        .then(glasses => {
          glasses.sort();
          dispatch(setGlassesList(glasses));
          setGlass(glasses[0]);
        })
        .catch(error => console.error('Error fetching glasses:', error));
    }
  }, [dispatch, token]);

  const categoriesList = useSelector(state => state.cocktail.categoriesList);
  const glassesList = useSelector(state => state.cocktail.glassesList);

  let initialIngridients = [
    { id: 1, title: ingredientsList[0], measure: measureList[0] },
    { id: 2, title: ingredientsList[0], measure: measureList[0] },
    { id: 3, title: ingredientsList[0], measure: measureList[0] },
  ];

  const [drink, setDrink] = useState('');
  const [drinkAlternate, setDrinkAlternate] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [instructions, setInstructions] = useState('');
  const [drinkThumb, setDrinkThumb] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const fileRef = useRef();

  const setInitialvalue = () => {
    if ((!ingredients.length && initialIngridients[0].title))
      setIngredients(initialIngridients);
  };

  setInitialvalue();

  const handleChange = event => {
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

    if (name === 'drink') {
      setDrink(value);
    } else if (name === 'drinkAlternate') {
      setDrinkAlternate(value);
    } else if (name === 'category') {
      setCategory(value);
    } else if (name === 'glass') {
      setGlass(value);
    } else if (name === 'instructions') {
      setInstructions(value);
    } else if (type === 'file') {
      setDrinkThumb(files?.[0]);
    } else if (name === 'ingredients') {
      setIngredients(value);
    }
  };

  const handleAddRecipe = event => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      drink,
      drinkAlternate,
      category: category ? category : categoriesList[0],
      glass: glass ? glass : glassesList[0],
      instructions,
      ingredients: ingredients.map(({ title, measure }) => {
        return { title, measure };
      }),
    };

    const formdata = new FormData();
    formdata.append('data', JSON.stringify(data));
    formdata.append('drinkThumb', drinkThumb);

    dispatch(addMyRecipes(formdata))
      .unwrap()
      .then(({ _id }) => {
        reset();
        toast.success('Recipe is added.');
        setIsLoading(false);
        navigate(`/recipe/${_id}`, { replace: true });
      })
      .catch(error => {
        if (error.message.includes('401')) {
          dispatch(logout());
          toast.error('Your session is over. Log In again.');
        } else {
          toast.error('Some error happened :(');
        }
        setIsLoading(false);
      });
  };

  const reset = () => {
    setDrink('');
    setDrinkAlternate('');
    setCategory(categoriesList[0]);
    setGlass(glassesList[0]);
    setInstructions('');
    setDrinkThumb('');
    setIngredients(initialIngridients);
    setCount(3);
  };

  const handlePicker = () => {
    fileRef.current.click();
  };

  const handleChangeIngredient = item => {
    const ingrs = [...ingredients];
    const index = ingrs.findIndex(ingrs => ingrs.id === item.id);
    ingrs.splice(index, 1, item);
    setIngredients(ingrs);
  };

  const handleDeleteIngredient = id => {
    if (count === 1) {
      toast.error('At least 1 ingredient should be in the recipe');
      return;
    }
    const ingrs = [...ingredients];
    const index = ingrs.findIndex(ingrs => ingrs.id === id);
    ingrs.splice(index, 1);
    setIngredients(ingrs);
    setCount(count - 1);
  };

  const increaseCount = () => {
    if (count === 10) {
      toast.error('Maximum 10 ingredients can be added to the recipe');
      return;
    }
    setCount(count + 1);
    const newItem = {
      title: ingredientsList[0],
      measure: measureList[0],
      id: nanoid(),
    };
    const ingrs = [...ingredients];

    ingrs.splice(0, 0, newItem);
    setIngredients(ingrs);
  };

  const reduceCount = () => {
    if (count === 1) {
      toast.error('At least 1 ingredient should be in the recipe');
      return;
    }

    setCount(count - 1);
    const ingrs = [...ingredients];
    ingrs.splice(0, 1);
    setIngredients(ingrs);
  };
  const image = drinkThumb && URL.createObjectURL(drinkThumb);

  const handleGlassClick = e => {
    setGlass(e.target.getAttribute('data-name'));
  };
  const handleCategoriesClick = e => {
    setCategory(e.target.getAttribute('data-name'));
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <form ref={formRef} className={css.addForm} onSubmit={handleAddRecipe}>
          <div className={css.recipePhoto}>
            {image && (
              <>
                <img className={css.recipeImg} src={image} alt="Recipe" />
                <button
                  type="button"
                  className={css.changePhotoBtnText}
                  onClick={() => setDrinkThumb('')}
                >
                  <GoTrash size={24} />
                </button>
              </>
            )}
            {!image && (
              <>
                <button
                  type="button"
                  className={css.addPhotoBtn}
                  onClick={handlePicker}
                >
                  <GoPlus size={28} />
                </button>
                <p className={css.addPhotoBtnText}>Add image</p>
              </>
            )}
            <input
              className={css.file}
              ref={fileRef}
              type="file"
              name="photoURL"
              accept=".jpg, .jpeg, .png"
              onChange={handleChange}
              defaultValue={drinkThumb}
            />
          </div>
          <div className={css.inputField}>
            <input
              className={css.inputText}
              type="text"
              name="drink"
              placeholder="Enter item title"
              value={drink}
              onChange={handleChange}
            />
            <input
              className={css.inputText}
              type="text"
              name="drinkAlternate"
              placeholder="Enter about recipe"
              value={drinkAlternate}
              onChange={handleChange}
            />

            <SelectInput
              title="Category"
              item={category}
              list={categoriesList}
              handleClick={handleCategoriesClick}
            />
            <SelectInput
              title="Glass"
              item={glass}
              list={glassesList}
              handleClick={handleGlassClick}
            />
          </div>

          <div className={css.inputIngrField}>
            <div className={css.IngrFieldWrapper}>
              <h2 className={css.ingredientsTitle}>Ingredients</h2>
              <div className={css.ingredientsCountField}>
                <button
                  type="button"
                  className={css.fieldAddDeleteBtn}
                  onClick={reduceCount}
                >
                  <GoDash size={30} />
                </button>
                <p>{count}</p>
                <button
                  type="button"
                  className={css.fieldAddDeleteBtn}
                  onClick={increaseCount}
                >
                  <GoPlus size={30} />
                </button>
              </div>
            </div>

            {ingredients && ingredients.length !== 0 ? (
              <ul className={css.ingredientList}>
                {ingredients.map(ingredient => {
                  return (
                    <IngridientItem
                      key={ingredient.id}
                      item={ingredient}
                      ingredientsList={ingredientsList}
                      onChange={handleChangeIngredient}
                      handleDeleteIngredient={handleDeleteIngredient}
                    />
                  );
                })}
              </ul>
            ) : (
              <p className={css.message}>No ingredients</p>
            )}
            <h2 className={css.ingredientsTitle}>Recipe Preparation</h2>
            <textarea
              className={css.instructionsfield}
              type="text"
              name="instructions"
              placeholder="Enter the recipe"
              value={instructions}
              onChange={handleChange}
            />

            <button
              type="submit"
              className={css.submitBtn}
              disabled={
                !drink ||
                !drinkAlternate ||
                !category ||
                !glass ||
                !instructions ||
                !drinkThumb ||
                !ingredients
              }
            >
              Add
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddRecipeForm;
