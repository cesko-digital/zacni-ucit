import React from 'react';

import { Section, MainTitle, LogosWrapper, LogoItem, Logo } from './styled';
import msmtLogo from './msmt.png';
import ceskoDigitalLogo from './cesko-digital.png';
import nadaceCsLogo from './nadace-cs.png';
import laboratorVodafoneLogo from './laborator-vodafone.png';
import Container from '@components/Container/Container';
import Button from '@components/Button/Button';
import { routes } from '@routes';

const logos = [msmtLogo, ceskoDigitalLogo, nadaceCsLogo, laboratorVodafoneLogo];

const PartnersSection: React.FC = () => (
  <Section>
    <Container>
      <MainTitle>Naši partneři</MainTitle>
      <p>
        Děkujeme <strong>všem našim partnerům</strong> a podporovatelům za to, že při nás stojí.
      </p>
      <LogosWrapper>
        {logos.map(logo => (
          <LogoItem key={logo}>
            <Logo src={logo} alt="" />
          </LogoItem>
        ))}
      </LogosWrapper>
      <Button href={routes.donate} buttonStyle="button">
        Chci se stát partnerem
      </Button>
    </Container>
  </Section>
);

export default PartnersSection;
