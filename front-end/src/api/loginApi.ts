import axiosClient from '@/core/intercepter/Intercepter';
import { Account } from '@/types/interface/Account';
import constants from '@/utils/constants/constants';

interface RefreshToken {
  refreshToken: string;
}

const LOGIN_API_ENDPOINT = constants.LOGIN_API_ENDPOINT;

const loginApi = {
  // API: Đăng nhập
  postLogin: (account: Account) => {
    const url = LOGIN_API_ENDPOINT;
    return axiosClient.post(url, account);
  },

  // API: Đăng nhập với Google
  postLoginWithGoogle: (accessToken: string) => {
    const url = `${LOGIN_API_ENDPOINT}/gg`;
    return axiosClient.post(url, { accessToken });
  },

  // API: Authentication
  getAuth: () => {
    const url = `${LOGIN_API_ENDPOINT}/auth`;
    if (process.env.NODE_ENV === 'production') {
      return axiosClient.get(url, {
        params: {
          token: localStorage.getItem(constants.ACCESS_TOKEN_KEY),
        },
      });
    } else {
      return axiosClient.get(url);
    }
  },

  // API: Refresh Token
  postRefreshToken: (refreshToken: RefreshToken) => {
    const url = `${LOGIN_API_ENDPOINT}/refresh_token`;
    return axiosClient.post(url, refreshToken);
  },

  // API: Logout
  postLogout: () => {
    const url = `${LOGIN_API_ENDPOINT}/logout`;
    if (process.env.NODE_ENV === 'production') {
      return axiosClient.post(url, {
        token: localStorage.getItem(constants.ACCESS_TOKEN_KEY),
      });
    } else {
      return axiosClient.post(url);
    }
  },
};

export default loginApi;
