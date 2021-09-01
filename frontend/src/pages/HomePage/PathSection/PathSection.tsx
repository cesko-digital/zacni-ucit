import React from 'react';

import { Section, Image, Button, Wrapper, Text } from './styled';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import pathImage from './path.svg';

const PathSection: React.FC = () => (
  <Container withPaddingBottom={false}>
    <Section>
      <Wrapper>
        <Text align="right" href="#" left={-100} top={7}>
          Je učitelství pro mě?
        </Text>
        <Button align="left" href={routes.tryTeaching.main} right={-100} top={30}>
          Chci si zkusit učení
        </Button>
        <Button align="right" href={routes.canITeach} left={-100} top={70}>
          Chci si doplnit kvalifikaci
        </Button>
        <Button align="left" href={routes.jobs} right={-100} top={115}>
          Vybírám si školu, kde budu učit
        </Button>
        <Button href={routes.learn.main} align="right" left={-100} top={165}>
          Začínám učit
        </Button>
        <Image alt="" height={198} src={pathImage} width={146} />
      </Wrapper>
    </Section>
  </Container>
);

export default PathSection;
