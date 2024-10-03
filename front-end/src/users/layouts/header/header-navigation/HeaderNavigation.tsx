import {
  Box,
  IconButton,
  Menu,
  Link,
  MenuItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import * as navStyles from './styles';

const HeaderNavigation = () => {
  const [anchorElCourses, setAnchorElCourses] = useState(null);
  const [anchorElBlog, setAnchorElBlog] = useState(null);
  const [anchorElNews, setAnchorElNews] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={navStyles.containerStyles}>
      <Box sx={navStyles.mobileMenuStyles}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{
            padding: '8px',
            minWidth: 'auto',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" sx={{ ...navStyles.textStyle }} variant='body2'>
              Trang chủ
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuOpen(event, setAnchorElCourses)}
          >
            <Typography textAlign="center" sx={{ ...navStyles.textStyle }} variant='body2'>
              Khóa học <ArrowDropDownIcon />
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" sx={{ ...navStyles.textStyle }} variant='body2'>
              Kiểm tra đầu vào
            </Typography>
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuOpen(event, setAnchorElBlog)}>
            <Typography textAlign="center" sx={{ ...navStyles.textStyle }} variant='body2'>
              Blog <ArrowDropDownIcon />
            </Typography>
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuOpen(event, setAnchorElNews)}>
            <Typography textAlign="center" sx={{ ...navStyles.textStyle }} variant='body2'>
              Tin tức <ArrowDropDownIcon />
            </Typography>
          </MenuItem>
        </Menu>
      </Box>

      {/* Desktop view links */}
      <Box sx={navStyles.desktopMenuStyles}>
        <Link href="/" sx={{ ...navStyles.linkStyle }}>
          <Typography
            sx={{
              ...navStyles.textStyle,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
          >
            Trang chủ
          </Typography>
        </Link>

        <Link
          href="#"
          onClick={(event) => handleMenuOpen(event, setAnchorElCourses)}
          sx={{ ...navStyles.linkStyle }}
        >
          <Typography
            sx={{
              ...navStyles.textStyle,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
          >
            Khóa học{' '}
            <ArrowDropDownIcon sx={{ ...navStyles.arrowDownIconStyle }} />
          </Typography>
        </Link>

        <Link href="/" sx={{ ...navStyles.linkStyle }}>
          <Typography
            sx={{
              ...navStyles.textStyle,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
          >
            Kiểm tra đầu vào
          </Typography>
        </Link>

        <Link
          href="#"
          sx={{ ...navStyles.linkStyle }}
          onClick={(event) => handleMenuOpen(event, setAnchorElBlog)}
        >
          <Typography
            sx={{
              ...navStyles.textStyle,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
          >
            Blog{' '}
            <ArrowDropDownIcon sx={{ ...navStyles.arrowDownIconStyle }} />
          </Typography>
        </Link>

        <Link
          href="#"
          sx={{ ...navStyles.linkStyle }}
          onClick={(event) => handleMenuOpen(event, setAnchorElNews)}
        >
          <Typography
            sx={{
              ...navStyles.textStyle,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
          >
            Tin tức{' '}
            <ArrowDropDownIcon sx={{ ...navStyles.arrowDownIconStyle }} />
          </Typography>
        </Link>
      </Box>

      {/* Shared dropdown menus */}
      <Menu
        anchorEl={anchorElCourses}
        open={Boolean(anchorElCourses)}
        onClose={() => handleMenuClose(setAnchorElCourses)}
      >
        <MenuItem component={Link} href="/ielts">
          <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}> Luyện thi Ielts</Typography>
        </MenuItem>
        <MenuItem component={Link} href="/toeic">
          <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}>Luyện thi Toeic</Typography>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorElBlog}
        open={Boolean(anchorElBlog)}
        onClose={() => handleMenuClose(setAnchorElBlog)}
      >
        <MenuItem component={Link} href="/">
        <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}>Học Ielts</Typography>
          
        </MenuItem>
        <MenuItem component={Link} href="/">
        <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}>Học Toeic</Typography>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorElNews}
        open={Boolean(anchorElNews)}
        onClose={() => handleMenuClose(setAnchorElNews)}
      >
        <MenuItem component={Link} href="/">
        <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}>Vinh danh học viên</Typography>
        </MenuItem>
        <MenuItem component={Link} href="/">
        <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}> Sự kiện khuyến mãi</Typography>
        </MenuItem>
        <MenuItem component={Link} href="/">
        <Typography variant='body2' sx={{ ...navStyles.menuItemStyle }}>Tuyển dụng</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderNavigation;