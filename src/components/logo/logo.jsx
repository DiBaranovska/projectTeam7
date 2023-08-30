import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.logo} to={'main'}>
      <img className={styles.logoImage} src={logo} alt="Logo" />
      <p className={styles.logoText}>Drink Master</p>
    </Link>
  );
};
export default Logo;
