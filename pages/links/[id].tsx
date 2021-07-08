import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import LinkList from '../../components/LinkList';
import LinkItem from '../../components/LinkList/LinkItem';

const Links = (): JSX.Element => {
  return (
    <Box height="100vh"
      padding="8">
      <Heading  maxWidth="80vw"
        textAlign="center">[NAME]
      </Heading>
      <Text  marginTop="4"
        maxWidth="80vw"
        textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus.</Text>
      <LinkList>
        <LinkItem backgroundColor="red"
          href="#"
          name="Twitter" />
      </LinkList>
    </Box>
  );
};

export default Links;
