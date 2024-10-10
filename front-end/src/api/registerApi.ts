import axiosClient from '@/core/intercepter/Intercepter';
import { RegisterFormData } from '@/types/interface/RegisterFormData';
import { RegisterRequestData } from '@/types/interface/RegisterRequestData';
import constants from '@/utils/constants/constants';

const REGISTER_API_ENDPOINT = constants.REGISTER_API_ENDPOINT;

const registerApi = {
  // API: Đăng ký
  postRegister: (account: RegisterRequestData) => {
    const url = REGISTER_API_ENDPOINT;
    return axiosClient.post(url, account);
  },

  // API: Xác thực email
  postVerifyEmail: (verifyToken: string) => {
    const url = `${REGISTER_API_ENDPOINT}/verify`;
    return axiosClient.post(url, { token: verifyToken });
  },

  // API: Gửi email xác nhận
  postResendVerifyEmail: (email: string) => {
    const url = `${REGISTER_API_ENDPOINT}/resend-verify`;
    return axiosClient.post(url, { email });
  },
};

export default registerApi;
