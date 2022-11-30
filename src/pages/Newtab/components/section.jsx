import React from 'react';
import { Text, Box, Card } from '@chakra-ui/react';

export const Section = ({ title, children }) => {
  return (
    <Box w="100%">
      <Box mt={2} />
      <Card borderWidth={2} borderColor="black" overflow="hidden">
        <Box borderBottomWidth={2} borderColor="black" padding="16px 24px">
          <Text fontSize="24px">{title}</Text>
        </Box>
        {children}
      </Card>
    </Box>
  );
};
