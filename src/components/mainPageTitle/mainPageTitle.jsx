import styles from './mainPageTitle.module.css';

const MainPageTitle = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default MainPageTitle;
