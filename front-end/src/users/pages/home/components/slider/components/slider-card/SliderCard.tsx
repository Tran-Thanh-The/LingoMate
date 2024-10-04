import { Box, Typography } from '@mui/material';

const SliderCard = ({ img, name, description }) => (
  <Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Box>{img}</Box>
      <Typography
        variant="body1"
        component="h3"
        sx={{ mt: '10px', fontWeight: '700' }}
      >
      {name}
    </Typography>
    <Typography variant="body2" color="#9ca3af" sx={{ fontWeight: '500'}}>
      {description}
    </Typography>
    </Box>
  </Box>
);

export default SliderCard;
