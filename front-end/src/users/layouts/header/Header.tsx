import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HeaderAction from './header-action/HeaderAction';
import HeaderLogo from './header-logo/HeaderLogo';
import HeaderNavigation from './header-navigation/HeaderNavigation';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f9fafb'}}>
    <Toolbar disableGutters>
      <Container maxWidth="xl" sx={{ padding: '16px 0'}}>
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
