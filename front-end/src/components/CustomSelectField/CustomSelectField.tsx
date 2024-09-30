import { FormControl, FormHelperText, Select, SelectProps, MenuItem } from '@mui/material';
import * as React from 'react';
import { Controller, Control } from 'react-hook-form';

export interface CustomSelectFieldProps extends Omit<SelectProps, 'variant'> {
    control: Control<any>; 
    name: string;
    error?: boolean;
    errorMessage?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    placeholder?: string;
    options: { value: string | number; label: string }[];
}

export const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  control,
  name,
  error = false,
  errorMessage,
  variant = 'outlined',
  placeholder,
  options,
  ...props
}) => {
  return (
    <FormControl variant={variant} error={error} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <Select
            {...field}
            displayEmpty // Hiển thị placeholder khi không có giá trị
            value={field.value || ''} // Đảm bảo value là một chuỗi
            {...props}
            renderValue={(selected) => {
              if (!selected) {
                return (
                  <span style={{ color: '#333', opacity: '0.7' }}>
                    {placeholder}
                  </span>
                ); // Hiển thị placeholder nếu không có giá trị
              }
              return selected; // Hiển thị giá trị đã chọn
            }}
            variant={variant}
          >
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {error && errorMessage && (
        <FormHelperText sx={{ marginLeft: 0 }}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelectField;
