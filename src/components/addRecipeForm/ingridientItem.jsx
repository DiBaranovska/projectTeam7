// import PropTypes from "prop-types";
// import { useState } from 'react';
import css from './addRecipeForm.module.scss';

const IngredientItem = ({item, ingredientsList, onChange, handleDeleteIngredient} ) => {
  const measureList = [
    '1/2 oz',
    '1/4 oz',
    '3/4 oz',
    '1 oz'
  ]
  
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'title') { 
      onChange(
        {...item,
      title:value})}
    else if (name === 'measure') {  onChange(
      {...item,
        measure:value})};
  }
 const handleDelete = () =>{
  handleDeleteIngredient(item.id)}

  return (
    < li className={css.contact__item} >
      <select
        className="title"
        name="title"
        onChange={handleChange}
      >
        {ingredientsList.map(ingredient => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>  
      <select
        className="measureField"
        name="measure"
        onChange={handleChange}
      >
        {measureList.map(measure => (
          <option key={measure} value={measure}>
            {measure}
          </option>
        ))}
      </select>  
      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={handleDelete}>
        Delete
      </button>
    </li >)
}


export default  IngredientItem 


