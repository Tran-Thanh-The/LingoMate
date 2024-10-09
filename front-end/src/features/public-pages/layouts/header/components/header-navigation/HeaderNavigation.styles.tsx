import { SxProps } from '@mui/system';


export const arrowDownIconStyle: SxProps = {
  ml: { md: 0, lg: 1 },
  flexShrink: 0,
  fontSize: '1rem'
}

export const textStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '24px',
  color: '#233876',
  lineHeight: '1.5rem',
  '&:hover': {
    backgroundColor: '#ebf5ff',
  },
  fontSize: {
    xs: '13px',
    lg:'16px'
  },
  padding: {
    md: '4px',
    lg: '8px 12px',
  },
};

export const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 1,
  minWidth: 0,
  padding: {
    md: '8px 12px',
    lg: '8px 20px',
  },
};
export const activeStyle = {
  color: '#0071f9',
};
  
export const navLinkStyle = {
  textDecoration: 'none',
  display: 'inline-flex',
};

export const menuItemStyle = {
  fontSize: {
    xs: '13px',
  },
}

export const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  overflow: 'hidden',
};

export const desktopMenuStyles = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'space-between',
  overflow: 'hidden',
};
