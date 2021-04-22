import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../style/theme'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import  '../style/theme.css';


function MyApp ({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp
