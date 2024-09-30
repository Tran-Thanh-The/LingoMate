import { Button, Box, Typography, TextField, InputAdornment, IconButton} from '@mui/material';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CustomInputField from './CustomInput';
import CustomSelectField from '../CustomSelectField/CustomSelectField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface FormData {
  name: string;
  email: string;
  age: string;
  password: string;
  gender: string;
  phone: string;
}

const CustomInputFieldDemo: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, margin: 'auto', pt: 4 }}>
      <Typography variant="h4" gutterBottom>Registration Form</Typography>

      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        render={({ field }) => (
          <CustomInputField
            control={control}
            {...field}
            placeholder='Name'
            variant="filled"
            error={!!errors.name}
            errorMessage={errors.name?.message}
            fullWidth
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Email is invalid',
          },
        }}
        render={({ field }) => (
          <CustomInputField
            control={control}
            {...field}
            type="email"
            placeholder='Email'
            variant="outlined"
            error={!!errors.email}
            errorMessage={errors.email?.message}
            fullWidth
            margin="normal"
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        rules={{
          required: 'Age is required',
          validate: (value) => {
            const ageNumber = Number(value);
            return ageNumber >= 0 || 'Age must be a positive number';
          },
        }}
        render={({ field }) => (
          <CustomInputField
            control={control}
            {...field}
            type="number"
            placeholder='Age'
            error={!!errors.age}
            errorMessage={errors.age?.message}
            fullWidth
            margin="normal"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
        render={({ field }) => (
          <CustomInputField
            control={control}
            {...field}
            type="password"
            placeholder='Password'
            error={!!errors.password}
            errorMessage={errors.password?.message}
            fullWidth
            margin="normal"
          />
        )}
      />

      <Controller
        name="gender" 
        control={control}
        rules={{ required: 'Gender is required' }}
        render={({ field }) => (
          <CustomSelectField
            control={control}
            {...field}
            options={genderOptions}
            error={!!errors.gender}
            errorMessage={errors.gender?.message}
            variant="outlined"
            placeholder='Gender'
            fullWidth
          />
        )}
      />   

        {/* Trường nhập số điện thoại */}
        <Controller
        name="phone"
        control={control}
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Phone number must be 10 digits',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder='Phone Number'
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  +84
                  <IconButton size="small">
                    <ArrowDropDownIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default CustomInputFieldDemo;
