import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import WellcomPage from '../pages/WellcomPage/WellcomPage';
import SharedLayout from './sharedLayout/sharedLayout';
import PublicRoute from '../components/PublicRoute';
import PrivateRoure from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/user/thunk';
import SignupPage from '../pages/SignupPage/SignupPage';
import SigninPage from '../pages/SigninPage/SigninPage';

//const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
//const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const DrinksPage = lazy(() => import('../pages/DrinksPage/DrinksPage'));
const AddRecipePage = lazy(() =>
  import('../pages/AddRecipePage/AddRecipePage')
);
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() =>
  import('../pages/MyRecipesPage/MyRecipesPage')
);
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="welcome" element={<WellcomPage />} />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SigninPage />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoure>
              <SharedLayout />
            </PrivateRoure>
          }
        >
          <Route path="main" element={<MainPage />} />
          <Route path="drinks/:categoryName" element={<DrinksPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
