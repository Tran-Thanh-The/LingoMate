import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Typography, Container } from '@mui/material';
import Course from './components/course/Course';
import BuyConfirm from './components/buy-confirm/BuyConfirm';
import { CourseData } from '@/types/interface/CourseData';
import {
  addCourseToCart,
  clearCart,
  loadCourseFromLocalStorage,
} from '@/users/features/course/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';

const courses: CourseData[] = [
  {
    id: 1,
    title: 'TOEIC Listening & Reading',
    description:
      'This course focuses on improving your TOEIC Listening & Reading skills.',
    imageUrl:
      'https://afamilycdn.com/150157425591193600/2021/6/22/img2189-16243408849001467379745.jpg',
    altText: 'TOEIC Listening & Reading',
  },
  {
    id: 2,
    title: 'TOEIC Speaking & Writing',
    description:
      'This course focuses on improving your TOEIC Listening & Reading skills.',
    imageUrl:
      'https://afamilycdn.com/150157425591193600/2021/6/22/img2189-16243408849001467379745.jpg',
    altText: 'TOEIC Speaking & Writing',
  },
  {
    id: 3,
    title: 'TOEIC 4 Skills',
    description:
      'This course focuses on improving your TOEIC Listening & Reading skills.',
    imageUrl:
      'https://afamilycdn.com/150157425591193600/2021/6/22/img2189-16243408849001467379745.jpg',
    altText: 'TOEIC 4 Skills',
  },
];

const ListCourses = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.course);

  const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false);
  const [courseId, setCourseId] = React.useState<number>();
  const [course, setCourse] = React.useState<CourseData | undefined>(undefined);

  useEffect(() => {
    const course = courses.find((item) => item.id === courseId);
    setCourse(course);
  }, [courseId]);

  useEffect(() => {
    dispatch(loadCourseFromLocalStorage());
    if (cart) {
      setOpenSnackbar(true);
    }
    return;
  }, [dispatch]);

  const handleBuyCourse = (id: number) => {
    const selectedCourse = courses.find((course) => course.id === id);
    if (selectedCourse) {
      dispatch(addCourseToCart(selectedCourse));
    }
    setCourseId(id);
    setOpenSnackbar(true);
  };

  const handleCloseBuyConfirm = () => {
    if (cart) {
      dispatch(clearCart());
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box
        sx={{
          borderRadius: '40px',
          p: { xs: 3, sm: 4, md: 5 },
          backgroundImage:
            'radial-gradient(73.76% 100% at 50% 0, #0047ff 0, #002ea6 100%)',
          color: '#FFFF',
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <Grid
            size={{ xs: 12 }}
            container
            alignItems="center"
            spacing={1}
            sx={{ mb: 4 }}
          >
            <Grid size={{ xs: 3 }} display={'flex'} justifyContent={'end'}>
              <Box
                component="img"
                src="https://biz-product-page.prepedu.com/images/bee/bee_select_level.png?w=828&q=80"
                alt="Bee Icon"
                sx={{
                  width: {
                    xs: '80px',
                    sm: '120px',
                    md: '160px',
                    lg: '200px',
                    xl: '280px',
                  },
                  height: 'auto',
                }}
              />
            </Grid>
            <Grid size={{ xs: 9 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.5rem',
                    md: '1.5rem',
                    lg: '2rem',
                    xl: '2.5rem',
                  },
                }}
              >
                Bạn có thể lựa chọn khóa học bạn mong muốn, ngay tại đây!
              </Typography>
            </Grid>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            container
            spacing={2}
            mt={1}
            sx={{
              display: 'flex',
              justifyContent: {
                lg: 'center',
                md: 'start',
              },
            }}
          >
            {courses.map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
                <Course
                  title={course.title}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  altText={course.altText}
                  onBuy={() => handleBuyCourse(course.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <BuyConfirm
        open={openSnackbar}
        onClose={handleCloseBuyConfirm}
        cart={cart}
        recommended={false}
      />
    </Container>
  );
};

export default ListCourses;
