import { FiTrash2 } from 'react-icons/fi';
import styles from './buttonDelete.module.scss';

const ButtonDelete = ({ onClick }) => {
  return (
    <button type="button" className={styles.btn_delete} onClick={onClick}>
      <FiTrash2 size={24}></FiTrash2>
    </button>
  );
};

export default ButtonDelete;
//
