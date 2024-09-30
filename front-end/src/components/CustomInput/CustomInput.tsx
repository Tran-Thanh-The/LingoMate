import { TextField, TextFieldProps, FormControl, FormHelperText } from '@mui/material';
import * as React from 'react';
import { Controller, Control } from 'react-hook-form';

export interface CustomInputFieldProps extends Omit<TextFieldProps, 'variant'> {
    control: Control<any>; 
    name: string;
    error?: boolean;
    errorMessage?: string;
    variant?: TextFieldProps['variant'];
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  control,
  name,
  error = false,
  errorMessage,
  variant,
  ...props
}) => {
  return (
    <FormControl variant={variant} error={error} fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...props}
            variant={variant}
          />
        )}
      />
      {error && errorMessage && (
        <FormHelperText sx={{marginLeft: 0}}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInputField;
