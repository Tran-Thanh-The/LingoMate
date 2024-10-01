import { Box, Typography, Button, Paper } from '@mui/material';

const LoginCard = ({ onUsernameClick, onPhoneClick }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: {
          xs: 'transparent',
          md: 'background.paper',
        },
        width: '100%',
        borderRadius: '30px',
      }}
    >
      <Box
        component="img"
        src="https://prepedu.com/imgs/logo.svg"
        alt="Learning platform illustration"
        sx={{ maxWidth: '84px', height: 'auto' }}
      />
      <Typography
        variant="subtitle2"
        gutterBottom
        align="center"
        fontWeight={'600'}
        sx={{ mt: 4, mb: 4 }}
      >
        Tham gia ngay cùng Nền tảng học và Luyện thi thông minh
      </Typography>
      <Button
        variant="contained"
        onClick={onPhoneClick}
        color="primary"
        fullWidth
        sx={{ mb: 2 }}
      >
        Tiếp tục với số điện thoại
      </Button>
      <Button
        variant="outlined"
        onClick={onUsernameClick}
        color="primary"
        fullWidth
        sx={{ mb: 2 }}
      >
        Tiếp tục bằng username
      </Button>
      <Typography variant="caption" align="center" sx={{ mt: 3 }}>
        Bằng cách chọn Tiếp tục, bạn xác nhận việc đã đọc và đồng ý với{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          Điều khoản & Điều kiện giao dịch
        </Box>{' '}
        cùng{' '}
        <Box component="span" sx={{ color: 'secondary.main' }}>
          Chính sách bảo mật thông tin
        </Box>{' '}
        tại Prepedu.com
      </Typography>
    </Paper>
  );
};

export default LoginCard;
