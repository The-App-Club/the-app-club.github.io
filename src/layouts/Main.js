import styled from '@emotion/styled';
import { motion } from 'framer-motion';
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const StyledMain = styled.main`
  margin: 0 auto;
  height: 100%;
  @media screen and (min-width: 769px) {
    margin-top: 10vh;
    width: 30vw;
  }
  @media screen and (max-width: 768px) {
    margin-top: 5vh;
    width: 80vw;
  }
`;

function Main({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <StyledMain>{children}</StyledMain>
    </motion.div>
  );
}

export { Main };
