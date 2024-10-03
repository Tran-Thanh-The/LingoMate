export const arrowDownIconStyle = {
  ml: { md: 0, lg: 1 },
  flexShrink: 0,
  fontSize: '1rem'
}

export const textStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '24px',
  color: '#233876',
  '&:hover': {
    backgroundColor: '#ebf5ff',
  },
  fontSize: {
    xs: '12px',
    md: '13px',
  },
  padding: {
    md: '4px',
    lg: '8px 12px',
  },
};

export const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  flexShrink: 1,
  minWidth: 0,
  padding: {
    md: '8px 12px',
    lg: '8px 20px',
  },
};

export const menuItemStyle = {
  fontSize: {
    xs: '12px',
    md: '13px',
  },
}

export const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  overflow: 'hidden',
};

export const mobileMenuStyles = {
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  justifyContent: 'center',
};

export const desktopMenuStyles = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  justifyContent: 'space-between',
  overflow: 'hidden',
};
