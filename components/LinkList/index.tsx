import { VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const LinkList = ({ children }: { children: ReactNode }): JSX.Element => (
  <VStack justifyContent="space-evenly"
    minHeight="80%"
  >
    {children}
  </VStack>
);

export default LinkList;
