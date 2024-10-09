import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface RandomDotsProps {
  colors?: string[]; 
  sizeRange?: [number, number]; 
  positionRange?: [number, number]; 
}

const RandomDots: React.FC<RandomDotsProps> = ({
  colors = ['#FFA726', '#66BB6A', '#29B6F6', '#FF7043'], 
  sizeRange = [5, 15],
  positionRange = [0, 100],
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const count = isSmallScreen ? 4 : 6;

  const getRandomValue = (range: [number, number]) => {
    const [min, max] = range;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden',pointerEvents: 'none' }}>
      {[...Array(count)].map((_, index) => {
        const size = getRandomValue(sizeRange);
        const color = colors[index % colors.length]; 
        const top = getRandomValue(positionRange);
        const left = getRandomValue(positionRange);

        return (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: color,
              top: `${top}%`,
              left: `${left}%`, 
            }}
          />
        );
      })}
    </Box>
  );
};

export default RandomDots;
