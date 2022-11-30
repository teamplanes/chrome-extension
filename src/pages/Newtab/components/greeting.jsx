import React from 'react';
import { Text, Flex, Switch, Heading, useColorMode } from '@chakra-ui/react';

export const Greeting = () => {
  // returns the greeting for the approriate time of day
  // returns the users name... which is taken from Google login otherwise just returns there.

  const [email, setEmail] = React.useState('');
  chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
    if (info.email) {
      setEmail(info.email);
    }
  });
  const name = email.split('@', 1);

  const { toggleColorMode } = useColorMode();

  return (
    <Flex p={8} w="100%" justify="space-between">
      {email ? (
        <Text
          textTransform="capitalize"
          fontSize="48px"
        >{`Hello, ${name}!`}</Text>
      ) : (
        <Heading size="xl"> Hello there!</Heading>
      )}
      <Switch onChange={toggleColorMode} />
    </Flex>
  );
};
