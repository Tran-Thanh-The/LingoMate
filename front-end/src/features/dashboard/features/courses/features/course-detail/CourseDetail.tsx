import FeatureHeader from '@/features/dashboard/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const mockCourseData = {
  title: 'React for Beginners',
  description:
    'Learn the basics of React.js and start building your own web applications.',
  price: 49.99,
  createdAt: new Date('2023-10-01T12:00:00Z'),
  totalLesson: 10,
  completedLesson: 4,
  isMyCourse: true,
  lessons: [
    { id: 1, title: 'Introduction to React', duration: '10 mins' },
    {
      id: 2,
      title: 'Setting up the Development Environment',
      duration: '15 mins',
    },
    { id: 3, title: 'Understanding JSX', duration: '20 mins' },
    // Add more mock lessons as needed
  ],
};

export default function CourseDetail() {
  const course = mockCourseData;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <FeatureLayout>
      <FeatureHeader
        title="Chi tiết khóa học"
        backPath="/dashboard/courses/course-list"
      ></FeatureHeader>

      <Box sx={{ padding: 3 }}>
        {/* Course Information Section */}
        <Card sx={{ marginBottom: 3 }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 250 }}
            image="https://via.placeholder.com/400x200"
            alt={course.title}
          />
          <CardContent>
            <Typography variant="h4">{course.title}</Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginBottom: 2 }}
            >
              {course.description}
            </Typography>
            <Typography variant="h6" color="primary">
              ${course.price.toFixed(2)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Created at: {new Date(course.createdAt).toLocaleDateString()}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="caption">
                Progress: {course.completedLesson}/{course.totalLesson} lessons
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(course.completedLesson / course.totalLesson) * 100}
                sx={{ marginTop: 1, height: 8, borderRadius: 5 }}
              />
            </Box>
            {course.isMyCourse && (
              <Chip
                label="Purchased"
                color="success"
                size="small"
                sx={{ marginTop: 2 }}
              />
            )}
          </CardContent>
        </Card>

        {/* Lessons Section */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Lessons
          </Typography>
          <List>
            {course.lessons.map((lesson) => (
              <div key={lesson.id}>
                <ListItem>
                  <ListItemText
                    primary={lesson.title}
                    secondary={`Duration: ${lesson.duration}`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginTop: 2 }}
            onClick={() => alert('Create Lesson')}
          >
            Add Lesson
          </Button>
        </Box>
      </Box>
    </FeatureLayout>
  );
}
