import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import React, { useState } from "react"
import DatePicker from "react-date-picker/dist/entry.nostyle"
import { SideMenu } from "../../components/Menu"

const Dashboard: React.FC  = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Flex>
        <SideMenu />
        <Box width="calc(100% - 300px)" p="20px">
            <Flex justifyContent="space-between" flexDirection="column" mb="15px">
                <Flex marginBottom="30px">
                    <Heading as="h2" mr="15px">Home</Heading>
                </Flex>
                Welcome to Dashboard

            </Flex>
        </Box>
        </Flex>
    )
}

export default Dashboard