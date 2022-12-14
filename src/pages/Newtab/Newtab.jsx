import React from 'react';
import { Header } from './components/header';
import { Announcements } from './components/announcements';
import { Reminder } from './components/reminder';
import { QuickAccessTools } from './components/quick-access-tools';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Section } from './components/section';
import { BorderBox } from './components/border-box';

const Newtab = () => {
  return (
    <Box bg={useColorModeValue('cream', 'dark')} minHeight="100vh" p="100px">
      <Header />
      <Flex mt={30} flexDirection="column" gap="45px">
        <Flex gap="15px">
          <Flex flex={3}>
            <Announcements />
          </Flex>
          <Flex flex={1}>
            <Section title="Reminders">
              <BorderBox>
                <Reminder />
              </BorderBox>
            </Section>
          </Flex>
        </Flex>
        <QuickAccessTools />
      </Flex>
    </Box>
  );
};

export default Newtab;
