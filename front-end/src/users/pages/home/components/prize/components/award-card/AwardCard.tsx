import React from 'react';
import { Typography, Box } from '@mui/material';

export const AwardCard = ({ image, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <Box
      component="img"
      src={image}
      sx={{
        height: 88,
        width: 88,
        objectFit: 'contain',
        mb: 2,
      }}
    />
    <Typography variant="caption" color="text.secondary">
      {description}
    </Typography>
  </Box>
);
