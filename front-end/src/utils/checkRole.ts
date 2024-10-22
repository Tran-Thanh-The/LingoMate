import { Role } from './constants/constants';

export const checkRole = (
  userRole: Role | null,
  allowedRoles: Role[],
): boolean => {
  return allowedRoles.includes(userRole as Role);
};
