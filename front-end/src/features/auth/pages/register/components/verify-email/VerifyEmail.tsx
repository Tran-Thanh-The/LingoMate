import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import registerApi from '@/api/registerApi';

const MySwal = withReactContent(Swal);

const VerifyEmailPage = () => {
  const { hash } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      handleEmailVerification(hash);
    }
  }, [hash]);

  const handleEmailVerification = async (token: string) => {
    setLoading(true);
    try {
      const response = await registerApi.postVerifyEmail(token);
      MySwal.fire({
        title: 'Xác nhận email thành công!',
        text: 'Bạn có thể tiếp tục đăng nhập.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      MySwal.fire({
        title: 'Xác nhận thất bại!',
        text: 'Vui lòng thử lại sau.',
        icon: 'error',
        confirmButtonText: 'Thử lại',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f4f6f8',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Xác nhận Email
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1" sx={{ mb: 5 }}>
          Chúng tôi đang xử lý yêu cầu của bạn...
        </Typography>
      )}
    </Box>
  );
};

export default VerifyEmailPage;
