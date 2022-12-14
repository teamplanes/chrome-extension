import React from 'react';
import { Box } from '@chakra-ui/react';

export const BorderBox = ({ title, children }) => {
  return (
    <Box
      borderWidth={1}
      borderColor="yellow"
      borderRadius="15px"
      p="30px"
      bg="white"
    >
      {children}
    </Box>
  );
};
