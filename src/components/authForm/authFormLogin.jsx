import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/user/thunk';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import showPasswordIcon from '../../img/eye-off.svg';
import hidePasswordIcon from '../../img/eye.svg';
import css from './authForm.module.scss';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password is too short')
    .max(16, 'Password is too long')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(loginThunk(values));
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${css.input} ${css.errorInput}`}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.passwordContainer}>
            <Field
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`${css.input} ${css.errorInput} ${css['last_input']}`}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className={css.passwordToggle}
            >
              <img
                src={showPassword ? hidePasswordIcon : showPasswordIcon}
                alt="Show Password"
                className={css.passwordIcon}
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.button}>
            Sign In
          </button>
        </form>
      )}
    </Formik>
  );
};
