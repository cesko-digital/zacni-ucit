import React from 'react';

import { Section, MainTitle, LogosWrapper, LogoItem, Link, Logo } from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';

import ceskoDigitalLogo from './cesko-digital.png';
import laboratorVodafoneLogo from './laborator-vodafone.png';
import msmtLogo from './msmt.png';
import nadaceCsLogo from './nadace-cs.png';

const logos = [
  { logo: msmtLogo, href: 'https://www.edu.cz/' },
  { logo: ceskoDigitalLogo, href: 'https://cesko.digital/' },
  { logo: nadaceCsLogo, href: 'https://www.nadacecs.cz/' },
  { logo: laboratorVodafoneLogo, href: 'https://www.laboratornadacevodafone.cz/' },
];

const PartnersSection: React.FC = () => (
  <Section>
    <Container>
      <MainTitle>Naši partneři</MainTitle>
      <p>
        Děkujeme <Button href={routes.partners}>všem našim partnerům</Button> a podporovatelům za
        to, že při nás stojí.
      </p>
      <LogosWrapper>
        {logos.map(({ logo, href }) => (
          <LogoItem key={href}>
            <Link href={href} target="_blank">
              <Logo alt="" src={logo} />
            </Link>
          </LogoItem>
        ))}
      </LogosWrapper>
      {/* <Button buttonStyle="button" href={routes.donate}> */}
      <Button buttonStyle="button" href={routes.partners}>
        Chci se stát partnerem
      </Button>
    </Container>
  </Section>
);

export default PartnersSection;
