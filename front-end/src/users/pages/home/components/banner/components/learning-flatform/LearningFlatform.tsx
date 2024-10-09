import { Box, Typography } from '@mui/material';
import React from 'react';
import * as styles from '@/users/pages/home/components/banner/components/learning-flatform/LearningFlatform.styles';
interface LearningFlatformProps {
  bgColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const LearningFlatform: React.FC<LearningFlatformProps> = ({
  bgColor,
  icon,
  title,
  description,
}) => {
  return (
    <Box sx={styles.boxFlatForm}>
      <Box
        sx={{
          ...styles.boxIcon,
          backgroundColor: bgColor,
          borderRadius: '50%',
        }}
      >
        <Box sx={styles.boxIconChild}>{icon}</Box>
      </Box>
      <Box sx={styles.boxContent}>
        <Typography
          variant="subtitle1"
          mb={0}
          gutterBottom
          sx={{
            marginTop: { xs: 2, md: 4 },
            textTransform: 'uppercase',
            color: '#000000',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          color="#6b7280"
          sx={{ marginTop: { xs: 0, md: 2 } }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default LearningFlatform;
