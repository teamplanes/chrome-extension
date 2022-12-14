import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    yellow: '#FFC845',
    orange: '#FB8040',
    dark: '#222222',
    blue: '#497AD9',
    cream: '#FFEADA',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'dark',
      },
    },
  },
});

export default theme;
