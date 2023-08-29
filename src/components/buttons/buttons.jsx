import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ className, children, onClick, type = 'button' }) => {
  const fullClassName = className ? `${styles.btn} ${className}` : styles.btn;
  return (
    <button className={fullClassName} onClick={() => onClick(true)} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
