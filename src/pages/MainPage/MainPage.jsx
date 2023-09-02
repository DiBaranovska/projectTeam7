import React, { useEffect } from 'react';
import fotoMainSm1x from '../../img/main_wineglass/wineglass_sm@1x.jpg';
import fotoMainSm2x from '../../img/main_wineglass/wineglass_sm@2x.jpg';
import fotoMainMd1x from '../../img/main_wineglass/wineglass_md@1x.jpg';
import fotoMainMd2x from '../../img/main_wineglass/wineglass_md@2x.jpg';
import fotoMainLg1x from '../../img/main_wineglass/wineglass_lg@1x.jpg';
import fotoMainLg2x from '../../img/main_wineglass/wineglass_lg@2x.jpg';
import css from './MainPage.module.scss';
import { selectedRecipes, selectedIsLoading } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesPopular } from '../../redux/resipes/thunks';
import '../MainPage/MainPage.module.scss';
import ButtonNav from '../../components/buttonNav/buttonNav';
import PopularRecipeList from '../../components/popularRecipe/popularRecipe';
import Skeleton from 'components/skeleton/skeleton';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesPopular());
  }, [dispatch]);
  const category = useSelector(selectedRecipes);
  const isLoading = useSelector(selectedIsLoading);

  return (
    <section className={css.section}>
      <div className={css.main_container}>
        {isLoading ? (
          <Skeleton></Skeleton>
        ) : (
          <>
            <div>
              <h1 className={css.title}>
                Craft Your Perfect
                <br /> Drink with Drink Master{' '}
              </h1>
              <p className={css.text}>
                Unlock your inner mixologist with Drink Master, your one- stop
                destination for exploring, crafting, and mastering the world's
                finest beverages.
              </p>
              <div className={css.btn_add}>
                <ButtonNav title="Add recipe" path={`/add`}></ButtonNav>
              </div>
            </div>
            <div className={css.main_foto}>
              <picture>
                <source
                  media="(min-width: 1200px)"
                  srcSet={`
                        ${fotoMainLg1x} 1x,
                        ${fotoMainLg2x} 2x
                      `}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${fotoMainMd1x} 1x,
                        ${fotoMainMd2x} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${fotoMainSm1x} 1x,
                        ${fotoMainSm2x} 2x`}
                />
                <img src={fotoMainSm1x} alt="wineglass" />
              </picture>
            </div>
            <div className={css.wrap_main}>
              <ul>
                {' '}
                <li>
                  {category ? <PopularRecipeList category={category} /> : null}
                </li>
              </ul>
              <div className={css.btn_other}>
                <ButtonNav title="Other drinks" path={`/drinks`}></ButtonNav>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MainPage;
