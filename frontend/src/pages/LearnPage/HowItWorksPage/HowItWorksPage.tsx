import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import React from 'react';

import {
  MainTitle,
  Logo,
  Section,
  SectionTitle,
  List,
  ListItem,
  SignUpButtonWrapper,
  Event,
  EventContent,
  EventDate,
  EventTitle,
  EventDescription,
  TopWrapper,
} from '../styled';
import logoImage from '../learn.svg';
import Button from '@components/Button/Button';
import ChevronIcon from '@icons/chevron-right.svg';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';

type Event = {
  date: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    date: '23. 9. 2021',
    title: 'Úvodní setkání + „Jak přemýšlet nad hodnocením“',
    description: 'Proběhne první seznamování a vrhneme se také na první učení.',
  },
  {
    date: '22. – 24. 10. 2021',
    title: 'Výjezdní víkend „Já v roli učitele“',
    description: 'Vyjedeme na víkend, blíže se seznámíme mezi sebou, ale i sami se sebou.',
  },
  {
    date: '11. 11. 2021',
    title: 'Setkání „Jak na přípravy hodin“',
    description: 'Dozvíme se, jak dělat přípravu na vyučování, aniž by zabrala dlouhé hodiny.',
  },
  {
    date: '11. 12. 2021',
    title: 'Setkání „Jak hodnotit“',
    description: 'Budeme se připravovat na pololetní hodnocení.',
  },
  {
    date: '22. 1. 2022',
    title: 'Setkání „Jak na komunikaci“',
    description: 'Zaměříme se na komunikaci ve třídě.',
  },
  {
    date: '11. 2. 2022',
    title: 'Setkání „Inspirativní přístupy ve výuce“',
    description: 'Poznáme dosud možná neznámé přístupy ve výuce.',
  },
  {
    date: '5. 3. 2022',
    title: 'Setkání „Učitel ve třídě“',
    description: 'Zaměříme se na sebe, na své potřeby a prožívání ve třídě.',
  },
  {
    date: '22. 4. 2022',
    title: 'Otevřená dílna',
    description: 'Čeká nás Otevřená dílna.',
  },
  {
    date: '13. 5. 2022',
    title: 'Setkání „Jak na dobré vztahy“',
    description: 'Prozkoumáme tvorbu dobrých vztahů.',
  },
  {
    date: 'volitelný termín',
    title: 'Závěrečné setkání',
    description: 'Uzavřeme celý školní rok.',
  },
];

const LearnHowItWorksPage: React.FC = () => (
  <Container>
    <Meta title="Jak probíhá program" />
    <BackButton href={routes.learn.main} icon="home">
      Zpátky na chci se zaučit
    </BackButton>
    <TopWrapper>
      <MainTitle>Jak probíhá program</MainTitle>
      <Logo src={logoImage} alt="Chci se zaučit logo" width={248} height={149} />
    </TopWrapper>
    <div>
      <Section>
        <SectionTitle>Celoroční program</SectionTitle>
        <List>
          <ListItem>
            Na začátku se seznámíte se skupinou dalších začínajících vyučujících, se kterými se
            budete pravidelně setkávat celý školní rok.
          </ListItem>
          <ListItem>
            Společně vyjedeme na víkend, kde se lépe poznáme mezi sebou a se svou vlastní učitelskou
            vizí.
          </ListItem>
          <ListItem>
            Každý měsíc vás čeká jedno tematické a jedno reflektivní setkání. Vždy pod vedením
            zkušených lektorů a lektorek.
          </ListItem>
          <ListItem>Tempo svého rozvoje si určujete podle vlastní potřeby.</ListItem>
          <ListItem>Setkání probíhají v Praze.</ListItem>
          <ListItem>Po celou dobu trvání programu je vám k dispozici zkušená průvodkyně.</ListItem>
        </List>
        <p>
          Vyzkoušíte si přípravu učiva na hodinu podle materiálů s metodickými základy od zkušených
          lektorů.
        </p>
        <p>
          Díky finanční podpoře našich dárců MHMP a Nadace České spořitelny je cena celoročního
          kurzu (včetně ubytování na výjezdním víkendu) je <strong>5 000 Kč</strong>. Skutečná cena
          na jednoho účastníka totiž činí více než 20 000 Kč.
        </p>
        <SignUpButtonWrapper>
          <Button href="#" endIcon={<ChevronIcon />} buttonStyle="button">
            Přihlaste se
          </Button>
        </SignUpButtonWrapper>
      </Section>
    </div>
    <div>
      {events.map(({ date, title, description }) => (
        <Event key={date}>
          <EventDate>{date}</EventDate>
          <EventContent>
            <EventTitle>{title}</EventTitle>
            <EventDescription>{description}</EventDescription>
          </EventContent>
        </Event>
      ))}
    </div>

    <BackToHomeButton href={routes.learn.main}>Zpátky na Chci se zaučit</BackToHomeButton>
  </Container>
);

export default LearnHowItWorksPage;
