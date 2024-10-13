import { Box } from '@mui/material'
import React from 'react'

export default function FeatureLayout({ children }) {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {children}
    </Box>
  )
}
