import courseApi from '@/api/courseApi';
import { Add as AddIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function CreateCourseModal({ open, onClose, onOk, data = null }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    category_id: '',
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await courseApi.getCategories();
        setCategories(response?.data?.data ?? []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (data?.id) {
      setFormData({
        name: data.name,
        description: data.description,
        price: data.price,
        image: null,
        category_id: data.category.id,
      });
    }
  }, [data]);

  useEffect(() => {
    if (!open) {
      if (data?.id) {
        setFormData({
          name: data.name,
          description: data.description,
          price: data.price,
          image: null,
          category_id: data.category.id,
        });
      } else {
        setFormData({
          name: '',
          description: '',
          price: '',
          image: null,
          category_id: '',
        });
      }
    }
  }, [open]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.description.trim() === '' ||
      formData.price === '' ||
      formData.category_id === ''
    ) {
      toast.error('Vui lòng điền đầy đủ các trường thông tin bắt buộc.');
      return;
    }

    if (data?.id) {
      await courseApi.updateCourse(data.id, formData);
      toast.success('Cập nhật khóa học thành công!');
    } else {
      await courseApi.createCourse(formData);
      toast.success('Tạo khóa học thành công!');
    }
    onOk();
    onClose(false);
  };

  return (
    <Modal
      open={open}
      hideBackdrop={true}
      onClose={() => onClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: 800,
          bgcolor: 'background.paper',
          p: '24px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tạo khóa học
        </Typography>
        <Box id="modal-modal-description">
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
                        maxHeight: 100,
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Box>

              <Box>
                <Select
                  label="Category"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                  fullWidth
                >
                  {(categories ?? []).map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
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
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button
            onClick={() => onClose(false)}
            sx={{ width: 'unset', padding: '6px 24px' }}
          >
            Đóng
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="medium"
            sx={{ width: 'unset', padding: '6px 24px' }}
          >
            Lưu
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
