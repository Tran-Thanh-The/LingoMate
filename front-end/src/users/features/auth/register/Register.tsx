import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  ThemeProvider,
} from '@mui/material';
import customTheme from '@/theme';
import RegisterForm from './components/register-form/RegisterForm';

const Register = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          minHeight: '130vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            width: '100%',
            minHeight: {
              md: '125vh',
            },
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
              <RegisterForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Register;
