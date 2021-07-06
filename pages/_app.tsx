import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import ToggleColor from "../components/ToggleColor";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <ToggleColor />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;