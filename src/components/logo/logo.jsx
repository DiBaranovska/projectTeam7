import styles from './logo.module.scss';
import { ReactComponent as SiteLogo } from '../../img/icons/logo.svg';

export const Logo = () => {
    return (
        <a className={styles.link} href="/">
          <SiteLogo className={styles.logoImg} />
          <p className={styles.logoText}>Drink Master</p>
        </a>
    )
}
