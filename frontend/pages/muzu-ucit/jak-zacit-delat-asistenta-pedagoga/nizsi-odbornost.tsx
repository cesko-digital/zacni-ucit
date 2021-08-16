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
        Pokud máte maturitu nebo vyšší vzdělání, podívejte se na kvalifikaci pro vyšší odbornost
        ("vyšší" úroveň činnosti) AP – požadavky na doplnění kvalifikace jsou stejné (máte více
        možností) a budete kvalifikováni pro výkon obou úrovní činnosti AP.
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
          Jde o přímou pedagogickou činnost spočívající v pomocných pracích ve škole, ve školském
          zařízení pro zájmové vzdělávání, ve školském výchovném a ubytovacím zařízení, ve školském
          zařízení pro výkon ústavní nebo ochranné výchovy, nebo ve školském zařízení pro
          preventivně výchovnou péči.
        </p>
        <p>
          Pro výkon této úrovně AP stačí dokonce pouze základní vzdělání s doplněným studiem pro AP.
        </p>
        <p>
          Pokud se chcete stát asistentem*kou pedagoga této „nižší“ úrovně, budete (případně
          nebudete) si <strong>doplňovat kvalifikaci podle toho, zda máte</strong>:
        </p>
      </>
    }
    metaTitle="Nižší odbornost - Jak začít dělat asistenta pedagoga"
    sections={[
      {
        title: 'Výuční list',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „nižší“ úroveň činnosti AP a máte výuční list z jakéhokoliv
              oboru, stačí si doplnit:
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-2-b">
              § 20 odst. (2) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Střední vzdělání v oboru zaměřeném na přípravu AP',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „nižší“ úroveň činnosti AP,{' '}
              <strong>stačí vám střední vzdělání</strong> (většinou jednoleté či dvouleté bez
              výučního listu a bez maturity){' '}
              <strong>v oboru zaměřeném na přípravu asistentů pedagoga</strong>.
            </p>
            <p>
              Tedy např. pokud se chcete stát asistentem*kou pedagoga, kvalifikaci získáte tak, že
              vystudujete středoškolský obor jako např. Pedagogika pro asistenty ve školství.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-2-c">
              § 20 odst. (2) písm. c) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Střední vzdělání jakékoliv',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „nižší“ úroveň činnosti AP a máte jakékoliv střední vzdělání
              bez maturity nebo výučního listu,{' '}
              <strong>
                stačí vám dodělat si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-2-d-1">
              § 20 odst. (2) písm. d) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pro asistenty pedagoga</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-2-d-2">
              § 20 odst. (2) písm. d) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Základní vzdělání',
        text: (
          <>
            <p>
              Pokud chcete vykonávat „nižší“ úroveň činnosti AP a máte pouze základní vzdělání,{' '}
              <strong>stačí vám doplnit si</strong>:
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p20-2-e">
              § 20 odst. (2) písm. e) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    subtitle="Nižší odbornost"
    title="Jak začít dělat asistenta pedagoga"
  />
);

export default Page;
