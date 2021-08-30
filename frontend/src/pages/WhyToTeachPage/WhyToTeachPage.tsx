import React from 'react';

import {
  MainTitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  List,
  ListItem,
  Source,
  Image,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import Button from '@components/Button/Button';

const HowTeachingProgramWorks: React.FC = () => (
  <Container>
    <Meta
      title="Proč jít učit? | Nejste si jistí vstupem do učitelské profese?"
      description="Pomůžeme vám rozhodnout se díky příběhům a zkušenostem dalších učitelů i popisem požadavků na učitelskou profesi. Nabídneme i přehled volných míst ve školství."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <MainTitle>Proč jít učit?</MainTitle>
    <p>Pohráváte si s myšlenkou jít učit? Ukážeme vám, proč jde o skvělý nápad!</p>
    <Section id="proc-jit-ucit">
      <SectionTitle>Proč jít učit?</SectionTitle>
      <Image alt="" height={218} src={image1} width={328} />
      <p>
        Jde o <strong>smysluplné povolání</strong>, díky němuž můžete{' '}
        <strong>změnit k lepšímu život celé společnosti</strong> – za deset let učení ovlivníte
        několik stovek dětí.
      </p>
      <p>
        České školství vás potřebuje. Nyní <strong>chybí více než 6000 učitelů</strong> a situace se
        nezlepšuje – brzy to bude dvojnásobek.
      </p>
      <p>
        Získáte <strong>stabilní úvazek</strong> v povolání, které se u nás pravidelně umisťuje mezi
        prvními pěti <strong>nejprestižnějšími profesemi</strong>.
      </p>
    </Section>
    <Section id="pribehy-ucitelu" withBackground>
      <SectionTitle>Příběhy učitelů</SectionTitle>
      <p>
        Ve školství působí velké množství lidí, kteří si původně učitelství nevybrali jako svou
        profesi – nešli po střední škole na pedagogickou fakultu.{' '}
        <strong>
          Jde o nadšené profíky z praxe, lidi na rodičovské dovolené, studenty nejrůznějších oborů…
        </strong>
        . Jak takové příběhy vypadají, vypráví absolventi našeho oblíbeného programu{' '}
        <Button href="https://www.ucitelnazivo.cz/">Učitel naživo</Button>.
      </p>
      <p>
        Prohlédnout si můžete, jak se za katedru dostala 🐛{' '}
        <Button
          href="https://www.ucitelnazivo.cz/blog/jako-ucitel-nejsem-ten-kdo-detem-rika-tu-pravdu-objevuji-ji-samy"
          target="_blank"
        >
          bioložka
        </Button>
        , 💾{' '}
        <Button
          href="https://www.ucitelnazivo.cz/blog/energie-kterou-do-uceni-davam-se-mi-okamzite-vraci"
          target="_blank"
        >
          informatik
        </Button>{' '}
        nebo 👶{' '}
        <Button
          href="https://www.ucitelnazivo.cz/blog/mistrovstvim-ucitele-je-vytvaret-prilezitosti-pro-vsechny-zaky-ve-tride"
          target="_blank"
        >
          inženýrka po mateřské
        </Button>
        .
      </p>
      <p>
        Získáte <strong>stabilní úvazek</strong> v povolání, které se u nás pravidelně umisťuje mezi
        prvními pěti <strong>nejprestižnějšími profesemi</strong>.
      </p>
    </Section>
    <Section id="platy-ucitelu">
      <SectionTitle>Platy učitelů</SectionTitle>
      <p>
        Plat pro spoustu lidí rozhoduje o tom, jestli se vydají na dráhu učitele. Jejich výše je
        zároveň opředena řadou mýtů. Jak to s nimi doopravdy je?{' '}
      </p>
      <p>
        <strong>Nástupní plat učitele bez praxe je 32&nbsp;170&nbsp;korun hrubého.</strong> Platí,
        ať učíte na Královských Vinohradech nebo v Polici nad Metují.
      </p>
      <p>
        <strong>Průměrný hrubý plat byl loni na školách 44&nbsp;202&nbsp;korun.</strong> Pozor,
        patří sem nejen platy učitelů, ale i ředitelů a dalších pracovníků, kteří mohou být i ve
        vyšších tabulkových stupních.
      </p>
      <p>
        Trend je ale pozitivní!{' '}
        <strong>Rozpočet na učitelské platy loni vzrostl deset procent.</strong> Malé srovnání, aby
        byl růst ještě zřejmější: za posledních pět let se zvedl průměrný hrubý plat učitele o více
        než 16&nbsp;000&nbsp;korun.
      </p>
      <p>
        <strong>Plat asistentů pedagoga</strong> je určený platovými třídami. Pohybuje se{' '}
        <strong>od 15&nbsp;230&nbsp;korun</strong> v té nejnižší{' '}
        <strong>po 35&nbsp;420&nbsp;korun</strong>. Plat většiny asistentů se pohybuje mezi těmito
        dvěma póly. (Ale pozor, většina asistentů je zaměstnána jen na částečný úvazek.)
      </p>
      <Source>
        Zdroje:{' '}
        <Button href="https://www.ucitelskaplatforma.cz/2021/06/03/13362/" target="_blank">
          UP
        </Button>
        ,{' '}
        <Button
          href="https://www.ceskenoviny.cz/zpravy/msmt-plat-ucitelu-loni-stoupl-o-10-2-procenta-na-44-202-kc/2025721"
          target="_blank"
        >
          ČTK
        </Button>
        ,{' '}
        <Button
          href="https://www.asistentpedagoga.cz/asistent-pedagoga/zakony-vyhlasky/plat-asistenta-pedagoga"
          target="_blank"
        >
          asistentpedagoga.cz
        </Button>
      </Source>
    </Section>
    <Section id="co-muzete-delat-ve-skole" withBackground>
      <SectionTitle>Co můžete dělat ve škole?</SectionTitle>
      <Image alt="" height={218} src={image2} width={328} />
      <p>
        <List>
          <ListItem>učitele</ListItem>
          <ListItem>pedagoga v zařízení pro další vzdělávání pedagogických pracovníků</ListItem>
          <ListItem>vychovatele</ListItem>
          <ListItem>speciálního pedagoga</ListItem>
          <ListItem>psychologa</ListItem>
          <ListItem>pedagoga volného času</ListItem>
          <ListItem>asistenta pedagoga[3] </ListItem>
          <ListItem>trenéra</ListItem>
          <ListItem>metodika prevence v pedagogicko-psychologické poradně</ListItem>
          <ListItem>vedoucího pedagogického pracovníka</ListItem>
        </List>
      </p>
      <SectionSubtitle>Kdo může tyto profese vykonávat?</SectionSubtitle>
      <p>
        Musíte být <strong>plně způsobilí k právním úkonům</strong>, prokázat{' '}
        <strong>znalost</strong> českého nebo jiného <strong>jazyka</strong>, ve kterém je vedeno
        vyučování, být bezúhonní, <strong>zdravotně způsobilí</strong> a mít{' '}
        <strong>odbornou kvalifikaci</strong>
        pro konkrétní přímou pedagogickou činnost. Pro přehledné shrnutí, jak je to s pedagogickou
        kvalifikací podle zákona o ped. pracovnících navštivte náš rozcestník.{' '}
      </p>
      <SectionSubtitle>Co učitelství vlastně obnáší?</SectionSubtitle>
      <p>
        Pro přehled o každodenních tématech učitelů z praxe mrkněte na facebookovou skupinu naší
        spřátelené Učitelské platformy{' '}
        <Button href="https://www.facebook.com/groups/uciteleplus" target="_blank">
          Učitelé+
        </Button>
        ! (Skupina je uzavřená, ale obsah je viditelný pro všechny.)
      </p>
    </Section>
    <BackToHomeButton href={routes.homepage}>Zpátky domů</BackToHomeButton>
  </Container>
);

export default HowTeachingProgramWorks;
