import React from 'react';
import { Greeting } from './components/greeting';
import { Announcements } from './components/announcements';
import { QuickAccessTools } from './components/quick-access-tools';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Section } from './components/section';

const Newtab = () => {
  return (
    <Box bg="#ffeada" minHeight="100vh">
      {/* greeting */}
      <Greeting />
      <Flex mx={8} gap={10}>
        <Flex flexDir="column" flex={3} gap={10}>
          <Announcements />
          {/* Slack Channel announcements */}
          {/* Runn timesheet notifications */}
          {/* Quick access links  */}
          <QuickAccessTools />
        </Flex>
        <Flex flex={1}>
          <Section title="Runn">
            <Text>Notifications here</Text>
          </Section>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Newtab;
