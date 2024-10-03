import { Box, Typography } from '@mui/material';
import React from 'react';
import * as styles from './learningFlatform.styles';

interface LearningFlatformProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const LearningFlatform: React.FC<LearningFlatformProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box sx={styles.boxFlatForm}>
      <Box sx={styles.boxIcon}>
        <Box sx={styles.boxIconChild}>{icon}</Box>
      </Box>
      <Box sx={styles.boxContent}>
        <Typography variant="h5" fontWeight={'600'} gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default LearningFlatform;
