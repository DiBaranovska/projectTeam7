import { Link } from 'react-router-dom';
import css from '../../components/previewDrinks/previewDrinks.module.scss'

const PreviewDrinks = ({recipes}) => {

return(
        <div><ul className={css.gridCard}>{recipes.map(({_id, drink, drinkThumb})=>(
                <li key={_id} className={css.card_recept}>
                <div><img 
                src={drinkThumb}
                alt={drink}
                width="335"
                className={css.container_img}/></div>
                <div className={css.recipe}>
                <p className={css.ingridient}>{drink}</p>
                <Link to="/drinks/:categoryName">Open recipe</Link>
                </div></li>
    ))}</ul></div>
)}

export default PreviewDrinks;