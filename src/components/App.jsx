import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WellcomPage from '../pages/WellcomPage/WellcomPage';
import SharedLayout from './sharedLayout/sharedLayout';
import PublicRoute from '../components/PublicRoute';

const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
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
  return (
    <>
      <Routes>
        <Route
          path="welcome"
          element={
            <PublicRoute>
              <WellcomPage />
            </PublicRoute>
          }
        />
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
        <Route path="/" element={<SharedLayout />}>
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