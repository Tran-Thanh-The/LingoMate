import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  totalLesson: number;
  completedLesson: number;
  isMyCourse: boolean;
}

const CourseCard = ({
  id,
  title,
  description,
  price,
  createdAt,
  totalLesson,
  completedLesson,
  isMyCourse,
}: CourseCardProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    console.log(id);
    navigate(`/dashboard/courses/${id}`);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    navigate(`/dashboard/courses/update/${id}`);
    handleMenuClose();
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log(`Deleting course with id: ${id}`);
    handleMenuClose();
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: 4,
        '&:hover': {
          boxShadow: 6,
          img: {
            scale: 1.1,
            transition: '0.1s',
          },
        },
        width: 300,
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        sx={{ width: '100%', height: '160px', overflow: 'hidden' }}
        image="https://storage.googleapis.com/prep-storage-service/course/cover/qDgMeVyQqcHeqa5oz4lHTgpW5a8fSxKmB3mwzHHK.jpg"
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
          ${price.toFixed(2)}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', mb: 1 }}
        >
          Ngày tạo: {new Date(createdAt).toLocaleDateString()}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption">
            Tiến độ: {completedLesson}/{totalLesson} bài học
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(completedLesson / totalLesson) * 100}
            sx={{ mt: 1, height: 8, borderRadius: 5 }}
          />
        </Box>
        {isMyCourse && <Chip label="Đã mua" color="success" size="small" />}
      </CardContent>
      <Box>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuItem onClick={handleEdit}>Chỉnh sửa</MenuItem>
          <MenuItem onClick={handleDelete}>Xóa</MenuItem>
        </Menu>
      </Box>
    </Card>
  );
};

export default CourseCard;
