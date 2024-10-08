import { Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import accordionData from './components/AccordionData';
import { AccordionGroup } from "./components/AccordionGroup";
import { relative } from "path";
const AdditionalInfo: React.FC = () => {
    return(
        <Container disableGutters maxWidth={false} sx={{ backgroundColor:'#f7fafc', m: '50px 0'}}>
            <Container maxWidth="xl">
                <Grid container sx={{p: '64px 48px', position: 'relative' }} spacing={3}>
                    <Grid size={{xs: 12, md: 5}} sx= {{ display: 'flex', flexDirection: 'column'}}>
                        <Grid size={{ xs: 12}} sx={{ paddingBottom:'24px'}}>
                            <Typography variant="h3" fontSize={{ xs: "32px", md:"44px"}} 
                                sx={{
                                    color:"#233876",
                                    background: 'linear-gradient(180deg, #002EA6 0%, #0047FF 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent', 
                                }}>
                                Lingo giúp bạn
                            </Typography>
                            <Typography variant="h3" fontSize={{ xs: "32px", md:"44px"}} color="#233876">tháo gỡ mọi thắc mắc</Typography>
                        </Grid>
                        
                        <Button variant="contained" color="info" size="large" 
                            sx={{ fontWeight:700, width: {xs: '100%', md: '60%' ,lg: '50%' }, pl: '24px' , pr:'24px', }}>Đặt thêm câu hỏi
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: 7}} sx={{ display: "flex", flexDirection:'column', gap: 3}}>
                        <AccordionGroup accordionData={accordionData} />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default AdditionalInfo;
