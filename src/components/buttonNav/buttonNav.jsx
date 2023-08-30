import { NavLink } from 'react-router-dom';
import styles from './buttonNav.module.scss';

const ButtonNav = ({ title, path }) => {
  return (
    <NavLink className={styles.btn_link} to={path}>
      {title}
    </NavLink>
  );
};

export default ButtonNav;
