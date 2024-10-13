import FeatureHeader from '@/features/dashboard/components/feature-header/FeatureHeader';
import CourseCard from '@/features/dashboard/features/courses/features/course-list/components/course-card/CourseCard';
import CourseFilter from '@/features/dashboard/features/courses/features/course-list/components/course-filter/CourseFilter';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const mockCourseDataArray = [
  {
    title: 'React for Beginners',
    description:
      'Learn the basics of React.js and start building your own web applications.',
    price: 49.99,
    createdAt: new Date('2023-10-01T12:00:00Z'),
    totalLesson: 10,
    completedLesson: 4,
    isMyCourse: true,
  },
  {
    title: 'Advanced JavaScript',
    description:
      'Master advanced JavaScript concepts like closures, async/await, and ES6+ features.',
    price: 59.99,
    createdAt: new Date('2023-08-15T09:30:00Z'),
    totalLesson: 12,
    completedLesson: 12,
    isMyCourse: true,
  },
  {
    title: 'CSS Flexbox & Grid',
    description: 'Learn modern layout techniques using CSS Flexbox and Grid.',
    price: 29.99,
    createdAt: new Date('2023-09-10T14:00:00Z'),
    totalLesson: 8,
    completedLesson: 5,
    isMyCourse: false,
  },
  {
    title: 'Node.js Crash Course',
    description:
      'Get up and running with Node.js and build backend applications.',
    price: 39.99,
    createdAt: new Date('2023-07-22T10:00:00Z'),
    totalLesson: 15,
    completedLesson: 7,
    isMyCourse: false,
  },
];

export default function CourseList() {
  const navigate = useNavigate();

  return (
    <FeatureLayout>
      <FeatureHeader title="Khóa học" />
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <CourseFilter></CourseFilter>

          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/courses/create')}
          >
            Tạo khóa học
          </Button>
        </Box>

        <Box>
          <Typography variant="body1">Danh sách khóa học</Typography>
        </Box>

        <Box>
          {
            // Render course list
            mockCourseDataArray.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                description={course.description}
                price={course.price}
                createdAt={course.createdAt}
                totalLesson={course.totalLesson}
                completedLesson={course.completedLesson}
                isMyCourse={course.isMyCourse}
              ></CourseCard>
            ))
          }
        </Box>
      </Box>
    </FeatureLayout>
  );
}
