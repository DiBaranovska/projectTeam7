import { Link } from 'react-router-dom';
import css from '../../components/previewDrinks/previewDrinks.module.scss';

const PreviewDrinks = ({recipes}) => {

return(
        <div>
        <ul className={css.gridCard}>{recipes.map(({_id, drink, drinkThumb})=>(
        <li key={_id} className={css.card_recept}>
        <ul>
        <li><img 
                src={drinkThumb}
                alt={drink}
                width="335"
                className={css.container_img}/>
                <div className={css.recipe}> 
                <p className={css.drink_name}>{drink}</p>
                <Link to="/my" className={css.open_recipe}>See recipe</Link></div>
                </li></ul>
                </li>
    ))}</ul></div>
)}

export default PreviewDrinks;