import styled from '@emotion/styled';

const StyledSection = styled.section`
  height: 100%;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export { Section };
