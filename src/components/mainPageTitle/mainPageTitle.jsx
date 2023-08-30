import styles from './mainPageTitle.module.scss';

const MainPageTitle = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default MainPageTitle;
