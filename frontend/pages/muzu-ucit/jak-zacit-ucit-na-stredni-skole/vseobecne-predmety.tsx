import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Všeobecné předměty - Jak začít učit na střední škole"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    subtitle="Všeobecné předměty"
    mainInfo={
      <>
        <p>
          Tzv. všeobecně–vzdělávacími předměty se podle zákona o ped. pracovnících rozumí předměty
          „opravňující k obecnému pedagogickému působení na dané škole“.
        </p>
        <FocusedParagraph>
          Typicky jsou to{' '}
          <strong>
            čeština, občanská výchova, dějepis, základy společenských věd apod., matematika,
            přírodopis, fyzika, chemie apod.
          </strong>
        </FocusedParagraph>
        <p>
          Pokud chcete učit některý z těchto předmětů na středních školách, učilištích nebo
          gymnáziích, budete (případně nebudete) si <strong>doplňovat kvalifikaci</strong> podle
          toho, zda máte:
        </p>
      </>
    }
    sections={[
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ,{' '}
              <strong>
                nejlogičtější cestou je magisterský titul z učitelství daného předmětu pro SŠ
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit na druhém stupni
              češtinu, vystudujete bakaláře v oboru Český jazyk a literatura se zaměřením na
              vzdělávání a na téže škole pak navazujícího magistra Učitelství českého jazyka a
              literatury pro základní školy. Některé školy předchozího bakaláře v daném oboru pro
              přijetí na navazujícího magistra přímo vyžadují.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého studia budete muset vybrat učitelství
              ještě dalšího předmětu.
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-a">
              § 9 odst. (1) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ a SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na SŠ,{' '}
              <strong>
                kvalifikaci k tomu získáte magisterským titulem z učitelství daného předmětu pro 2.
                stupeň ZŠ a/nebo SŠ
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud chcete učit na druhém stupni dějepis, vystudujete bakaláře v oboru
              Dějepis se zaměřením na vzdělávání a na téže škole pak navazujícího magistra
              Učitelství dějepisu pro SŠ a 2. stupeň ZŠ. Některé školy předchozího bakaláře v daném
              oboru pro přijetí na navazujícího magistra přímo vyžadují.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého studia budete muset vybrat učitelství
              ještě dalšího předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-b">
              § 9 odst. (1) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na SŠ a máte magistra z učitelství pro 2. stupeň ZŠ,
              <strong>
                stačí si doplnit
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                bakaláře se zaměřením na přípravu učitelů všeobecně-vzdělávacích předmětů SŠ
              </strong>
            </FocusedParagraph>
            <p>
              V praxi to tedy znamená, že pokud už máte magistra např. z ČJ a AJ pro 2. stupeň ZŠ,
              měl*a byste si k tomu doplnit bakaláře, tedy např. Anglický jazyk se zaměřením na
              vzdělávání.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-d-1">
              § 9 odst. (1) písm. d) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání v programu celoživotního vzdělávání (CŽV) uskutečňovaném vysokou školou a
              zaměřeném na přípravu učitelů SŠ
            </FocusedParagraph>
            <p>
              To znamená, že pokud už máte magistra z učitelství matematiky pro 2. stupeň, stačí si
              k tomu doplnit učitelské CŽV na některé vysoké škole.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-d-2">
              § 9 odst. (1) písm. d) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>doplňující studium k rozšíření odborné kvalifikace (DVPP)</strong>
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 2. stupně a později zjistíte, že by
              vás víc lákalo učitelství na střední škole, už jste kvalifikovaný pedagog, a tak stačí
              doplnit si k tomu učitelství ideálně daného předmětu pro SŠ v rámci dalšího vzdělávání
              pedagogických pracovníků (DVPP).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-d-3">
              § 9 odst. (1) písm. d) bod 3. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na SŠ a máš magistra z nepedagogického oboru, který
              odpovídá charakteru vyučovaného předmětu,{' '}
              <strong>
                stačí si doplnit:
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                pedagogického bakaláře se zaměřením na přípravu učitelů všeobecně-vzdělávacích
                předmětů 2. stupně ZŠ nebo SŠ
              </strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete chtít učit třeba dějepis, ale budete mít třeba
              omylem magistra z ekonomie, nejlepší je pro vás dodělat si bakaláře v oboru Dějepis se
              zaměřením na vzdělávání, čímž získáte pedagogickou kvalifikaci i potřebnou odbornost v
              předmětu.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého bakalářského studia budete muset vybrat
              učitelství ještě dalšího předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-c-1">
              § 9 odst. (1) písm. c) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání v <strong>programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a <strong>zaměřeném na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete chtít učit třeba češtinu, ale budete mít třeba
              omylem inženýra z informatiky, stačí si k tomu doplnit učitelské CŽV pro 2. stupeň ZŠ
              či SŠ na některé vysoké škole. Musíte si ovšem najít studium CŽV, které odpovídá oboru
              vašeho magistra, tedy např. CŽV učitelství v oboru informační a komunikační
              technologie. Tím získáte pedagogickou kvalifikaci pro učitelství na SŠ.
            </p>
            <p>
              Pozn.: „Aprobovanost“ pro výuku jazyka si doplníte studiem učitelství daného předmětu
              v rámci dalšího vzdělávání pedagogických pracovníků (DVPP).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-1-c-2">
              § 9 odst. (1) písm. c) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
  />
);

export default Page;
