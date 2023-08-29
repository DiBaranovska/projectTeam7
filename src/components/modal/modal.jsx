import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { useEffect } from 'react';
import iconClose from '../../assets/icons/close.svg';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, close, modalRef, closeDropDown }) => {
  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
      closeDropDown();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);

    return () => document.body.removeEventListener('keydown', handleClose);
  });

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} ref={modalRef}>
        <img
          className={styles.close}
          src={iconClose}
          alt="Icon close"
          onClick={() => {
            close();
            closeDropDown();
          }}
        />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
