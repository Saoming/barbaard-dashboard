import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
}

const fonts = {
  heading: '\'Mulish\', sans-serif',
  body: '\'Mulish\', sans-serif',
  mono: '\'Mulish\', sans-serif'
}

const theme = extendTheme({ colors, config, fonts })

export default theme
