import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email?: string;
  password?: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Password phải có ít nhất 6 ký tự'),
});

const LoginFormWithUsername = ({
  onBackClick,
}: {
  onBackClick: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const handleRouterRegister = () => {
    navigate('/register');
  };

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
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <ArrowBackIosIcon
          onClick={onBackClick}
          sx={{ position: 'absolute', left: '4', cursor: 'pointer' }}
        />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Đăng nhập bằng username
        </Typography>
      </Box>
      <Typography
        variant="caption"
        align="center"
        sx={{ mt: 1 }}
        color="#374151"
      >
        Hình thức này chỉ áp dụng với các học viên được cung cấp <br></br> email
        khác với số điện thoại.
      </Typography>
      <Typography
        variant="caption"
        align="center"
        sx={{ mb: 4 }}
        color="#374151"
      >
        Trong trường hợp bạn đã dùng số điện thoại để đăng ký, <br></br> vui
        lòng{' '}
        <Box
          component="span"
          sx={{
            color: 'primary.main',
            fontWeight: '600',
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -2,
              width: '100%',
              height: '2px',
              backgroundColor: 'primary.main',
            },
          }}
        >
          Sử dụng số điện thoại
        </Box>
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '100%' }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#374151',
            fontWeight: '500',
          }}
        >
          Email <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Nhập email"
          margin="normal"
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            sx: {
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
            },
          }}
        />

        <Typography
          variant="body2"
          sx={{
            color: '#374151',
            fontWeight: '500',
            mt: 2,
          }}
        >
          Mật khẩu <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Nhập mật khẩu"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            sx: {
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={!isValid}
        >
          Đăng nhập
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleRouterRegister}
        >
          Đăng ký
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginFormWithUsername;
