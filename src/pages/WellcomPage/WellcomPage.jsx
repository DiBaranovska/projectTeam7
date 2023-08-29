import React from 'react';
import css from './WellcomPage.module.scss';
import { useNavigate } from 'react-router-dom';

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
        <h1 className={css.title}>Welcome to the app!</h1>
        <p className={css.text}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
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
    </>
  );
};

export default WellcomPage;
