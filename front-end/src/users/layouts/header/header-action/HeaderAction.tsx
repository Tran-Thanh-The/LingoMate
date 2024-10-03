import { Button, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const user = {
//   name: 'Trần Thanh Thế',
//   email: 'tranthanh@gmail.com',
// };
// localStorage.setItem('user', JSON.stringify(user));
const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;
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
  return (
    <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{ witdh: '130px', height: '44px' }}
        >
          Bắt đầu học
        </Button>
      </Grid>

      {user && (
        <Grid>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{ color: '#0071f9', fontSize: '48px' }}
                />
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
              <Grid>
                <MenuItem >
                <Tooltip title={`${user.name} ${user.email}`}>
                  <Link
                    href="/"
                    sx={{
                      padding: '8px',
                      textDecoration: 'none',
                      color: '#23242d',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <AccountCircleIcon
                      sx={{ color: '#0071f9', fontSize: '48px' }}
                    />
                    <Grid>
                      <Typography variant="caption" sx={{ fontWeight: 700 }}>
                        {user.name}
                      </Typography>
                      <Typography sx={{ fontSize: '12px' }}>
                        {user.email}
                      </Typography>
                    </Grid>
                  </Link>
                  </Tooltip>
                </MenuItem>

                <MenuItem sx={{ borderTop: '1px solid #6b7280' }}>
                  <Link
                    href="/"
                    sx={{ fontSize: '0.875rem', color: 'inherit' }}
                  >
                    Trao đổi về bài chấm chữa
                  </Link>
                </MenuItem>
                <MenuItem sx={{ fontSize: '0.875rem', color: 'inherit', borderBottom: '1px solid #6b7280' }}>
                  <Link href="/">Cài đặt</Link>
                </MenuItem>
                <MenuItem sx={{ fontSize: '0.875rem', color: '#e20d2c' }}>
                  <Link href="/">Đăng xuất</Link>
                </MenuItem>
              </Grid>
            </Menu>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default HeaderAction;
