import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  LinearProgress,
  Menu,
  MenuItem,
  Typography,
  Tabs,
  Tab,
  Pagination,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useParams } from 'react-router-dom';
import FeatureHeader from '@/features/dashboard/layouts/feature-layout/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import LessonCard from '../../components/lesson-card/LessonCard';
import { LESSONS_PER_PAGE, ROLE } from '@/utils/constants/constants';
import RoleBasedComponent from '@/components/RoleBasedComponent';

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
    {
      id: '01',
      title: 'Lesson 1: Intro to React',
      typeLesson: 'video',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
    {
      id: '02',
      title: 'Lesson 2: JSX and Components',
      typeLesson: 'docs',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
    {
      id: '03',
      title: 'Lesson 3: State and Props',
      typeLesson: 'video',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
    {
      id: '04',
      title: 'Lesson 4: React Lifecycle',
      typeLesson: 'exercise',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
    {
      id: '05',
      title: 'Lesson 5: Event Handling',
      typeLesson: 'docs',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
    {
      id: '06',
      title: 'Lesson 6: Hooks in React',
      typeLesson: 'exercise',
      sections: 0,
      totalSections: 1,
      stars: 0,
      totalStars: 3,
    },
  ],
};

export default function CourseDetail() {
  const course = mockCourseData;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const open = Boolean(anchorEl);
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { idCourse } = useParams();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    lessonId: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedLessonId(lessonId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedLessonId(null);
  };

  const handleEdit = () => {
    if (selectedLessonId) {
      navigate(
        `/dashboard/courses/${idCourse}/edit-lesson/${selectedLessonId}`,
      );
    }
    handleMenuClose();
  };

  const handleDelete = () => {
    if (selectedLessonId) {
      console.log('Delete lesson ID:', selectedLessonId);
    }
    handleMenuClose();
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    setCurrentPage(1);
  };

  const handleAddLesson = () => {
    navigate(`/dashboard/courses/${idCourse}/create-lesson`);
  };

  const getFilteredLessons = () => {
    switch (tabIndex) {
      case 1:
        return course.lessons.filter((lesson) => lesson.typeLesson === 'video');
      case 2:
        return course.lessons.filter((lesson) => lesson.typeLesson === 'docs');
      case 3:
        return course.lessons.filter(
          (lesson) => lesson.typeLesson === 'exercise',
        );
      default:
        return course.lessons;
    }
  };

  const filteredLessons = getFilteredLessons();
  const paginatedFilteredLessons = filteredLessons.slice(
    (currentPage - 1) * LESSONS_PER_PAGE,
    currentPage * LESSONS_PER_PAGE,
  );
  const totalFilteredPages = Math.ceil(
    filteredLessons.length / LESSONS_PER_PAGE,
  );

  return (
    <FeatureLayout>
      <FeatureHeader
        title="Chi tiết khóa học"
        backPath="/dashboard/courses/course-list"
      />
      <Box sx={{ padding: 3 }}>
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <Typography variant="h5">Danh sách bài học</Typography>

          <RoleBasedComponent allowedRoles={[ROLE.ADMIN, ROLE.STAFF]}>
            <IconButton
              color="primary"
              sx={{
                bgcolor: '#f3f7ff',
              }}
              onClick={handleAddLesson}
            >
              <AddIcon />
            </IconButton>
          </RoleBasedComponent>
        </Box>

        <Box sx={{ width: '100%', marginBottom: 4 }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="Tất cả bài học" />
            <Tab label="Bài học video" />
            <Tab label="Bài học docs" />
            <Tab label="Exercises" />
          </Tabs>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            {tabIndex === 0 && 'Danh sách tất cả bài học'}
            {tabIndex === 1 && 'Danh sách bài học video'}
            {tabIndex === 2 && 'Danh sách bài học docs'}
            {tabIndex === 3 && 'Danh sách Exercises'}
          </Typography>
          {paginatedFilteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onMenuOpen={handleMenuOpen}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
            mb: 2,
          }}
        >
          <Pagination
            count={totalFilteredPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>

        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </Box>
    </FeatureLayout>
  );
}
