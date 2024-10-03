import { Box, Typography, Grid, Paper } from '@mui/material';
import { PlayArrow, Assignment, Chat } from '@mui/icons-material';

const FeatureCard = ({ icon, title, description }) => (
  <Paper
    elevation={3}
    sx={{ p: 3, height: '100%', position: 'relative', overflow: 'visible' }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: -20,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h6"
      component="h3"
      sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}
    >
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default FeatureCard;
