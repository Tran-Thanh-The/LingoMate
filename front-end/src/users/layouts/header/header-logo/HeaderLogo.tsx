import { Box, Link } from '@mui/material';
import logo from '@/assets/logo.svg';
const HeaderLogo = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        padding: ' 1rem 1.25rem',
        borderRadius: '24px',
      }}
    >
      <Link href="#" underline="none" display={'flex'} alignItems={'center'}>
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: 70,
          }}
          alt="header-logo"
          src={logo}
        />
      </Link>
    </Box>
  );
};

export default HeaderLogo;
