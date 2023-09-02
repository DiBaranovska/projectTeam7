import React from 'react';

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getContactsThunk } from "redux/contacts/contactOperations";
// import { selectToken } from "redux/user/user-selectors";
import styles from './AddRecipePage.module.scss';
import AddRecipeForm from '../../components/addRecipeForm/addRecipeForm';
import AddRecipePopularContainer from 'components/AddRecipePopularContainer/AddRecipePopularContainer';
// import FollowUs from '../../components/followUs/followUs';
// import PopularRecipe from '../../components/popularRecipe/popularRecipe';
// import { setToken } from '../api/api';
// import { toast } from 'react-hot-toast';
// import { logOut } from "../redux/auth/authSlice";

const AddRecipePage = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   setToken(token);
  //   dispatch(getContactsThunk()).unwrap().catch((error) => {
  //     if (error.message.includes('401')) {
  //       dispatch(logOut());
  //       toast.error('Your session is over. Log In again.')
  //     } else {
  //       toast.error('Some error happened :(')
  //     }
  //   });
  // }, [dispatch, token]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}> Add recipe </h1>
      <div className={styles.container}>
        <AddRecipeForm />

        <AddRecipePopularContainer />
      </div>
    </section>
  );
};

export default AddRecipePage;
