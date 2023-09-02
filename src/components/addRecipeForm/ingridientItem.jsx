import css from './addRecipeForm.module.scss';
import { GoPlus } from 'react-icons/go';
// import SelectIngredient from 'components/addRecipeSelectIngr/AddRecipeSelectIngr';

const IngredientItem = ({
  item,
  ingredientsList,
  onChange,
  handleDeleteIngredient,
}) => {
  const measureList = ['1/2 oz', '1/4 oz', '3/4 oz', '1 oz'];

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'title') {
      onChange({ ...item, title: value });
    } else if (name === 'measure') {
      onChange({ ...item, measure: value });
    }
  };
  const handleDelete = () => {
    handleDeleteIngredient(item.id);
  };

  return (
    <li className={css.ingredientItem}>
      {/* <SelectIngredient
        item={item}
        list={ingredientsList}
        handleClick={handleChange}
      /> */}
      <select className="title" name="title" onChange={handleChange}>
        {ingredientsList.map(ingredient => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>
      <select className="measureField" name="measure" onChange={handleChange}>
        {measureList.map(measure => (
          <option key={measure} value={measure}>
            {measure}
          </option>
        ))}
      </select>
      <button
        type="button"
        className={css.contact__deleteBtn}
        onClick={handleDelete}
      >
        <GoPlus size={30} />
      </button>
    </li>
  );
};

export default IngredientItem;
