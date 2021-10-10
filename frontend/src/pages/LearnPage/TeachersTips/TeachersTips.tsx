import React from 'react';

import { MainTitle, Section, SectionTitle, Number, Paragraph, ScrollLinkContainer } from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import DoubleArrowIcon from '@icons/scroll.svg';
import LifeHacks from './LifeHacksSection';
import NotAboutTeaching from './NotAboutTeaching';
import InFrontOfChildren from './InFrontOfChildren';
import ShortCuts from './ShortCuts';
import WhatEllaThinks from './WhatEllaThinks';

type Links = {
  href: string;
  text: string;
};

const navLinks: Links[] = [
  {
    href: 'tipy-pro-zacinajici-ucitele/#co-se-uceni-netyka',
    text: 'To, co se učení vůbec netýká',
  },
  {
    href: 'tipy-pro-zacinajici-ucitele/#kdyz-jdes-ucit-pred-deti',
    text: 'Když jdeš učit, prostě před děti',
  },
  { href: 'tipy-pro-zacinajici-ucitele/#pokrocile-lajfheky', text: 'Pokročilé lajfheky' },
  { href: 'tipy-pro-zacinajici-ucitele/#pouzivane-zkratky', text: 'Používané zkratky' },
  {
    href: 'tipy-pro-zacinajici-ucitele/#co-si-mysli-ella',
    text: 'Co si myslí Ella (a třeba to je kravina): Jak na děti',
  },
];

const TeachersTips: React.FC = () => (
  <Container>
    <Meta
      title="Jak zvládnout start v učitelství?"
      description="Naše programy a sekce tipů pomáhají v začátcích pedagogické kariéry."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <MainTitle>Tipy pro začínající učitele</MainTitle>

    <Section>
      <SectionTitle>Tápete v začátcích?</SectionTitle>

      <Paragraph>
        Přečtěte si{' '}
        <Button
          href="https://tajnyucitel.wordpress.com/2021/08/23/kompletni-prirucka-pro-zacinajici-ucitele/"
          target="_blank"
        >
          Příručku pro začínající učitele
        </Button>{' '}
        od Alexe! Autor blogu{' '}
        <Button href="https://tajnyucitel.wordpress.com/" target="_blank">
          Tajný učitel
        </Button>{' '}
        v dokumentu prozradí spoustu užitečných rad, jak zvládnout pedagogické začátky ve škole.
        Alexe najdete také na{' '}
        <Button href="https://twitter.com/PanUcitel89" target="_blank">
          Twitteru
        </Button>
        .
      </Paragraph>
      <Paragraph>
        <Button href="https://twitter.com/prayforlasagne">Madame Lasagne</Button> vás zase obohatí
        svými zápisky, ve kterých shrnuje{' '}
        <Button
          href="https://tajnyucitel.wordpress.com/2020/08/27/dojmy-zacinajici-ucitelky-1/"
          target="_blank"
          buttonStyle="link"
        >
          Dojmy začínající učitelky.
        </Button>
      </Paragraph>
      <Paragraph>
        A na konec ještě něco odlehčeného. Nezaměnitelnou twitterovou formou své zážitky a postřehy
        ze startu za katedrou sdílí i naše kamarádka a začínající učitelka{' '}
        <Button href="https://twitter.com/ellenprazakova1" target="_blank">
          Ellen Pražáková.
        </Button>
      </Paragraph>
    </Section>

    <Section id="vyber-tipu-od-ellen" withBackground>
      <SectionTitle>Začínáme v roli učitele od Ellen Pražákové</SectionTitle>
      {navLinks.map((link, index) => (
        <Paragraph key={index}>
          <ScrollLinkContainer>
            <Number>{index + 1}</Number>
            <Button href={link.href} endIcon={<DoubleArrowIcon />}>
              {link.text}
            </Button>
          </ScrollLinkContainer>
        </Paragraph>
      ))}
    </Section>

    <NotAboutTeaching />
    <InFrontOfChildren />
    <LifeHacks />
    <ShortCuts />
    <WhatEllaThinks />
    <BackToHomeButton href={routes.homepage}>Zpátky domů</BackToHomeButton>
  </Container>
);

export default TeachersTips;
