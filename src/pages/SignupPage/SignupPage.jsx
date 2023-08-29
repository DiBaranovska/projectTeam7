import React from 'react';
import { RegisterForm } from '../../components/authForm/authFormRegister';
import { useNavigate } from 'react-router-dom';
import css from './SignupPage.module.scss';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    React.startTransition(() => {
      navigate('/signin');
    });
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>Registration</h1>
      <RegisterForm />
      <p className={css.text}>
        <span className={css.link} onClick={handleSignInClick}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignupPage;
