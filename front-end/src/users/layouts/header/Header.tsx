import { AppBar, Box, Container, Toolbar } from '@mui/material';
import HeaderAction from './components/header-action/HeaderAction';
import HeaderLogo from './components/header-logo/HeaderLogo';
import HeaderNavigation from './components/header-navigation/HeaderNavigation';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#f9fafb', top: 0 }}>
    <Toolbar disableGutters>
      <Container maxWidth="xl"
          sx={{ 
            padding: {
              xs: '16px', 
              sm: '16px 24px', 
            }
          }}>
        <Box sx={{display: 'flex', alignItems:'center', justifyContent: {md: 'space-between'}}}>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <HeaderLogo />
          </Box>
            <HeaderNavigation />
            <Box sx={{ ml: { xs: 'auto', md: 0} }}>
                <HeaderAction />
            </Box>
          </Box>
      </Container>
    </Toolbar>
</AppBar>

  );
};
export default Header;
