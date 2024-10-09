import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

const Banner = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={4}
        alignItems="center"
        bgcolor={'rgb(225 239 254)'}
        sx={{
          borderRadius: '40px',
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box py={{ xs: 2, md: 4 }}>
            <Typography
              variant="caption"
              color="#00429D"
              bgcolor={'#00429D1A'}
              gutterBottom
              fontWeight={'600'}
              padding={{ xs: '6px 10px', md: '8px 12px' }}
              borderRadius={'10px 10px 10px 0px'}
            >
              KHÓA HỌC TOEIC
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              mb={2}
              mt={4}
              color="#233876"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              }}
            >
              Luyện Thi{' '}
              <Box component="span" color="#1479f3">
                TOEIC
              </Box>{' '}
              <br />
              Hiệu Quả!
            </Typography>
            <Typography
              variant="body2"
              mb={3}
              color="#233867"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              }}
            >
              Với Phòng Luyện TOEIC Ảo Prep AI 4 kỹ năng đầu tiên & duy nhất tại
              Việt Nam
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: 'primary.main',
                width: { xs: '100%', md: '50%' },
                fontSize: { xs: '0.8rem', sm: '1rem' },
              }}
              size="large"
            >
              Thiết kế lộ trình học
            </Button>
            <Box mt={3} display="flex" alignItems="center">
              <AvatarGroup max={3}>
                <Avatar
                  alt="Student 1"
                  src="https://static-assets.prepcdn.com/content-management-system/Phan_Tran_My_Linh_ca26465fdf.png?w=96&q=80 2x"
                />
                <Avatar
                  alt="Student 2"
                  src="https://static-assets.prepcdn.com/content-management-system/Nguyen_Phan_Kien_Trinh_b2a578de1e.png?w=96&q=80 2x"
                />
                <Avatar
                  alt="Student 3"
                  src="https://static-assets.prepcdn.com/content-management-system/Pham_Thuy_Chi_11adcc6a72.png?w=48&q=80"
                />
              </AvatarGroup>
              <Typography
                variant="caption"
                ml={2}
                color="#233876"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                }}
              >
                <Box component="span" fontWeight={'800'}>
                  30.000+
                </Box>{' '}
                học viên <br /> đã học TOEIC tại Prep
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://cms-static-assets.prepcdn.com/uploads/Frame_1597886190_4c0ba9529c.png?w=828&q=80"
            alt="TOEIC Students"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              maxWidth: { xs: '100%', sm: '80%', md: '100%' },
              mx: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Banner;
