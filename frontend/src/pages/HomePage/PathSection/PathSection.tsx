import React from 'react';

import { Section, Image, Button, Wrapper } from './styled';
import pathImage from './path.svg';
import { routes } from '@routes';
import Container from '@components/Container/Container';

const PathSection: React.FC = () => (
  <Container withPaddingBottom={false}>
    <Section>
      <Wrapper>
        <Button href="#" top={7} left={-100} align="right">
          Je učitelství pro mě?
        </Button>
        <Button href={routes.tryTeaching.main} top={30} right={-100} align="left">
          Chci si zkusit učení
        </Button>
        <Button
          href={routes.startTeaching.completeYourQualification}
          top={70}
          left={-100}
          align="right"
        >
          Chci si doplnit kvalifikaci
        </Button>
        <Button href="#" top={115} right={-100} align="left">
          Vybírám si školu, kde budu učit
        </Button>
        <Button href="#" top={165} left={-100} align="right">
          Začínám učit
        </Button>
        <Image src={pathImage} alt="" width={146} height={198} />
      </Wrapper>
    </Section>
  </Container>
);

export default PathSection;
