import React from 'react';
import { Text, Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { Section } from './section';
import { BorderBox } from './border-box';
import jiraImage from '../../../assets/tool_logos/jira_logo.png';
import bippitImage from '../../../assets/tool_logos/bippit_logo.jpeg';
import charliehrImage from '../../../assets/tool_logos/charliehr_logo.png';
import githubImage from '../../../assets/tool_logos/github_logo.svg';
import leapsomeImage from '../../../assets/tool_logos/leapsome_logo.png';
import runnImage from '../../../assets/tool_logos/runn_logo.png';
import sunlightImage from '../../../assets/tool_logos/sunlight_logo.jpeg';
import perksImage from '../../../assets/tool_logos/perks_logo.jpeg';
import notionImage from '../../../assets/tool_logos/notion_logo.png';

const tools = [
  { title: 'Github', src: githubImage, link: 'https://github.com/' },
  { title: 'Bippit', src: bippitImage, link: 'https://app.bippit.com/' },
  {
    title: 'Charlie HR',
    src: charliehrImage,
    link: 'https://planes.charliehr.com/',
  },
  {
    title: 'Notion',
    src: notionImage,
    link: 'https://www.notion.so/planesstudio',
  },
  {
    title: 'Leapsome',
    src: leapsomeImage,
    link: 'https://www.leapsome.com/',
  },
  {
    title: 'Sunlight',
    src: sunlightImage,
    link: 'https://grow.sunlight.is/sign-in',
  },
  { title: 'Runn', src: runnImage, link: 'https://app.runn.io/' },
  {
    title: 'Jira',
    src: jiraImage,
    link: 'https://planesstudio.atlassian.net/jira/your-work',
  },
  {
    title: 'Perks at Work',
    src: perksImage,
    link: 'https://www.perksatwork.com/login',
  },
];

export const QuickAccessTools = () => {
  return (
    <Section title="Tools">
      <SimpleGrid minChildWidth="200px" spacing="15px">
        {tools.map(({ title, link, src }) => (
          <Box key={title}>
            <a href={link} target="_blank" rel="noreferrer">
              <BorderBox>
                <Flex alignItems="center" gap={5}>
                  <img width={50} src={src} alt={title} />
                  <Text>{title}</Text>
                </Flex>
              </BorderBox>
            </a>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
};
