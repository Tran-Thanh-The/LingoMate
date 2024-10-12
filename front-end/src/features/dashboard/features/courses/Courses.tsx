import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Courses() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Khóa học</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 2,
        }}
      >
        <Typography variant="body1">Filter / search</Typography>

        <Button variant='contained'>Tạo khóa học</Button>
      </Box>

      <Box>
        <Typography variant="body1">Danh sách khóa học</Typography>
      </Box>

      <Box>

      </Box>
    </Box>
  )
}
