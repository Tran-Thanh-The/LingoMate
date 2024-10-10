import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { blue } from '@mui/material/colors';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store'; // Đường dẫn tới RootState của bạn

interface ProfileFormData {
  fullName: string;
  email: string;
  address: string;
  dob: Dayjs | null;
}

const Profile: React.FC = () => {
  // Lấy thông tin người dùng từ Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      fullName: user?.fullName || '', // Lấy tên từ user
      email: user?.email || '', // Lấy email từ user
      address: user?.address || '', // Lấy địa chỉ từ user
      dob: user?.dob ? dayjs(user.dob) : null, // Lấy ngày sinh từ user
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    const formattedData = {
      ...data,
      dob: data.dob ? data.dob.toDate() : null,
    };
    console.log(formattedData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 5 }}>
      <Grid container justifyContent="center" spacing={2} sx={{ mb: 3 }}>
        <Grid item>
          <Button variant="text" sx={{ fontWeight: 'bold' }}>
            Tài Khoản
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" sx={{ fontWeight: 'bold' }}>
            Mật khẩu
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" alignItems="center" sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: blue[500], width: 80, height: 80 }}>
          <CameraAltIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
          TÀI KHOẢN
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Họ tên"
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Địa chỉ"
                  variant="outlined"
                  fullWidth
                  required
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ color: '#374151', fontWeight: '500', mt: 4 }}
            >
              Ngày sinh <span style={{ color: 'red' }}>*</span>
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
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Cập nhật
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Profile;
