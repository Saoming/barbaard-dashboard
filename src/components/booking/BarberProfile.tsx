import { Img } from "@chakra-ui/image"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import React from "react"

interface Barbers {
    user_email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    current_position: string;
    profile_picture_url: string;
}

export const BarberProfile: React.FC<Barbers> = ({first_name, profile_picture_url, current_position}) => {
    
    return (
        <Flex 
        justifyContent="center" 
        flexDirection="column" 
        alignItems="center"
        padding="0 10px 10px 10px"
        maxWidth="268px"
        minW="268px"
        >
            {/* Placeholders */}
            <Flex 
            width="50px" 
            height="50px" 
            rounded="full" 
            background="rgb(165, 223, 248)"
            justifyContent="center" 
            alignItems="center" 
            userSelect="none" 
            fontSize="24px" 
            fontWeight="800"> M </Flex>
            {/* <Img src={profile_picture_url} /> */}
            <Heading as="h4" fontSize="18px" userSelect="none">{first_name}</Heading>
            <Heading as="h6" fontSize="14px" userSelect="none">{current_position}</Heading>
        </Flex>
    )
}