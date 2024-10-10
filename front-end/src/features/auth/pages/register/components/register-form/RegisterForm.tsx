import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/utils/formatter/format-date';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import registerApi from '@/api/registerApi';
import { RegisterFormData } from '@/types/interface/RegisterFormData';
import { RegisterRequestData } from '@/types/interface/RegisterRequestData';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Họ và tên là bắt buộc')
    .matches(
      /^[a-zA-ZÀ-ỹ\s]+$/,
      'Họ và tên chỉ chứa ký tự chữ và khoảng trắng',
    ),
  dob: yup
    .mixed<Dayjs | null>()
    .required('Ngày sinh là bắt buộc')
    .test(
      'is-date',
      'Ngày sinh không hợp lệ',
      (value) => value instanceof Date || value instanceof Object,
    ),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa')
    .matches(/[a-z]/, 'Mật khẩu phải chứa ít nhất một chữ cái viết thường')
    .matches(/\d/, 'Mật khẩu phải chứa ít nhất một chữ số'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
});

const MySwal = withReactContent(Swal);

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      dob: null,
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setError(null);
    const formattedData: RegisterRequestData = {
      ...data,
      dob: data.dob ? formatDate(data.dob) : '',
    };

    console.log(formattedData);

    try {
      const response = await registerApi.postRegister(formattedData);
      MySwal.fire({
        title: 'Đăng ký thành công!',
        text: `Vui lòng kiểm tra email ${data.email || ''} để xác nhận OTP.`,
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setSuccess(true);
    } catch (error) {
      console.error('Registration failed:', error);
      MySwal.fire({
        title: 'Đăng ký thất bại!',
        text: 'Có lỗi xảy ra, vui lòng thử lại sau.',
        icon: 'error',
        confirmButtonText: 'Thử lại',
      });
      setError('Đăng ký thất bại, vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  const handleRouteLogin = () => {
    // navigate('/login');
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
          sx={{ position: 'absolute', left: '4', cursor: 'pointer' }}
          onClick={handleRouteLogin}
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

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '100%' }}
      >
        <Typography
          variant="body2"
          sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
        >
          Full name <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Nhập họ và tên"
          margin="normal"
          variant="outlined"
          {...register('fullName')}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          InputProps={{
            sx: {
              borderRadius: '8px',
              backgroundColor: '#f9fafb',
            },
          }}
        />

        <Typography
          variant="body2"
          sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
        >
          Date of birth <span style={{ color: 'red' }}>*</span>
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Ngày sinh"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    margin: 'normal',
                    variant: 'outlined',
                    error: !!errors.dob,
                    helperText: errors.dob?.message,
                    InputProps: {
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: '#f9fafb',
                      },
                    },
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>

        <Typography
          variant="body2"
          sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
        >
          Email <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="email"
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
          sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
        >
          Password <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="password"
          margin="normal"
          type="password"
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

        <Typography
          variant="body2"
          sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
        >
          Confirm password <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="confirm password"
          margin="normal"
          type="password"
          variant="outlined"
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
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
          disabled={!isValid || loading}
          sx={{ mt: 4, borderRadius: '8px' }}
        >
          Đăng ký
        </Button>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
