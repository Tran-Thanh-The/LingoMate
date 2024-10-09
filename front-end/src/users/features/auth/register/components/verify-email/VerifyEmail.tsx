import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

interface VerifyOTPProps {
  onBackClick: () => void;
  email: string;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({ onBackClick, email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [counter, setCounter] = useState(120);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const handleResend = () => {
    setCounter(60);
    setOtp(new Array(6).fill(''));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Backspace' && !target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const isOtpValid = otp.join('') === '123456';

    if (isOtpValid) {
      navigate('/login');
    } else {
      alert('Invalid OTP');
    }
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
          Xác thực OTP
        </Typography>
      </Box>

      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 1, color: '#6B7280' }}
      >
        Mã OTP đã được Prep gửi đến email
        <Typography variant="body2" sx={{ color: '#374151' }}>
          {email}
        </Typography>{' '}
        (Vui lòng nhập mã xác nhận bên dưới)
      </Typography>

      <Box
        sx={{ display: 'flex', justifyContent: 'center', gap: '10px', mt: 3 }}
      >
        {otp.map((value, index) => (
          <TextField
            key={index}
            variant="outlined"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center',
                fontSize: '24px',
                padding: '10px',
                width: '45px',
                height: '45px',
              },
            }}
            inputRef={(ref) => (inputRefs.current[index] = ref)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
              },
            }}
          />
        ))}
      </Box>

      <Button
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit} // Trigger navigation on click
        sx={{ mt: 3, borderRadius: '8px', height: '45px' }}
      >
        Xác Nhận
      </Button>

      <Typography
        variant="caption"
        sx={{ mt: 2, color: '#6B7280', textAlign: 'center' }}
      >
        Bạn đã sử dụng 1/5 lần gửi mã.{' '}
        {counter === 0 ? (
          <Button onClick={handleResend} sx={{ padding: 0 }}>
            Gửi lại mã
          </Button>
        ) : (
          `Gửi lại mã (${counter}s)`
        )}
      </Typography>
    </Paper>
  );
};

export default VerifyOTP;
