import React from 'react';

import { TopWrapper, MainTitle, Logo, Section, Paragraph } from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import logoImage from '../learn.svg';
import ChevronIcon from '@icons/chevron-right.svg';

const TryTeachingPage: React.FC = () => (
  <Container>
    <Meta
      title="Jak zvládnout start v učitelství?"
      description="Naše programy a sekce tipů pomáhají v začátcích pedagogické kariéry."
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <TopWrapper>
      <MainTitle>Začínám učit</MainTitle>
      <Logo alt="Chci se zaučit logo" height={149} src={logoImage} width={248} />
    </TopWrapper>

    <Section>
      <Paragraph>
        Začínáte učit a hledáte pomoc či prostor pro rozvoj? Zapojte se do Zauč se! a získáte
        podporu nejen od zkušených učitelů a lektorů, ale také dalších začínajících učitelů.
      </Paragraph>

      <Button
        buttonStyle="button"
        endIcon={<ChevronIcon />}
        href={routes.learn.learnPage}
        target="_blank"
      >
        Jak probíhá Zauč se
      </Button>
    </Section>
    <Section>
      <Paragraph>
        Chystáte se nastoupit do školy a chcete vědět, co vás čeká? Přečtěte si, jak se se začátky
        vypořádávají vaši kolegové!
      </Paragraph>
      <Button buttonStyle="button" endIcon={<ChevronIcon />} href={routes.learn.teachersTips}>
        Tipy pro začínající učitele
      </Button>
    </Section>
    <BackToHomeButton />
  </Container>
);

export default TryTeachingPage;
