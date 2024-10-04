import React from 'react';
import { Box } from '@mui/material';

interface RandomDotsProps {
  count?: number; 
  colors?: string[]; 
  sizeRange?: [number, number]; 
  positionRange?: [number, number]; 
}

const RandomDots: React.FC<RandomDotsProps> = ({
  count = 4,
  colors = ['#FFA726', '#66BB6A', '#29B6F6', '#FF7043'], 
  sizeRange = [5, 15],
  positionRange = [10, 90], 
}) => {
  const getRandomValue = (range: [number, number]) => {
    const [min, max] = range;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      {[...Array(count)].map((_, index) => {
        const size = getRandomValue(sizeRange);
        const color = colors[index % colors.length]; 
        const top = getRandomValue(positionRange);
        const bottom = getRandomValue(positionRange);
        const left = getRandomValue(positionRange);
        const right = getRandomValue(positionRange);

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
    </>
  );
};

export default RandomDots;
