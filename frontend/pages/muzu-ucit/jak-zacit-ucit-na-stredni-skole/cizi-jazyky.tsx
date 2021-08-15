import React from 'react';


import LawReference from '@components/LawReference/LawReference';
import { FocusedParagraph } from '@components/Typography';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import ssImage from '@pages/CanITeachPage/ss.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    additionalInfo={
      <p>
        Pokud nemáte ani jedno z toho, budete si muset některou z těchto věcí doplnit, případně se
        kvalifikovat v jiném předmětu a aprobaci pro jazyk si doplnit v rámci dalšího vzdělávání
        pedagogických pracovníků (DVPP).
      </p>
    }
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    logo={ssImage}
    mainInfo={
      <>
        <p>
          Požadavky na vyučující cizích jazyků jsou shodné pro učitelství na 2. stupni ZŠ i pro SŠ.
        </p>
        <p>
          Takže{' '}
          <strong>
            pokud chcete učit některý z cizích jazyků na 2. stupni ZŠ, gymnáziích, středních školách
            a učilištích, budete si doplňovat kvalifikaci podle toho, zda máte
          </strong>
          :
        </p>
      </>
    }
    metaTitle="Cizí jazyky - Jak začít učit na střední škole"
    sections={[
      {
        title: 'Mgr. z učitelství příslušného cizího jazyka',
        text: (
          <>
            <p>
              Pokud chcete učit určitý cizí jazyk na 2. stupni ZŠ nebo SŠ,{' '}
              <strong>
                nejlogičtější cestou k tomu je magisterský titul z učitelství daného cizího jazyka
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud rovnou po střední škole víte, že chcete učit na druhém stupni
              angličtinu, vystudujete bakaláře v oboru Anglický jazyk a literatura se zaměřením na
              vzdělávání a na téže škole pak navazujícího magistra Učitelství anglického jazyka a
              literatury. Některé školy předchozího bakaláře v daném oboru pro přijetí na
              navazujícího magistra přímo vyžadují.
            </p>
            <p>
              Pozn.: Pravděpodobně si k tomu v rámci svého studia budete muset vybrat učitelství
              ještě dalšího předmětu.
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-a">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich §12 písm. a) zákona č.
              563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Bc. (nebo vyšší) z učitelství / se zaměřením na vzdělávání',
        text: (
          <>
            <p>
              Pokud chcete učit určitý cizí jazyk a máte bakaláře nebo magistra z nějakého
              pedagogického oboru, <strong>stačí vám doplnit si</strong>
            </p>
            <FocusedParagraph>
              <strong>jazykovou zkoušku na úrovni aspoň C1</strong> Společného evropského
              referenčního rámce pro jazyky (SERR)
            </FocusedParagraph>
            <p>a k tomu</p>
            <FocusedParagraph>
              <strong>doplňující didaktické studium příslušného jazyka (DVPP)</strong>
            </FocusedParagraph>
            <p>
              Tedy např. pokud jste vystudoval*a bakaláře v oboru Matematika se zaměřením na
              vzdělávání, možná jste odjel*a pracovat na pár let do zahraničí a pak jste zjistil*a,
              že chcete učit jazyky, musíte si dodělat jazykovou zkoušku úrovně C1 a k tomu v rámci
              DVPP tzv. doplňující didaktické studium příslušného jazyka (možná ho někde najdete
              jako “pedagogické minimum” pro daný jazyk).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-b">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich § 12 písm. b) zákona č.
              563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. ze společenských věd pro daný jazyk',
        text: (
          <>
            <p>
              Pokud chcete učit určitý cizí jazyk na 2. stupni ZŠ nebo na SŠ a studoval*a jste daný
              jazyk v nějakém společenskovědním programu,{' '}
              <strong>
                stačí vám doplnit si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>bakaláře se zaměřením na přípravu učitelů</FocusedParagraph>
            <p>
              V praxi to může znamenat, že budete mít třeba vystudovanou anglistiku a doděláte si k
              tomu bakaláře v oboru Anglický jazyk se zaměřením na vzdělávání (nebo pro úplně jiný
              předmět) – pak budete kvalifikovaný učitel.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-c-1 ">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich §12 písm. c) bod 1.
              zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečnovaném VŠ
              a <strong>zaměřeném na přípravu učitelů</strong>
            </FocusedParagraph>
            <p>
              To může znamenat, že budete mít třeba vystudovanou hispanistiku a doděláte si k tomu
              studium CŽV pro učitelství jazyků.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-c-2">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich §12 písm. c) bod 2.
              zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              Jedná se o vzdělání získané studiem ve vzdělávacím programu akreditovaném pro DVPP a
              uskutečňovaném VŠ nebo zařízením pro DVPP.
            </p>
            <p>
              To může znamenat, že pokud budete mít třeba vystudovaný francouzský jazyk, stačí vám
              doplnit si k tomu studium pedagogiky, což je akreditované vzdělání uskutečňované VŠ
              nebo zařízením pro další vzdělávání pedagogických pracovníků. V tomto případě hledejte
              kurzy s názvem Studium pedagogiky pro učitele jazykových škol s právem státní
              závěrečné zkoušky.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-c-3">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich §12 písm. c) bod 3.
              zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z jiného oboru',
        text: (
          <>
            <p>
              Pokud chcete učit cizí jazyky na 2. stupni ZŠ, na gympnáziu nebo na SŠ a máte magistra
              z jiného oboru než z učitelství nebo společenskovědního studia daného jazyka,{' '}
              <strong>
                stačí vám doplnit si
                <br />
                <br />
                buď
              </strong>
            </p>
            <FocusedParagraph>bakaláře se zaměřením na přípravu učitelů</FocusedParagraph>
            <p>
              V praxi to může znamenat, že budete mít třeba inženýra z elektrotechniky a doděláte si
              k němu bakaláře v oboru Německý jazyk se zaměřením na vzdělávání – pak budete
              kvalifikovaný učitel.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-d-1">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich § 12 písm. d) bod 1.
              zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném VŠ
              a <strong>zaměřeném na přípravu učitelů</strong>
            </FocusedParagraph>
            <FocusedParagraph>a k tomu</FocusedParagraph>
            <FocusedParagraph>
              <strong>jazykovou zkoušku z daného jazyka min. na úrovni C1</strong> Společného
              evropského referenčního rámce pro jazyky (SERR / CEFR)
            </FocusedParagraph>
            <FocusedParagraph>a k tomu</FocusedParagraph>
            <FocusedParagraph>
              <strong>doplňující didaktické studium příslušného jazyka (DVPP)</strong>
            </FocusedParagraph>
            <p>
              V praxi je to cesta poměrně komplikovaná a vyplatí se v případě, že už máte magistra i
              jazykovou zkoušku a nechce se vám studovat další bakalář. Musíte si ovšem najít
              studium CŽV, na které se budete moci přihlásit (podmínky pro přijetí najdete u
              jednotlivých oborů). Pokud máte vystudovaná práva, doplníte si CŽV učitelství v oboru
              právní vědy.
            </p>
            <p>
              Tím získáte pedagogickou kvalifikaci a „aprobovanost“ pro výuku jazyka si doplníte
              studiem učitelství daného jazyka v rámci dalšího vzdělávání pedagogických pracovníků
              (DVPP).
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p12-1-d-2">
              § 8 odst. (1) písm. i) / § 9 odst. (1) písm. g) a podle nich § 12 písm. d) bod 2.
              zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Rodilý mluvčí cizího jazyka / na jazykové úrovni rodilého mluvčího',
        text: (
          <>
            <p>
              Rodilý mluvčí nebo ten, který jazyk ovládá na úrovni rodného jazyka, splňuje
              předpoklady <strong>pro vyučování konverzace</strong> tohoto cizího jazyka, pokud
              dokončil alespoň <strong>střední vzdělání s maturitní zkouškou</strong>.
            </p>
            <p>
              V případě, že získal*a <strong>vysokoškolské vzdělání</strong>, splňuje předpoklady
              <strong>pro vyučování tohoto cizího jazyka</strong>.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-4">
              § 22 odst. (4) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    subtitle="Cizí jazyky"
    title="Jak začít učit na střední škole"
  />
);

export default Page;
