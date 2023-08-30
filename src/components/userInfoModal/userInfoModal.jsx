import { useRef, useState } from 'react';
import styles from './userInfoModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/user/user-selectors';
import plusIcon from '../../assets/icons/addBtn.png';
import editIcon from '../../assets/icons/edit.svg';
import { update } from 'redux/user/thunk';

const UserInfoModal = ({ closeDropDown }) => {
  const user = useSelector(selectUser);

  const [state, setState] = useState(() => ({
    name: user?.name,
    avatarURL: '',
  }));

  const formRef = useRef();
  const fileRef = useRef();

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value, files, type } = target;

    if (type === 'file' && !files?.[0]) {
      return;
    }

    if (Boolean(files?.[0])) {
      const isValidFile =
        files[0].name.endsWith('.jpg') ||
        files[0].name.endsWith('.png') ||
        files[0].name.endsWith('.jpeg');

      if (!isValidFile)
        return alert('Only jpg/jpeg and png files are allowed!');
    }

    setState(prevState => {
      const newValue = type === 'file' ? files?.[0] : value;
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSave = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('avatarURL', state.avatarURL);

    dispatch(update(formData));
    closeDropDown();
  };

  const handlePicker = () => {
    fileRef.current.click();
  };

  const avatar = state?.avatarURL
    ? URL.createObjectURL(state.avatarURL)
    : user.avatarURL;

  const isBtnDisabled = user.name === state.name && !state.avatarURL;

  return (
    <div className="userProfile">
      <form ref={formRef} onSubmit={handleSave}>
        <div className={styles.wrapper}>
          <img className={styles.avatar} src={avatar} alt="User avatar" />
          <img
            className={styles.addBtn}
            src={plusIcon}
            alt="Add button"
            onClick={handlePicker}
          />
          <input
            className={styles.file}
            ref={fileRef}
            type="file"
            name="avatarURL"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            defaultValue={state.avatarURL}
          />
        </div>

        <label className={styles.label}>
          <input
            className={styles.field}
            value={state.name}
            onChange={handleChange}
            name="name"
            type="text"
            minLength={3}
            required
          />
          <img className={styles.editIcon} src={editIcon} alt="Edit icon" />
        </label>

        <button
          className={styles.button}
          type="submit"
          disabled={isBtnDisabled}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UserInfoModal;
