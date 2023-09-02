import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './WellcomPage.module.scss';

const WellcomPage = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    React.startTransition(() => {
      navigate('/signup');
    });
  };

  const handleSignInPage = async () => {
    React.startTransition(() => {
      navigate('/signin');
    });
  };

  return (
    <>
      <div className={css.box}>
        <div className={css.example}></div>
        <div className={css.example2}></div>
        <div className={css.example3}></div>
        <div className={css.example4}></div>
        <div className={css.box_text}>
          <h1 className={css.title}>Welcome to the app!</h1>
          <p className={css.text}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <div className={css.button_conteiner}>
            <button
              className={css.button}
              type="button"
              onClick={handleRegistrationClick}
            >
              Registration
            </button>
            <button
              className={css.button}
              type="button"
              onClick={handleSignInPage}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellcomPage;
