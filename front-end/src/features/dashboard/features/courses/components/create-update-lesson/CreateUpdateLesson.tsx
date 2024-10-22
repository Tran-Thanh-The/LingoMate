import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import FeatureHeader from '@/features/dashboard/layouts/feature-layout/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import { LessonTypes } from '@/types/enum/LessonType';
import { LessonRequest } from '@/types/interface/Lesson';
import lessonApi from '@/api/lessonApi';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  lessonType: Yup.string().required('Please select the lesson type'),
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .required('Title is required'),
  content: Yup.string()
    .min(10, 'Content must be at least 10 characters')
    .required('Content is required'),
  videoUrl: Yup.string().when('lessonType', {
    is: LessonTypes.Video,
    then: (schema) =>
      schema
        .url('Must be a valid URL')
        .required('Video URL is required for video lessons'),
    otherwise: (schema) => schema.notRequired(),
  }),
}) as Yup.ObjectSchema<LessonRequest>;

// Lesson Types
const lessonTypes = [
  { label: 'Video', value: LessonTypes.Video },
  { label: 'Docs', value: LessonTypes.Docs },
  { label: 'Exercises', value: LessonTypes.Exercise },
];

const CreateUpdateLesson = () => {
  const { idCourse, selectedLessonId } = useParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lessonType, setLessonType] = useState<LessonTypes | ''>('');

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LessonRequest>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      lessonType: LessonTypes.Video,
      title: '',
      content: '',
      videoUrl: '',
    },
  });

  const selectedLessonType = watch('lessonType');

  // useEffect(() => {
  //   const fetchLessonData = async () => {
  //     if (selectedLessonId) {
  //       try {
  //         setIsLoading(true);
  //         setError(null);
  //         const response = await lessonApi.getLesson(selectedLessonId);
  //         const lessonData = response.data;

  //         setIsEditMode(true);
  //         setValue('lessonType', lessonData.lessonType);
  //         setValue('title', lessonData.title);
  //         setValue('content', lessonData.content);
  //         if (lessonData.videoUrl) {
  //           setValue('videoUrl', lessonData.videoUrl);
  //         }
  //         setLessonType(lessonData.lessonType);
  //       } catch (err) {
  //         setError('Failed to fetch lesson data. Please try again.');
  //         console.error('Error fetching lesson:', err);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchLessonData();
  // }, [selectedLessonId, setValue]);

  const onSubmit = async (data: LessonRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      if (isEditMode && selectedLessonId) {
        await lessonApi.updateLesson(selectedLessonId, data);
      } else {
        await lessonApi.createLesson(data, idCourse);
      }

      navigate(`/dashboard/courses/${idCourse}`);
    } catch (err) {
      setError(
        isEditMode
          ? 'Failed to update lesson. Please try again.'
          : 'Failed to create lesson. Please try again.',
      );
      console.error('Error submitting lesson:', err);
    } finally {
      setIsLoading(false);
    }
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
          mb: 5,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#2E3091', mb: 2 }}>
          {isEditMode ? 'Cập nhật bài học' : 'Thêm bài học mới'}
        </Typography>

        <Controller
          name="lessonType"
          control={control}
          render={({ field }) => (
            <TextField
              select
              label="Loại bài học"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.lessonType}
              helperText={errors.lessonType?.message}
              sx={{ mb: 3 }}
              onChange={(e) => {
                field.onChange(e);
                setLessonType(e.target.value as LessonTypes);
              }}
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

        {/* {selectedLessonType === LessonTypes.Video && ( */}
        <Controller
          name="videoUrl"
          control={control}
          render={({ field }) => (
            <TextField
              label="Video URL"
              variant="outlined"
              fullWidth
              {...field}
              error={!!errors.videoUrl}
              helperText={errors.videoUrl?.message}
              sx={{ mb: 3 }}
            />
          )}
        />
        {/* )} */}

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
          disabled={isLoading}
        >
          {isEditMode ? 'Cập nhật bài học' : 'Thêm bài học'}
        </Button>
      </Box>
    </FeatureLayout>
  );
};

export default CreateUpdateLesson;
