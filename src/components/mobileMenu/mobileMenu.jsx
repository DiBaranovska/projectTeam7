import { useEffect } from 'react';
import styles from './mobileMenu.module.scss';
import Navigation from 'components/navigation/navigation';

const MobileMenu = ({ isMenuOpened, closeMobileMenu }) => {
  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isMenuOpened]);

  return (
    <div
      className={
        isMenuOpened ? `${styles.mobileMenu} active` : `${styles.mobileMenu}`
      }
    >
      <Navigation
        onClick={closeMobileMenu}
        className={isMenuOpened && 'mobileActive'}
      />
      <div className={styles.lightLeft}></div>
      <div className={styles.lightRight}></div>
      <div className={styles.lightCenter}></div>
    </div>
  );
};

export default MobileMenu;
