import { NavLink } from 'react-router-dom';
import styles from './buttonNav.module.scss';

const ButtonNav = ({ title, path, dark = false }) => {
  const cls_color = dark
    ? styles.btn_link_color_dark
    : styles.btn_link_color_light;

  return (
    <NavLink className={`${styles.btn_link} ${cls_color}`} to={path}>
      {title}
    </NavLink>
  );
};

export default ButtonNav;
