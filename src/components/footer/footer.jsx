import { FollowUs } from '../followUs/followUs';
import { Nav } from '../nav/nav';
import { SubscribeForm } from '../subscribeForm/subscribleForm';
import Logo from 'components/logo/logo';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.block_bg_radial3}></div>
      <div className={styles.block_bg_radial4}></div>
      <div className={styles.block_bg_radial5}></div>
      <div className={styles.FooterContainer}>
        <div className={styles.footerMainContent}>
          <div className={styles.NavandSoc}>
            <div className={styles.followUsContainer}>
              <Logo />
              <FollowUs />
            </div>
            <Nav />
          </div>
          <SubscribeForm className={styles.subscribeForm} />
        </div>
        <div className={styles.bottomString}>
          <p>©2023 Drink Master. All rights reserved.</p>
          <div className={styles.privacyAndTerms}>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;