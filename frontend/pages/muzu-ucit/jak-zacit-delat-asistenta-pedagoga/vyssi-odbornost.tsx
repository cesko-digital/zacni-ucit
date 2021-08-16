import React from 'react';


import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import asImage from '@pages/CanITeachPage/as.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    additionalInfo={
      <p>
        Pokud nemáte alespoň maturitu, podívejte se na kvalifikaci pro{' '}
        <strong>nižší odbornost</strong> ("nižší" úroveň činnosti) <strong>AP</strong>.
      </p>
    }
    backButton={{
      href: routes.startTeaching.teacherAssistant.crossroad,
      topButtonText: 'Zpátky na výběr, kde chci učit',
      bottomButtonText: 'Zpátky na výběr, kde chci učit',
    }}
    logo={asImage}
    mainInfo={
      <>
        <p>
          Jde o přímou pedagogickou činnost ve třídě, ve které jsou vzděláváni žáci se speciálními
          vzdělávacími potřebami (SVP), nebo ve škole s integrovanými žáky.
        </p>
        <p>Asistent pedagoga musí mít minimálně maturitu a odpovídající pedagogické vzdělání.</p>
        <p>
          Pokud se chcete stát asistentem*kou pedagoga této „vyšší“ úrovně, budete (případně
          nebudete) si <strong>doplňovat kvalifikaci podle toho, zda máte</strong>:
        </p>
      </>
    }
    metaTitle="Vyšší odbornost - Jak začít dělat asistenta pedagoga"
    sections={[
      {
        title: 'Bc. v oblasti pedagogických věd',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP,{' '}
              <strong>
                stačí vám minimálně bakalářský titul z jakéhokoliv pedagogického oboru
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete být asistent*ka pedagoga, ale
              rád*a byste tomu lépe rozuměl*a, můžete si udělat bakaláře např. z přípravy učitelů
              MŠ.
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-a">
              § 20 odst. (1) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Bc. v jiné než pedagogické oblasti',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP a máte jakýkoliv bakalářský titul,{' '}
              <strong>
                stačí vám dodělat si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                vzdělání v programu celoživotního vzdělávání (CŽV) uskutečňovaném VŠ a zaměřeném na
                pedagogiku
              </strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-b-1">
              § 20 odst. (1) písm. b) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-b-2">
              § 20 odst. (1) písm. b) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pro asistenty pedagoga</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-b-3">
              § 20 odst. (1) písm. b) bod 3. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'DiS. v oblasti pedagogických věd',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP,{' '}
              <strong>stačí vám titul DiS. z jakéhokoliv pedagogického oboru</strong>.
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete být asistent*ka pedagoga,
              vystudujete VOŠ v oboru Učitelství pro mateřské školy.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-c">
              § 20 odst. (1) písm. c) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'DiS. v jiné než pedagogické oblasti',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP a máte titul DiS.,{' '}
              <strong>
                stačí vám dodělat si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                vzdělání v programu celoživotního vzdělávání (CŽV) uskutečňovaném VŠ a zaměřeném na
                pedagogiku
              </strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-d-1">
              § 20 odst. (1) písm. d) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-d-2">
              § 20 odst. (1) písm. d) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pro asistenty pedagoga</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-d-3">
              § 20 odst. (1) písm. d) bod 3. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'maturita pedagogického zaměření',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP, stačí vám maturita z pedagogické
              střední školy.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-e">
              § 20 odst. (1) písm. e) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'maturita jiného než pedagogického zaměření',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „vyšší“ úroveň činnosti AP a máte hotovou maturitu,{' '}
              <strong>
                stačí vám dodělat si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                vzdělání v programu celoživotního vzdělávání (CŽV) uskutečňovaném VŠ a zaměřeném na
                pedagogiku
              </strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-f-1">
              § 20 odst. (1) písm. f) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pro asistenty pedagoga</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-1-f-3">
              § 20 odst. (1) písm. f) bod 3. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    subtitle="Vyšší odbornost"
    title="Jak začít dělat asistenta pedagoga"
  />
);

export default Page;
