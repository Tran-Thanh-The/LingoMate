import React, { useState, useEffect } from 'react';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1000, 
  });

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab 
         
        size="small" 
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: {xs: 48, md: 64},
          right: {xs: 8, md: 20},
          backgroundColor: '#1479f4bf',
          width: {xs: '48px', md:'64px'},
          height: {xs: '48px', md:'64px'},
          '&:hover' : {
            backgroundColor: '#1479f4bf',
            opacity: 0.9
          }
        }}
        aria-label="scroll back to top"
      >
        <NorthIcon sx={{ color: '#fff'}}/>
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
