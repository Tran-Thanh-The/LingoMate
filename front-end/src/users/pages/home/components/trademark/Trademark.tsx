import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { PlayArrow, Assignment, Chat } from '@mui/icons-material';
import FeatureCard from './components/trademark-card/TrademarkCard';

const Trademark = () => {
  const features = [
    {
      icon: <PlayArrow />,
      title: 'Video bài giảng chất lượng cao',
      description:
        'Bởi đội ngũ giáo viên xuất sắc và tận tâm IELTS 8.0 - 8.5, cựu du học sinh, tốt nghiệp tại các trường Đại học danh tiếng',
      iconBgColor: '#E3F2FD',
    },
    {
      icon: <Assignment />,
      title: 'Đầy đủ bài mẫu, bài tập, mini test, progress test như thi thật',
      description:
        'Bộ tài liệu đã giúp 600 học viên đã đạt IELTS 7.0-8.5 tính tới tháng 5/2021',
      iconBgColor: '#FFF3E0',
    },
    {
      icon: <Chat />,
      title: 'Bài Speaking-Writing được chấm chất lượng hơn cả offline',
      description:
        'Giáo viên chấm bài chính xác từng chữ với Writing, từng giây với Speaking, kết hợp bài kiểm tra phát âm bằng AI',
      iconBgColor: '#E8F5E9',
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3, position: 'relative' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ mb: 6, fontWeight: 'bold' }}
      >
        Những gì chỉ có tại{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          Prep.vn
        </Box>
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>
      {[0, 1, 2, 3].map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: ['#FFA726', '#66BB6A', '#29B6F6', '#FFA726'][
              index % 4
            ],
            top: [20, 'auto', 'auto', 20][index],
            bottom: ['auto', 20, 20, 'auto'][index],
            left: [20, 20, 'auto', 'auto'][index],
            right: ['auto', 'auto', 20, 20][index],
          }}
        />
      ))}
    </Box>
  );
};

export default Trademark;
