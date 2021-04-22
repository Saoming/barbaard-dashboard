import { Box, Flex } from "@chakra-ui/layout"
import React, { useState } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';

interface Props {
    barbersList: any;
}

export const BarbersCalendar: React.FC<Props> = ({barbersList}) => {
    
    return (
        <Box overflowX="visible">
        <FullCalendar
            customButtons={{
                locations: {
                    text: 'HCM',
                    click: function() {
                        alert('clicked on my function buttons');
                    }
                }
            }}
            plugins={[ resourceTimeGridPlugin, resourceDayGridPlugin, interactionPlugin ]}
            headerToolbar={{
                left: 'resourceDayGrid resourceTimeGrid locations', center: 'title', right: 'today prev,next'
            }}
            initialView="resourceTimeGrid"
            timeZone="GMT"
            editable={true}
            selectable={true}
            selectMirror={true}
            resources={barbersList}
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            height="750px"
            slotDuration="00:15:00"
            slotLabelInterval="00:45"
            allDaySlot={false}
        />
        </Box>
    )
}