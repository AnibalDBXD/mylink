import { ILoginButton } from "./types";
import GithubIcon from "../../public/icons/github.svg";
import FacebookIcon from "../../public/icons/facebook.svg";
import GoogleIcon from "../../public/icons/google.svg";
import TwitterIcon from "../../public/icons/twitter.svg";

import { loginWithGithub } from "../../services/firebase/client";

const LoginButtons: ILoginButton[] = [
    {
        icon: GithubIcon,
        onDark: true,
        handleLogin: loginWithGithub,
        id: 1
    },
    {
        icon: FacebookIcon,
        handleLogin: (): null => null,
        id: 2
    },
    {
        icon: GoogleIcon,
        handleLogin: (): null => null,
        id: 3
    },
    {
        icon: TwitterIcon,
        handleLogin: (): null => null,
        id: 4
    },
];

export default LoginButtons;