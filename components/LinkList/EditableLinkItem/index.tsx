import React from 'react';
import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import { Button, Box, IconButton, useBoolean, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import LinkItem from '../LinkItem';
import { ILinkItem } from '../LinkItem/types';

const EditableLinkItem = ({ backgroundColor, name, outline }: ILinkItem): JSX.Element => {
  const [showInput, { toggle }] = useBoolean(false);
  return (
    <Box width="100%">
      {
        showInput &&
        <InputGroup marginBottom="0.5rem"
          size="md">
          <Input
            placeholder={`Enter new ${name} url`}
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem">
            <Button fontSize="1.2rem"
              h="1.75rem"
              size="sm">
              Save
            </Button>
          </InputRightElement>
        </InputGroup>
      }
      <Box position="relative">
        <LinkItem  backgroundColor={backgroundColor}
          name={name}
          outline={outline} />
        <IconButton
          aria-label="Edit"
          color="white"
          fontSize="2rem"
          icon={showInput ? <CloseIcon /> :<EditIcon />}
          inset="0"
          marginLeft="0.5rem"
          marginY="auto"
          onClick={toggle}
          position="absolute"
          variant="link"
        />
      </Box>
    </Box>
  );
};

export default EditableLinkItem;
