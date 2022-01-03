import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  margin-top: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

function Footer() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} The App Club. All Rights Reserved.
    </StyledFooter>
  );
}

export { Footer };
