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
          p: 5,
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box py={4}>
            <Typography
              variant="caption"
              color="#00429D"
              bgcolor={'#00429D1A'}
              gutterBottom
              fontWeight={'600'}
              padding={'8px 12px'}
              borderRadius={'10px 10px 10px 0px'}
            >
              KHÓA HỌC TOEIC
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              mb={2}
              mt={4}
              color="#233876"
            >
              Luyện Thi{' '}
              <Box component="span" color="#1479f3">
                TOEIC
              </Box>{' '}
              <br></br>Hiệu Quả!
            </Typography>
            <Typography variant="body1" mb={3}>
              Với Phòng Luyện TOEIC Ảo Prep AI 4 kỹ năng đầu tiên & duy nhất tại
              Việt Nam
            </Typography>
            <Button variant="contained" color="primary" size="large">
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
                  src="	https://static-assets.prepcdn.com/content-management-system/Pham_Thuy_Chi_11adcc6a72.png?w=48&q=80"
                />
              </AvatarGroup>
              <Typography variant="body2" ml={2}>
                30.000+ học viên đã học TOEIC tại Prep
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
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
