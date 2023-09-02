import { NavLink } from 'react-router-dom';
import navItems from './navItems.json';
import styles from './navigation.module.scss';

const Navigation = ({ className, onClick }) => {
  const fullClassName = className ? `${styles.nav} ${className}` : styles.nav;

  return (
    <nav className={fullClassName}>
      <ul className={styles.list}>
        {navItems.map(item => {
          return (
            <li className={styles.navItems} key={item.id}>
              <NavLink
                className={styles.link}
                to={item.link}
                onClick={() => {
                  if (onClick) onClick();
                }}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
