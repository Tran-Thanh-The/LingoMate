import FeatureHeader from '@/features/dashboard/components/feature-header/FeatureHeader';
import FeatureLayout from '@/features/dashboard/layouts/feature-layout/FeatureLayout';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
// import { mockCourseDataArray } from './mockCourseData';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function CreateUpdateCourse() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
  });

  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDuration, setLessonDuration] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleAddLesson = () => {
    if (lessonTitle.trim() === '' || lessonDuration.trim() === '') {
      alert('Vui lòng nhập đầy đủ tiêu đề và thời lượng cho bài học.');
      return;
    }

    const newLesson = {
      id: 'uuidv4()',
      title: lessonTitle,
      duration: lessonDuration,
    };

    setLessons([...lessons, newLesson]);
    setLessonTitle('');
    setLessonDuration('');
  };

  const handleDeleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title.trim() === '' ||
      formData.description.trim() === '' ||
      formData.price === ''
    ) {
      alert('Vui lòng điền đầy đủ các trường thông tin bắt buộc.');
      return;
    }

    const newCourse = {
      id: 'uuidv4()',
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      createdAt: new Date(),
      totalLesson: lessons.length,
      completedLesson: 0, // Mặc định khi tạo mới
      isMyCourse: false, // Mặc định khi tạo mới
      image: formData.image
        ? URL.createObjectURL(formData.image)
        : 'https://via.placeholder.com/150',
      lessons: lessons,
    };

    // Thêm khóa học mới vào mockCourseDataArray

    // Chuyển hướng về trang Home hoặc trang chi tiết khóa học
    navigate('/');
  };

  return (
    <FeatureLayout>
      <FeatureHeader
        title="Tạo mới khóa học"
        backPath="/dashboard/courses/course-list"
      ></FeatureHeader>

      <Box sx={{ padding: 4 }}>
        <Paper
          sx={{ padding: 4, maxWidth: '100%', margin: '0 auto' }}
          elevation={3}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Title */}
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>

              {/* Price */}
              <Grid item xs={6}>
                <TextField
                  label="Price ($)"
                  name="price"
                  type="number"
                  inputProps={{ step: '0.01', min: '0' }}
                  value={formData.price}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              {/* Image Upload */}
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<AddIcon />}
                  fullWidth
                >
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
                {formData.image && (
                  <Box mt={2}>
                    <Typography variant="subtitle1">Preview:</Typography>
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                      style={{
                        width: '100%',
                        maxHeight: 200,
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                )}
              </Grid>

              {/* Lessons Section */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Lessons
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={5}>
                    <TextField
                      label="Lesson Title"
                      value={lessonTitle}
                      onChange={(e) => setLessonTitle(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Duration"
                      value={lessonDuration}
                      onChange={(e) => setLessonDuration(e.target.value)}
                      placeholder="e.g., 10 mins"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddLesson}
                      fullWidth
                    >
                      <AddIcon />
                    </Button>
                  </Grid>
                </Grid>

                {/* List of Lessons */}
                <List>
                  {lessons.map((lesson) => (
                    <div key={lesson.id}>
                      <ListItem>
                        <ListItemText
                          primary={lesson.title}
                          secondary={`Duration: ${lesson.duration}`}
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            onClick={() => handleDeleteLesson(lesson.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </div>
                  ))}
                  {lessons.length === 0 && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      No lessons added yet.
                    </Typography>
                  )}
                </List>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Create Course
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </FeatureLayout>
  );
}
