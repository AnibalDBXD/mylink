import React from "react";
import { Flex, Heading } from '@chakra-ui/react';
import ToggleColor from "../components/ToggleColor";

const Home = (): JSX.Element => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      minHeight="100vh"
      padding="0 0.5rem"
    >
      <Heading>
        Hola
      </Heading>
      <ToggleColor />
    </Flex>
  );
};

export default Home;