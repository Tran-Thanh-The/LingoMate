import { Box, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

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

  const menuItemStyles = {
    minWidth: '200px',
    padding: '8px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#ebf5ff',
    },
  };

  const textStyle = {
    borderRadius: '24px',
    padding: {
      md: '4px',
      lg: '8px 12px',
    },
    color: '#233876',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    fontSize: {
      md: '13px',   
      lg: '16px',   
    },
    '&:hover': {
      backgroundColor: '#ebf5ff',
    },
  };

  const linkStyles = {
    padding: {
      md: '8px 14px',
      lg: '8px 20px',
    },
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
    minWidth: 0,
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden', 
  };

  const mobileMenuStyles = {
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    justifyContent: 'center',
  };

  const desktopMenuStyles = {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'space-between',
    overflow: 'hidden',
  };
  return (
    <Box sx={containerStyles}>
      <Box sx={mobileMenuStyles}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{
            ...textStyle,
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
            <Typography textAlign="center" sx={{...textStyle}}>Trang chủ</Typography>
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuOpen(event, setAnchorElCourses)}>
            <Typography textAlign="center" sx={{...textStyle}}>Khóa học <ArrowDropDownIcon /></Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" sx={{...textStyle}}>Kiểm tra đầu vào</Typography>
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuOpen(event, setAnchorElBlog)}>
            <Typography textAlign="center" sx={{...textStyle}}>Blog <ArrowDropDownIcon /></Typography>
          </MenuItem>
          <MenuItem onClick={(event) => handleMenuOpen(event, setAnchorElNews)}>
            <Typography textAlign="center" sx={{...textStyle}}>Tin tức <ArrowDropDownIcon /></Typography>
          </MenuItem>
        </Menu>
      </Box>

      {/* Desktop view links */}
      <Box sx={desktopMenuStyles}>
        <Link href="/" sx={linkStyles}>
          <Typography sx={{ ...textStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Trang chủ
          </Typography>
        </Link>

        <Link
          href="#"
          sx={linkStyles}
          onClick={(event) => handleMenuOpen(event, setAnchorElCourses)}
        >
          <Typography sx={{ ...textStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Khóa học <ArrowDropDownIcon sx={{ ml: {md: 0, lg: 1}, flexShrink: 0 }} />
          </Typography>
        </Link>

        <Link href="/" sx={linkStyles}>
          <Typography sx={{ ...textStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Kiểm tra đầu vào
          </Typography>
        </Link>

        <Link
          href="#"
          sx={linkStyles}
          onClick={(event) => handleMenuOpen(event, setAnchorElBlog)}
        >
          <Typography sx={{ ...textStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Blog <ArrowDropDownIcon sx={{ ml: {md: 0, lg: 1}, flexShrink: 0 }} />
          </Typography>
        </Link>

        <Link
          href="#"
          sx={linkStyles}
          onClick={(event) => handleMenuOpen(event, setAnchorElNews)}
        >
          <Typography sx={{ ...textStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Tin tức <ArrowDropDownIcon sx={{ ml: {md: 0, lg: 1}, flexShrink: 0 }} />
          </Typography>
        </Link>
      </Box>

      {/* Shared dropdown menus */}
      <Menu
        anchorEl={anchorElCourses}
        open={Boolean(anchorElCourses)}
        onClose={() => handleMenuClose(setAnchorElCourses)}
      >
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Luyện thi Ielts
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Luyện thi Toeic
          </Link>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorElBlog}
        open={Boolean(anchorElBlog)}
        onClose={() => handleMenuClose(setAnchorElBlog)}
      >
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Học Ielts
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Học Toeic
          </Link>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={anchorElNews}
        open={Boolean(anchorElNews)}
        onClose={() => handleMenuClose(setAnchorElNews)}
      >
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Vinh danh học viên
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Sự kiện khuyến mãi
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" sx={{ ...linkStyles, ...menuItemStyles }}>
            Tuyển dụng
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderNavigation;
