import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';
import { Section } from './section';

import jiraImage from '../../../assets/img/jira.png';

const tools = [
  { title: 'Github', src: '/github.png', link: 'https://github.com/' },
  { title: 'Bippit', src: '/bippit.png', link: 'https://app.bippit.com/' },
  {
    title: 'Charlie HR',
    src: '/charliehr.png',
    link: 'https://planes.charliehr.com/',
  },
  {
    title: 'Leapsome',
    src: '/leapsome.png',
    link: 'https://www.leapsome.com/',
  },
  {
    title: 'Sunlight',
    src: '/sunlight.png',
    link: 'https://grow.sunlight.is/playlists',
  },
  { title: 'Runn', src: '/runn.png', link: 'https://app.runn.io/' },
  {
    title: 'Jira',
    src: jiraImage,
    link: 'https://planesstudio.atlassian.net/jira/your-work',
  },
];
export const QuickAccessTools = () => {
  return (
    <Section title="Tools">
      <Flex spacing={2} py={4} px={6}>
        {tools.map((tool) => (
          <Box as="button" key={tool.title}>
            <Text>{tool.title}</Text>
            <img width={50} src={tool.src} alt={tool.title} />
          </Box>
        ))}
      </Flex>
    </Section>
  );
};
