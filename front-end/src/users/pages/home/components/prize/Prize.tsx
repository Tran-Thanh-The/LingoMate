import { Box, Container, Typography } from '@mui/material';
import { AwardCard } from './components/award-card/AwardCard';
import Grid from '@mui/material/Grid2';

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
    <Container maxWidth="xl" sx={{ mx: 'auto', p: '0 20px',mt : 7 }}>
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
          mt="18px"
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
        spacing={7.5}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '65px', paddingBottom:'70px' }}
      >
        {awards.map((award, index) => (
          <Grid size={{xs:12, sm:6, md:4}} key={index}>
            <AwardCard {...award} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Prize;
