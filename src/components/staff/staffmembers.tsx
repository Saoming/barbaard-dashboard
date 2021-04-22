import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import React, { useState } from "react"
import { NewButton } from "../common/AddNewButton"
import { StaffTable } from "./table"

export const StaffMembers: React.FC  = () => {

    return (
        <Box p="20px">
            <Flex justifyContent="space-between" mb="15px">
                <Box maxWidth="200px" mr="30px">
                    <Select placeholder="options">
                        <option> Download  CSV   </option>
                        <option> Download  Excel </option>

                    </Select>
                </Box>
                <Box maxWidth="300px" mr="30px">
                    <Input placeholder="Search By Name or Title" type="search" mb="30px" />
                </Box>
                <Box maxWidth="200px">
                    <NewButton buttonName="New Staff" modalTitle="Add New Staff" />
                </Box>
            </Flex>
            <StaffTable Name="Mr Vu" Email="vu@houseofbarbaard.com" Title="HeadBarbers" MobileNumber="+84 70262672"  />
        </Box>
    )
}
