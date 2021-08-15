import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';
import React from 'react';

import Button from '@components/Button/Button';
import ChevronIcon from '@icons/chevron-right.svg';

import logoImage from './teach.svg';
import {
  TopWrapper,
  MainTitle,
  Logo,
  Section,
  SectionTitle,
  ButtonsWrapper,
  SignUpButtonWrapper,
  List,
  ListItem,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';

const TryTeachingPage: React.FC = () => (
  <Container>
    <Meta title="" />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <TopWrapper>
      <MainTitle>Chci si zkusit učení</MainTitle>
      <Logo src={logoImage} alt="Zkus učit logo" width={248} height={149} />
    </TopWrapper>

    <Section>
      <SectionTitle>Celoroční program</SectionTitle>
      <p>
        Chcete učit, ale nejste si jistí, zda je učení pro vás to pravé? Nebo přemýšlíte nad změnou
        kariéry, ale nechcete se rozhodnout bez předešlé zkušenosti? Nejen pro vás je určen program
        Zkus učit!
      </p>
      <p>
        <strong>Staňte se na týden učitelem a vyzkoušejte si učení na vlastní kůži.</strong>
      </p>
      <p>Vstupem do programu získáte:</p>
      <List>
        <ListItem>pedagogické základy od zkušených lektorů</ListItem>
        <ListItem>možnost vyzkoušet si roli učitele přímo v praxi</ListItem>
        <ListItem>reflexi vlastních dovedností i zkušeností z prožitého týdne</ListItem>
        <ListItem>mentora po celou dobu trvání programu</ListItem>
      </List>
      <ButtonsWrapper>
        <SignUpButtonWrapper>
          <Button href="#" endIcon={<ChevronIcon />} buttonStyle="button">
            Přihlaste se
          </Button>
        </SignUpButtonWrapper>
        <Button
          href={routes.tryTeaching.howItWorks}
          endIcon={<ChevronIcon />}
          buttonStyle="button"
          variant="secondary"
        >
          Jak program probíhá
        </Button>
      </ButtonsWrapper>
    </Section>
    <Section>
      <SectionTitle>Den pro školu</SectionTitle>
      <p>
        Učitelství vás láká, máte spoustu zkušeností z vašeho oboru – zároveň ale máte jen málo
        času? Využijte programu Den pro školu a{' '}
        <strong>věnujte jeden den vybrané škole a jejím žákům</strong>!
      </p>
      <SignUpButtonWrapper>
        <Button href="#" endIcon={<ChevronIcon />} buttonStyle="button">
          Přihlaste se
        </Button>
      </SignUpButtonWrapper>
      <BackToHomeButton />
    </Section>
  </Container>
);

export default TryTeachingPage;
