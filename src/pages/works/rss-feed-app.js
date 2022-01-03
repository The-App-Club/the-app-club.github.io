import { Link } from 'react-router-dom';
import { Main } from '../../layouts/Main';
import { Section } from '../../components/Section';
import { Paragraph } from '../../components/Paragraph';

const RssFeedApp = () => {
  return (
    <Main>
      <h2>Rss Feed App</h2>
      <Section>
        <Paragraph>description</Paragraph>
        <Link to={'/works'}>works</Link>
      </Section>
    </Main>
  );
};

export { RssFeedApp };
