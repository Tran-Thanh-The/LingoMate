import axios from 'axios';
import loginApi from '@/api/loginApi';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    const tokenExpires = localStorage.getItem('tokenExpires');

    const currentTime = Math.floor(Date.now() / 1000);

    if (token && tokenExpires && currentTime >= Number(tokenExpires)) {
      try {
        const response = await loginApi.postRefreshToken({ refreshToken });

        token = response.data.accessToken;
        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpires', response.data.tokenExpires);

        config.headers['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('tokenExpires');
        window.location.href = '/login';
        return Promise.reject(error);
      }
    } else if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('tokenExpires');
        window.location.href = '/login';
      }

      if (status === 403) {
        console.log('Access denied');
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
