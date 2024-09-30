import { useLocation } from 'react-router-dom';
import Header from '@/users/layouts/header/Header';

const HeaderVisibility = () => {
  const location = useLocation();
  console.log(location);

  const hideHeaderPaths: string[] = ['/login'];

  return !hideHeaderPaths.includes(location.pathname) ? <Header /> : null;
};

export default HeaderVisibility;
