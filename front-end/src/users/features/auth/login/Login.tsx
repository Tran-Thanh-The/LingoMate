import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import customTheme from '@/theme';
import LoginCard from './components/login-card/LoginCard';
import LoginFormWithUsername from './components/login-form-with-username/LoginFormWithUsername';
import LoginFormWithPhoneNumber from './components/login-form-with-phonenumber/LoginFormWithPhoneNumber';

const Login = () => {
  const [currentForm, setCurrentForm] = useState<
    'loginCard' | 'username' | 'phone'
  >('loginCard');

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            maxWidth: 'xl',
            width: '100%',
            minHeight: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: {
              xs: 'none',
              md: 'rgb(229 239 255)',
            },
            borderRadius: {
              xs: '0px',
              md: '30px',
            },
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  component="img"
                  src="https://prepedu.com/imgs/login/decor.png"
                  alt="Learning platform illustration"
                  sx={{ maxWidth: '343px', height: 'auto' }}
                />
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  color="primary"
                  sx={{
                    mt: 2,
                  }}
                >
                  Miễn Phí Kiểm Tra Trình Độ
                </Typography>
                <Typography variant="subtitle2" color="#4b5563">
                  Kiểm tra trình độ hoàn toàn miễn phí. Chỉ cần 1 tài khoản duy
                  nhất, bạn có thể thực hiện các bài Kiểm Tra Đầu Vào để xác
                  định trình độ nhanh chóng.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ paddingLeft: 0, paddingRight: 0 }}>
              {currentForm === 'loginCard' && (
                <LoginCard
                  onUsernameClick={() => setCurrentForm('username')}
                  onPhoneClick={() => setCurrentForm('phone')}
                />
              )}
              {currentForm === 'username' && (
                <LoginFormWithUsername
                  onBackClick={() => setCurrentForm('loginCard')}
                />
              )}
              {currentForm === 'phone' && (
                <LoginFormWithPhoneNumber
                  onBackClick={() => setCurrentForm('loginCard')}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
