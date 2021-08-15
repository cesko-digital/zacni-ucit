import React from 'react';

import { Section, Title, TopWrapper, Logo, Buttons, ButtonWrapper, Regular } from './styled';
import Button from '@components/Button/Button';
import ExternaIcon from '@icons/external.svg';
import { routes } from '@routes';
import vylukaLogo from './vyluka.svg';
import Container from '@components/Container/Container';

const VylukaSection: React.FC = () => (
  <Section>
    <Container withPaddingBottom={false}>
      <TopWrapper>
        <Title>
          <Regular>Začni učit!</Regular>
          je projektem organizace Výluka
        </Title>
        <Logo src={vylukaLogo} alt="Výluka logo" width={64} height={64} />
      </TopWrapper>
      <Buttons>
        <ButtonWrapper>
          <Button
            href="https://www.darujme.cz/projekt/1203276"
            target="_blank"
            startIcon={<ExternaIcon />}
            buttonStyle="button"
          >
            Podpořte nás na Darujme.cz
          </Button>
        </ButtonWrapper>
        <Button href={routes.donate}>Přispějte jinak</Button>
      </Buttons>
    </Container>
  </Section>
);

export default VylukaSection;
