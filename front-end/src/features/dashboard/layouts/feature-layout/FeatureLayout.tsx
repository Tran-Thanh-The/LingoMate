import { Box } from '@mui/material'
import React from 'react'

export default function FeatureLayout({ children }) {
  return (
    <Box
      sx={{
        padding: "32px",
        maxHeight: "calc(100vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  )
}
