import React from 'react';

import {
  MainTitle,
  Logo,
  Section,
  SignUpButtonWrapper,
  Event,
  EventContent,
  EventDate,
  EventTitle,
  TopWrapper,
  Paragraph,
  EventDateContainer,
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
  time: string;
  title: string;
};

const events: Event[] = [
  {
    date: '30. 9. 2021',
    time: '18:00 - 19:30',
    title: 'Kateřina Vrtišková: Jak přemýšlet nad hodnocením',
  },
  {
    date: '14. 10. 2021',
    time: '18:00 - 19:30',
    title: 'Marcela Roflíková:  Práce s hranicemi',
  },
  {
    date: '11. 11. 2021',
    time: '18:00 - 19:30',
    title: 'Ina Rajsiglová: Aktivizační metody do výuky',
  },
  {
    date: '2. 12. 2021',
    time: '18:00 - 19:30',
    title: 'Pavlína Seidlerová: Práce s chybou',
  },
];

const Workshops: React.FC = () => (
  <Container>
    <Meta
      title="Zauč se! | Pomáháme začínajícím učitelům"
      description="Získejte podporu a možnost rozvoje ve třech komunitních programech Zauč se! – v celoročním programu, v sérii workshopů a v supervizích."
    />
    <BackButton href={routes.learn.main} icon="home">
      Zpátky na chci se zaučit
    </BackButton>
    <TopWrapper>
      <MainTitle>Jak probíhá série workshopů</MainTitle>
      <Logo alt="Chci se zaučit logo" height={149} src={logoImage} width={248} />
    </TopWrapper>
    <div>
      <Section>
        <Paragraph>
          Všechny workshopy se budou konat v Kampusu Hybernská (Praha 1), v případě znovuobnovení
          epidemiologických opatření budou workshopy přesunuty do online prostředí.
        </Paragraph>
        <Paragraph>
          Díky finanční podpoře našich dárců MHMP a Nadace České spořitelny je cena série workshopů{' '}
          <strong>490 Kč</strong>, pro studenty a účastníky předchozích programů Výluky{' '}
          <strong>390 Kč</strong>. Skutečná cena na jednoho účastníka činí více než 1 000 Kč.
        </Paragraph>
        <Paragraph>
          Přihlášky uzavíráme <strong>30. 9. 2021</strong> nebo po naplnění kapacity.
        </Paragraph>

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
      </Section>
    </div>
    <div>
      {events.map(({ date, time, title }) => (
        <Event key={date} time>
          <EventDateContainer>
            <EventDate>{date}</EventDate>
            <EventDate time className="time">
              {time}
            </EventDate>
          </EventDateContainer>
          <EventContent>
            <EventTitle selfContained>{title}</EventTitle>
          </EventContent>
        </Event>
      ))}
    </div>

    <BackToHomeButton href={routes.learn.main}>Zpátky na Chci se zaučit</BackToHomeButton>
  </Container>
);

export default Workshops;
