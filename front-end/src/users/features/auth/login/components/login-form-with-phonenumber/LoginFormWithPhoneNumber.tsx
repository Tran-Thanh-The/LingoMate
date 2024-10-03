import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface LoginFormPhoneData {
  phoneNumber?: string;
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(/^[0-9]{10}$/, 'Số điện thoại phải có đúng 10 chữ số'),
});

const LoginFormWithPhoneNumber = ({
  onBackClick,
}: {
  onBackClick: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormPhoneData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormPhoneData) => {
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
          Tiếp tục bằng số điện thoại
        </Typography>
      </Box>

      <Typography
        variant="caption"
        align="center"
        sx={{ mt: 1 }}
        color="#374151"
      >
        Bạn hãy nhập số điện thoại đang liên kết với tài khoản Prep.
        <br />
        Trường hợp số điện thoại của bạn chưa liên kết với bất kỳ tài khoản nào,
        Prep sẽ tạo tài khoản mới bằng số điện thoại này giúp bạn.
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
            mt: 4,
          }}
        >
          Số điện thoại <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Nhập số điện thoại"
          margin="normal"
          variant="outlined"
          {...register('phoneNumber')}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
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
          Tiếp tục
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginFormWithPhoneNumber;
