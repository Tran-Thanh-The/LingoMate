import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Role, ROLE } from '@/utils/constants/constants';

interface AuthContextType {
  role: Role | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('lỗi scope');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth') || '{}');
    const userRole = auth.user?.role?.name;
    console.log('role1:', userRole);
    const storedRole = userRole || ROLE.USER;
    setRole(storedRole);
  }, []);

  return (
    <AuthContext.Provider value={{ role }}>{children}</AuthContext.Provider>
  );
};
