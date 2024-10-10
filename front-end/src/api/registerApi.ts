import axiosInstance from '@/core/intercepter/Intercepter';
import { RegisterFormData } from '@/types/interface/RegisterFormData';
import { RegisterRequestData } from '@/types/interface/RegisterRequestData';
import { API_ENDPOINT } from '@/utils/constants/constants';

const registerApi = {
  // API: Đăng ký
  postRegister: (account: RegisterRequestData) => {
    const url = API_ENDPOINT.REGISTER;
    return axiosInstance.post(url, account);
  },

  // API: Xác thực email
  postVerifyEmail: async (verifyToken: string) => {
    const url = API_ENDPOINT.VERIFY;
    console.log('Sending verification token: ', verifyToken);

    try {
      const response = await axiosInstance.post(url, { hash: verifyToken });
      return response.data;
    } catch (error) {
      console.error('Error during email verification: ', error);
      throw error;
    }
  },

  // API: Gửi email xác nhận
  postResendVerifyEmail: (email: string) => {
    const url = ``;
    return axiosInstance.post(url, { email });
  },
};

export default registerApi;
