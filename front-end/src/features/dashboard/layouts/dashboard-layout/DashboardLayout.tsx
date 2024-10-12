import Header from '@/features/dashboard/components/header/Header'
import Sidebar from '@/features/dashboard/components/Sidebar/Sidebar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout({ children }) {
  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Header />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: "64px",
      }}>
        <Sidebar></Sidebar>
        <Box flex={1}>
          { children }
        </Box>
      </Box>
    </Box>
  )
}
