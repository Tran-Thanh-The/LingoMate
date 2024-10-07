import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Typography, Button, Container } from '@mui/material';

const ListCourses = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        // bgcolor={'#002ea6'}
        sx={{
          borderRadius: '40px',
          p: { xs: 3, sm: 4, md: 5 },
          backgroundImage:
            'radial-gradient(73.76% 100% at 50% 0, #0047ff 0, #002ea6 100%)',
          color: '#FFFF',
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} container alignItems="center" spacing={2}>
            <Grid size={{ xs: 'auto' }}>
              <Box
                component="img"
                src="https://biz-product-page.prepedu.com/images/bee/bee_select_level.png?w=828&q=80"
                alt="Bee Icon"
                sx={{ maxWidth: 354 }}
              />
            </Grid>
            <Grid>
              <Typography variant="h5" fontWeight="bold" textAlign="center">
                Thiết kế lộ trình học dành riêng cho bạn, ngay tại đây!
              </Typography>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                p: 2,
                mt: 2,
              }}
            >
              <Typography variant="body1" textAlign="center">
                Bạn đang quan tâm tới TOEIC 2 kỹ năng hay TOEIC 4 kỹ năng nè?
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }} container spacing={2} mt={1}>
            <Grid size={{ xs: 4 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                }}
              >
                TOEIC Listening & Reading
              </Button>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                }}
              >
                TOEIC Speaking & Writing
              </Button>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
                }}
              >
                TOEIC 4 kỹ năng
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListCourses;
