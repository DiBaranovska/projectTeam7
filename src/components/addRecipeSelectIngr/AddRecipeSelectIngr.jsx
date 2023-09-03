import { useState, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import css from './addRecipeSelectIngr.module.scss';

const SelectIngredient = ({ initValue, list, handleClick , type}) => {

  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = e => {
    console.log('e:', e);
    setValue(e.target.getAttribute('data-name'));
    setShowList(false);
    handleClick(e.target.getAttribute('data-name'));
  };

  const handleListDisplay = () => {
    setShowList(!showList);
  };
  const handleClickOutside = e => {
    if (e.target.getAttribute('name') !== 'select') {
      setShowList(false);

    }
  };
  return (
    <div className={css[type]}>
      {initValue && (
        <div className={css.inputSelect}>
          <div
            name="select"
            className={css.selectedText}
            onClick={handleListDisplay}
          >
            <p name="select">{value}</p>
            <p>
              <GoChevronDown
                name="select"
                className={showList && css.selectedTextActive}
              />
            </p>
          </div>
          {showList && (
            <div className={css.selectOptionsListWrapper}>
              <ul name="select" className={css.selectOptionsList}>
                {list.map(item => {
                  return (
                    <li
                      className={css.selectOptionsItem}
                      key={item}
                      onClick={handleOptionClick}
                    >
                      <p data-name={item} name="select">
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SelectIngredient;
