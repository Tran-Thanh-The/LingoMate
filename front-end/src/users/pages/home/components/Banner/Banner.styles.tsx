import { SxProps } from '@mui/system';

export const containerBanner: SxProps = {
  p: 3,
  backgroundColor: 'rgb(245 246 250)',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  marginBottom: '25vh',
  '@media (max-width: 600px)': {
    p: 2,
    marginBottom: '15vh',
  },
  '@media (max-width: 960px)': {
    p: 3,
    marginBottom: '20vh',
  },
};

export const rowFlatForm: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: '0',
  bottom: '0px',
  transform: 'translate(0%, 30%)',
  '@media (max-width: 960px)': {
    position: 'relative',
    transform: 'none',
    marginTop: '20px',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    marginTop: '10px',
  },
};

export const textTitle: SxProps = {
  '@media (max-width: 900px)': {
    fontSize: 'h4.fontSize',
  },
};
