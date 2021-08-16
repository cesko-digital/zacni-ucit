import React from 'react';

import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import zsImage from '@pages/CanITeachPage/zs1.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    additionalInfo={
      <strong>
        Pokud nemáte ani jedno z toho, budete si muset některou z těchto věcí doplnit.
      </strong>
    }
    backButton={{
      href: routes.startTeaching.crossroad,
      topButtonText: 'Zpátky na výběr, kde učit',
      bottomButtonText: 'Zpátky na výběr, kde chci učit',
    }}
    logo={zsImage}
    mainInfo={
      <p>
        Pokud chcete učit na 1. stupni základní škol, budete (případně nebudete) si{' '}
        <strong>doplňovat kvalifikaci</strong> podle toho, zda máte:
      </p>
    }
    metaTitle="Jak začít učit na 1. stupni ZŠ"
    recommendation={
      <>
        Malé doporučení: Pokud tušíte, že byste ráda*a v budoucnu učil*a ve školce, je nejvýhodnější
        vybrat si „univerzální“ obor, se kterým to bude jednodušeji možné – např. speciální
        pedagogiku pro učitele (více níže).
      </>
    }
    sections={[
      {
        title: 'Mgr. z učitelství 1. stupně ZŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 1. stupni ZŠ,{' '}
              <strong>
                nejlogičtější cestou k tomu je magisterský titul z učitelství 1. stupně ZŠ, jinak
                také primární pedagogiky
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit na 1. stupni základky,
              vystudujete magistra v oboru Primární pedagogika.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-a">
              § 7 odst. (1) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title:
          'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ nebo učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ a SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit na 1. stupni ZŠ a máte magistra z učitelství pro 2. stupeň ZŠ nebo
              učitelství pro 2. stupeň a SŠ,{' '}
              <strong>
                stačí doplnit si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ{' '}
              <strong>a zaměřeném na přípravu učitelů 1. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 2. stupně ZŠ nebo 2. stupně ZŠ a SŠ a
              později zjistíte, že by vás lákal spíše 1. stupeň,{' '}
              <strong>
                stačí doplnit si k tomu učitelské CŽV pro 1. stupeň ZŠ na některé vysoké škole
              </strong>
              .
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-c-1">
              § 7 odst. (1) písm. c) bod 1 zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>doplňující studium k rozšíření odborné kvalifikace (DVPP)</strong>
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 2. stupně ZŠ nebo 2. stupně ZŠ a SŠ a
              později zjistíte, že by vás lákal spíše 1. stupeň, už jste kvalifikovaný*kvalifikovaná
              pedagog*pedagožka, a tak vám{' '}
              <strong>
                stačí doplnit si k tomu učitelství pro 1. stupeň ZŠ v rámci dalšího vzdělávání
                pedagogických pracovníků (DVPP)
              </strong>
              .
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-c-2">
              § 7 odst. (1) písm. c) bod 2 zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit na 1. stupni ZŠ a máte Mgr. z učitelství pro SŠ,{' '}
              <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů 1. stupně ZŠ</strong>.
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-d">
              § 7 odst. (1) písm. d) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství pro ZUŠ toho oboru, který budete učit',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký umělecký předmět na 1. stupni ZŠ,{' '}
              <strong>
                stačí vám magisterské vzdělání zaměřené na přípravu učitelů základní umělecké školy
                studijního oboru, který odpovídá charakteru vyučovaného předmětu
              </strong>
              .
            </p>
            <p>
              Pokud máte tedy vystudován např. obor Učitelství výtvarné výchovy pro základní
              umělecké školy, můžete učit výtvarnou výchovu i na 1. stupni ZŠ.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-e">
              § 7 odst. (1) písm. e) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. / MgA. umělecko-pedagogického zaměření',
        text: (
          <>
            <p>
              Pokud chcete učit umělecké předměty na 1. stupni ZŠ,{' '}
              <strong>
                stačí vám k tomu magisterský titul z oboru daného umělecko-pedagogického zaměření
              </strong>
              .
            </p>
            <p>
              Pokud máte tedy „uměleckého“ magistra a zjistíte, že mu můžete prokázat tzv.
              umělecko-pedagogické zaměření, pedagogickou kvalifikaci máte.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-f">
              § 7 odst. (1) písm. f) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z pedagogiky, učitelství MŠ, vychovatelství nebo pedagogiky volného času',
        text: (
          <>
            <p>
              Pokud chcete učit na 1. stupni ZŠ a máte Mgr. z pedagogiky, učitelství MŠ,
              vychovatelství nebo z pedagogiky volného času, <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů 1. stupně ZŠ</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-1-b">
              § 7 odst. (1) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. ze speciální pedagogiky pro učitele',
        text: (
          <>
            <p>
              Pokud chcete učit na 1. stupni ZŠ, stačí vám magisterský titul ze speciální pedagogiky
              pro učitele.
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit na 1. stupni, vystudujte
              magistra v oboru Speciální pedagogika pro učitele.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-2-a">
              § 7 odst. (1) písm. h) a podle něj § 7 odst. (2) písm. a) zákona č. 563/2004 Sb. o
              pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. ze speciální pedagogiky',
        text: (
          <>
            <p>
              Pokud chcete učit na 1. stupni ZŠ a máte Mgr. ze speciální pedagogiky (nikoliv ze
              speciální pedagogiky pro učitele), <strong>stačí vám dodělat si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů 1. stupně ZŠ</strong>.
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p7-2-b">
              § 7 odst. (1) písm. h) a podle něj § 7 odst. (2) písm. b) zákona č. 563/2004 Sb. o
              pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    title={<>Jak začít učit na 1.&nbsp;stupni ZŠ</>}
  />
);

export default Page;
