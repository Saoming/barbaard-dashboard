import { Input } from "@chakra-ui/input"
import { Box, Link } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import React from "react"

interface Barbers {
    Name: String;
    MobileNumber: String;
    Email: String;
    Title: String;
}

export const StaffTable: React.FC<Barbers> = ({Name, Email, Title, MobileNumber}) => {

    function handleClients() {
        alert("do sum0");
    }

    return (
        <Box>
            <Table variant="striped" colorScheme="teal" size="lg">
                <Thead>
                    <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Mobile Number</Th>
                    <Th>Title</Th>
                    <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr onClick={handleClients}>
                        <Th padding="40px 20px" fontSize="24px" fontWeight="bold"> M </Th>
                        <Th padding="40px 20px" fontSize="16px" cursor="pointer" color="blue.500"> {Name} </Th>
                        <Th padding="40px 20px" fontSize="16px"> {Email}</Th>
                        <Th padding="40px 20px" fontSize="16px"> {MobileNumber}</Th>
                        <Th padding="40px 20px" fontSize="16px" > {Title}</Th>
                    </Tr>
                </Tbody>
                <TableCaption> Showing 1 to 50 of 1 entries </TableCaption>
            </Table>
        </Box>

    )
}