import Footer from '@/features/public-pages/layouts/footer/Footer';
import Header from '@/features/public-pages/layouts/header/Header';
import { useLocation } from 'react-router-dom';

interface LayoutVisibilityProps {
  children: React.ReactNode;
}

const LayoutVisibility: React.FC<LayoutVisibilityProps> = ({ children }) => {
  const location = useLocation();

  const hideHeaderPaths: string[] = ['/login', '/register', '/verify-email'];
  const hideFooterPaths: string[] = ['/login', '/register', '/verify-email'];

  const showHeader = !hideHeaderPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default LayoutVisibility;
