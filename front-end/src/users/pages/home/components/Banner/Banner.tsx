import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import DescriptionIcon from '@mui/icons-material/Description';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LearningFlatform from './components/learning-flatform/LearningFlatform';
import * as styles from '@/users/pages/home/components/Banner/Banner.styles';

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const courses = [
    {
      title: 'IELTS',
      description: 'Lộ trình học hiệu quả',
      icon: <SchoolIcon fontSize="large" color="primary" />,
    },
    {
      title: 'TOEIC',
      description: 'Lộ trình luyện thi cấp tốc',
      icon: <TranslateIcon fontSize="large" color="primary" />,
    },
    {
      title: 'HSK',
      description: 'Lộ trình học và ôn thi hiệu quả',
      icon: <DescriptionIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Talk',
      description: 'Luyện giao tiếp Tiếng Anh dễ dàng',
      icon: <ChatBubbleOutlineIcon fontSize="large" color="primary" />,
    },
  ];

  return (
    <Box sx={styles.containerBanner}>
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={styles.textTitle}
          >
            <Box component="span" fontWeight="bold" color="text.primary">
              Nền Tảng
            </Box>
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            color="primary"
            sx={styles.textTitle}
          >
            Học & Luyện Thi
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={styles.textTitle}
          >
            <Box component="span" fontWeight="bold" color="text.primary">
              Thông Minh
            </Box>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="https://imagedelivery.net/mwNXYp7cvX8XZ2BpBdLgrQ/d9c14d23-1e94-4af8-2f81-59e4f4657000/public"
            alt="Student"
            sx={{
              width: isMobile ? '50%' : '60%',
              height: 'auto',
              maxWidth: 320,
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={styles.rowFlatForm}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={2.5} key={index}>
            <LearningFlatform
              icon={course.icon}
              title={course.title}
              description={course.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Banner;
