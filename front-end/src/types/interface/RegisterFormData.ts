import { Dayjs } from 'dayjs';

export interface RegisterFormData {
  fullName?: string;
  dob?: Dayjs | string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
