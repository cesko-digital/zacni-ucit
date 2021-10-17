import React from 'react';

import {
  Section,
  MainTitle,
  LogosWrapper,
  LogoItem,
  Link,
  Logo,
  TextWrapper,
  MsmtWrapper,
  LogoContainer,
} from './styled';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import { routes } from '@routes';
import Image from 'next/image';
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
      <MsmtWrapper>
        <TextWrapper>
          <p>Projekt Začni učit! má </p>{' '}
          <p>
            <strong>záštitu od MŠMT ČR.</strong>
          </p>
        </TextWrapper>

        <Image alt="msmt" height={62} src={msmtLogo} width={132} />
      </MsmtWrapper>
      <Button buttonStyle="button" href={routes.partners}>
        Chci se stát partnerem
      </Button>
    </Container>
  </Section>
);

export default PartnersSection;
