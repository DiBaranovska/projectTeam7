import { useState } from 'react';
import Logo from 'components/logo/logo';
import Navigation from 'components/navigation/navigation';
import UserLogo from 'components/userLogo/userLogo';
import MobileMenu from 'components/mobileMenu/mobileMenu';
import closeIcon from '../../assets/icons/close.svg';
import burgerIcon from '../../assets/icons/burger-menu.svg';
import styles from './header.module.scss';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleModal = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const closeMobileMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerWrapper}>
            <Logo closeMobileMenu={closeMobileMenu} />
            <Navigation className="desktop" />

            <div className={styles.wrapper}>
              <div onClick={closeMobileMenu}>
                <UserLogo />
              </div>

              {isMenuOpened ? (
                <img
                  className={styles.menuIcon}
                  src={closeIcon}
                  alt="Icon close"
                  onClick={toggleModal}
                />
              ) : (
                <img
                  className={styles.menuIcon}
                  src={burgerIcon}
                  alt="Burger menu icon"
                  onClick={toggleModal}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isMenuOpened={isMenuOpened}
        closeMobileMenu={closeMobileMenu}
      />
    </>
  );
};

export default Header;
