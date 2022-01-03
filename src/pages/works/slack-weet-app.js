import { Link } from 'react-router-dom';
import { Main } from '../../layouts/Main';
import { Section } from '../../components/Section';
import { Paragraph } from '../../components/Paragraph';

const SlackWeetApp = () => {
  return (
    <Main>
      <h2>Slack Weet App</h2>
      <Section>
        <Paragraph>description</Paragraph>
        <Link to={'/works'}>works</Link>
      </Section>
    </Main>
  );
};

export { SlackWeetApp };
