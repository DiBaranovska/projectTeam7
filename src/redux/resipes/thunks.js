import { fetchContacts, addContact, deleteContact } from '../../api/resipesApi';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchAll = createAsyncThunk('contacts/fetchAll', () => {
  return fetchContacts();
});

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contacts => {
    return addContact(contacts);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return deleteContact(id);
  }
);
