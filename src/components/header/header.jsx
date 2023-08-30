import Logo from 'components/logo/logo';
import Navigation from 'components/navigation/navigation';
import UserLogo from 'components/userLogo/userLogo';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Logo />
          <Navigation />
          <UserLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
