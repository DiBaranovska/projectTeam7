import axios from 'axios';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
