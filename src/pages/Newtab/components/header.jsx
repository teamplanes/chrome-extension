import React from 'react';
import {
  Flex,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiSunset } from 'react-icons/fi';

export const Header = () => {
  const [name, setName] = React.useState('');
  chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
    if (info.email) {
      setName(info.email.split('@', 1));
    }
  });

  const { toggleColorMode } = useColorMode();

  const getGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    } else if (hours < 22) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  };

  const darkToFlesh = useColorModeValue('dark', 'cream');
  const darkToOrange = useColorModeValue('dark', 'orange');
  const orangeToDark = useColorModeValue('orange', 'dark');
  const blueToYellow = useColorModeValue('blue', 'yellow');

  return (
    <Flex w="100%" justify="space-between">
      {name ? (
        <Flex gap={1}>
          <Text
            fontWeight={500}
            fontSize={30}
            lineHeight="39px"
            letterSpacing="-0.02em"
            color={darkToFlesh}
          >
            {`${getGreeting()},`}
          </Text>
          <Text
            fontWeight={500}
            fontSize={30}
            lineHeight="39px"
            letterSpacing="-0.02em"
            textTransform="capitalize"
            color={blueToYellow}
          >
            {`${name}!`}
          </Text>
        </Flex>
      ) : (
        <Text
          fontWeight={500}
          fontSize={30}
          lineHeight="39px"
          letterSpacing="-0.02em"
          color={darkToFlesh}
        >
          {`${getGreeting()}!`}
        </Text>
      )}
      <Flex gap="30px">
        <Flex flexDirection="column" alignItems="flex-end" gap="10px">
          <Text
            fontWeight={500}
            fontSize={30}
            lineHeight="39px"
            letterSpacing="-0.02em"
            color={darkToFlesh}
          >
            {new Date().toLocaleTimeString('en-UK', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}
          </Text>
          <Text
            fontWeight={500}
            fontSize={15}
            lineHeight="20px"
            letterSpacing="-0.02em"
            color={darkToFlesh}
          >
            {new Date().toLocaleDateString()}
          </Text>
        </Flex>
        <Box
          as="button"
          borderRadius="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={toggleColorMode}
          height="60px"
          width="60px"
          bg={darkToOrange}
          color={orangeToDark}
        >
          <FiSunset size={32} />
        </Box>
      </Flex>
    </Flex>
  );
};
