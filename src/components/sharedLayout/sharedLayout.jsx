import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
