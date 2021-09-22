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
  EventDateTime,
  EventTime,
  EventDescription,
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
  text: string;
};

const events: Event[] = [
  {
    date: '30. 9. 2021',
    time: '18:00 - 19:30',
    title: 'Kateřina Vrtišková: Jak přemýšlet nad hodnocením',
    text: 'Kdo, co a jak má ve škole hodnotit? V průběhu tohoto workshopu se dozvíte, jak nad hodnocením přemýšlet a jak se při hodnocení zaměřit na to důležité. Dozvíte se nejen o hodnocení od učitele směrem k žákům, ale i o tom, jak nechat děti, aby hodnotily samy sebe nebo své spolužáky. ',
  },
  {
    date: '14. 10. 2021',
    time: '18:00 - 19:30',
    title: 'Marcela Roflíková:  Práce s hranicemi',
    text: 'Jak to mám v životě s hranicemi já? Umím říci NE? Kde narážím na hranice druhých lidí? Hranice určují kým jsme a kým nejsme. Dovolují a pomáhají nám udržovat si komfortní zónu a tím udržovat optimální výkonnost a motivaci k tomu, co děláme. Hranice jsou proměnlivé. Naše aktivní a vědomá práce s hranicemi nám přináší kvalitnější vztahy se svým okolím, s kolegy i dětmi. Všímavost (mindfulness) nám pomáhá uvědomovat si, kdy jsou naše hranice překračovány a narušovány.',
  },
  {
    date: '11. 11. 2021',
    time: '18:00 - 19:30',
    title: 'Ina Rajsiglová: Aktivizační metody do výuky',
    text: 'Jaké metody zvolit, aby byli naši žáci aktivní? V průběhu tohoto workshopu si sami v roli žáků vyzkoušíte několik metod, které vedou k samostatnosti a schopnosti učit se. Také se budete společně přemýšlet o smyslu a smysluplném zařazení těchto metod do výuky.',
  },
  {
    date: '2. 12. 2021',
    time: '18:00 - 19:30',
    title: 'Pavlína Seidlerová: Práce s chybou',
    text: 'Jaký je můj vztah k chybě a jak to ovlivňuje moji praxi? Co to je chyba v procesu učení? Jak reagovat na chybu, aby to podpořilo další učení žáků? Jak můžeme společně se žáky chybu vytěžit pro učení? Seznámíme s více jak desítkou různých možností, jak reagovat v písemných pracích na chyby a budeme hledat výhody a nevýhody těchto možností.',
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
      {events.map(({ date, time, title, text }) => (
        <Event key={date}>
          <EventDateTime>
            <EventDate>{date}</EventDate>
            {time && <EventTime>{time}</EventTime>}
          </EventDateTime>
          <EventContent>
            <EventTitle>{title}</EventTitle>
            <EventDescription>{text}</EventDescription>
          </EventContent>
        </Event>
      ))}
    </div>

    <BackToHomeButton href={routes.learn.main}>Zpátky na Chci se zaučit</BackToHomeButton>
  </Container>
);

export default Workshops;
