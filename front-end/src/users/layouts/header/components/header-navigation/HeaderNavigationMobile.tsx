import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from '@mui/material';
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowRight as ArrowRightIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import * as navStyles from './HeaderNavigation.styles';
import Grid from '@mui/material/Grid2';
import logo from '@/assets/logo.svg';

const MobileMenu = ({ openDrawer, handleCloseNavMenu, routes }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState({});

  const handleToggleSubmenu = (key) => {
    setOpenSubmenu(prev => {
      return {
        ...Object.keys(prev).reduce((acc, curr) => {
          acc[curr] = false; 
          return acc;
        }, {}),
        [key]: !prev[key]
      };
    });
  };

  const isActive = (menu) => {
    return menu.items
      ? menu.items.some((route) => location.pathname.startsWith(route.path))
      : location.pathname === menu.path;
  };

  const MenuLink = ({ to, label, active }) => (
    <NavLink to={to} style={{ ...navStyles.navLinkStyle, width: '100%' }} onClick={handleCloseNavMenu}>
      <Typography sx={{ ...navStyles.textStyle, ...(active ? navStyles.activeStyle : {}) }} variant="body2">
        {label}
      </Typography>
    </NavLink>
  );

  const MenuItemWithSubmenu = ({ menu }) => {
    const active = isActive(menu);
    return (
      <>
        <ListItem 
          onClick={() => handleToggleSubmenu(menu.key)} 
          sx={{ cursor: 'pointer', ...(active ? navStyles.activeStyle : {}) }}
        >
          <ListItemText 
            primary={menu.label} 
            primaryTypographyProps={{ 
              variant: 'body2', 
              sx: { ...navStyles.textStyle, ...(active ? navStyles.activeStyle : {}) } 
            }} 
          />
          {openSubmenu[menu.key] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItem>
        <Collapse in={openSubmenu[menu.key]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menu.items.map((item) => (
              <ListItem 
                key={item.path} 
                component={NavLink} 
                to={item.path} 
                onClick={handleCloseNavMenu} 
                sx={{ 
                  pl: 4, 
                  ...navStyles.navLinkStyle, 
                  ...(location.pathname.startsWith(item.path) ? navStyles.activeStyle : {}) 
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ variant: 'caption', sx: navStyles.textStyle }} 
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </>
    );
  };

  return (
    <>
      <Drawer anchor="left" open={openDrawer} onClose={handleCloseNavMenu}>
        <Grid sx={{ width: {xs:250, sm: 450} }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
          <Box
          component="img"
          sx={{
            height: 'auto',
            width: 70,
            paddingLeft: '8px',
          }}
          alt="header-logo"
          src={logo}
        />
            <IconButton onClick={handleCloseNavMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {routes.map((menu) => (
              <React.Fragment key={menu.key}>
                {menu.items ? (
                  <MenuItemWithSubmenu menu={menu} />
                ) : (
                  <ListItem>
                    <MenuLink 
                      to={menu.path} 
                      label={menu.label} 
                      active={isActive(menu)} 
                    />
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Drawer>
    </>
  );
};

export default MobileMenu;
