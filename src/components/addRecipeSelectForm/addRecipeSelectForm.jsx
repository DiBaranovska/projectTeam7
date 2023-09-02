import { useState, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import css from './addRecipeSelectForm.module.scss';

const SelectInput = ({ title, item, list, handleClick }) => {
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = e => {
    console.log('e:', e);
    handleClick(e);
    setShowList(false);
  };

  const handleListDisplay = () => {
    setShowList(!showList);
  };
  const handleClickOutside = e => {
    if (e.target.getAttribute('name') !== 'select') {
      setShowList(false);
      console.log('classList:', e.target.getAttribute('name'));
    }
  };
  return (
    <div className={css.inputWrapper}>
      <div className={css.inputText}>
        <p className={css.inputSelectText}>{title}</p>
      </div>
      {item && (
        <div className={css.inputSelect}>
          <div
            name="select"
            className={css.selectedText}
            onClick={handleListDisplay}
          >
            <p name="select">{item}</p>
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
export default SelectInput;
