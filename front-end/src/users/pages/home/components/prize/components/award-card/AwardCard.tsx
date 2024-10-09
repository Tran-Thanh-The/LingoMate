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
    <Box sx={{
        height: 88,
        width: 88,
        objectFit: 'contain',
      }}>

    <Box
      component="img"
      src={image}
      sx={{
        height: 44,
        width: '100%',
        objectFit: 'contain',
      }}
    />
      </Box>
    <Typography variant="caption" fontWeight={400} color="#4b5563" sx={{ mt: 2, lineHeight:'1.25rem' }}>
      {description}
    </Typography>
  </Box>
);
