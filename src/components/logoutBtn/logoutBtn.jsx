import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './logoutBtn.module.scss';
import { logout } from 'redux/user/thunk';
import Modal from 'components/modal/modal';
import Button from 'components/buttons/buttons';

const LogoutBtn = ({ closeDropDown, modalRef }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    closeDropDown();
  };

  return (
    <>
      <button className={styles.logoutBtn} onClick={handleOpenModal}>
        Log out
      </button>

      {showModal && (
        <Modal
          close={handleCloseModal}
          modalRef={modalRef}
          closeDropDown={closeDropDown}
        >
          <h2 className={styles.title}>Are you sure you want to log out?</h2>
          <div className={styles.btnContainer}>
            <Button className="light" onClick={handleLogout}>
              Log out
            </Button>
            <Button className="dark" onClick={() => closeDropDown()}>
              Cancel
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LogoutBtn;
