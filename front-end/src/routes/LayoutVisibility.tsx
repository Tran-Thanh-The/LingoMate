import Footer from '@/features/public-pages/layouts/footer/Footer';
import Header from '@/features/public-pages/layouts/header/Header';
import { useLocation } from 'react-router-dom';

interface LayoutVisibilityProps {
  children: React.ReactNode;
}

const LayoutVisibility: React.FC<LayoutVisibilityProps> = ({ children }) => {
  const location = useLocation();

  const hideHeaderPaths: string[] = ['/login', '/register'];
  const hideFooterPaths: string[] = ['/login', '/register'];

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
