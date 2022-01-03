import * as React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Main } from '../layouts/Main';
import { GridItemSection } from '../components/GridItemSection';
import { Paragraph } from '../components/Paragraph';
import { GridItem } from '../components/GridItem';

function Work() {
  return (
    <>
      <Main>
        <h2>Works</h2>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItemSection>
            <GridItem
              id="rss-feed-app"
              title="Rss Feed App"
              thumbnail={'https://picsum.photos/300/200'}
            >
              Here work summary description
            </GridItem>
          </GridItemSection>
          <GridItemSection>
            <GridItem
              id="slack-weet-app"
              title="Slack Weet App"
              thumbnail={'https://picsum.photos/300/200'}
            >
              Here work summary description
            </GridItem>
          </GridItemSection>
        </SimpleGrid>
      </Main>
    </>
  );
}

export { Work };
