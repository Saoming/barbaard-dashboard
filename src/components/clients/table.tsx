import { Input } from "@chakra-ui/input"
import { Box, Heading, Link } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"
import React,{ useState,useEffect } from "react"

interface Clients {
    data: [];
    content: [];
}

export const ClientDataTables: React.FC<Clients> = (props) => {

    const [onOpen, setOnOpen] = useState(false);
    const [value, setValue] = useState("");

    function handleClients() {
        setOnOpen(!onOpen);
    }

    // function fetchPageNumbers() {
    //     const StartPage =  50;
    //     const TotalNumbers = props.content.length;
    //     const PaginationNumber = Math.ceil(TotalNumbers / StartPage);
    // }

    return (
        <Box>
            <Input placeholder="search for clients by name, email, phone number" type="search" mb="30px" onChange={ e => setValue(e.target.value)} />
            <Table variant="striped" colorScheme="teal" size="lg">
                <Thead>
                    <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Mobile Number</Th>
                    <Th isNumeric>Gentleman's Agreement</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { props.content.filter( (data: any) => {
                        return data.display_name.toLowerCase().includes(value);
                    }).slice(0, 3248).map( ( data: any ) => (
                        <Tr key={data.ID}  onClick={handleClients}>
                            <Th padding="40px 20px" fontSize="24px" fontWeight="bold"> {data.display_name.charAt(0)} </Th>
                            <Th padding="40px 20px" fontSize="16px" cursor="pointer" color="blue.500"> {data.display_name} </Th>
                            <Th padding="40px 20px" fontSize="16px"> {data.billing_email}</Th>
                            <Th padding="40px 20px" fontSize="16px"> {data.billing_phone}</Th>
                            <Th padding="40px 20px" fontSize="16px" isNumeric> { data.gentleman_agreements == null ? '0' :  data.gentleman_agreements }</Th>
                        </Tr>
                    )) }
                </Tbody>
                <TableCaption> Showing {props.content.length} entries </TableCaption>
            </Table>
            { onOpen == true && (
                <Box position="fixed" right="0" width="25%" height="100%" top="0" background="black" color="white" transition="ease-in 3s"> 
                    True 

                </Box>
            )}
        </Box>

    )
}