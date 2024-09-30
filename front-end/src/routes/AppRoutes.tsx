import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/users/pages/home/Home'));
const Login = lazy(() => import('@/users/features/auth/login/Login'));

function AppRoutes() {
  return (
    // custom thêm phần loading cho các trang
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Điều hướng user */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Điều hướng user */}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
