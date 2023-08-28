import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import css from './sharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={css.block_bg_radial}></div>
        <div className={css.block_bg_radial_2}></div>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
