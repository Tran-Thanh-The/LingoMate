import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import HeaderVisibility from './routes/HeaderVisibility';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <HeaderVisibility />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
