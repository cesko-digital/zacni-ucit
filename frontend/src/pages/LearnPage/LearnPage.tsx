import React from 'react';

import {
  TopWrapper,
  MainTitle,
  Logo,
  Section,
  SectionTitle,
  List,
  ListItem,
  ButtonsWrapper,
  SignUpButtonWrapper,
  Link,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import { VYLUKA_MAIL } from '@siteData';

import logoImage from './learn.svg';
import ChevronIcon from '@icons/chevron-right.svg';

const LearnPage: React.FC = () => (
  <Container>
    <Meta
      title="Zauč se! | Pomáháme začínajícím učitelům"
      description="Získejte podporu a možnost rozvoje ve třech komunitních programech Zauč se! – v celoročním programu, v sérii workshopů a v supervizích."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <TopWrapper>
      <MainTitle>Chci se zaučit</MainTitle>
      <Logo alt="Chci se zaučit logo" height={149} src={logoImage} width={248} />
    </TopWrapper>
    <p>
      Začátky jsou v učitelství mimořádně náročné. Podporu a možnost rozvíjet se na startu této
      kariéry proto nabízíme ve třech částech komunitního programu Zauč se!
      <List>
        <ListItem>
          v <strong>celoročním programu,</strong>
        </ListItem>
        <ListItem>
          v <strong>sérii workshopů</strong>
        </ListItem>
        <ListItem>
          a na <strong>supervizích</strong>.
        </ListItem>
      </List>
    </p>
    <div>
      <Section>
        <SectionTitle>Celoroční program</SectionTitle>
        <p>
          S dalšími začínajícími učitelkami a učiteli se budete celý rok učit{' '}
          <strong>nové dovednosti, růst a sdílet svoje úspěchy i nejistoty</strong>.
        </p>
        <p>V programu se naučíte:</p>
        <List>
          <ListItem>
            <strong>praktické pedagogické dovednosti</strong>
          </ListItem>
          <ListItem>reflektovat svou práci</ListItem>
          <ListItem>
            pečovat o svůj <strong>wellbeing</strong>
          </ListItem>
          <ListItem>
            využívat mentorskou a skupinovou <strong>podporou</strong>
          </ListItem>
          <ListItem>stanovovat si cíle svého rozvoje</ListItem>
          <ListItem>
            dávat a přijímat kvalitní <strong>zpětnou vazbu</strong>
          </ListItem>
        </List>
        <ButtonsWrapper>
          <SignUpButtonWrapper>
            <Button
              buttonStyle="button"
              endIcon={<ChevronIcon />}
              href="https://forms.gle/GqC1ozq9QXUTWPAb8"
              target="_blank"
            >
              Přihlaste se
            </Button>
          </SignUpButtonWrapper>
          <Button
            buttonStyle="button"
            endIcon={<ChevronIcon />}
            href={routes.learn.howItWorks}
            variant="secondary"
          >
            Jak program probíhá
          </Button>
        </ButtonsWrapper>
      </Section>
      <Section>
        <SectionTitle>Série workshopů</SectionTitle>
        <p>
          Pololetní série čtyř workshopů se zaměřením na rozvoj praktických dovedností do výuky –
          vhodná je pro všechny učitele.
        </p>
        <p>Na workshopech se dozvíte, jak:</p>
        <List>
          <ListItem>
            přemýšlet nad <strong>hodnocením</strong>
          </ListItem>
          <ListItem>
            <strong>aktivizovat</strong> žáky
          </ListItem>
          <ListItem>
            pracovat s <strong>chybami</strong>
          </ListItem>
          <ListItem>a spoustu dalšího</ListItem>
        </List>
        <p>Další informace zveřejníme v průběhu srpna.</p>
        <p>
          Pokud už nyní máte zájem o účast, napište nám na{' '}
          <Link href={`mailto:${VYLUKA_MAIL}`}>{VYLUKA_MAIL}</Link>.
        </p>
      </Section>
      <Section>
        <SectionTitle>Supervize</SectionTitle>
        <p>Potřebujete sdílet pedagogické trable? Zkuste naši skupinovou supervizi!</p>
        <p>Se zkušenou supervizorkou Martinou Skalníkovou můžete v bezpečném prostředí řešit:</p>
        <List>
          <ListItem>vztahy s kolegy i rodiči</ListItem>
          <ListItem>práci a komunikaci se žáky</ListItem>
          <ListItem>cokoliv dalšího podle vaší potřeby</ListItem>
        </List>
        <p>Harmonogram podzimních supervizí zveřejníme již brzy!</p>
        <p>
          Pokud už nyní máte zájem o účast, napište nám na{' '}
          <Link href={`mailto:${VYLUKA_MAIL}`}>{VYLUKA_MAIL}</Link>.
        </p>
      </Section>
    </div>
    <BackToHomeButton />
  </Container>
);

export default LearnPage;
