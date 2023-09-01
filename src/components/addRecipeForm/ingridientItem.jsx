// import PropTypes from "prop-types";
import { useState } from 'react';
import css from './addRecipeForm.module.scss';

const IngredientItem = ({item, ingredientsList, onChange, handleDeleteIngredient} ) => {
  const measureList = [
    '1/2 oz',
    '1/4 oz',
    '3/4 oz',
    '1 oz'
  ]
  const {id, titleItem, measureItem} = item;
  const [title, setTitle] = useState(titleItem);
  const [measure, setMeasure] = useState(measureItem);
  
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'title') { setTitle(value) }
    else if (name === 'measure') { setMeasure(value) };
    onChange(
      {id,
    title,
  measure}
  )
  }
 const handleDelete = () =>{
  handleDeleteIngredient(id)}

  return (
    < li className={css.contact__item} >
      <select
        className="title"
        name="title"
        value={title}
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
        value={measure}
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

// ContactItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired
// };

export default  IngredientItem 


