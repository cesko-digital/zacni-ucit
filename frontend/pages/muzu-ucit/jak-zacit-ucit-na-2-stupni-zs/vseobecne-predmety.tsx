import React from 'react';

import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import zsImage from '@pages/CanITeachPage/zs2.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    backButton={{
      href: routes.startTeaching.secondGrade.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na 2. stupni ZŠ',
      bottomButtonText: 'Zpátky na výběr, kde chci učit',
    }}
    logo={zsImage}
    mainInfo={
      <>
        <p>
          Tzv. všeobecně–vzdělávacími předměty se podle zákona o ped. pracovnících rozumí předměty
          „opravňující k obecnému pedagogickému působení na dané škole“.
        </p>
        <FocusedParagraph>
          Typicky jsou to{' '}
          <strong>
            např. čeština, občanská výchova, dějepis, základy společenských věd apod., matematika,
            přírodopis, fyzika, chemie apod.
          </strong>
        </FocusedParagraph>
        <p>
          Pokud chcete učit některý z těchto předmětů na 2. stupni ZŠ nebo nižších gymnáziích,
          budete (případně nebudete) si <strong>doplňovat kvalifikaci</strong> podle toho, zda máte:
        </p>
      </>
    }
    metaTitle="Všeobecné předměty - Jak začít učit na 2. stupni ZŠ"
    sections={[
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ,{' '}
              <strong>
                nejlogičtější cestou je magisterský titul z učitelství daného předmětu pro 2. stupeň
                ZŠ
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

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-a">
              § 8 odst. (1) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ a SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ,{' '}
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
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-b">
              § 8 odst. (1) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství všeobecně-vzdělávacích předmětů SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ,{' '}
              <strong>
                můžete ho učit i s magisterským titulem z učitelství daného předmětu pro SŠ
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud chcete učit na druhém stupni zeměpis, vystudujete bakaláře v oboru
              Geografie se zaměřením na vzdělávání a na téže škole pak navazujícího magistra
              Učitelství geografie pro střední školy. Některé školy předchozího bakaláře v daném
              oboru pro přijetí na navazujícího magistra přímo vyžadují.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého studia budete muset vybrat učitelství
              ještě dalšího předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-c">
              § 8 odst. (1) písm. c) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. ze speciální pedagogiky pro učitele',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ a máte magistra ze speciální
              pedagogiky pro učitele, <strong>stačí vám doplnit si</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ</strong>.
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-e">
              § 8 odst. (1) písm. e) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z učitelství pro 1. stupeň ZŠ',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ a máte magistra z učitelství pro 1.
              stupeň ZŠ (jinak také primární pedagogika),{' '}
              <strong>
                stačí vám doplnit si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                bakaláře se zaměřením na přípravu učitelů všeobecně-vzdělávacích předmětů 2. stupně
                ZŠ
              </strong>
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 1. stupně a později zjištíte, že by
              vás lákal spíš 2. stupeň, jednou z variant je doplnit si bakaláře z učitelství ideálně
              daného předmětu pro 2. stupeň ZŠ.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého bakalářského studia budete muset vybrat
              učitelství ještě dalšího předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-f-1">
              § 8 odst. (1) písm. f) bodu 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a <strong>zaměřeném na přípravu učitelů 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 1. stupně a později zjištíte, že by
              vás lákal spíš 2. stupeň, stačí vám doplnit si k tomu učitelské CŽV pro 2. stupeň ZŠ
              na některé vysoké škole.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-f-2">
              § 8 odst. (1) písm. f) bodu 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              doplňující studium k rozšíření odborné kvalifikace (DVPP)
            </FocusedParagraph>
            <p>
              To znamená, že pokud máte magistra z učitelství 1. stupně a později zjištíte, že by
              vás lákal spíš 2. stupeň, už jste kvalifikovaný pedagog, a tak vám stačí doplnit si k
              tomu učitelství ideálně daného předmětu pro 2. stupeň ZŠ v rámci dalšího vzdělávání
              pedagogických pracovníků (DVPP).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-f-3">
              § 8 odst. (1) písm. f) bodu 3. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit určitý předmět na 2. stupni ZŠ a máte magistra z nepedagogického
              oboru, který odpovídá charakteru vyučovaného předmětu,{' '}
              <strong>
                stačí vám doplnit si
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
              V praxi to znamená, že když budete chtít učit třeba dějepis, ale budete mít magistra z
              ekonomie, nejlepší pro vás je dodělat si bakaláře v oboru Dějepis se zaměřením na
              vzdělávání, čímž získáte pedagogickou kvalifikaci i potřebnou odbornost v předmětu.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého bakalářského studia budete muset vybrat
              učitelství ještě dalšího předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-d-1">
              § 8 odst. (1) písm. d) bodu 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a <strong>zaměřeném na přípravu učitelů 2. stupně ZŠ nebo SŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete chtít učit třeba češtinu a budete mít inženýra z
              informatiky, stačí vám doplnit si k tomu učitelské CŽV pro 2. stupeň ZŠ či SŠ na
              některé vysoké škole. Musíte si ovšem najít studium CŽV, na které se budete moci
              přihlásit (podmínky pro přijetí najdete u jednotlivých oborů) – je pravděpodobné, že
              se budete muset přihlásit na CŽV na některé z technických VŠ. Tím se stanete
              kvalifikovaným pedagogem. Spousta ředitelů by vás ale pravděpodobně nechala učit jen
              informatiku, kterou jste vystudoval*a, proto je vhodné si pak už jen doplnit aprobaci
              pro učitelství češtiny.
            </p>
            <p>
              Pozn.: „Aprobovanost“ pro výuku dalšího předmětu si doplníš studiem učitelství daného
              předmětu v rámci dalšího vzdělávání pedagogických pracovníků (DVPP).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-d-2">
              § 8 odst. (1) písm. d) bodu 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    subtitle="Všeobecné předměty"
    title={<>Jak začít učit na 2.&nbsp;stupni ZŠ</>}
  />
);

export default Page;
