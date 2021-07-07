import React from 'react';
import { Box } from "@chakra-ui/react";

/**
 * HBB = Horizontal Background Bar
 */
const HBB: React.FC = (): JSX.Element => (
    <Box
      bgGradient="linear(to-r,blue.400,cyan.500)"
      bottom="-40vh"
      height="80vh"
      position="fixed"
      transform="skewY(352deg)"
      width="100vw"  />
);
export default HBB;
