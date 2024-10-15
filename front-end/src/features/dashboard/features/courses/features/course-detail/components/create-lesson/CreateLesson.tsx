import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import FeatureHeader from '@/features/dashboard/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';

const fetchLessonById = (selectedLessonId) => {
  return {
    typeLesson: 'video',
    title: 'Lesson 1: Intro to React',
    content: 'This is the content for the lesson.',
  };
};

const validationSchema = Yup.object().shape({
  typeLesson: Yup.string().required('Please select the lesson type'),
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .required('Title is required'),
  content: Yup.string()
    .min(10, 'Content must be at least 10 characters')
    .required('Content is required'),
});

const lessonTypes = [
  { label: 'Video', value: 'video' },
  { label: 'Docs', value: 'docs' },
  { label: 'Exercises', value: 'exercise' },
];

const CreateUpdateLesson = () => {
  const { idCourse, selectedLessonId } = useParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      typeLesson: '',
      title: '',
      content: '',
    },
  });

  useEffect(() => {
    if (selectedLessonId) {
      setIsEditMode(true);
      const lessonData = fetchLessonById(selectedLessonId);
      setValue('typeLesson', lessonData.typeLesson);
      setValue('title', lessonData.title);
      setValue('content', lessonData.content);
    }
  }, [selectedLessonId, setValue]);

  const onSubmit = (data) => {
    if (isEditMode) {
      console.log('Updating lesson:', selectedLessonId, data);
    } else {
      console.log('Creating new lesson:', data);
    }
    navigate(`/dashboard/courses/${idCourse}`);
  };

  return (
    <FeatureLayout>
      <FeatureHeader
        title={isEditMode ? 'Cập nhật bài học' : 'Tạo bài học'}
        backPath={`/dashboard/courses/${idCourse}`}
      />

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          mt: 4,
          p: 4,
          borderRadius: 2,
          bgcolor: '#f4f6f8',
          maxWidth: '600px',
          mx: 'auto',
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#2E3091', mb: 2 }}>
          {isEditMode ? 'Cập nhật bài học' : 'Thêm bài học mới'}
        </Typography>

        <Controller
          name="typeLesson"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Loại bài học"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.typeLesson}
              helperText={errors.typeLesson?.message}
              sx={{ mb: 3 }}
            >
              {lessonTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              label="Tiêu đề"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.title}
              helperText={errors.title?.message}
              sx={{ mb: 3 }}
            />
          )}
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              label="Nội dung"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              {...field}
              error={!!errors.content}
              helperText={errors.content?.message}
              sx={{ mb: 3 }}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#2E3091',
            color: '#fff',
            '&:hover': {
              bgcolor: '#253494',
            },
          }}
        >
          {isEditMode ? 'Cập nhật bài học' : 'Thêm bài học'}
        </Button>
      </Box>
    </FeatureLayout>
  );
};

export default CreateUpdateLesson;
