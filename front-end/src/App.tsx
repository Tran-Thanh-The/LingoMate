import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import LayoutVisibility from './routes/LayoutVisibility';

function App() {
  return (
    <BrowserRouter>
      <LayoutVisibility>
        <AppRoutes />
      </LayoutVisibility>
    </BrowserRouter>
  );
}

export default App;
