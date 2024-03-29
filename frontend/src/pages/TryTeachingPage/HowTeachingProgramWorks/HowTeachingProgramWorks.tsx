import React from 'react';

import {
  TopWrapper,
  MainTitle,
  Logo,
  Section,
  SectionTitle,
  Number,
  List,
  ListItem,
  Uppercase,
  Image,
  TitleText,
  SectionPart,
} from '../styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Container from '@components/Container/Container';
import Meta from '@components/Meta/Meta';
import BackButton from '@pages/BackButton/BackButton';
import { routes } from '@routes';

import logoImage from '../teach.svg';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';

const HowTeachingProgramWorks: React.FC = () => (
  <Container>
    <Meta
      title="Nevíte, zda je učení pro vás? Nebo chcete předat svoje znalosti?"
      description="Vyzkoušejte si učení na vlastní kůži v programu Zkus učit!, nebo využijte program Den pro školu a předejte své zkušenosti žákům během jednoho dne. "
    />
    <BackButton href={routes.tryTeaching.main} icon="arrow">
      Zpátky na chci si zkusit učení
    </BackButton>
    <TopWrapper>
      <MainTitle>Jak probíhá program</MainTitle>
      <Logo alt="Chci se zaučit logo" height={149} src={logoImage} width={248} />
    </TopWrapper>
    <Section withOffset>
      <SectionPart>
        <SectionTitle>
          <Number>1</Number>
          <TitleText>Příprava</TitleText>
        </SectionTitle>
        <p>
          Vyzkoušíte si <strong>přípravu učiva na hodinu</strong> podle materiálů s metodickými
          základy od zkušených lektorů.
        </p>
      </SectionPart>
      <SectionPart>
        <SectionTitle>
          <Number>2</Number>
          <TitleText>Víkendové soustředění</TitleText>
        </SectionTitle>
        <p>Poznáte ostatní účastníky i sami sebe (aspoň trochu).</p>
        <p>
          Část připravené hodiny si{' '}
          <strong>odučíte „nanečisto“ před ostatními účastníky programu</strong>.
        </p>
        <p>Pod vedením zkušené mentorky si vyzkoušíte dávání i získávání kvalitní zpětné vazby.</p>
      </SectionPart>
      <SectionPart>
        <SectionTitle>
          <Number>3</Number>
          <TitleText>Týdenní stáž</TitleText>
        </SectionTitle>
        <Image alt="" height={193} src={image1} width={328} />
        <p>
          Seznámíte se s prostředím naší partnerské základní školy, ředitelem či ředitelkou, svým
          partnerským učitelem a žáky.
        </p>
        <p>
          <strong>Vyzkoušíte si roli žáka, roli asistujícího učitele i učení v tandemu.</strong>.
        </p>
        <p>
          Vyzkoušíte si <strong>samostatně vést hodinu</strong>, případně více hodin po domluvě se
          svým partnerským učitelem.
        </p>
        <p>
          V půlce týdne se můžete těšit na <strong>společnou supervizi</strong>.
        </p>
        <p>
          Dvakrát za stáž absolvujete <strong>sturkturovanou reflexi</strong> se svým partnerským
          učitelem.
        </p>
        <p>
          Během celé stáže je vám <strong>k dispozici průvodce pro podporu</strong>, rady a reflexi.
        </p>
        <p>
          V sobotu vás čeká beseda se začínajícím učitelem a reflexe s mentorem. Zhodnotíte vaši
          motivaci pro vstup do školství a zjistíte, zda je škola pro vás to pravé.
        </p>
      </SectionPart>
    </Section>
    <Section withBackground withOffset>
      <SectionPart>
        <SectionTitle>Nemůžete být celý týden mimo domov?</SectionTitle>
        <p>I na to jsme mysleli a máme pro vás výběr ze dvou variant týdenní stáže:</p>
      </SectionPart>
      <SectionPart>
        <SectionTitle>
          <Number>1</Number>
          <TitleText>Intenzivní výjezdní týden</TitleText>
        </SectionTitle>
        <p>
          Celý týden spolu s dalšími účastníky a průvodcem strávíte mimo svůj domov v ubytování v
          dojezdové vzdálenosti od vybrané školy.
        </p>
      </SectionPart>
      <SectionPart>
        <SectionTitle>
          <Number>2</Number>
          <TitleText>Týden na škole v dojezdové vzdálenosti od vašeho domova</TitleText>
        </SectionTitle>
        <p>
          Celý týden budete spolu s dalším účastníky a průvodcem dojíždět nebo docházet na vybranou
          školu blízko vašeho bydliště.
        </p>
      </SectionPart>
    </Section>
    <Section withOffset>
      <SectionTitle>Kdy a kde tento program proběhne a kolik stojí?</SectionTitle>
      <Image alt="" height={164} src={image2} width={328} />
      <List>
        <ListItem>
          Víkendové soustředění proběhne od pátečního odpoledne 12.&nbsp;11. do sobotního večera 13.&nbsp;11.&nbsp;2021
          na chatě mimo Prahu, o místě vás budeme včas informovat.
        </ListItem>
        <ListItem>
          Týdenní stáž se uskuteční v týdnu od 22. do 26.&nbsp;11.&nbsp;2021 podle zvolené varianty na škole ve
          vašem okolí, nebo ve vybrané inspirativní škole (v tomto případě budete vyjíždět již v
          neděli 21.&nbsp;11.&nbsp;2021).
        </ListItem>
        <ListItem>Závěrečná reflexe následuje v sobotu 27.&nbsp;11.&nbsp;2021</ListItem>
        <ListItem>
          Díky finanční podpoře našeho dárce Nadace <Uppercase>Blížksobě</Uppercase> vám účast v
          programu nabízíme za skvělou cenu 5 000 Kč. Skutečná cena na jednoho účastníka totiž
          vychází na 20 000 Kč.
        </ListItem>
      </List>
    </Section>
    <Section withBackground withOffset>
      <SectionTitle>Věděli jste, že...</SectionTitle>
      <p>
        <strong>Pro učitelskou dráhu se nakonec rozhodne čtvrtina absolventů projektu</strong> –
        působí na základních a středních školách už při studiu nebo na plný úvazek. Ostatní často
        přispívají ke vzdělávání veřejnosti při volnočasových aktivitách.
      </p>
      <Image alt="" height={164} src={image3} width={328} />
      <p>
        Zkus učit! je tak pomyslnou vstupní branou do světa učení –⁠ máte možnost nejen správně
        nastavit svou motivaci a rozvíjet své schopnosti, ale i poznat základní kompetence pedagoga.
      </p>
    </Section>
    <BackToHomeButton href={routes.tryTeaching.main}>
      Zpátky na Chci si zkusit učení
    </BackToHomeButton>
  </Container>
);

export default HowTeachingProgramWorks;
