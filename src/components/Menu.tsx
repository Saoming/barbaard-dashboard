import { Box, Link } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { Menu, MenuItem } from '@chakra-ui/menu'
import React from 'react'
import { FiBookOpen, FiCalendar, FiGift, FiHome, FiUser } from 'react-icons/fi'

export const SideMenu: React.FC = () => {
    
    const router = useRouter()

    return (
        <Box maxWidth="300px" background="#1a263a " boxShadow="5px -2px 5px 0px rgba(0,0,0,0.3);" height="100vh" padding="20px">
            <Menu>
                <MenuItem onClick={() => router.push('/dashboard') } fontSize="18px" fontWeight="800" color="white">  
                    <FiHome color="white" style={{ marginRight: '15px'}} /> Home 
                </MenuItem>
                <MenuItem onClick={() => router.push('/dashboard/calendar')} fontSize="18px" fontWeight="800" color="white"> 
                    <FiCalendar color="white" style={{ marginRight: '15px'}} /> Calendar 
                </MenuItem>
                <MenuItem onClick={() => router.push('/dashboard/clients')} fontSize="18px" fontWeight="800" color="white"> 
                    <FiUser color="white" style={{ marginRight: '15px'}} /> Clients  
                </MenuItem>
                <MenuItem onClick={() => router.push('/dashboard/staff')} fontSize="18px" fontWeight="800" color="white"> 
                    <FiGift color="white" style={{ marginRight: '15px'}}  /> Staff 
                </MenuItem>
                <MenuItem onClick={() => router.push('/dashboard/services')} fontSize="18px" fontWeight="800" color="white"> 
                    <FiBookOpen color="white" style={{ marginRight: '15px'}} /> Services 
                </MenuItem>
            </Menu>
        </Box>
    )
}
