import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@mui/material/styles';

const Partner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const partners = [
    "https://storage.googleapis.com/materials-elements/course/cover/PRCMswTMDi3wCWidTEKxg1ZuqMJHDw9JrXvNla43.jpeg",
    "https://storage.googleapis.com/materials-elements/course/cover/OzFJ5M5unl2GKRy2QjwMpfd0bv7gflrrqloW8CRl.png",
    "https://storage.googleapis.com/materials-elements/course/cover/qcyJuC3mzodlxAEqvCwMigeRNKFSrzzZ0Roh8IvV.png"
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const PartnerBox = ({ src, index }) => (
    <Box 
      sx={{ 
        height: 100, 
        width: '100%',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: 'white',
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Box 
        component="img" 
        src={src}
        alt={`Partner ${index + 1}`}
        sx={{ 
          maxHeight: '80%', 
          maxWidth: '80%', 
          objectFit: 'contain' 
        }} 
      />
    </Box>
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAutoSlide = () => {
      if (sliderRef.current) {
        timeoutId = setTimeout(() => {
          sliderRef.current.slickNext();
        }, 5000);
      }
    };

    if (isSmallScreen) {
      startAutoSlide();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentSlide, isSmallScreen]);

  return (
    <Container maxWidth="xl" sx={{ pb: 12, pt: 12 }}>
      <Typography sx={{ mb: 6, fontWeight: 700, textAlign: 'center', fontSize: { xs: '24px', md: '30px'}}}>
        Chúng tôi tự hào là đối tác của
      </Typography>
      {isSmallScreen ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {partners.map((src, index) => (
            <Box sx={{ pb: 3 }} key={index}>
              <PartnerBox src={src} index={index} />
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={3}>
          {partners.map((src, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <PartnerBox src={src} index={index} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Partner;
