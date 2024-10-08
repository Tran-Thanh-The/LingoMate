import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import excellentStudent from '@/assets/course-image/excelent-student.png';
import bgTopPoint from '@/assets/course-image/top-student-bg-toeic.png';
const ExcellentMember = () => {
    return(
        <Container disableGutters maxWidth={false} sx={{ bgcolor: '#f7f3afc', backgroundImage: `url(${bgTopPoint})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', m:'96px 0', pb:'96px'}}>
            <Container maxWidth="xl">
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color:"#233876" }}>
                    <Grid size={12} sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', pb: '36px', mt: '32px'}}>
                        <Typography variant="subtitle2"  fontWeight={600}>Thành tích cao</Typography>
                        <Typography variant="h2"  fontWeight={700}>
                            Từ các học viên{' '}
                            <span
                                style={{
                                background: 'linear-gradient(180deg, #0029ff 0%, #1479f3 50%, #47b7f7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                }}
                                >
                                Xuất sắc
                                </span>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 10, lg: 9 }} sx={{ bgColor: '#ffffff'}}>
                        <Paper variant="elevation" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', color:"inherit", borderRadius:'48px',boxShadow: '0 4px 20px rgba(0, 69, 157, 0.5)',}}>
                            <Typography variant="h6"  fontWeight={600} textAlign={'center'}>Vinh danh học viên xuất sắc nhất tháng 10 🔥</Typography>
                            <Box sx={{ display:'flex', gap: '1.5rem', mt: '20px', flexDirection: {xs:'column', md: 'row'}}}>
                                <Box sx={{width: {xs:'100%', md: 300}, position:'relative'}}>
                                    <Box component="img" sx={{width: {xs:'100%', md: 300}, height: 400, objectFit:'cover', borderRadius:'24px' }} alt="slider-card" src={excellentStudent}/>
                                    <Box color={'#ffffff'} sx={{position:'absolute', bottom: '8px', left: 0,right: 0, backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 13.15%, rgba(0, 0, 0, 0.00) 100%)', pl:'24px' ,pb:'8px'}}>
                                        <Typography variant="subtitle1" >Bảo Trân</Typography>
                                        <Typography variant="body2" fontWeight={600}>26 tuổi •  Ngày thi: 05.06.2024</Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between', gap:{xs:'1rem', md: '0.25rem'}}}>
                                    <Typography variant="body1" >
                                        Các đề trong Phòng Luyện ảo mình thấy sát với đề thực tế. Mình rất ưng phần chấm chữa chi tiết,
                                        phần này giải thích cho mình cả những lỗi sai lẫn câu đúng,
                                        từ đó mình cải thiện dần dần cả 2 kỹ năng Listening và Reading.
                                    </Typography>
                                    <Box sx={{ display:'flex', justifyContent: 'space-between', alignItems:'center'}}>
                                        <Box sx={{ display:'flex', gap: '0.25rem',alignItems:'center' }}>
                                            <Typography variant="h2" color="#f49000" fontWeight={600}>990</Typography>
                                            <Typography variant="body1" sx={{ textTransform: 'uppercase', fontWeight: 600, lineHeight:'initial'}}>Toeic <br />L&R </Typography>
                                        </Box>
                                        
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: {xs:'1rem',sm: '2rem', lg:'4rem' }}}>
                                            <Typography variant="subtitle2" color="#00429d" fontWeight={600} sx={{ display:'flex', flexDirection:{xs:'column', sm:'row', md:'column', lg:'row'}, alignItems:'center', gap: '0.25rem'}}>
                                            495 {' '}
                                            <span style={{ color: '#374151', fontSize:'12px' }}>Listening</span>
                                            </Typography>
                                            <Box sx={{ height: '1.25rem', width: '1px', backgroundColor: '#c3ddfd' }} />
                                            <Typography variant="subtitle2" color="#00429d" fontWeight={600} sx={{ display:'flex',flexDirection:{xs:'column', sm:'row', md: 'column', lg:'row'}, alignItems:'center', gap: '0.25rem'}}>
                                            495 {' '}
                                            <span style={{ color: '#374151', fontSize:'12px' }}>Reading</span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>    
                </Grid>
            </Container>
        </Container>
    );
};
export default ExcellentMember;
