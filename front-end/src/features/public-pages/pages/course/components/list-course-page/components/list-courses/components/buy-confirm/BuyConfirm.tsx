import React from 'react';
import { Box, Typography, Button, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { CourseData } from '@/types/interface/CourseData';

interface Props {
  open: boolean;
  onClose: () => void;
  cart: CourseData;
  recommended?: boolean;
}

const BuyConfirm: React.FC<Props> = ({
  open,
  onClose,
  cart,
  recommended = false,
}) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 8, sm: 16 },
        right: { xs: 8, sm: 16 },
        zIndex: 9999,
        width: {
          xs: '280px',
          sm: '320px',
          md: '400px',
          lg: '450px',
        },
        bgcolor: recommended ? '#0046FF' : '#F1F6FF',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: {
          xs: '12px',
          sm: '16px',
          md: '20px',
        },
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            {recommended ? (
              <ShoppingCartIcon
                sx={{
                  color: '#FFD700',
                  fontSize: { xs: '20px', sm: '24px', md: '28px' },
                }}
              />
            ) : (
              <StarIcon
                sx={{
                  color: '#FFB800',
                  fontSize: { xs: '20px', sm: '24px', md: '28px' },
                }}
              />
            )}
            <Typography
              variant="h6"
              sx={{
                color: recommended ? '#FFFFFF' : '#233876',
                fontWeight: 'bold',
                fontSize: {
                  xs: '1rem',
                  sm: '1.2rem',
                  md: '1.4rem',
                },
              }}
            >
              {cart.title}
            </Typography>
          </Stack>

          <IconButton
            onClick={onClose}
            sx={{
              color: recommended ? '#FFFFFF' : '#233876',
              bgcolor: recommended ? '#0046FF' : '#F1F6FF',
              position: 'absolute',
              boxShadow: '0px 4px 10px rgba(1, 0, 0, 0.1)',
              top: -50,
              right: 0,
              ':hover': {
                bgcolor: '#233876',
                color: '#FFFF',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Typography
          variant="h6"
          sx={{
            color: recommended ? '#FFFFFF' : '#0071F9',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
              md: '1.4rem',
            },
          }}
        >
          {/* {course.title} VND */}
          1.200.000 VND
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: recommended ? '#FFFFFF' : '#E1ECFF',
            color: recommended ? '#233876' : '#233876',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: {
              xs: '8px 16px',
              sm: '10px 20px',
              md: '12px 24px',
            },
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            ':hover': {
              backgroundColor: recommended ? '#E1ECFF' : '#D0E2FF',
            },
          }}
        >
          Đăng ký
        </Button>
      </Stack>
    </Box>
  );
};

export default BuyConfirm;
