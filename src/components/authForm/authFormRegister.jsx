import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/user/thunk';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import showPasswordIcon from '../../img/eye-off.svg';
import hidePasswordIcon from '../../img/eye.svg';
import css from './authForm.module.scss';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Name is too short').required('Name is required'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(register(values));
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Field
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              placeholder="Name"
              className={`${css.input} ${
                formik.errors.name && formik.touched.name ? css.errorInput : ''
              }`}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div>
            <Field
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              placeholder="Email"
              className={`${css.input} ${
                formik.errors.email && formik.touched.email
                  ? css.errorInput
                  : ''
              }`}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.passwordContainer}>
            <Field
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className={`${css.input} ${css['last_input']} ${
                formik.errors.password && formik.touched.password
                  ? css.errorInput
                  : ''
              }`}
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
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  );
};
