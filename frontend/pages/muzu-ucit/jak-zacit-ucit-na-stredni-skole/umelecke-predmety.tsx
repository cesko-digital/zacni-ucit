import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Umělecké předměty - Jak začít učit na střední škole"
    subtitle="Umělecké předměty"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    mainInfo={
      <>
        <p>
          Požadavky na vyučující uměleckých předmětů jsou shodné pro učitelství na 2. stupni ZŠ i
          pro SŠ.
        </p>
        <p>
          Pokud chcete učit některý z uměleckých předmětů na 2. stupni ZŠ, gymnáziích, středních
          školách a učilištích, musíte mít vystudovaného <strong>buď</strong>
        </p>
      </>
    }
    sections={[
      {
        title: 'Mgr. z učitelství pro ZUŠ toho oboru, který budete učit',
        text: (
          <>
            <p>
              Pokud chcete učit umělecké předměty na 2. stupni ZŠ,{' '}
              <strong>
                stačí vám magisterské vzdělání zaměřené na přípravu učitelů základní umělecké školy
                studijního oboru, který odpovídá charakteru vyučovaného předmětu
              </strong>
              .
            </p>
            <p>
              Pokud máte tedy vystudován např. obor Učitelství výtvarné výchovy pro základní
              umělecké školy, můžete učit výtvarnou výchovu i na 2. stupni ZŠ.
            </p>

            <LawReference link="zakonyprolidi.cz/cs/2004-563#p8-1-g">
              § 8 odst. (1) písm. g) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'Mgr. / MgA. umělecko-pedagogického zaměření',
        text: (
          <>
            <p>
              Pokud chcete učit umělecké předměty na 2. stupni ZŠ nebo SŠ,{' '}
              <strong>
                nejjednodušší cestou k tomu je magisterský titul z oboru daného
                umělecko–pedagogického zaměření
              </strong>
              .
            </p>
            <p>
              Pokud tedy máte „uměleckého“ magistra a zjistíte, že mu můžete prokázat tzv.
              umělecko–pedagogické zaměření, <strong>pedagogickou kvalifikaci máte</strong>.
            </p>

            <LawReference
              links={['zakonyprolidi.cz/cs/2004-563#p8-3', 'zakonyprolidi.cz/cs/2004-563#p9-8']}
            >
              § 8 odst. (3) / § 9 odst. (8) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
      {
        title: 'výkonná umělkyně / výkonný umělec',
        text: (
          <>
            <p>
              <strong>
                Pokud chcete učit umělecké předměty na 2. stupni ZŠ, můžete prokázat, že jste
                výkonným či výtvarným umělcem nebo kvalifikovaně učíte v ZUŠ, na SŠ či konzervatoři.
              </strong>
            </p>
            <p>
              Pokud je to tak a ve škole máte pracovat max. na půl úvazku, může vám ředitel*ka školy
              písemně uznat předpoklad odborné kvalifikace pro odpovídající předmět. Uznání této
              kvalifikace pak platí pouze pro dobu, kdy splňujete výše uvedené podmínky.
            </p>
            <LawReference
              links={['zakonyprolidi.cz/cs/2004-563#p8-4', 'zakonyprolidi.cz/cs/2004-563#p9-9']}
            >
              § 8 odst. (4) / § 9 odst. (9) zákona č. 563/2004 Sb. o pedagogických pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
  />
);

export default Page;
