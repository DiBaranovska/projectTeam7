import { FollowUs } from '../followUs/followUs';
import { Nav } from '../nav/nav';
import { SubscribeForm } from '../subscribeForm/subscribleForm';
import Logo from 'components/logo/logo';

import styles from './footer.module.scss';

import { useState } from 'react';
import Modal from '../footerModal/footerModal';
import privacyPolicyText from '../../assets/footerModal/privacyPolicyText';
import termsOfService from '../../assets/footerModal/termsOfService';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleOpenModal = (text) => {
    setShowModal(true);
    setModalText(text);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className={styles.footer} >
      <div id='footerModal'>
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
            <p className={styles.privacyAndTerms__cursor} onClick={() => handleOpenModal(privacyPolicyText)}>Privacy Policy</p>
            <p className={styles.privacyAndTerms__cursor} onClick={() => handleOpenModal(termsOfService)}>Terms of Service</p>
            {showModal && (
              <Modal close={handleCloseModal} text={modalText} />
            )}
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
