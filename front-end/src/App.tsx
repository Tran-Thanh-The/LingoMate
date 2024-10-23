import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import LayoutVisibility from './routes/LayoutVisibility';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <LayoutVisibility>
        <AppRoutes />
        <ToastContainer />
      </LayoutVisibility>
    </BrowserRouter>
  );
}

export default App;
