import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import styles from './logo.module.scss';

const Logo = ({ closeMobileMenu }) => {
  return (
    <Link className={styles.logo} to={'main'} onClick={closeMobileMenu}>
      <img className={styles.logoImage} src={logo} alt="Logo" />
      <p className={styles.logoText}>Drink Master</p>
    </Link>
  );
};
export default Logo;
