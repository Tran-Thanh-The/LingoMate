import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface Props {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const Course: React.FC<Props> = ({
  key,
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <Card
      sx={{
        mx: 'auto',
        maxWidth: 345,
        borderRadius: '16px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
        bgcolor: '#F5F5F5',
      }}
    >
      <Box sx={{ borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          alt={altText}
          height="200"
          image={imageUrl}
          sx={{
            borderRadius: '16px 16px 0 0',
            cursor: 'pointer',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.3)',
            },
          }}
        />
      </Box>

      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ fontWeight: 'bold', color: '#233876' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: '#1479f3',
            '&:hover': {
              bgcolor: 'rgba(20, 121, 243, 0.1)',
            },
          }}
        >
          Buy Course
        </Button>
        <Button
          size="small"
          sx={{
            color: '#1479f3',
            '&:hover': {
              bgcolor: 'rgba(20, 121, 243, 0.1)',
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Course;
