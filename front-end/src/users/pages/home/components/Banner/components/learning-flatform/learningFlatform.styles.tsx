import { SxProps } from '@mui/system';

export const boxFlatForm: SxProps = {
  textAlign: 'center',
  bgcolor: '#FFFF',
  p: 2,
  borderRadius: 2,
  boxShadow: 1,
  minHeight: '220px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mt: 3,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-10px)',
  },
};

export const boxIcon: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const boxIconChild: SxProps = {
  width: '80px',
  height: '80px',
  bgcolor: 'rgb(100 255 255)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
};

export const boxContent: SxProps = {};
