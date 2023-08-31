import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selectors';
import { Navigate } from 'react-router-dom';
const PrivateRoure = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing, token } = useSelector(userSelector);
  const shouldRefreshing = !isRefreshing && !isLoggedIn && token === '';
  return shouldRefreshing ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoure;
