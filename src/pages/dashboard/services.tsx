import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import React, { useState } from "react"
import DatePicker from "react-date-picker/dist/entry.nostyle"
import { SideMenu } from "../../components/Menu"

const Services: React.FC  = () => {
    const [value, onChange] = useState(new Date());

    return (
        <Flex>
        <SideMenu />
        <Box width="calc(100% - 300px)" p="20px">
            <Flex justifyContent="space-between" mb="15px">
                <Flex>
                    <Heading as="h2" mr="15px">Services</Heading>
                </Flex>
            </Flex>
            <Tabs>
                <TabList>
                    <Tab>Services Menu</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Flex justifyContent="space-between">
                            <Box maxWidth="200px">
                                <Button colorScheme="blue">  Export </Button>
                            </Box>
                            <Box maxWidth="200px">
                                <Button colorScheme="blue"> Add New </Button>
                            </Box>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        </Flex>
    )
}

export default Services