import React from 'react';
import { RegisterForm } from '../../components/authForm/authFormRegister';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './SignupPage.module.scss';

const SignupPage = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Registration</h1>
      <RegisterForm />
      <p className={css.text}>
        <NavLink to="/signin" className={css.link}>
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default SignupPage;
