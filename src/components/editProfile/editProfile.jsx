import { useState } from 'react';
import styles from './editProfile.module.scss';
import editIcon from '../../assets/icons/edit.svg';
import Modal from 'components/modal/modal';
import UserInfoModal from 'components/userInfoModal/userInfoModal';

const EditProfile = ({ closeDropDown, modalRef }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.editBtn} onClick={handleOpenModal}>
        <p>Edit Profile</p>
        <img className={styles.editIcon} src={editIcon} alt="Edit button" />
      </div>

      {showModal && (
        <Modal
          close={handleCloseModal}
          modalRef={modalRef}
          closeDropDown={closeDropDown}
        >
          <UserInfoModal closeDropDown={closeDropDown} />
        </Modal>
      )}
    </>
  );
};

export default EditProfile;
