import { useState, useRef } from 'react';
import defaultUserImg from '../../assets/user/user.png';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/user-selectors';
import styles from './userLogo.module.scss';
import UserLogoModal from 'components/userLogoModal/userLogoModal';

const UserLogo = () => {
  const [isActive, setIsActive] = useState(false);
  const userRef = useRef();
  const user = useSelector(selectUser);

  const toggleDropDown = () => {
    setIsActive(prevCount => !prevCount);
  };

  return (
    <div className={styles.userContainer}>
      {isActive && (
        <UserLogoModal closeDropDown={toggleDropDown} triggerRef={userRef} />
      )}

      <div ref={userRef} className={styles.user} onClick={toggleDropDown}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={user?.avatarURL || defaultUserImg}
            alt="User avatar"
          />
        </div>

        <p className={styles.userName}>{user?.name}</p>
      </div>
    </div>
  );
};

export default UserLogo;
