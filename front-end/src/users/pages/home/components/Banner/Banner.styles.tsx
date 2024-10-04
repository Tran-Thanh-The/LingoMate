import { SxProps } from '@mui/system';

export const containerBanner: SxProps = {
  mb: -15,
};

export const mainBanner : SxProps = {
  pt: { xs: 20, md: 10},
  pb: 30,
  backgroundColor: 'rgb(245 246 250)',
};

export const rowFlatForm: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: {
    xs: '0 24px',
    md: '0 48px',
  },
};

export const textTitle: SxProps = {
  fontSize: {
    xs: '24px',
    sm: '36px',
    md: '48px'
  }
};

export const flatformWrapper: SxProps = {
  mt: { xs: 4, sm: 6, md: 8 },
  transform: 'translateY(-150px)',
};

export const flatformTitle: SxProps = {
  display: { xs: 'block', sm: 'none' },
  mb: 10,
  mt: -10,
  textAlign: 'center',
};
