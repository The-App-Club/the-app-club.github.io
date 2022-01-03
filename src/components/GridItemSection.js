import styled from '@emotion/styled';

const StyledSection = styled.section`
  height: 100%;
`;

function GridItemSection({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export { GridItemSection };
