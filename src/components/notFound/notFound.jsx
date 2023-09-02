import DrinkError from '../../img/errorPage/404.jpg';
import styles from './notFound.module.scss';

export default function NotFound({ text }) {
  return (
    <div className={styles.imgWrap}>
      <img className={styles.notFoundImg} src={DrinkError} alt="No recipe" />
      <p className={styles.notFoundText}>{text}</p>
    </div>
  );
}
