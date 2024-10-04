import { Assignment, Chat, PlayArrow } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FeatureCard from './components/trademark-card/TrademarkCard';
import slideImage from '@/assets/trademark-image/slide.svg';
import check_noteImage from '@/assets/trademark-image/check_note.svg';
import copyImage from '@/assets/trademark-image/copy.svg'
const Trademark = () => {
  const features = [
    {
      icon: <Box
      component="img"
      sx={{
        height: 'auto',
        width: 80,
      }}
      alt="slide_icon"
      src={slideImage}
    />,
      title: 'Video bài giảng chất lượng cao',
      description:
        'Bởi đội ngũ giáo viên xuất sắc và tận tâm IELTS 8.0 - 8.5, cựu du học sinh, tốt nghiệp tại các trường Đại học danh tiếng',
    },
    {
      icon: <Box
      component="img"
      sx={{
        height: 'auto',
        width: 80,
      }}
      alt="check_note_icon"
      src={check_noteImage}
    />,
      title: 'Đầy đủ bài mẫu, bài tập, mini test, progress test như thi thật',
      description:
        'Bộ tài liệu đã giúp 600 học viên đã đạt IELTS 7.0-8.5 tính tới tháng 5/2021',
    },
    {
      icon: <Box
      component="img"
      sx={{
        height: 'auto',
        width: 80,
      }}
      alt="copy_icon"
      src={copyImage}
    />,
      title: 'Bài Speaking-Writing được chấm chất lượng hơn cả offline',
      description:
        'Giáo viên chấm bài chính xác từng chữ với Writing, từng giây với Speaking, kết hợp bài kiểm tra phát âm bằng AI',
    },
  ];

  return (
    <Container maxWidth={"lg"} sx={{p: '2.5rem', pb:'8rem'}}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Những gì chỉ có tại{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Prep.vn
          </Box>
        </Typography>
        <Grid container spacing={5}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
        {[0, 1, 2, 3].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: ['#FFA726', '#66BB6A', '#29B6F6', '#FFA726'][
                index % 4
              ],
              top: [20, 'auto', 'auto', 20][index],
              bottom: ['auto', 20, 20, 'auto'][index],
              left: [20, 20, 'auto', 'auto'][index],
              right: ['auto', 'auto', 20, 20][index],
            }}
          />
        ))}
    </Container>
  );
};

export default Trademark;
