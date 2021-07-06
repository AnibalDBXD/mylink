import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import ToggleColor from "../components/ToggleColor";
import UserProvider from "../context/User/UserProvider";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <UserProvider>
        <ToggleColor />
          <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;