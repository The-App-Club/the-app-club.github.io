import { Link } from 'react-router-dom';
import { Image, Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const GridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Link to={`/works/${id}`}>
      <StyledImage src={thumbnail} alt={title} />
    </Link>
    <Text mt={2} fontSize={20}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
  </Box>
);

export { GridItem };
