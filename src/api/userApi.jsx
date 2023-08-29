import axios from 'axios';

axios.defaults.baseURL = 'https://projectteam7-backend.onrender.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// export const register = async credentials => {
//   try {
//     const response = await axios.post('/auth/signup', credentials);
//     setAuthHeader(response.data.token);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const logInApi = async credentials => {
//   try {
//     const response = await axios.post('/auth/signin', credentials);
//     setAuthHeader(response.data.token);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
