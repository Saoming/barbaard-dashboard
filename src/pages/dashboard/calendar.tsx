import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { SideMenu } from "../../components/Menu"
import { BarberProfile } from "../../components/booking/BarberProfile"
import { RightSide } from "../../components/containers/rightSide"
import { BarbersCalendar } from "../../components/booking/BarbersCalendar"


const Calendar: React.FC  = () => {

    const Barbers = [
        {id: 'a', title: 'Mr Vu'},
        {id: 'b', title: 'Mr Nice'},
        {id: 'c', title: 'Mr Thanh'},
        {id: 'd', title: 'Mr Tuan'},
    ]

    return (
        <Flex>
            {/* Left Side */}
            <SideMenu />
            {/* Right Side */}
            <RightSide>
                <BarbersCalendar barbersList={Barbers} />
            </RightSide>
        </Flex>
    )
}

export default Calendar
