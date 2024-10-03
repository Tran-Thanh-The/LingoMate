import { Box, Typography, Grid } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';
import { AwardCard } from './components/award-card/AwardCard';

const Prize = () => {
  const awards = [
    {
      image: 'https://prepedu.com/_ipx/_/imgs/home/holon-award.svg',
      description:
        'Top 50 đơn vị Giáo dục Công Nghệ tiềm năng nhất Đông Nam Á - BXH Holon IQ.',
    },
    {
      image: 'https://prepedu.com/_ipx/_/imgs/home/sei.svg',
      description:
        'Giải Ảnh hưởng giáo dục của năm - SEI Awards 2023 (chủ trì Bảo trợ đồng hành bởi Bộ Giáo dục và Đào tạo).',
    },
    {
      image: 'https://prepedu.com/_ipx/_/imgs/home/sei.svg',
      description:
        'Giải Sáng kiến giáo dục của năm - SEI Awards 2023 (chủ trì Bảo trợ đồng hành bởi Bộ Giáo dục và Đào tạo)',
    },
  ];

  return (
    <Box sx={{ mx: 'auto', p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Box
          component="img"
          src="https://prepedu.com/imgs/home/award.svg"
          alt="Student"
          sx={{
            height: 'auto',
            maxWidth: 128,
          }}
        />
        <Typography
          variant="h5"
          fontWeight={'bold'}
          component="h3"
          align="center"
        >
          <span
            style={{
              color: '#1A56DB',
              fontWeight: 'bold',
            }}
          >
            Giải thưởng
          </span>{' '}
          đạt được
        </Typography>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {awards.map((award, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <AwardCard {...award} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Prize;
