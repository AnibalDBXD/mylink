import { Box, Text, Editable, EditableInput, EditablePreview, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import LinkList from '../../components/LinkList';
import EditableLinkItem from '../../components/LinkList/EditableLinkItem';
import { useUserContext } from '../../context/User/userContext';
import { GetServerSideProps } from "next";
import { useRouter } from 'next/router'

interface ICreateLink {
  id: string;
}

export const getServerSideProps: GetServerSideProps<ICreateLink> = async ({ params }) => {
  return {
    props: { id: params?.id as string },
  }
}

const CreateLink = ({ id }: ICreateLink): JSX.Element => {
  const { push } = useRouter();
  const color = useColorModeValue("black", "white");
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) {
      push("/")
    }
    if (user?.id) {
      if (user.id !== id) {
        push("/")
      }
    }
  }, [user, id])

  return (
    <Box height="100vh"
      padding="8">
      <Text left="0"
        position="fixed"
        top="10"
        transform="rotateZ(314deg)">
        Click to edit ✏️
      </Text>
      <Heading
        textAlign="center">
        <Editable defaultValue="[NAME]">
          <EditablePreview borderBottom={`2px solid ${color}`}
            maxWidth="80vw" />
          <EditableInput />
        </Editable>
      </Heading>
      <Editable defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus."
        marginTop="4"
        textAlign="center">
        <EditablePreview borderBottom={`2px solid ${color}`}
          maxWidth="80vw" />
        <EditableInput />
      </Editable>
      <LinkList>
        <EditableLinkItem backgroundColor="#333"
          name="Github" />
        <EditableLinkItem backgroundColor="#2867B2"
          name="Lindekin" />
        <EditableLinkItem backgroundColor="#1778f2"
          name="Facebook" />
        <EditableLinkItem backgroundColor="#1DA1F2"
          name="Twitter" />
      </LinkList>
    </Box>
  );
};

export default CreateLink;