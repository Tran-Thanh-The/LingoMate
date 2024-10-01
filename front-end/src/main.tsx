import App from '@/App';
import theme from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <CssVarsProvider theme= {theme}>
      <CssBaseline/>
      <App />
  </CssVarsProvider>
);
