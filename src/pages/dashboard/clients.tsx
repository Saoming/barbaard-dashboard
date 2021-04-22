import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import React, { useState, useEffect } from "react"
import DatePicker from "react-date-picker/dist/entry.nostyle"
import { ClientsMenu } from "../../components/clients/menu"
import { ClientDataTables } from "../../components/clients/table"
import { SideMenu } from "../../components/Menu"
import firebase from "../../firebase"

const Clients: React.FC  = () => {
    const [value, onChange] = useState(new Date());
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("users");
    
    function getUsers(items:any) {
        setLoading(true);
        ref.onSnapshot( (querySnapshot) => {
            const items = [];
            querySnapshot.forEach( (doc) => {
                items.push(doc.data());
            });
            setUsers(items);
            setLoading(false);
        } );
    }

    useEffect(() => {
        getUsers();
    }, [])

    // console.log(users);

    if (loading) {
        return <Box> We're Loading the Clients Data... </Box>;
    }

    return (
        <Flex>
        <SideMenu />
        <Box width="calc(100% - 300px)" p="20px" height="100vh" overflowY="auto">
            <ClientsMenu />

            <ClientDataTables content={users} />
        </Box>
        </Flex>
    )
}

export default Clients