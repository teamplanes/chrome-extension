import React from 'react';
import { ChakraProvider, Flex, Text, Box, Image } from '@chakra-ui/react';

const pageData = {
  name: 'Eddie',
  news: {
    headline: 'Pink dolphins repopulate Hong Kong waters',
    story:
      'The coronavirus pandemic has had a major impact on cruise and ferry industries worldwide. In Hong Kong, high-speed ferries were temporarily shut down since the start of the pandemic. Shortly after the waters settled in lockdown, large populations of dolphins returned to Hong Kong waters due to the quieter environment.',
  },
  backgroundImage:
    'https://blog.padi.com/wp-content/uploads/2017/02/shutterstock_164233874.jpg',
  factOrTip: {
    title: 'Top tip: Reduce, reuse, and recycle',
    text: 'Cut down on what you throw away. Follow the three Rs to conserve natural resources and landfill space.',
  },
  helpfulSite: {
    link: 'https://www.websitecarbon.com/',
    title: 'You might also like...',
    text: 'Website Carbon Calculator',
  },
};

const Card = ({ cardHeader, cardText, link, marginLeft }) => {
  return (
    <Flex
      direction="column"
      w={{ base: '100%', md: '250px', lg: '310px' }}
      height={{ base: 'auto', md: '300px' }}
      bg="white"
      opacity="0.6"
      borderRadius="2xl"
      padding={6}
      marginLeft={{ base: 0, md: marginLeft }}
      marginBottom={{ base: 4, md: 0 }}
    >
      <Box opacity="1">
        <Text
          fontSize="24px"
          fontWeight="bold"
          color="blue.900"
          lineHeight="30px"
          pb={4}
        >
          {cardHeader}
        </Text>

        {link ? (
          <a href={link}>
            <Text fontSize="16px" color="blue.900" textDecoration="underline">
              {cardText}
            </Text>
          </a>
        ) : (
          <Text fontSize="16px" color="blue.900">
            {cardText}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

const Newtab = () => {
  const [email, setEmail] = React.useState('');
  chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
    console.log('ppppp', info)
    if (info.email) {
      setEmail(info.email)
    }
  });

  const text = `Hello${email ? `, ${email}` : ''}!`;
  return (
    <ChakraProvider>
      <Box className="App" position="relative">
        <Text
          fontSize="40px"
          color="blue.900"
          position="absolute"
          top={8}
          left={16}
        >
          Hello {pageData.name}
        </Text>
        <Flex bgColor="blue.50" flex={1} width="100vw" height="100vh">
          <Image src={pageData.backgroundImage} alt="background" />
        </Flex>
        <Flex
          position="absolute"
          bottom={0}
          px={16}
          py={8}
          direction={{ base: 'column', md: 'row' }}
        >
          <Card
            cardHeader={pageData.news.headline}
            cardText={pageData.news.story}
          />
          <Card
            marginLeft={4}
            cardHeader={pageData.factOrTip.title}
            cardText={pageData.factOrTip.text}
          />
          <Card
            marginLeft={4}
            cardHeader={pageData.helpfulSite.title}
            cardText={pageData.helpfulSite.text}
            link={pageData.helpfulSite.link}
          />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Newtab;
