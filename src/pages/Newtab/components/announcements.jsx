import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  Flex,
  Box,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { getSlackFetch } from '../utils/getSlackFetch';
import { Section } from './section';
import { BorderBox } from './border-box';

const getMessages = async () => {
  try {
    const conversationHistory = await getSlackFetch(
      '/conversations.history?channel=C04CX09AFFS'
    );

    const messages = conversationHistory.messages.filter(
      (message) => message.subtype !== 'channel_join'
    );

    return messages[0];
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (userId) => {
  try {
    const user = await getSlackFetch(`/users.profile.get?user=${userId}`);

    return user.profile;
  } catch (error) {
    console.error(error);
  }
};

const getPermaLink = async (message) => {
  try {
    const response = await getSlackFetch(
      `/chat.getPermalink?channel=C04CX09AFFS&message_ts=${message.ts}`
    );
    return response.permalink;
  } catch (error) {
    console.error(error);
  }
};

export const Announcements = () => {
  // WebClient instantiates a client that can call API methods
  // When using Bolt, you can use either `app.client` or the `client` passed to listeners.
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [permaLink, setPermalink] = useState('');
  const getSlackData = async () => {
    const message = await getMessages();
    const user = await getUser(message.user);
    const link = await getPermaLink(message);
    setPermalink(link);
    setUser(user);
    setMessage(message.text);
  };

  useEffect(() => {
    getSlackData();
  }, []);
  const name = user.first_name + ' ' + user.last_name;

  return (
    <Section title="Announcements">
      <BorderBox>
        <Flex flexDir="row" alignItems="center">
          <Image
            objectFit="cover"
            w="45px"
            h="45px"
            src={user.image_48}
            alt="User Avatar"
            borderRadius="50%"
            border="1px solid #497AD9"
            mr={4}
          />
          <Text
            fontWeight={700}
            fontSize={15}
            lineHeight="20px"
            letterSpacing="-0.02em"
          >
            {name}
          </Text>
        </Flex>
        <Text
          py="30px"
          fontWeight={500}
          fontSize={30}
          lineHeight="39px"
          letterSpacing="-0.02em"
        >
          {message}
        </Text>
        <Box mt={2} />
        <Link href={permaLink} _hover={{ textDecoration: 'none' }}>
          <Box
            as="button"
            bg={useColorModeValue('orange', 'blue')}
            width="270px"
            borderRadius="2px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py="15px"
            pl="15px"
            pr="20px"
          >
            <Text
              fontWeight={700}
              fontSize={20}
              lineHeight="26px"
              letterSpacing="-0.02em"
              color={useColorModeValue('dark', 'white')}
            >
              View in Slack
            </Text>
            <AiOutlineArrowRight size={32} />
          </Box>
        </Link>
      </BorderBox>
    </Section>
  );
};
