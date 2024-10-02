import { useLocation } from 'react-router-dom';
import Header from '@/users/layouts/header/Header';
import Footer from '@/users/layouts/footer/Footer';

interface LayoutVisibilityProps {
  children: React.ReactNode;
}

const LayoutVisibility: React.FC<LayoutVisibilityProps> = ({ children }) => {
  const location = useLocation();
  console.log(location);

  const hideHeaderPaths: string[] = ['/login', ];
  const hideFooterPaths: string[] = ['/login', ];

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
