import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      50: '#5fccff',
      900: '#454d66',
    },
    purple: {
      50: '#d09cff',
    },
    green: {
      50: '#9ae270',
    },
    yellow: {
      50: '#ffe770',
    },
    transparentWhite: 'rgba(255,0,0,0.1)',
  },
});
