import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import HeaderVisibility from './routes/HeaderVisibility';

function App() {
  return (
    <BrowserRouter>
      <HeaderVisibility />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
