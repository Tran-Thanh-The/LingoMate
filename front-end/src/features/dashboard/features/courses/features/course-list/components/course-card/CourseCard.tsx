import MoreVertIcon from '@mui/icons-material/MoreVert';
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
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
  title,
  description,
  price,
  createdAt,
  totalLesson,
  completedLesson,
  isMyCourse,
}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {/* Image can be a placeholder */}
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, borderRadius: 2 }}
        image="https://via.placeholder.com/150"
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            '&:hover': {
              cursor: 'pointer',
              textDecoration: 'underline',
            },
          }}
          onClick={() => navigate('/dashboard/courses/1')}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
          ${price.toFixed(2)}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Created at: {new Date(createdAt).toLocaleDateString()}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption">
            Progress: {completedLesson}/{totalLesson} lessons
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(completedLesson / totalLesson) * 100}
            sx={{ mt: 1, height: 8, borderRadius: 5 }}
          />
        </Box>
        {isMyCourse && (
          <Chip label="Purchased" color="success" size="small" sx={{ mt: 1 }} />
        )}
      </CardContent>
      <Box>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem
            onClick={() => {
              /* Edit logic */
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              /* Delete logic */
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </Box>
    </Card>
  );
};

export default CourseCard;
