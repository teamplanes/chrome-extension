import React from 'react';
import {
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const Reminder = () => {
  const isFriday = new Date().getDay() === 5;

  return (
    <UnorderedList color={useColorModeValue('dark', 'dark')}>
      {isFriday ? (
        <ListItem fontWeight={500} fontSize={20} letterSpacing="-0.02em">
          <a href={'https://app.runn.io/'} target="_blank" rel="noreferrer">
            <Text fontWeight="700"> Its Friday 😊</Text>
            <Text> Click here to fill in your timesheet! 📝 </Text>
          </a>
        </ListItem>
      ) : (
        <Text> You have no reminders </Text>
      )}
    </UnorderedList>
  );
};
