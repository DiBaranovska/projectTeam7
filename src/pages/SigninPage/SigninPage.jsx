import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/authForm/authFormLogin';
import css from './SigninPage.module.scss';

const SigninPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    React.startTransition(() => {
      navigate('/signup');
    });
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>Sign In</h1>
      <LoginForm />
      <p className={css.text}>
        <span className={css.link} onClick={handleSignUpClick}>
          Registration
        </span>
      </p>
    </div>
  );
};

export default SigninPage;
