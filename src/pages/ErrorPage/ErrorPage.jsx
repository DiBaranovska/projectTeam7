import styles from "../ErrorPage/ErrorPage.module.scss";
import DrinkError from "../../img/errorPage/404.jpg";

export default function NotFoundPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img
                    className={styles.errorImg}
                    src={DrinkError}
                    alt="Not Found"
                />
                <p className={styles.errorText}>
                <span>4</span> <span>4</span>
                </p>
            </div>
        </div>
    );
}


