import { Button } from "@chakra-ui/button"
import { FormLabel } from "@chakra-ui/form-control"
import { Img } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import React from "react"
import { StaffLogin } from "../components/loginForm"

const App: React.FC = () => {
    return (
        // Login
        <Flex height="100vh ">
            {/* Left Side */}
            <Box width="50%">
                <Img src="https://source.unsplash.com/Kzq3JphxXiA/800x800" objectFit="cover" width="100%"></Img>
            </Box>
            {/* Right Side */}
            <Flex width="50%" height="100vh" maxWidth="md" margin="0 auto" justifyContent="center" alignItems="center">
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                    <Img src="/logo_simple.png" width="120px" height="98px" marginBottom="30px" />
                    <StaffLogin />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default App