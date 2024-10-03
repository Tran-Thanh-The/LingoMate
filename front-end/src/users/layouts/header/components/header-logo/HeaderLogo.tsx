import logo from '@/assets/logo.svg';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
const HeaderLogo = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: {
          xs: '12px',
          lg: '16px 20px',
        },
        borderRadius: '24px',
      }}
    >
      <NavLink to="#" style={{ textDecoration: 'none', display: 'flex', alignItems:'center'}}>
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: 70,
          }}
          alt="header-logo"
          src={logo}
        />
      </NavLink>
    </Box>
  );
};

export default HeaderLogo;
