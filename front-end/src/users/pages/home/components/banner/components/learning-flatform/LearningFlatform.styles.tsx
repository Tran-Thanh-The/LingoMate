import { SxProps } from '@mui/system';

export const boxFlatForm: SxProps = {
  textAlign: 'center',
  bgcolor: '#FFFF',
  borderRadius: 2,
  boxShadow: 1,
  margin: 0,
  minHeight: {xs:'170px', sm: '212px', md:'252px', lg: '212px'},
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-10px)',
  },

  marginBottom: {
    xs: 4,
    md: 3,
    lg: 0
  }
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
};

export const boxContent: SxProps = {
  padding: {
    xs: 2,
    md: 5
  },
};
