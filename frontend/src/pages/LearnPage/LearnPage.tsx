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
        <ButtonsWrapper>
          <SignUpButtonWrapper>
            <Button
              buttonStyle="button"
              endIcon={<ChevronIcon />}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlr30v9P4rNQXK83fPEWMR2TaIPG08won9ueIk2PSIvHt1xg/viewform"
              target="_blank"
            >
              Přihlaste se
            </Button>
          </SignUpButtonWrapper>
          <Button
            buttonStyle="button"
            endIcon={<ChevronIcon />}
            href={routes.learn.workshops}
            variant="secondary"
          >
            Jak probíhá série workshopů
          </Button>
        </ButtonsWrapper>
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
        <p>První supervize ve školním roce 2021/2022 proběhne ve <strong>čtvrtek 21. října 2021</strong> v Kampusu Hybernská od <strong>17:00</strong>. Další supervize jsou naplánované na <strong>20. ledna a 24. března 2022</strong>.</p>
        <p>Na každou supervizi je nutné se přihlásit zvlášť a bude otevřena při minimálním počtu 5 účastníků.</p>
        <SignUpButtonWrapper>
            <Button
              buttonStyle="button"
              endIcon={<ChevronIcon />}
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2ou2-EbPV8rLK1JWt-fKlzfQxBK8xFVxsrV8TSTD-EZVHyQ/viewform"
              target="_blank"
            >
              Přihlaste se
            </Button>
        </SignUpButtonWrapper>
      </Section>
    </div>
    <BackToHomeButton />
  </Container>
);

export default LearnPage;
