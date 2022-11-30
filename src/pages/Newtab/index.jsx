import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './components/theme';

import Newtab from './Newtab';
import './index.css';

createRoot(window.document.querySelector('#app-container')).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Newtab />
  </ChakraProvider>
);
