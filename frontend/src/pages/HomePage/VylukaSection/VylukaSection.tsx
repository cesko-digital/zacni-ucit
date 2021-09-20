import React from 'react';

import { Section, Title, TopWrapper, Logo, Buttons, ButtonWrapper, Regular } from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import vylukaLogo from './vyluka.svg';
import ExternaIcon from '@icons/external.svg';

const VylukaSection: React.FC = () => (
  <Section>
    <Container withPaddingBottom={false}>
      <TopWrapper>
        <Title>
          <Regular>Začni učit!</Regular>
          je projektem organizace Výluka
        </Title>
        <Logo alt="Výluka logo" height={64} src={vylukaLogo} width={64} />
      </TopWrapper>
      <Buttons>
        <ButtonWrapper>
          <Button
            buttonStyle="button"
            href="https://www.darujme.cz/projekt/1203276"
            startIcon={<ExternaIcon />}
            target="_blank"
          >
            Podpořte nás na Darujme.cz
          </Button>
        </ButtonWrapper>
        <Button href={routes.partners}>Přispějte jinak</Button>
      </Buttons>
    </Container>
  </Section>
);

export default VylukaSection;
