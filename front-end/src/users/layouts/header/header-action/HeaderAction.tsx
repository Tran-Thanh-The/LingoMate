import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2'
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderAction = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  return (
    <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
        <Grid>
            <Button variant='contained' color='primary' size='small' sx={{ witdh: '130px', height: '44px'}}>Bắt đầu học</Button>
        </Grid>

        <Grid >
            <Box>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon sx={{ color: '#0071f9', fontSize: '48px' }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
        </Grid>
    </Grid>
    
  );
};

export default HeaderAction;
