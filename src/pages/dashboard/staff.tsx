import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import React, { useState } from "react"
import DatePicker from "react-date-picker/dist/entry.nostyle"
import { SideMenu } from "../../components/Menu"
import { StaffMembers } from "../../components/staff/staffmembers"

const Staff: React.FC  = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Flex>
        <SideMenu />
        <Box width="calc(100% - 300px)" p="20px" margin="0 auto">
            <Flex justifyContent="space-between" mb="15px">
                <Flex>
                    <Heading as="h2" mr="15px">Staff</Heading>
                </Flex>
            </Flex>
            <Box>
            <Tabs>
                <TabList>
                    <Tab>Staff  Working Hours</Tab>
                    <Tab>Closed Dates</Tab>
                    <Tab>Staff Members</Tab>
                    <Tab>User Permissions</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p>Features Coming Soon !</p>
                    </TabPanel>
                    <TabPanel>
                    <p>Features Coming Soon !</p>
                    </TabPanel>
                    <TabPanel>
                        <StaffMembers />
                    </TabPanel>
                    <TabPanel>
                    <p>Features Coming Soon !</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
        </Box>
        </Flex>
    )
}

export default Staff