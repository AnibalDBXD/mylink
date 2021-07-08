import React, { useEffect } from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import LinkList from '../../components/LinkList';
import LinkItem from '../../components/LinkList/LinkItem';
import { getDocument } from '../../services/firebase/firestore';
import { GetServerSideProps } from 'next';
import { IDocument } from '../../services/firebase/types';

interface ILink {
  data: IDocument;
}

export const getServerSideProps: GetServerSideProps<ILink> = async ({ params }) => {
  const data: IDocument = await getDocument(params?.id as string);
  return {
    props: { data },
  }
}

const Link = ({ data }: ILink): JSX.Element => {
  const { header, links } = data;
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <Box height="100vh"
      padding="8">
      <Heading  maxWidth="80vw"
        textAlign="center">
        {header.name}
      </Heading>
      <Text  marginTop="4"
        maxWidth="80vw"
        textAlign="center">{header.description}</Text>
      <LinkList>
        {links.map(({ backgroundColor, href, name}) => (
        <LinkItem key={name} backgroundColor={backgroundColor}
          href={href}
          name={name} />
        ))}
      </LinkList>
    </Box>
  );
};

export default Link;
