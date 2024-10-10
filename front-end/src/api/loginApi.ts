import axiosInstance from '@/core/intercepter/Intercepter';
import { Account } from '@/types/interface/Account';
import { API_ENDPOINT } from '@/utils/constants/constants';
interface RefreshToken {
  refreshToken: string;
}

const loginApi = {
  // API: Đăng nhập
  postLogin: (account: Account) => {
    const url = API_ENDPOINT.LOGIN;
    return axiosInstance.post(url, account);
  },

  // API: Đăng nhập với Google
  postLoginWithGoogle: (accessToken: string) => {
    const url = ``;
    return axiosInstance.post(url, { accessToken });
  },

  // API: Authentication
  getAuth: () => {
    const url = ``;
    if (process.env.NODE_ENV === 'production') {
      return axiosInstance.get(url, {
        params: {
          token: localStorage.getItem(''),
        },
      });
    } else {
      return axiosInstance.get(url);
    }
  },

  // API: Refresh Token
  postRefreshToken: (refreshToken: RefreshToken) => {
    const url = `${API_ENDPOINT.LOGIN}/refresh_token`;
    return axiosInstance.post(url, refreshToken);
  },

  // API: Logout
  postLogout: () => {
    const url = `${API_ENDPOINT.LOGOUT}`;
    return axiosInstance.post(url, {
      token: localStorage.getItem('auth'),
    });
  },
};

export default loginApi;
