import React, { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { checkRole } from '../utils/checkRole';
import { Role } from '@/utils/constants/constants';

interface RoleBasedComponentProps {
  allowedRoles: Role[];
  children: ReactNode;
}

const RoleBasedComponent: React.FC<RoleBasedComponentProps> = ({
  allowedRoles,
  children,
}) => {
  const { role } = useAuth();

  const isAuthorized = checkRole(role, allowedRoles);

  if (!isAuthorized) return null;

  return <>{children}</>;
};

export default RoleBasedComponent;
