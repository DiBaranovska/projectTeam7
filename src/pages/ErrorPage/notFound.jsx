import DrinkError from "../../img/errorPage/404.jpg";
import styles from "./notFound.module.scss";

export default function NotFound() {
	return (
        <div className={styles.container}>
			<div className={styles.imgWrap}>
				<img
					className={styles.notFoundImg}
					src={DrinkError}
					alt="No recipe"
				/>
				<p className={styles.notFoundText}>You haven't added any favorite cocktails yet</p>
			</div>
		</div>
	);
}