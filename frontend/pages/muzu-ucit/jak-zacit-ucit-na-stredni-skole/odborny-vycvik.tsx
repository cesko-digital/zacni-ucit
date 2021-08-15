import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { routes } from '@routes';
import { FocusedParagraph } from '@components/Typography';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Odborný výcvik - Jak začít učit na střední škole"
    subtitle="Odborný výcvik"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    mainInfo={
      <p>
        Pokud chcete učit odborný výcvik typicky na střední škole nebo středním odborném učilišti,
        budete (případně nebudete) si doplňovat kvalifikaci podle toho, zda máte:
      </p>
    }
    sections={[
      {
        title: 'Bc. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit odborný výcvik na SŠ a máte alespoň bakaláře z nepedagogického
              oboru, který odpovídá charakteru vyučovaného předmětu,{' '}
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
              V praxi to znamená, že pokud máte třeba bakaláře z technologie potravin a chcete učit
              odborný výcvik potravinářskou výrobu, můžete si dodělat ještě jednoho bakaláře se
              zaměřením na přípravu učitelů 2. stupně ZŠ nebo SŠ, čímž získáte pedagogickou
              kvalifikaci.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-a-1">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. a) bod 1. zákona č. 563/2004
              Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňované
              vysokou školou a zaměřené <strong>na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít bakaláře v oboru technologie potravin a budeš
              chtít učit pekárenskou výrobu, stačí si k tomu doplnit učitelské CŽV pro 2. stupeň ZŠ
              či SŠ na některé vysoké škole. Musíte ovšem najít studium CŽV, na které se budete moci
              přihlásit (podmínky pro přijetí najdete u jednotlivých oborů) – je pravděpodobné, že
              se budete muset přihlásit na CŽV na některé z technických VŠ. Tím se stanete
              kvalifikovaným pedagogem.{' '}
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-a-2">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. a) bod 2. zákona č. 563/2004
              Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba bakaláře z technologie potravin a chcete učit
              odborný výcvik potravinářskou výrobu, je potřeba doplnit si studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              §9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. a) bod 3. a podle něj § 22
              zákona č. 563/2004 o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'DiS. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit odborný výcvik na SŠ a máš DiS. z toho oboru, který odpovídá
              charakteru vyučovaného předmětu,{' '}
              <strong>
                stačí so doplnit:
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
              V praxi to znamená, že pokud máte třeba titul DiS. ze zahradnického oboru a budete
              chtít učit zahradnické práce, nejlepší je dodělat si bakaláře se zaměřením na přípravu
              učitelů 2. stupně ZŠ nebo SŠ, čímž získáte pedagogickou kvalifikaci i potřebnou
              odbornost v předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-b-1">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. b) bod 1. zákona č. 563/2004 o
              pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňované
              vysokou školou a zaměřené <strong>na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít titul DiS. z technologie potravin a budete
              chtít učit odborný výcvik potravinářské výroby, stačí so k tomu doplnit učitelské CŽV
              pro 2. stupeň ZŠ či SŠ na některé vysoké škole. Musíte si ovšem najít studium CŽV, na
              které se budete moci přihlásit (podmínky pro přijetí najdeš u jednotlivých oborů). Tím
              se stanete kvalifikovaným pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-b-2">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. b) bod 2. zákona č. 563/2004 o
              pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba DiS. z technologie potravin a chcete učit
              odborný výcvik potravinářskou výrobu, je potřeba doplnit si studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
          </>
        ),
      },
      {
        title: 'Maturita z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký praktický předmět na SŠ a máte maturitu z toho oboru, který
              máte učit,{' '}
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
              V praxi to znamená, že pokud budete mít maturitu v oboru analýzy potravin a budete
              chtít učit potravinářskou výrobu, nejlepší je pro dodělat si bakaláře se zaměřením na
              přípravu učitelů 2. stupně ZŠ nebo SŠ, čímž získáte pedagogickou kvalifikaci.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-c-1">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. c) bod 1. zákona č. 563/2004 o
              pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>
                vzdělání v programu celoživotního vzdělávání (CŽV) uskutečňované vysokou školou a
                zaměřené na přípravu učitelů SŠ nebo 2. stupně ZŠ
              </strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít maturitu z oboru odpovídajícímu tomu, který
              chceš učit, stačí ti doplnit si k tomu učitelské CŽV pro 2. stupeň ZŠ či SŠ na některé
              vysoké škole. Musíte si ovšem najít studium CŽV, na které se budete moci přihlásit
              (podmínky pro přijetí najdeš u jednotlivých oborů) – je pravděpodobné, že se budete
              muset přihlásit na CŽV na některé z technických VŠ. Tím se stanete kvalifikovaným
              pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-c-2">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. c) bod 2. zákona č. 563/2004 o
              pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud budete mít maturitu v oboru analýzy potravin a budeš
              chtít učit potravinářskou výrobu, je potřeba doplnit si studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (5) písm. a) a podle něj § 9 odst. (3) písm. c) bod 3. a podle něj § 22
              zákona č. 563/2004 o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Výuční list z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit odborný výcvik na SŠ a máte výuční list z toho oboru, který máte
              učit,{' '}
              <strong>
                stačí si doplnit:
                <br />
                <br /> buď
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                pedagogického bakaláře se zaměřením na přípravu učitelů všeobecně-vzdělávacích
                předmětů 2. stupně ZŠ nebo SŠ
              </strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte jen výuční list, musíte si dodělat maturitu, a pak
              bakaláře se zaměřením na přípravu učitelů 2. stupně ZŠ nebo SŠ, čímž získáte
              pedagogickou kvalifikaci.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-c-1">
              § 9 odst. (5) písm. b) bod 1. zákona č. 563/2004 o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňované
              vysokou školou a zaměřené <strong>na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít výuční list, stačí ti doplnit si k tomu
              učitelské CŽV pro 2. stupeň ZŠ či SŠ na některé vysoké škole. Musíte si ovšem najít
              studium CŽV, na které se budeš moci přihlásit (podmínky pro přijetí najdeš u
              jednotlivých oborů) – je pravděpodobné, že se budete muset přihlásit na CŽV na některé
              z technických VŠ. Tím se stanete kvalifikovaným pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-5-b-2">
              § 9 odst. (5) písm. b) bod 2. zákona č. 563/2004 o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud budete instalatér s výučním listem a budete chtít učit
              tomu odpovídající předmět odborného výcviku, je potřeba doplnit si studium pedagogiky,
              což je akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (5) písm. b) bod 3. a podle něj § 22 zákona č. 562/2004 o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
  />
);

export default Page;
