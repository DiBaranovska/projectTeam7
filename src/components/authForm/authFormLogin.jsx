import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/thunk';
import { Formik, Field, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';

import showPasswordIcon from '../../img/loginIcon/eye-off.svg';
import hidePasswordIcon from '../../img/loginIcon/eye.svg';
import errorImg from '../../img/loginIcon/Error.svg';
import doneImg from '../../img/loginIcon/Done.svg';
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
  const [errorMessage] = useState('');

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(login(values))
          .unwrap()
          .catch(error => {
            if (error.message === 'Email or password is wrong') {
              toast.error('Email or password is wrong');
            } else {
              toast.error('Some error happened :(');
            }
          });
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          {errorMessage && <div className={css.error}>{errorMessage}</div>}
          <div className={css.passwordContainer}>
            <Field
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`${css.input} ${
                formik.errors.email && formik.touched.email
                  ? css.errorInput
                  : formik.touched.email
                  ? css.сorrectInput
                  : ''
              }`}
            />
            {formik.errors.email && formik.touched.email && (
              <img src={errorImg} alt="Error" className={css.errorImage} />
            )}
            {formik.touched.email && !formik.errors.email && (
              <img src={doneImg} alt="Done" className={css.doneImage} />
            )}
            <ErrorMessage name="email" component="div" className={css.error} />
            {formik.touched.email && !formik.errors.email && (
              <div className={css.successMessage}>This is an CORRECT email</div>
            )}
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
              className={`${css.input} ${css['last_input']} ${
                formik.errors.password && formik.touched.password
                  ? css.errorInput
                  : formik.touched.password
                  ? css.сorrectInput
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
            {formik.touched.password && !formik.errors.password && (
              <div className={css.successMessage}>
                This is an CORRECT password
              </div>
            )}
          </div>
          <button type="submit" className={css.button}>
            Sign In
          </button>
        </form>
      )}
    </Formik>
  );
};
