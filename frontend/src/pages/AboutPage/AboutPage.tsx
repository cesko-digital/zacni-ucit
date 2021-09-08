import React from 'react';

import {
  MainTitle,
  Section,
  SectionTitle,
  Image,
  TopWrapper,
  Logo,
  ButtonsWrapper,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import Button from '@components/Button/Button';
import { VYLUKA_MAIL } from '@siteData';
import People from './People/People';
import vylukaLogo from './vyluka.svg';
import { LinkToExtPage } from '@components/Typography';
import FacebookIcon from '@icons/facebook.svg';
import InstagramIcon from '@icons/instagram.svg';
import TwitterIcon from '@icons/twitter.svg';

const HowTeachingProgramWorks: React.FC = () => (
  <Container>
    <Meta
      title="O Výluce | Pomáháme nadšencům se vstupem do školství"
      description="Chtěli jsme si vyzkoušet učení – v Česku ale taková možnost neexistovala. Proto vznikla organizace Výluka a náš projekt zacniucit.cz."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>

    <TopWrapper>
      <MainTitle>O Výluce</MainTitle>
      <Logo alt="Výluka logo" height={128} src={vylukaLogo} width={128} />
    </TopWrapper>
    <Section id="co-delame">
      <SectionTitle>Co děláme?</SectionTitle>
      <p>
        Ve Výluce věříme, že jen spokojení a motivovaní učitelé mohou mít spokojené a motivované
        žáky. Proto{' '}
        <strong>
          podporujeme začínající i zkušené učitele – a zároveň pomáháme do školství nadšeným lidem z
          praxe
        </strong>
        .
      </p>
      <p>
        Tuto vizi naplňujeme aktivitami a programy na portálu Začni učit! Zájemci o učitelství na
        něm najdou pomoc s doplněním pedagogické kvalifikace, začínající i zkušení učitelé
        workshopy, supervize nebo celoroční program. Pro širokou veřejnost pořádáme přednášky a
        diskuse, které otevírají rozličná témata spojená se vzděláváním.
      </p>
    </Section>
    <Section id="pribehy-ucitelu" withBackground>
      <SectionTitle>Jak Výluka vznikla?</SectionTitle>
      <p>
        V roce 2016 řešily naše zakladatelky Jana a Sandra poměrně obvyklé dilema. Lákalo je učení,
        přitom ani jedna z nich nestudovala „peďák“. Chtěly si proto učitelskou zkušenost vyzkoušet
        – v Česku ale taková možnost neexistovala. V takovou chvíli se nabízelo jediné řešení.
        Projekt, který umožní učení nanečisto, vytvořit vlastními silami.
      </p>
      <Image alt="" height={218} src={image1} width={328} />
      <p>
        Tak vzniká Výluka, díky níž si učení vyzkoušelo v prvních letech několik desítek lidí. Záhy
        ale bylo jasné, že bariér na cestě k učitelství je mnohem víc. Záběr Výluky se proto
        postupně rozšiřoval a z původně komorního spolku se stala nezisková organizace s
        profesionálním týmem.
      </p>
      <p>
        Důležitým milníkem bylo pro Výluku spuštění portálu{' '}
        <Button href={routes.homepage}>zacniucit.cz</Button>. Ten vznikl v roce 2020 s pomocí
        dobrovolníků a o rok později byla ve spolupráci s Česko.Digital spuštěna jeho nová,
        rozšířená verze. Při této příležitosti jsme se rozhodli pro přehlednost přesunout velkou
        část našich našich programů pro zájemce o učitelství i učitele právě na platformu Začni
        učit!
      </p>
      <Image alt="" height={218} src={image2} width={328} />
    </Section>
    <Section id="kde-nas-najdete?">
      <SectionTitle>Kde nás najdete?</SectionTitle>
      <p>
        Kampus Hybernská / Studentská Hybernská
        <br />
        Hybernská 4, 110 00 Praha 1
      </p>
      <p>
        Našim korespondenčním sídlem je:
        <br />
        Výluka, z.s.
        <br />
        Ovocný trh 560/5 110, Praha 1<br />
        IČ: 05219833
      </p>
      <p>
        S dotazy se ozývejte na <Button href={`mailto:${VYLUKA_MAIL}`}>{VYLUKA_MAIL}</Button> nebo
        konkrétním lidem z týmu.
      </p>
      <People />
    </Section>
    <Section>
      <SectionTitle>Naše sociální sítě</SectionTitle>
      <ButtonsWrapper>
        <LinkToExtPage
          className="footerBtn"
          href=" https://www.facebook.com/zacniucit.cz/"
          target="_blank"
        >
          <FacebookIcon />
          Facebook
        </LinkToExtPage>
        <LinkToExtPage
          className="footerBtn"
          href="https://www.instagram.com/zacniucit.cz/"
          target="_blank"
        >
          <InstagramIcon />
          Instagram
        </LinkToExtPage>
        <LinkToExtPage
          className="footerBtn"
          href="https://twitter.com/zacniucit?s=09"
          target="_blank"
        >
          <TwitterIcon /> Twitter
        </LinkToExtPage>
      </ButtonsWrapper>
    </Section>
    <BackToHomeButton href={routes.homepage}>Zpátky domů</BackToHomeButton>
  </Container>
);

export default HowTeachingProgramWorks;
