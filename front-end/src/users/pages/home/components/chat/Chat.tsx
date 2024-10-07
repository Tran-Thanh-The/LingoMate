import { Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ChatForm from "./components/chat-form/ChatForm";
import ChatInfo from "./components/chat-info/ChatInfo";
  
const Chat = () => {
    return (
        <Container maxWidth="xl" sx={{ color: '#ffffff', paddingBottom:'96px', overflowX:'unset' }}>
            <Grid container spacing={10} sx={{ 
                backgroundColor: '#00429d',
                borderRadius: '32px',
                p: { xs: '48px 40px', md: '64px 92px' },
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Grid size={{ xs: 12, md: 12, lg: 5 }}>
                    <ChatInfo />
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                    <ChatForm />
                </Grid>
            </Grid>
        </Container>

    );
};

export default Chat;
