import { Box } from "@chakra-ui/layout"
import React from "react"

export const RightSide: React.FC = ({children}) => {
    return <Box 
            width="fill-available" 
            p="20px" 
            height="100%" 
            padding="20px"> {children} </Box>
}