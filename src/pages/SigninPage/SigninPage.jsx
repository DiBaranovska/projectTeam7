import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/authForm/authFormLogin';
import { Toaster } from 'react-hot-toast';
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
      <div className={css.example}></div>
      <div className={css.example2}></div>
      <div className={css.example3}></div>
      <div className={css.example4}></div>
      <div className={css.box_text}>
        <h1 className={css.title}>Sign In</h1>
        <Toaster />
        <LoginForm />
        <p className={css.text}>
          <span className={css.link} onClick={handleSignUpClick}>
            Registration
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
