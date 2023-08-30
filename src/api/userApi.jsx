import axios from 'axios';
const BASE_URL = 'https://projectteam7-backend.onrender.com/auth';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupApi = async data => {
  const { data: result } = await axios.post(`${BASE_URL}/signup`, data);
  setToken(result.token);
  return result;
};

export const signinApi = async data => {
  const { data: result } = await axios.post(`${BASE_URL}/signin`, data);
  setToken(result.token);
  return result;
};

export const logoutApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/signout`);
  clearToken();
  return data;
};

export const getCurrentApi = async token => {
  try {
    setToken(token);
    const { data } = await axios.get(`${BASE_URL}/current`);
    return data;
  } catch (error) {
    clearToken();
    throw error;
  }
};

export const updateApi = async formData => {
  const { data: result } = await axios.post(`${BASE_URL}/update`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};
