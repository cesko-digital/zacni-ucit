import React from 'react';

import Button from '@components/Button/Button';
import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import msImage from '@pages/CanITeachPage/ms.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    additionalInfo={
      <>
        <strong>Pokud nemáte ani jedno</strong> z toho, budete si muset některou z těchto věcí
        doplnit.{' '}
        <strong>
          Další, a pravděpodobně jednodušší cestou do školky pro vás může být práce asistenta
          pedagoga.
        </strong>{' '}
        Více o ní se dozvíte{' '}
        <Button href={routes.startTeaching.teacherAssistant.higherExpertise}>zde</Button> a to, jak
        se asistentem pedagoga stát, zjistíte{' '}
        <Button href={routes.startTeaching.teacherAssistant.higherExpertise}>tady</Button>.
      </>
    }
    backButton={{
      href: `${routes.startTeaching.crossroad}#zakon-o-pedagogickych-pracovnicich`,
      topButtonText: 'Zpátky na výběr, kde učit',
      bottomButtonText: 'Zpátky na výběr, kde chci učit',
    }}
    logo={msImage}
    mainInfo={
      <p>
        Pokud chcete učit v mateřské škole, budete (případně nebudete) si{' '}
        <strong>doplňovat kvalifikaci</strong> podle toho, zda máte:
      </p>
    }
    metaTitle="Jak začít učit v mateřské škole"
    recommendation={
      <>
        Malé doporučení: Pokud tušíte, že byste rádi v budoucnu učili na 1. stupni ZŠ, je
        nejvýhodnější vybrat si “univerzální” obor, se kterým to bude jednodušší – např. speciální
        pedagogiku pro učitele (Mgr.) nebo rovnou učitelství 1. stupně ZŠ (Mgr.).
      </>
    }
    sections={[
      {
        title: 'Bc. z učitelství MŠ',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ,{' '}
              <strong>stačí minimálně bakalářský titul z učitelství MŠ.</strong>
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit ve školce, stačí
              vystudovat bakaláře v oboru Učitelství pro mateřské školy.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-a">
              § 6 odst. (1) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title:
          'Bc. z pedagogiky, učitelství 1. stupně ZŠ, vychovatelství nebo pedagogiky volného času',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ a máte Bc. z pedagogiky, učitelství 1. stupně ZŠ,
              vychovatelství nebo z pedagogiky volného času, <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů MŠ</strong>.
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-b">
              § 6 odst. (1) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Bc. ze speciální pedagogiky',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ,{' '}
              <strong>stačí vám alespoň bakalářský titul ze speciální pedagogiky</strong>.
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit ve školce, vystudujete
              bakaláře v oboru Speciální pedagogika.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-2-a">
              § 6 odst. (1) písm. g) a podle něj § 6 odst. (2) písm. a) zákona č. 563/2004 Sb. o
              pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Dis. z učitelství MŠ',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ, <strong>stačí vám titul Dis. z učitelství MŠ</strong>.
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit ve školce, vystudujte
              VOŠ v oboru Učitelství pro mateřské školy.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-c">
              § 6 odst. (1) písm. c) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Dis. z vychovatelství',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ a máte Dis. z vychovatelství,{' '}
              <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů MŠ</strong>.
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-d">
              § 6 odst. (1) písm. d) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Dis. ze speciální pedagogiky',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ, <strong>stačí vám titul Dis. ze speciální pedagogiky.</strong>
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit ve školce, vystudujte
              VOŠ v oboru Speciální pedagogika pro učitele.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-2-b">
              § 6 odst. (1) písm. g) a podle něj § 6 odst. (2) písm. b) zákona č. 563/2004 Sb. o
              pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Maturita z učitelství v MŠ',
        text: (
          <>
            <p>
              Pokud chcete chcete učit v MŠ,{' '}
              <strong>stačí vám maturitní zkouška z učitelství MŠ</strong>.
            </p>
            <p>
              Tedy pokud jste vystudoval*a pedagogickou střední školu v oboru předškolní pedagogiky
              a máte z něj maturitu, můžete učit ve školce.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-f">
              § 6 odst. (1) písm. f) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Maturita z vychovatelství',
        text: (
          <>
            <p>
              Pokud chcete učit v MŠ a vystudoval*a jste pedagogickou střední školu v oboru
              vychovatelství a máte z něj maturitu, <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              tzv. <strong>jednotlivou zkoušku</strong> (podle § 113 zákona č. 561/2004 Sb. o
              předškolním, základním, středním, vyšším odborném a jiném vzdělávání tzv. školský
              zákon),{' '}
              <strong>
                která svým obsahem a formou odpovídá zkoušce profilové části maturitní zkoušky z
                předmětu zaměřeného na pedagogiku předškolního věku
              </strong>
              .
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p6-1-f">
              § 6 odst. (1) písm. f) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    title="Jak začít učit v mateřské škole"
  />
);

export default Page;
