import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
});

const LoginFormWithUsername = ({ onBackClick }) => {
  const [showPassword, setShowPassword] = useState(false);

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
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
          Đăng nhập bằng usename
        </Typography>
      </Box>
      <Typography
        variant="caption"
        align="center"
        sx={{ mt: 1 }}
        color="#374151"
      >
        Hình thức này chỉ áp dụng với các học viên được cung cấp username <br />{' '}
        khác với số điện thoại.
      </Typography>
      <Typography
        variant="caption"
        align="center"
        sx={{ mb: 4 }}
        color="#374151"
      >
        Trong trường hợp bạn đã dùng số điện thoại để đăng ký <br /> vui lòng{' '}
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
          Username <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Nhập username"
          margin="normal"
          variant="outlined"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
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
      </Box>
    </Paper>
  );
};

export default LoginFormWithUsername;
