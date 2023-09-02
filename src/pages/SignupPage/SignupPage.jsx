import React from 'react';
import { RegisterForm } from '../../components/authForm/authFormRegister';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
      <div className={css.example}></div>
      <div className={css.example2}></div>
      <div className={css.example3}></div>
      <div className={css.example4}></div>
      <div className={css.box_text}>
        <h1 className={css.title}>Registration</h1>
        <Toaster />
        <RegisterForm />
        <p className={css.text}>
          <span className={css.link} onClick={handleSignInClick}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
