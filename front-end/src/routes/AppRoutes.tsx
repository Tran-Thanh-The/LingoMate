import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@/components/common/loading-page/LoadingPage'; // Import component Loading đã tách riêng
import ProtectedRoute from '@/core/guard/ProtectedRoute';
import Register from '@/features/auth/pages/register/Register';
import Profile from '@/features/dashboard/pages/profile/Profile';

// const Home = lazy(() => import('@/users/pages/home/Home'));
const Home = lazy(() => import('@/features/public-pages/pages/home/Home'));
// const Login = lazy(() => import('@/users/features/auth/login/Login'));
const Login = lazy(() => import('@/features/auth/pages/login/Login'));
const ListCourse = lazy(
  () =>
    import(
      '@/features/public-pages/pages/course/components/list-course-page/ListCourse'
    ),
);
const VerifyEmail = lazy(
  () =>
    import(
      '@/features/auth/pages/register/components/verify-email/VerifyEmail'
    ),
);

function AppRoutes() {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (delay) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ListCourse />} />

        {/* User navigation */}
        <Route element={<ProtectedRoute allowedRoles={['USER']} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* User navigation */}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
