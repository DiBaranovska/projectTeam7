import { createPortal } from 'react-dom';
import styles from './footerModal.module.scss';
import { useEffect, useCallback } from 'react';

const modalRoot = document.getElementById('root');

const Modal = ({ close, text }) => {
  const handleClose = useCallback((e) => {
  if (e.code === 'Escape') {
    close();
  } else {
    e.stopPropagation();
  }
}, [close]);

  const handleOkButtonClick = () => {
    close();
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);
    document.body.classList.add('noScroll');

    return () => {
      document.body.removeEventListener('keydown', handleClose);
      document.body.classList.remove('noScroll');
    };
  }, [handleClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      close();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>        
        <p className={styles.text}>{text}</p>
        <button
          className={styles.logoutBtn}
          onClick={handleOkButtonClick}
        >
          OK
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;