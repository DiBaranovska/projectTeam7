import React from 'react';




// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getContactsThunk } from "redux/contacts/contactOperations";
// import { selectToken } from "redux/user/user-selectors";
// import css from './AddRecipePage.module.scss';
import AddRecipeForm from 
'../../components/addRecipeForm/addRecipeForm';
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
    <div>
      <h1 className="{css.title}"> Add recipe </h1>
      <AddRecipeForm />      
      <h2 className="{css.subtitle}">Follow Us</h2>
      {/* <FollowUs /> */}
      <h2 className="{css.subtitle}">Popular recipe</h2>
      {/* <PopularRecipe /> */}


    </div>
  )
}

export default AddRecipePage;