import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@/components/common/loading-page/LoadingPage'; // Import component Loading đã tách riêng
import Register from '@/users/features/auth/register/Register';

const Home = lazy(() => import('@/users/pages/home/Home'));
const Login = lazy(() => import('@/users/features/auth/login/Login'));

function AppRoutes() {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (delay) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* User navigation */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* User navigation */}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
