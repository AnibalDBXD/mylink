import { LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ILinkItem } from './types';

const LinkItem = ({ backgroundColor, name, href, outline }: ILinkItem): JSX.Element => {
  const color = useColorModeValue("black", "white");
  return (
    <LinkBox alignItems="center"
      bg={outline ? "transparent" : backgroundColor}
      border={outline ? `5px solid ${color}` : "initial"}
      borderRadius="lg"
      boxShadow="md"
      display="flex"
      height="10%"
      justifyContent="center"
      width="100%"
    >
      <LinkOverlay href={href}>
        <Text color="white"
          fontSize="2rem"
          fontWeight="semibold"
          textAlign="center">
          {name}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
}
;

export default LinkItem;
