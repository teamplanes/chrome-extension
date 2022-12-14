import React from 'react';
import { Text, Box, useColorModeValue } from '@chakra-ui/react';

export const Section = ({ title, children }) => {
  return (
    <Box w="100%">
      <Text
        fontWeight={500}
        fontSize={15}
        lineHeight="20px"
        letterSpacing="-0.02em"
        color={useColorModeValue('dark', 'cream')}
      >
        {title}
      </Text>
      <Box mt="10px" />
      {children}
    </Box>
  );
};
