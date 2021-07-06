import React from "react";
import { Box, Flex, Heading, VStack, Text } from '@chakra-ui/react';
import LoginButton, { LoginData } from "../components/LoginButton";

const Home = (): JSX.Element => {
  return (
    <Flex alignItems="center"
      flexDirection="column"
      height="100vh"
      padding="8">
      <Heading>
        Welcome to MyLink
      </Heading>
      <Text>
        All your links on the same page
      </Text>
      <Box marginTop="10vh">
        <Text fontSize="1.2rem">Login with:</Text>
        <VStack
          gridGap="1.2rem"
          marginTop="2.5rem">
        {LoginData.map(({ handleLogin, icon, onDark, id }) => (
          <LoginButton handleLogin={handleLogin}
            icon={icon}
            key={id}
            onDark={onDark} />
              ))}
          </VStack>
      </Box>
    </Flex>
  );
};

export default Home;