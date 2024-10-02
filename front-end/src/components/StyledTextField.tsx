import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  borderRadius: '8px',
  backgroundColor: '#f9fafb',
}));

export default StyledTextField;
