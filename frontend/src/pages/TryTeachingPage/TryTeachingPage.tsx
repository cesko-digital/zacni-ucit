import React from 'react';

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
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import logoImage from './teach.svg';
import ChevronIcon from '@icons/chevron-right.svg';

const TryTeachingPage: React.FC = () => (
  <Container>
    <Meta
      title="Nevíte, zda je učení pro vás? Nebo chcete předat svoje znalosti?"
      description="Vyzkoušejte si učení na vlastní kůži v programu Zkus učit!, nebo využijte program Den pro školu a předejte své zkušenosti žákům během jednoho dne. "
    />
    <BackButton href={routes.homepage} icon="home">
      Zpátky domů
    </BackButton>
    <TopWrapper>
      <MainTitle>Chci si zkusit učení</MainTitle>
      <Logo alt="Zkus učit logo" height={149} src={logoImage} width={248} />
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
          <Button
            buttonStyle="button"
            endIcon={<ChevronIcon />}
            href="https://forms.gle/L3K9qV7UELiLYQen9"
            target="_blank"
          >
            Přihlaste se
          </Button>
        </SignUpButtonWrapper>
        <Button
          buttonStyle="button"
          endIcon={<ChevronIcon />}
          href={routes.tryTeaching.howItWorks}
          variant="secondary"
        >
          Jak program probíhá
        </Button>
      </ButtonsWrapper>
    </Section>
    <Section>
      <SectionTitle id="den-pro-skolu">Den pro školu</SectionTitle>
      <p>
        Učitelství vás láká, máte spoustu zkušeností z vašeho oboru – zároveň ale máte jen málo
        času? Využijte programu Den pro školu a{' '}
        <strong>věnujte jeden den vybrané škole a jejím žákům</strong>!
      </p>
      <SignUpButtonWrapper>
        <Button
          buttonStyle="button"
          endIcon={<ChevronIcon />}
          href="https://www.denproskolu.cz/"
          target="_blank"
        >
          Přihlaste se
        </Button>
      </SignUpButtonWrapper>
      <BackToHomeButton />
    </Section>
  </Container>
);

export default TryTeachingPage;
