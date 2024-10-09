import { yupResolver } from '@hookform/resolvers/yup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Alert, AlertTitle, Box, Button, IconButton, InputAdornment, MenuItem, Select, Snackbar, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import { Controller, useForm, FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

const StyledTextArea = styled(TextField)(({ theme }) => ({
  textarea: {
    whiteSpace: 'pre-wrap',
  },
}));

const schema = yup.object({
  fullName: yup.string()
    .required('Họ và tên không được để trống')
    .max(50, "Họ và tên tối đa 50 ký tự"),
  phoneNumber: yup.string()
    .required('Số điện thoại không được để trống')
    .matches(/^[0-9]+$/, 'Số điện thoại sai định dạng')
    .test(
      "len",
      "Số điện thoại phải có 10 số",
      (val): boolean => val !== undefined && (val.length === 10),
    ),
  birthYear: yup.string().optional()
    .matches(/^[0-9]+$/, 'Năm sinh sai định dạng'),
  email: yup.string().email('Địa chỉ email không hợp lệ').optional(),
  currentLevel: yup.string().optional(),
  targetOutput: yup.string().optional(),
  content: yup.string().optional(),
});

type FormValues = yup.InferType<typeof schema>;

const ChatForm: React.FC = () => {
  const formConfig: UseFormProps<FormValues> = {
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      birthYear: '',
      email: '',
      currentLevel: '',
      targetOutput: '',
      content: '',
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>(formConfig);

  const placeholders = [
    "Bạn có câu hỏi gì?",
    "Hãy cho LingoMate biết trình độ hiện tại",
    "Mục tiêu mong muốn",
    "Vấn đề bạn đang gặp phải"
  ].map(item => `• ${item}`).join('\n');

  const labels = [
    "Họ và tên",
    "Số điện thoại",
    "Năm sinh",
    "Email",
    "Trình độ hiện tại",
    "Mục tiêu đầu ra",
    "Nội dung"
  ];

  const placeholdersEmailYear = [
    "Nhập năm sinh của bạn",
    "Nhập địa chỉ email của bạn"
  ];

  const optionsCurrentLevel = [
    { value: '1', label: 'LR 1-295' },
    { value: '2', label: 'LR 300-595' },
    { value: '3', label: '600-650' },
  ];

  const optionsTargetOutput = [
    { value: '1', label: 'Mục tiêu 1: Thi đạt IELTS 6.0' },
    { value: '2', label: 'Mục tiêu 2: Nâng cao kỹ năng nghe' },
    { value: '3', label: 'Mục tiêu 3: Học tiếng Anh giao tiếp' },
    { value: '4', label: 'Mục tiêu 4: Thi đạt TOEFL 80' },
  ];

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setOpenSnackbar(true);
    reset();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1.5} sx={{ display: "flex", flexDirection: "column" }}>
        {labels.slice(0, 2).map((label, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption" sx={{ mb: 1 }}>{label}</Typography>
            <Controller
              control={control}
              name={index === 0 ? 'fullName' : 'phoneNumber'}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder={`Nhập ${label.toLowerCase()}`}
                  variant="filled"
                  error={!!errors[index === 0 ? 'fullName' : 'phoneNumber']}
                  helperText={errors[index === 0 ? 'fullName' : 'phoneNumber']?.message}
                  InputProps={{
                    startAdornment: index === 1 ? (
                      <InputAdornment position="start">
                        +84
                        <IconButton size="small" color="inherit">
                          <ArrowDropDownIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : undefined,
                  }}
                />
              )}
            />
          </Grid>
        ))}

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
          {labels.slice(2, 4).map((label, index) => (
            <Box key={index} sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="caption">{label}</Typography>
              <Controller
                control={control}
                name={index === 0 ? 'birthYear' : 'email'}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder={placeholdersEmailYear[index]}
                    variant="filled"
                    error={!!errors[index === 0 ? 'birthYear' : 'email']}
                    helperText={errors[index === 0 ? 'birthYear' : 'email']?.message}
                  />
                )}
              />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
          {labels.slice(4, 6).map((label, index) => (
            <Box key={index} sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="caption">{label}</Typography>
              <Controller
                control={control}
                name={index === 0 ? 'currentLevel' : 'targetOutput'}
                render={({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    displayEmpty
                    variant="filled"
                    defaultValue=""
                    error={!!errors[index === 0 ? 'currentLevel' : 'targetOutput']}
                  >
                    <MenuItem value="" disabled>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500 }}>
                        Lựa chọn
                      </Typography>
                    </MenuItem>
                    {(index === 0 ? optionsCurrentLevel : optionsTargetOutput).map(option => (
                      <MenuItem key={option.value} value={option.value} sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Box>
          ))}
        </Box>

        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" sx={{ mb: 1 }}>{labels[6]}</Typography>
          <Controller
            control={control}
            name='content'
            render={({ field }) => (
              <StyledTextArea
                {...field}
                multiline
                placeholder={placeholders}
                variant="filled"
                rows={4}
                fullWidth
                sx={{ textarea: { paddingBottom: "32px" } }}
              />
            )}
          />
        </Grid>

        <Typography sx={{ fontSize: "12px", fontWeight: 400, marginRight: "8px", fontStyle: "italic" }}>
          Bằng việc đăng ký nhận tư vấn, bạn đã đồng ý với Chính sách bảo mật thông tin của LingoMate.
        </Typography>

        <Box sx={{ textAlign: "right", mt: 2 }}>
          <Button variant="contained" size="large" color="info" startIcon={<ArrowForwardIcon />} sx={{ width: "fit-content" }} type="submit">
            Gửi câu hỏi
          </Button>
        </Box>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          <AlertTitle>Gửi câu hỏi thành công</AlertTitle>
          LingoMate sẽ liên hệ lại với bạn trong vòng 24 giờ.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChatForm;
