import { Link } from 'react-router-dom';
import styles from './nav.module.scss';
export const Nav = () => {
  return (
    <nav className={styles.navigate}>
      <Link className={styles.navLink} to="/drinks">
        Drinks
      </Link>
      <Link className={styles.navLink} to="/add">
        Add recipes
      </Link>
      <Link className={styles.navLink} to="/my">
        My recipes
      </Link>
      <Link className={styles.navLink} to="/favorite">
        Favorites
      </Link>
    </nav>
  );
};
