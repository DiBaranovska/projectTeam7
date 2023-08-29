import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../../components/authForm/authFormLogin';
import css from './SigninPage.module.scss';

const SigninPage = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Sign In</h1>
      <LoginForm />
      <p className={css.text}>
        <NavLink to="/signup" className={css.link}>
          Registration
        </NavLink>
      </p>
    </div>
  );
};

export default SigninPage;
