import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { routes } from '@routes';
import { FocusedParagraph } from '@components/Typography';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Praktické vyučování - Jak začít učit na střední škole"
    subtitle="Praktické vyučování"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    mainInfo={
      <p>
        Pokud chcete učit nějaký předmět praktického vyučování typicky na střední škole nebo
        středním odborném učilišti, budete (případně nebudete) si doplňovat kvalifikaci podle toho,
        zda máte:
      </p>
    }
    sections={[
      {
        title: 'Bc. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký předmět praktického vyučování na SŠ a máte alespoň bakaláře z
              nepedagogického oboru, který odpovídá charakteru vyučovaného předmětu,{' '}
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
              V praxi to znamená, že pokud máte třeba vystudovanou chemii a chcete učit předmět
              chemická laboratoř, nejlepší je dodělat si bakaláře se zaměřením na přípravu učitelů
              2. stupně ZŠ nebo SŠ ideálně v oboru chemie, čímž získáte pedagogickou kvalifikaci i
              potřebnou odbornost v předmětu.
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-a-1">
              § 9 odst. (3) písm. a) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a zaměřeném na <strong>přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít třeba bakaláře z ekonomky a chcete učit předmět
              účetní praktika, stačí si k tomu doplnit učitelské CŽV pro 2. stupeň ZŠ či SŠ na
              některé vysoké škole. Musíš si ovšem najít studium CŽV, na které se budete moci
              přihlásit (podmínky pro přijetí najdeš u jednotlivých oborů) – je pravděpodobné, že se
              budete muset přihlásit na CŽV na některé z ekonomických VŠ. Tím se stanete
              kvalifikovaným pedagogem.{' '}
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-a-2">
              § 9 odst. (3) písm. a) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba bakaláře z ekonomky a chcete učit praktický
              předmět projektové řízení, stačí si k tomu doplnit studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (3) písm. a) bod 3. a podle něj § 22 zákona č. 563/2004 Sb. o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'DiS. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký předmět praktického vyučování na SŠ a máš DiS. z toho oboru,
              který odpovídá charakteru vyučovaného předmětu,{' '}
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
              V praxi to znamená, že pokud máte třeba titul DiS. z obchodní akademie a chcete učit
              předmět praktického vyučování obchodní provoz, nejlepší je dodělat si bakaláře se
              zaměřením na přípravu učitelů 2. stupně nebo ZŠ ideálně v podobném oboru, čímž získáte
              pedagogickou kvalifikaci i potřebnou odbornost v předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-b-1">
              § 9 odst. (3) písm. b) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících:
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a zaměřeném <strong>na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít titul DiS. z ekonomiky a budete chtít učit
              předmět praktického vyučování ekonomika podniku, stačí si k tomu doplnit učitelské CŽV
              pro 2. stupeň ZŠ či SŠ na některé vysoké škole. Musíte si ovšem najít studium CŽV, na
              které se budete moci přihlásit (podmínky pro přijetí najdete u jednotlivých oborů) –
              je pravděpodobné, že se budete muset přihlásit na CŽV na některé z ekonomických VŠ.
              Tím se stanete kvalifikovaným pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-b-2">
              § 9 odst. (3) písm. b) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte DiS. z ekonomického oboru a chcete učit předmět
              praktického vyučování účetnictví, stačí si k tomu doplnit studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání
              pedagogických pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky
              pro učitele odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (3) písm. b) bod 3. a podle něj § 22 zákona č. 563/2004 Sb. o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Maturita z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký předmět praktického vyučování na SŠ a máte maturitu z toho
              oboru, který budete učit,{' '}
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
              V praxi to znamená, že pokud máte maturitu z obchodní střední školy a chcete učit
              účetnictví, nejlepší je dodělat si bakaláře se zaměřením na přípravu učitelů 2. stupně
              ZŠ nebo SŠ ideálně na nějaké ekonomické VŠ, čímž získáte pedagogickou kvalifikaci i
              potřebnou odbornost v předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-c-1">
              § 9 odst. (3) písm. c) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňované
              vysokou školou a zaměřené <strong>na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že když budete mít maturitu z ekonomické SŠ a chcete učit předmět
              účetnictví, stačí si k tomu doplnit učitelské CŽV pro 2. stupeň ZŠ či SŠ na některé
              vysoké škole. Musíte si ovšem najít studium CŽV, na které se budete moci přihlásit
              (podmínky pro přijetí najdeš u jednotlivých oborů) – je pravděpodobné, že se budete
              muset přihlásit na CŽV na některé z ekonomických VŠ. Tím se stante kvalifikovaným
              pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-3-c-2">
              § 9 odst. (3) písm. c) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba maturitu z oboru automechanik a chcete učit
              předmět autodílny, stačí si k tomu doplnit studium pedagogiky, což je akreditované
              vzdělání uskutečňované VŠ nebo zařízením pro další vzdělávání pedagogických
              pracovníků. V tomto případě hledejte kurzy s názvem Studium pedagogiky pro učitele
              odborných předmětů, praktického vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (3) písm. c) bod 3. a podle něj § 22 zákona č. 563/2004 Sb. o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
  />
);

export default Page;
