import React from 'react';

import {
  ButtonWrapper,
  MainTitle,
  Section,
  SectionTitle,
  Paragraph,
  SectionSubtitle,
  List,
  CrossroadList,
  MainLink,
} from './styled';
import BackToHomeButton from '@components/BackToHomeButton/BackToHomeButton';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import CrossroadItem from '@components/CrossroadItem/CrossroadItem';
import { routes } from '@routes';

import asImage from './as.svg';
import msImage from './ms.svg';
import ssImage from './ss.svg';
import zs1Image from './zs1.svg';
import zs2Image from './zs2.svg';
import ChevronIcon from '@icons/chevron-right.svg';
import ListIcon from '@icons/list.svg';
import Meta from '@components/Meta/Meta';

const CanITeachPage: React.FC = () => (
  <Container>
    <Meta
      title="Nevíte, zda můžete učit nebo jak si doplnit kvalifikaci?"
      description="S našim přehledným shrnutím zjistíte, co potřebujete k tomu, abyste mohli začít učit, a kde si potřebné znalosti a pedagogickou kvalifikaci můžete doplnit."
    />
    <MainTitle>Můžu učit?</MainTitle>
    <Section>
      <SectionTitle>Interaktivní průvodce</SectionTitle>
      <Paragraph>
        Projděte naším interaktivním průvodcem a zjistěte, co potřebujete k tomu, abyste mohli začít
        učit, a kde si potřebné znalosti a pedagogickou kvalifikaci můžete doplnit.
      </Paragraph>
      <Button href={routes.configurator.step1} endIcon={<ChevronIcon />} buttonStyle="button">
        Můžu učit
      </Button>
    </Section>
    <Section id="pedagogicke-minimum">
      <SectionTitle>„Pedagogické minimum“</SectionTitle>
      <Paragraph>
        Tento hovorový pojem ve světě učitelství dnes již nenajdete. Pedagogické vzdělání můžete
        získat{' '}
        <strong>
          doplňujícím pedagogickým studiem, studiem pedagogiky v rámci kurzu celoživotního
          vzdělávání
        </strong>
        , nebo třeba programem Učitel naživo!
      </Paragraph>
      <Paragraph>
        Doplňující pedagogické studium nabízí univerzity v mnoha českých městech.
      </Paragraph>
      <ButtonWrapper>
        <Button
          buttonStyle="button"
          endIcon={<ChevronIcon />}
          href={routes.startTeaching.completeYourQualification}
        >
          Podívejte se na seznam škol nabízejících kurzy
        </Button>
      </ButtonWrapper>
      <Paragraph>
        Protože je v tom zmatek, tak jsme pro vás připravili systém, který vám najde kurz nebo
        program na míru vašeho vzdělání.
      </Paragraph>
      <Button href={routes.configurator.step1} endIcon={<ChevronIcon />} buttonStyle="button">
        Chci si najít kurz
      </Button>
    </Section>
    <Section id="zakon-o-pedagogickych-pracovnicich">
      <SectionTitle>Zákon o pedagogických pracovnících</SectionTitle>
      <Paragraph>
        Podrobné informace o kvalifikačních požadavcích na všechny pedagogické profese naleznete v
        zákoně o pedagogických pracovnících č. 563/2004 Sb. nebo ve{' '}
        <strong>výkladu tohoto zákona, který jsme pro vás připravili</strong>.
      </Paragraph>
      <SectionSubtitle>Rozcestník: kde chcete učit?</SectionSubtitle>
      <Paragraph>
        Vyberte si, kde chcete učit, a my vám ukážeme, jak na to! Pokud vás ještě před tím zajímá,
        jaké předměty budete (po doplnění pedagogické kvalifikace) moci se svojí specializací učit,
        podívejte se do naší{' '}
        <MainLink href="./subjects.pdf" target="_blank" download>
          tabulky.
        </MainLink>
        <i>
          (Tato tabulka není oficiálním stanoviskem MŠMT, ale byla vytvořena na základě praxe
          ředitelů a ředitelek škol s učiteli, kteří si doplňovali pedagogickou kvalifikaci k již
          dokončenému odbornému vzdělání.)
        </i>
      </Paragraph>
      <CrossroadList>
        {[
          {
            icon: msImage,
            button: { text: 'Mateřská škola', href: routes.startTeaching.kindergarten },
          },
          {
            icon: zs1Image,
            button: { text: '1. stupeň ZŠ', href: routes.startTeaching.firstGrade },
          },
          {
            icon: zs2Image,
            button: { text: '2. stupeň ZŠ', href: routes.startTeaching.secondGrade.crossroad },
          },
          {
            icon: ssImage,
            button: { text: 'Střední škola', href: routes.startTeaching.highSchool.crossroad },
          },
          {
            icon: asImage,
            button: {
              text: 'Asistent pedagoga',
              href: routes.startTeaching.teacherAssistant.crossroad,
            },
          },
          // { icon: spsImage, button: { text: 'Speciální škola', href: '' } },
        ].map(item => (
          <CrossroadItem key={item.button.href} {...item} />
        ))}
      </CrossroadList>
      <SectionSubtitle>Můžu učit i bez kvalifikace?</SectionSubtitle>
      <Paragraph>
        V praxi není výjimkou, že ve školách pracují lidé, kteří si kvalifikaci při výkonu
        učitelského povolání teprve dodělávají.{' '}
        <strong>
          Ředitelé škol totiž mohou přijmout i člověka bez pedagogického vzdělání, pokud nemají
          kvalifikovaného zájemce.
        </strong>
      </Paragraph>
      <Paragraph>
        Nebojte se proto odpovídat na zajímavé pracovní nabídky ve školství, i když zatím nemáte
        potřebnou kvalifikaci.
      </Paragraph>
    </Section>
    <Section id="jaci-ucitele-chybi">
      <SectionTitle>Jací učitelé chybí?</SectionTitle>
      <Paragraph>
        Uvažujete o učitelské profesi a zajímá vás, zda se ve školství uplatníte?
      </Paragraph>
      <SectionSubtitle>V ČR je největší nedostatek učitelů:</SectionSubtitle>
      <List>
        <li>1. stupně ZŠ a mateřských školek</li>
        <li>fyziky, matematiky a informatiky pro 2. stupeň ZŠ a SŠ</li>
        <li>SŠ pro výuku oborů</li>
        <List>
          <li>stavebnictví, geodézie a kartografie</li>
          <li>strojírenství a strojírenská výroba</li>
          <li>elektrotechnika, telekomunikační a výpočetní technika</li>
        </List>
        <li>češtiny a angličtiny pro 2. stupeň ZŠ</li>
        <li>asistentů pedagoga, psychologů a dalších podpůrných pedagogických profesí</li>
      </List>
      <Paragraph>
        Pokud vás zajímá, jaká je situace s nedostatkem pedagogů ve vašem kraji:
      </Paragraph>
      <Button
        buttonStyle="link"
        href="https://www.msmt.cz/file/50371_1_1/"
        target="_blank"
        startIcon={<ListIcon />}
      >
        Zpráva MŠMT o učitelích v regionech
      </Button>
    </Section>
    <BackToHomeButton />
  </Container>
);

export default CanITeachPage;
