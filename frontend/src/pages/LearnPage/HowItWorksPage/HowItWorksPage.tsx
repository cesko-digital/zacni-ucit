import React from 'react';

import {
  MainTitle,
  Logo,
  Section,
  List,
  ListItem,
  SignUpButtonWrapper,
  Event,
  EventContent,
  EventDateTime,
  EventDate,
  EventTime,
  EventTitle,
  EventDescription,
  TopWrapper,
} from '../styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import logoImage from '../learn.svg';
import ChevronIcon from '@icons/chevron-right.svg';

type Event = {
  date: string;
  time?: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    date: '23. 9. 2021',
    time: '16:00 – 19:00',
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
    time: '15:00 – 18:00',
    title: 'Setkání „Jak na přípravy hodin“',
    description: 'Dozvíme se, jak dělat přípravu na vyučování, aniž by zabrala dlouhé hodiny.',
  },
  {
    date: '18. 11. 2021',
    time: '16:00 – 17:30',
    title: 'Reflektivní setkání',
    description: 'Zaměříme se na přípravy hodin.',
  },
  {
    date: '11. 12. 2021',
    time: '9:00 – 16:00',
    title: 'Setkání „Jak hodnotit“',
    description: 'Budeme se připravovat na pololetní hodnocení.',
  },
  {
    date: '7. 1. 2022',
    time: '16:00 – 17:30',
    title: 'Reflektivní setkání',
    description: 'Zaměříme se na hodnocení.',
  },
  {
    date: '22. 1. 2022',
    time: '15:00 – 18:00',
    title: 'Setkání „Jak na komunikaci“',
    description: 'Zaměříme se na komunikaci ve třídě.',
  },
  {
    date: '3. 2. 2022',
    time: '16:00 – 17:30',
    title: 'Reflektivní setkání',
    description: 'Zaměříme se na komunikaci.',
  },
  {
    date: '11. 2. 2022',
    time: '15:00 – 18:00',
    title: 'Setkání „Inspirativní přístupy ve výuce“',
    description: 'Poznáme dosud možná neznámé přístupy ve výuce.',
  },
  {
    date: '5. 3. 2022',
    time: '9:00 – 16:00',
    title: 'Setkání „Učitel ve třídě“',
    description: 'Zaměříme se na sebe, na své potřeby a prožívání ve třídě.',
  },
  {
    date: '22. 4. 2022',
    time: '15:00 – 18:00',
    title: 'Otevřená dílna',
    description: 'Čeká nás Otevřená dílna.',
  },
  {
    date: '28. 4. 2022',
    time: '16:00 – 17:30',
    title: 'Reflektivní setkání',
    description: 'Filmový klub.',
  },
  {
    date: '13. 5. 2022',
    time: '15:00 – 18:00',
    title: 'Setkání „Jak na dobré vztahy“',
    description: 'Prozkoumáme tvorbu dobrých vztahů.',
  },
  {
    date: '26. 5. 2022',
    time: '16:00 – 17:30',
    title: 'Reflektivní setkání',
    description: 'Zaměříme se na vaše potřeby.',
  },
  {
    date: 'volitelný termín',
    time: '9:00 – 16:00',
    title: 'Závěrečné setkání',
    description: 'Uzavřeme celý školní rok.',
  },
];

const LearnHowItWorksPage: React.FC = () => (
  <Container>
    <Meta
      title="Zauč se! | Pomáháme začínajícím učitelům"
      description="Získejte podporu a možnost rozvoje ve třech komunitních programech Zauč se! – v celoročním programu, v sérii workshopů a v supervizích."
    />
    <BackButton href={routes.learn.learnPage} icon="home">
      Zpátky na chci se zaučit
    </BackButton>
    <TopWrapper>
      <MainTitle>Jak probíhá celoroční program</MainTitle>
      <Logo alt="Chci se zaučit logo" height={149} src={logoImage} width={248} />
    </TopWrapper>
    <div>
      <Section>
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
            Čeká vás 10 tematických a 5 reflektivních setkání, vždy pod vedením zkušených lektorů a
            lektorek.
          </ListItem>
          <ListItem>Tempo svého rozvoje si určujete podle vlastní potřeby.</ListItem>
          <ListItem>Setkání probíhají v Praze.</ListItem>
          <ListItem>Po celou dobu trvání programu je vám k dispozici zkušená průvodkyně.</ListItem>
        </List>
        <p>
          Díky finanční podpoře našich dárců MHMP a Nadace České spořitelny je cena celoročního
          kurzu (včetně ubytování na výjezdním víkendu) <strong>5 000 Kč</strong>. Skutečná cena na
          jednoho účastníka totiž činí více než 20 000 Kč.
        </p>
        <p>
          Deadline přihlášek je <strong>23. 9. 2021 do 23:59</strong> (můžete se tedy přihlásit i na
          prvním ochutnávkovém setkání).
        </p>
        <p>
          * <strong>Ve dvou se to lépe učí:</strong> Pokud se přihlásíte s kolegou/kolegyní nebo s
          kamarádem/kamarádkou, napište jeho jméno a příjmení nakonec do "Máte pro nás nějaký vzkaz
          nebo podnět". <strong>Dáme každému slevu 500 Kč</strong>.
        </p>
        <p>
          * Pokud jste se už v minulosti zúčastnili některého z programů Výluky, dáme vám slevu 500
          Kč. Pro uplatnění slevy napište nakonec do "Máte pro nás nějaký vzkaz nebo podnět" heslo
          Výluka.
        </p>
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
      </Section>
    </div>
    <div>
      {events.map(({ date, time, title, description }) => (
        <Event key={date}>
          <EventDateTime>
            <EventDate>{date}</EventDate>
            {time && <EventTime>{time}</EventTime>}
          </EventDateTime>
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
