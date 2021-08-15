import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { routes } from '@routes';
import { FocusedParagraph } from '@components/Typography';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Odborné předměty - Jak začít učit na střední škole"
    subtitle="Odborné předměty"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    mainInfo={
      <p>
        Pokud chcete učit nějaký odborný předmět typicky na střední škole nebo středním odborném
        učilišti, budete (případně nebudete) si doplňovat kvalifikaci podle toho, zda už máte:
      </p>
    }
    sections={[
      {
        title: 'Mgr. z učitelství odborných předmětů SŠ',
        text: (
          <>
            <p>
              Pokud chcete učit odborný předmět na SŠ (např. odborné kreslení),{' '}
              <strong>
                nejpřímější cestou k tomu je magisterský titul z oboru učitelství odborných předmětů
                pro SŠ
              </strong>
              .
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-2-a">
              § 9 odst. (2) písm. a) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title:
          'Mgr. z učitelství všeobecně-vzdělávacích předmětů 2. stupně ZŠ a SŠ oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit odborný předmět (např. chemické technologie),{' '}
              <strong>
                můžete mít vystudovaný všeobecně-vzdělávací předmět pro 2. stupně ZŠ a SŠ, který
                odpovídá charakteru vyučovaného odborného předmětu
              </strong>{' '}
              – v tomto případě by to splňoval obor učitelství chemie pro 2. st. ZŠ a SŠ.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-2-b">
              § 9 odst. (2) písm. b) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title:
          'Mgr. z učitelství všeobecně-vzdělávacích předmětů SŠ, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              V případě, že chcete učit odborný předmět (např. počítačové sítě),{' '}
              <strong>
                můžete mít vystudovaný všeobecně-vzdělávací předmět pro SŠ, který odpovídá
                charakteru vyučovaného odborného předmětu
              </strong>
              . V tomto případě by to splňoval obor učitelství informatiky pro SŠ.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-2-c">
              § 9 odst. (2) písm. c) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. z toho oboru, který odpovídá charakteru vyučovaného předmětu',
        text: (
          <>
            <p>
              Pokud chcete učit nějaký odborný předmět na SŠ a máte magistra z nepedagogického
              oboru, který odpovídá charakteru vyučovaného předmětu,{' '}
              <strong>
                stačí si doplnit:
                <br />
                <br />
                buď{' '}
              </strong>
            </p>
            <FocusedParagraph>
              <strong>
                pedagogického bakaláře se zaměřením na přípravu učitelů všeobecně-vzdělávacích
                předmětů 2. stupně ZŠ nebo SŠ
              </strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba inženýra z elektrotechniky a chcete učit
              odborný předmět elektrotechnická měření, nejlepší je dodělat si bakaláře se zaměřením
              na přípravu učitelů 2. stupně ZŠ nebo SŠ v ideálním případě se zaměřením na technické
              obory, čímž získáte pedagogickou kvalifikaci i potřebnou odbornost v předmětu.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-2-d-1">
              § 9 odst. (2) písm. d) bod 1. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              vzdělání <strong>v programu celoživotního vzdělávání (CŽV)</strong> uskutečňovaném
              vysokou školou a <strong>zaměřeném na přípravu učitelů SŠ nebo 2. stupně ZŠ</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba inženýra z informatiky a chcete učit odborný
              předmět počítačové aplikace, stačí si k tomu doplnit učitelské CŽV pro 2. stupeň ZŠ či
              SŠ na některé vysoké škole. Musíte si ovšem najít studium CŽV, na které se budete moci
              přihlásit (podmínky pro přijetí najdeš u jednotlivých oborů) – je pravděpodobné, že se
              budete muset přihlásit na CŽV na některé z technických VŠ. Tím se stanete
              kvalifikovaným pedagogem.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p9-2-d-2">
              § 9 odst. (2) písm. d) bod 2. zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
            <p>
              <strong>nebo</strong>
            </p>
            <FocusedParagraph>
              <strong>studium pedagogiky</strong>
            </FocusedParagraph>
            <p>
              V praxi to znamená, že pokud máte třeba inženýra z dopravních staveb a chcete učit
              odborný předmět s tím související, stačí si k tomu doplnit studium pedagogiky, což je
              akreditované vzdělání uskutečňované VŠ nebo zařízením pro DVPP. V tomto případě
              hledejte kurzy s názvem Studium pedagogiky pro učitele odborných předmětů, praktického
              vyučování a odborného výcviku SOŠ a SOU.
            </p>
            <LawReference link="zakonyprolidi.cz/cs/2004-563#p22-1">
              § 9 odst. (2) písm. d) bod 3. a podle něj § 22 zákona č. 563/2004 Sb. o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
  />
);

export default Page;
