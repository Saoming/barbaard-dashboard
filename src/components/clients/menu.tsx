import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import React, { useState } from "react"
import { NewButton } from "../common/AddNewButton"

export const ClientsMenu: React.FC = () => {
    
    return (
        <Flex justifyContent="space-between" mb="15px">
            <Box width="50%">
                <Heading as="h2" mr="15px">Clients</Heading>
            </Box>
            <Flex width="50%" alignItems="center" justifyContent="flex-end">
                <Box maxWidth="200px" mr="30px">
                    <Select placeholder="options">
                        <option> Download  CSV </option>
                    </Select>
                    </Box>
                    <NewButton buttonName="New Clients" modalTitle="Add New Clients" />
            </Flex>
        </Flex>
    )
}