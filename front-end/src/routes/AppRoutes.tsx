import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@/components/common/loading-page/LoadingPage'; // Import component Loading đã tách riêng
import Register from '@/users/features/auth/register/Register';
import ProtectedRoute from '@/core/guard/ProtectedRoute';
import Profile from '@/users/pages/profile/Profile';

const Home = lazy(() => import('@/users/pages/home/Home'));
const Login = lazy(() => import('@/users/features/auth/login/Login'));
const ListCourse = lazy(
  () => import('@/users/features/course/list-course-page/ListCourse'),
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
