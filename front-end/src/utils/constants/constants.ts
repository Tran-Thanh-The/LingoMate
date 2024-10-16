export const API_ENDPOINT = {
  ACCESS_TOKEN_KEY: 'ttb_atk',
  REFRESH_TOKEN_KEY: 'refresh_token',
  REFRESH_TOKEN: '/auth/refresh_token',
  VERIFY_TOKEN: 'verify_token',
  LOGIN: '/auth/email/login',
  LOGOUT: '/auth/logout',
  REGISTER: '/auth/email/register',
  VERIFY: '/auth/email/confirm',
  USER: '/user',
  COURSE: '/course',
} as const;

export const API_LESSON = {
  CREATE: '',
  UPDATE: '',
  READ: '',
  DELETE: '',
  SEARCH: '',
} as const;

export const ROLE = {
  USER: 'User',
  ADMIN: 'Admin',
  STAFF: 'Staff',
} as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];

export const LESSONS_PER_PAGE = 5;
