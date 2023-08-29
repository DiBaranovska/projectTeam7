import { useEffect, useRef } from 'react';
import EditProfile from '../editProfile/editProfile';
import styles from './userLogoModal.module.scss';
import LogoutBtn from 'components/logoutBtn/logoutBtn';

const UserLogoModal = ({ closeDropDown, triggerRef }) => {
  const modalRef = useRef();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleEscape = ({ code }) => {
      if (code === 'Escape') {
        closeDropDown();
      }
    };
    document.body.addEventListener('keydown', handleEscape);

    return () => document.body.removeEventListener('keydown', handleEscape);
  }, [closeDropDown]);

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (
        !dropdownRef.current.contains(target) &&
        !triggerRef.current.contains(target) &&
        !modalRef.current
      ) {
        closeDropDown();
      }
    };

    document.body.addEventListener('mousedown', handleOutsideClick);

    return () =>
      document.body.removeEventListener('mousedown', handleOutsideClick);
  }, [closeDropDown, triggerRef]);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <EditProfile modalRef={modalRef} closeDropDown={closeDropDown} />

      <LogoutBtn modalRef={modalRef} closeDropDown={closeDropDown} />
    </div>
  );
};

export default UserLogoModal;
