import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import HeaderVisibility from '@/routes/HeaderVisibility';
import CustomButton from '@/components/CustomButton/CustomButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomInputFieldDemo from '@/components/CustomInput/CustomInputAndSelectDemo';
function App() {
  return (
    <BrowserRouter>
      <HeaderVisibility />
      <AppRoutes />

      {/* Demo */}
      <CustomButton
        variant="contained"
        color="primary"
        size="large"
        onClick={() => console.log('Button clicked')}
        hasError={false}
        disabled={false}
        isLoading={false}
        loadingText="Đang xử lý..."
      >
        Click me
      </CustomButton>
      <CustomButton variant='contained' color='info' size='small'>Click me</CustomButton>
      <CustomButton variant='outlined' color='secondary' size='medium'>Click me</CustomButton>
      <CustomButton variant='contained' color='secondary' size='large' startIcon={<ArrowBackIcon/>}>Click me</CustomButton>
      <CustomButton variant='contained' color='customColor' size='medium'>Click me</CustomButton>
      <CustomInputFieldDemo />
      
    </BrowserRouter>
  );
}

export default App;
