import { NavLink } from 'react-router-dom';
import navItems from './navItems.json';
import styles from './navigation.module.scss';

const Navigation = () => {
  const elements = navItems.map(item => {
    return (
      <li className={styles.item} key={item.id}>
        <NavLink className={styles.link} to={item.link}>
          {item.title}
        </NavLink>
      </li>
    );
  });
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default Navigation;
