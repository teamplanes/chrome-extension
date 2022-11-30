import React from 'react';
import './Popup.css';
import { Text, Box, Button } from '@chakra-ui/react';

const Popup = () => {
  return (
    <Box>
      <header>
        <Text fontSize="40px" color="white">
          PLANES
        </Text>
        {/* <a href="" target="_blank" rel="noreferrer"> */}
          <Button>Go</Button>
        {/* </a> */}
      </header>
    </Box>
  );
};

export default Popup;
