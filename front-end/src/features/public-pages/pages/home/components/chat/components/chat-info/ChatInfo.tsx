import React from 'react';
import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import beeImage from '@/assets/chat-image/bee.svg';

const ChatInfo: React.FC = () => {
  return (
    <Grid container spacing={{lg: 30}} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'column' }, flexWrap: { md: 'nowrap' }}}>
        <Grid size={{ xs: 12, md: 6, lg: 12 }} sx={{ 
            order: { xs: 2, md: 1 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mb: { xs: 4, md: 0 }
        }}>
            <Typography variant="h3" sx={{ fontSize: {xs: '32px', md: '44px'} }}>
                Bạn còn
             </Typography>   
            <Typography variant="h3" sx={{ fontSize: {xs: '32px', md: '44px'} }}>câu hỏi khác?</Typography>
            
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
                Hãy để lại thông tin, LingoMate sẽ liên hệ và hỗ trợ xử lý mọi vướng mắc của bạn
            </Typography>
        </Grid>

        {/* Hình ảnh */}
        <Grid size={{ xs: 12, md: 6, lg: 12 }} sx={{ 
            order: { xs: 1, md: 2 },
            display: 'flex',
            justifyContent: 'flex-end',
            mb: { xs: 4, md: 0 }
        }}>
            <Box
                component="img"
                sx={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: '100%',
                }}
                alt="slide_icon"
                src={beeImage}
            />
        </Grid>
    </Grid>
    );
};

export default ChatInfo;
