import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  allowedRoles: string[]; // Các role được phép truy cập route này
  redirectPath?: string; // Đường dẫn điều hướng khi không đủ quyền
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  redirectPath = '/login',
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Kiểm tra xem người dùng có đăng nhập hay không
  const [userRole, setUserRole] = useState<string | null>(null); // Role của người dùng
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    const role = localStorage.getItem('role'); // Lấy role từ localStorage

    if (token) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  // Nếu người dùng chưa đăng nhập, điều hướng về trang đăng nhập
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Kiểm tra nếu role không được phép truy cập vào route này
  if (userRole && allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Nếu tất cả các điều kiện đều đúng, hiển thị nội dung bên trong route
  return <Outlet />;
};

export default ProtectedRoute;
