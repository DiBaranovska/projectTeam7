//import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import css from './popularRecipe.module.scss'
//import {selectedRecipes} from '../../redux/selectors'
import PreviewDrinks from 'components/previewDrinks/previewDrinks';

const PopularRecipeList = ({category}) => {

  //const {recipes} = useSelector(selectedRecipes);


        return (<div className={css.container_recipe}>
          <ul >{ category.map(({_id, recipes })=> (
          <li key={_id} className={css.block_recipe}>
            <Link to={(`/drinks/${_id}`)} className={css.popular_title}><p>{_id}</p></Link>
            <PreviewDrinks recipes={recipes}/>
          </li>
        )) 
            }</ul>
                </div>)
}

export default PopularRecipeList;