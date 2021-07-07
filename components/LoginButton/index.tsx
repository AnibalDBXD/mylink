import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { ILoginButton } from './types';
import LoginData from "./LoginData";

const LoginButton = ({ handleLogin, icon: Icon }: ILoginButton): JSX.Element => (
    <IconButton aria-label="Login with this social media"
      height="100px" 
      icon={<Icon />}
      isRound
      onClick={handleLogin}
      overflow="hidden"
      variant="link"
      width="100px"
    />
);

export default LoginButton;
export { LoginData };
