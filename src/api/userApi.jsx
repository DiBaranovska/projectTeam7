import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://projectteam7-backend.onrender.com/auth',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const signup = async data => {
  const { data: result } = await instance.post('/signup', data);
  setToken(result.token);
  return result;
};

export const signin = async data => {
  const { data: result } = await instance.post('/signin', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const { data } = await instance.get('/signout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const update = async formData => {
  const { data: result } = await instance.post('/update', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};
