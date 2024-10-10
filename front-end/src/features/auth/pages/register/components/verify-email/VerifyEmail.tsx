import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import registerApi from '@/api/registerApi';

const MySwal = withReactContent(Swal);

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const hash = searchParams.get('hash'); // Lấy giá trị 'hash' từ query params
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log('hash: ', hash); // Kiểm tra xem hash được lấy đúng không

  useEffect(() => {
    if (hash) {
      handleEmailVerification(hash); // Nếu hash tồn tại, thực hiện xác minh
    }
  }, [hash]);

  // Hàm xử lý xác minh email
  const handleEmailVerification = async (hash: string) => {
    setLoading(true); // Hiển thị loading trong khi gọi API
    try {
      console.log('Sending verification request with hash: ', hash);

      // Gọi API xác nhận email với body có format { hash }
      const response = await registerApi.postVerifyEmail(hash);

      console.log('API response: ', response); // Log kết quả phản hồi từ API

      // Hiển thị thông báo thành công khi xác minh email thành công
      MySwal.fire({
        title: 'Xác nhận email thành công!',
        text: 'Bạn có thể tiếp tục đăng nhập.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/login'); // Điều hướng đến trang đăng nhập sau khi xác minh thành công
      });
    } catch (error: any) {
      console.error('API Error: ', error); // Log lỗi từ API để kiểm tra chi tiết

      // Hiển thị thông báo thất bại khi xác minh không thành công
      MySwal.fire({
        title: 'Xác nhận thất bại!',
        text: 'Vui lòng thử lại sau.',
        icon: 'error',
        confirmButtonText: 'Thử lại',
      });
    } finally {
      setLoading(false); // Tắt loading sau khi xử lý xong
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
