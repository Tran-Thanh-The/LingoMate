import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import SliderCard from "./components/slider-card/SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RandomDots from '@/users/components/random-dots/RandomDots';
interface SliderInstance extends Slider {
    slickGoTo: (slide: number) => void;
  }
const CustomSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<SliderInstance>(null);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderCards = [
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/eeYhoDxxYmhsytRsVjwkcWDeULBYLHNMJDAhPuww.jpg" />,
            name: "Thầy Tú Phạm (MSc)",
            description: "8.5 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/AbSWtnaCBhllcUOFn6TmovpftgcbecmlJzqBah8s.png" />,
            name: "Cô Trang Phương (MA)",
            description: "8.0 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/xKU0u0sHJKTGUc8mY5bPi0RptWuNYGMgbsr8g9RP.png" />,
            name: "Cô Quỳnh Nguyễn",
            description: "9.0 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/Xrkoe36UmkE0XtUz4TDo9hhP5gx65THCvK63aTKG.jpg" />,
            name: "Thầy Vũ Tùng",
            description: "8.5 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/zxCGRITEY1RlhtRD8wxPSlsT3dMVkU3xlb8y5dce.jpg" />,
            name: "Thầy Trung Đức",
            description: "8.5 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/cjx9zWBR2CXwI4NurT62HAvWwCH6u1HZNc9OYODa.jpg" />,
            name: "Cô Linh Đỗ",
            description: "8.0 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/TKvUk1HsPcPlgATKjSjygUjxjAS20SSPoN8M7DT5.jpg" />,
            name: "Thầy Hoàng Nguyễn",
            description: "8.5 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/DcY3ZTLkSIVY7nQMGNbAefwRJPRiYki6AVcVvjMs.jpg" />,
            name: "Cô Mai Trần",
            description: "8.0 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/iFt0rmKfOp7piaTScRx1YQp5bWMDLBCygcbXN6gE.jpg" />,
            name: "Cô Anh Trúc",
            description: "8.0 Overall"
        },
        {
            img: <Box component="img" sx={{ width: 320, height: 320 }} alt="slider-card" src="https://storage.googleapis.com/materials-elements/user/avatar-web/RSqlV77LI5b79rFiTlVutc14LrlzTyJWDyk2pYbm.jpg" />,
            name: "Cô Tường Thanh",
            description: "8.0 Overall"
        }
    ];

    const CustomPagination = ({ slideCount, currentSlide, goToSlide }: { slideCount: number, currentSlide: number, goToSlide: (index: number) => void }) => {
        const bars = Math.ceil(slideCount / slidesToShow);
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                {[...Array(bars)].map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => goToSlide(index * slidesToShow)}
                        sx={{
                            width: '30px',
                            height: '4px',
                            backgroundColor: Math.floor(currentSlide / slidesToShow) === index ? '#1a56db' : '#e5e7eb',
                            margin: '0 4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        }}
                    />
                ))}
            </Box>
        );
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        arrows: false,
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return(
        <Container disableGutters maxWidth={false}  sx={{backgroundColor: 'rgb(245 246 250)', pb: 3, position:'relative'}}>
            <Container maxWidth="xl" sx={{ pt: 12, pb: 6}}>
                <Typography variant="h5" component="h2" align="center">
                    100% giáo viên trên LingoMate đạt{' '}
                    <Typography component="h4" variant="subtitle1" sx={{ color: '#1a56db', textTransform: 'uppercase', fontWeight: 700 }}>
                        IELTS 8.0-8.5
                    </Typography>
                </Typography>
                <Typography variant="body2" color="#9ca3af" align="center" sx={{ mb: 4 }}>
                    Cựu du học sinh hoặc tốt nghiệp từ ĐH danh tiếng
                </Typography>

                <Slider ref={sliderRef} {...settings}>
                    {sliderCards.map((sliderCard, index) => (
                        <Grid size={{ xs: 12, sm: 3}} sx ={{alignItems: 'center', pb: 5}} key={index} >
                            <SliderCard {...sliderCard}/>
                        </Grid>
                    ))}
                </Slider>
                <CustomPagination 
                    slideCount={sliderCards.length} 
                    currentSlide={currentSlide} 
                    goToSlide={goToSlide}
                />
            </Container>
            
            <RandomDots 
                count={6}
                colors={['#FF5722', '#4CAF50', '#2196F3', '#FFC107']} 
                sizeRange={[4, 16]} 
                positionRange={[1, 100]}
            />

        </Container>
    );
};

export default CustomSlider;