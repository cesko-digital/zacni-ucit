import React from 'react';

import { Section, Image, Button, Wrapper } from './styled';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import pathImage from './path.svg';

const PathSection: React.FC = () => (
  <Container>
    <Section>
      <Wrapper>
        <Button align="right" href={routes.whyToTeach} left={-100} top={0}>
          Je učitelství pro mě?
        </Button>
        <Button align="left" href={routes.tryTeaching.main} right={-100} top={30}>
          Chci si zkusit učení
        </Button>
        <Button align="right" href={routes.canITeach} left={-100} top={95}>
          Chci si doplnit kvalifikaci
        </Button>
        <Button align="left" href={routes.jobs} right={-100} top={155}>
          Vybírám si školu, kde budu učit
        </Button>
        <Button href={routes.learn.crossroad} align="right" left={-100} top={195}>
          Začínám učit
        </Button>
        <Image alt="" height={248} src={pathImage} width={181} />
      </Wrapper>
    </Section>
  </Container>
);

export default PathSection;
