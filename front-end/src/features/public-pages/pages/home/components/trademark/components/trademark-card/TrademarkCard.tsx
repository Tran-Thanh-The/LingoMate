import { Box, Paper, Typography } from '@mui/material';

const FeatureCard = ({ icon, title, description }) => (
  <Paper
    elevation={6}
    sx={{ p: {xs: 3, md: 5}, height:'100%', overflow: 'visible'}}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
      <Box>{icon}</Box>
      <Typography
        variant="body1"
        component="h4"
        sx={{ mt: 4, fontWeight: '700' }}
      >
      {title}
    </Typography>
    </Box>
    <Typography variant="body2" color="#6b7280" sx={{ mt: '1.5rem', fontWeight: '500'}}>
      {description}
    </Typography>
  </Paper>
);

export default FeatureCard;
