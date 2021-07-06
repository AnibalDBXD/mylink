import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { ILoginButton } from './types';
import LoginData from "./LoginData";

const LoginButton = ({ handleLogin, icon: Icon, onDark }: ILoginButton): JSX.Element => (
    <IconButton aria-label="Login with this social media"
      backgroundColor={onDark ? "white" : "transparent"}
      height="100px"
      icon={<Icon />}
      onClick={handleLogin}
      width="100px"
    />
);

export default LoginButton;
export { LoginData };
