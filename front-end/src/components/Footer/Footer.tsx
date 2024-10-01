import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Box, Container, Typography, Link } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Mail from '@mui/icons-material/Mail';
import appStore from '@/assets/app-store-n.svg';
import googlePlay from '@/assets/gg-play-n.svg';
import prepLogo from '@/assets/logo.svg';
import bct from '@/assets/bct.png';
import sectigo from '@/assets/sectigo.png';
import badge from '@/assets/_dmca_premi_badge_4.png';
import Divider from '@mui/material/Divider';

const StyledBox = styled(Box)(({ theme }) => ({
  color: '#23242d',
}));

export default function Footer() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ padding: '2.5rem 0', backgroundColor: '#f9fafb', color: '#6b7280' }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={7} justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 10, md: 6, lg: 3 }}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            <Box
              component="img"
              sx={{ height: 'auto', width: 130, marginBottom: '8px' }}
              alt="Logo"
              src={prepLogo}
            />
            <Typography
              variant="body2"
              color="#000000"
              textTransform={'uppercase'}
              fontWeight={700}
            >
              Công ty cổ phần công nghệ Lingomate
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Mã số doanh nghiệp:</StyledBox> 0920817374
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Địa chỉ liên hệ:</StyledBox> Tầng 5 Tòa
              Vinaconex-34 Đ.Láng, Q.Đống Đa, TP.Hà Nội.
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Địa chỉ kinh doanh:</StyledBox> NO.23-C1 KĐT
              Nam Trung Yên, P.Trung Hòa, Q.Cầu Giấy, TP.Hà Nội.
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Trụ sở:</StyledBox> SN 25, ngách 235/37,
              Đ.Hoàng Quốc Việt, P.Cổ Nhuế 1, Q.Bắc Từ Liêm, TP.Hà Nội.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 10, md: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography
                variant="caption"
                fontWeight={600}
                textTransform={'uppercase'}
                color="#05060f"
              >
                Về Lingomate
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Giới thiệu
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Tuyển dụng
                </Link>
              </Typography>
              <Typography
                variant="caption"
                fontWeight={600}
                textTransform={'uppercase'}
                color="#05060f"
              >
                Kết nối với chúng tôi
              </Typography>
              <Typography variant="caption">
                <Link href="#" mr={'0.5rem'} color="inherit" underline="none">
                  <FacebookRoundedIcon sx={{ width: '24px', height: '24px' }} />
                </Link>
                <Link href="#" color="inherit" underline="none">
                  <Mail sx={{ width: '24px', height: '24px' }} />
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography
                variant="caption"
                fontWeight={600}
                textTransform={'uppercase'}
                color="#05060f"
              >
                Thông tin
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Điều kiện và điều khoản giao dịch
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Chính sách thanh toán
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Chính sách bảo vệ thông tin
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Cam kết đầu ra Ielts
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Cam kết đầu ra Toeic
                </Link>
              </Typography>
              <Typography variant="caption">
                <Link href="#" color="inherit" underline="none">
                  Chính sách sử dụng AI
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 10, md: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography
                variant="caption"
                fontWeight={600}
                textTransform={'uppercase'}
                color="#05060f"
              >
                Tải ứng dụng trên điện thoại
              </Typography>
              <Link href="#" underline="none" width={160}>
                <Box
                  component="img"
                  sx={{ height: 'auto', width: 160 }}
                  alt="appStore"
                  src={appStore}
                />
              </Link>
              <Link href="#" underline="none" width={160}>
                <Box
                  component="img"
                  sx={{ height: 'auto', width: 160 }}
                  alt="googlePlay"
                  src={googlePlay}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: '1.5rem', marginBottom: '1.5rem' }} />
        <Grid container spacing={7} justifyContent="center">
          <Grid
            size={{ xs: 12, sm: 10, md: 6, lg: 6 }}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            <Typography
              variant="body2"
              color="#000000"
              textTransform={'uppercase'}
              fontWeight={700}
            >
              Trung tâm đào tạo ngoại ngữ LINGOMATE
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">
                Phòng luyện ảo - trải nghiệm thực tế - công nghệ hàng đầu
              </StyledBox>
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Hotline:</StyledBox> 0931 42 8899
            </Typography>
            <Typography variant="caption">
              <StyledBox as="span">Trụ sở:</StyledBox> SN 25, ngách 235/37,
              Đ.Hoàng Quốc Việt, P.Cổ Nhuế 1, Q.Bắc Từ Liêm, TP.Hà Nội.
            </Typography>
            <Typography variant="caption">
              Giấy chứng nhận hoạt động đào tạo, bồi dưỡng số 1309/QĐ-SGDĐT ngày
              31 tháng 07 năm 2023 do Sở Giáo dục và Đào tạo Hà Nội cấp
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 10, md: 6, lg: 6 }}>
            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform={'uppercase'}
                color="#05060f"
              >
                Chứng nhận bởi
              </Typography>
              <Box
                sx={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}
                mt={'20px'}
              >
                <Link
                  href="#"
                  underline="none"
                  display={'flex'}
                  alignItems={'center'}
                  width={176}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 'auto',
                      width: '100%',
                      maxWidth: 176,
                      flexShrink: 1,
                    }}
                    alt="bct"
                    src={bct}
                  />
                </Link>
                <Link
                  href="#"
                  underline="none"
                  display={'flex'}
                  alignItems={'center'}
                  width={176}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 'auto',
                      width: '100%',
                      maxWidth: 176,
                      flexShrink: 1,
                    }}
                    alt="sectigo"
                    src={sectigo}
                  />
                </Link>
                <Link
                  href="#"
                  underline="none"
                  display={'flex'}
                  alignItems={'center'}
                  width={224}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 'auto',
                      width: '100%',
                      maxWidth: 224,
                      flexShrink: 1,
                    }}
                    alt="badge"
                    src={badge}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
