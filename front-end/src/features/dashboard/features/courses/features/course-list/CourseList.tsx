import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import FeatureHeader from '@/features/dashboard/layouts/feature-layout/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import CourseCard from '@/features/dashboard/features/courses/features/course-list/components/course-card/CourseCard';
import CourseFilter from '@/features/dashboard/features/courses/features/course-list/components/course-filter/CourseFilter';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  totalLesson: number;
  completedLesson: number;
  isMyCourse: boolean;
}

const mockCourseDataArray: Course[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: 'CSS Flexbox & Grid',
    description: 'Learn modern layout techniques using CSS Flexbox and Grid.',
    price: 29.99,
    createdAt: new Date('2023-09-10T14:00:00Z'),
    totalLesson: 8,
    completedLesson: 5,
    isMyCourse: false,
  },
  {
    id: 4,
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
      <FeatureHeader
        title="Khóa học"
        description="Các khóa học bạn đang sở hữu đã được chia theo từng cấp trình độ, tương ứng với mỗi chặng mục tiêu. Hãy chọn trình độ mà bạn muốn bắt đầu nhé."
      />
      <Box sx={{ padding: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 3,
          }}
        >
          <CourseFilter />
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard/courses/create')}
            sx={{
              width: 'unset',
            }}
          >
            Tạo khóa học
          </Button>
        </Box>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Danh sách khóa học
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {mockCourseDataArray.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              createdAt={course.createdAt}
              totalLesson={course.totalLesson}
              completedLesson={course.completedLesson}
              isMyCourse={course.isMyCourse}
            />
          ))}
        </Box>
      </Box>
    </FeatureLayout>
  );
}
