import { Link } from 'react-router-dom';
import { Main } from '../layouts/Main';
import { Section } from '../components/Section';
import { Paragraph } from '../components/Paragraph';

function Home() {
  return (
    <Main>
      <Section>
        <Paragraph>
          The App Club was started by one of the developers at GRI Inc. and
          consists of five members. Here We would like to introduce some of the
          programs we have produced as a showcase. 😉{` `}
          <Link to={'/works'}>works</Link>
        </Paragraph>
      </Section>
    </Main>
  );
}

export { Home };
