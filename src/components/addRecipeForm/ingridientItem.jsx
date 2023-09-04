import css from './addRecipeForm.module.scss';
import { GoX } from 'react-icons/go';
import SelectIngredient from 'components/addRecipeSelectIngr/AddRecipeSelectIngr';

const IngredientItem = ({
  item,
  ingredientsList,
  onChange,
  handleDeleteIngredient,
}) => {
  const measureList = ['1/2 oz', '1/4 oz', '3/4 oz', '1 oz'];

  const handleChangeTitle = title => {
    onChange({ ...item, title });
  };

  const handleChangeMeasure = measure => {
    onChange({ ...item, measure });
  };

  const handleDelete = () => {
    handleDeleteIngredient(item.id);
  };

  return (
    <li className={css.ingredientItem}>
      <div className={css.selectWrapper}>
        <SelectIngredient
          type="title"
          initValue={item.title}
          list={ingredientsList}
          handleClick={handleChangeTitle}
        />
        <SelectIngredient
          type="measure"
          initValue={item.measure}
          list={measureList}
          handleClick={handleChangeMeasure}
        />
      </div>
      <button
        type="button"
        className={css.fieldAddDeleteBtn}
        onClick={handleDelete}
      >
        <GoX size={30} />
      </button>
    </li>
  );
};

export default IngredientItem;
