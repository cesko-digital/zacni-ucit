import React from 'react';

import { Section, MainTitle, LogosWrapper, LogoItem, Logo } from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import ceskoDigitalLogo from './cesko-digital.png';
import laboratorVodafoneLogo from './laborator-vodafone.png';
import msmtLogo from './msmt.png';
import nadaceCsLogo from './nadace-cs.png';


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
            <Logo alt="" src={logo} />
          </LogoItem>
        ))}
      </LogosWrapper>
      <Button buttonStyle="button" href={routes.donate}>
        Chci se stát partnerem
      </Button>
    </Container>
  </Section>
);

export default PartnersSection;
