import { Box, Button, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import courseApi from '@/api/courseApi';

export default function CourseForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    category_id: ""
  });

  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDuration, setLessonDuration] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Lấy danh sách 
    const fetchCategories = async () => {
      try {
        const response = await courseApi.getCategories();
        console.log('Fetched categories:', response.data);
        setCategories(response.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

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
        : 'https://storage.googleapis.com/prep-storage-service/course/cover/qDgMeVyQqcHeqa5oz4lHTgpW5a8fSxKmB3mwzHHK.jpg',
      lessons: lessons,
    };
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box>
          {formData.image && (
            <Box mt={2}>
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
          <Box>
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
        </Box>
        </Box>

        <Box>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            fullWidth
          />
        </Box>

        <Box>
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
        </Box>

        <Box>
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
        </Box>
      </Box>
    </form>
  );
}
