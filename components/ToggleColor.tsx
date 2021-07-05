import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleColor = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label={`Change ${colorMode} mode`}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    );
};

export default ToggleColor;