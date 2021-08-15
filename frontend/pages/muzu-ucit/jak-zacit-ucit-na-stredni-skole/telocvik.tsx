import React from 'react';

import LawReference from '@components/LawReference/LawReference';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';
import { routes } from '@routes';

import ssImage from '@pages/CanITeachPage/ss.svg';

const Page: React.FC = () => (
  <StartTeachingPage
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    logo={ssImage}
    mainInfo={
      <p>
        Požadavky na vyučující tělesné výchovy jsou shodné pro učitelství na 2. stupni ZŠ i pro SŠ.
        Pokud chcete učit tělocvik na 2. stupni ZŠ, gymnáziích, středních školách a učilištích,
        musíte mít vystudovaného
      </p>
    }
    metaTitle="Tělesná výchova - Jak začít učit na střední škole"
    sections={[
      {
        title: 'Mgr. se zaměřením na tělesnou výchovu a sport',
        text: (
          <>
            <p>
              Pokud chcete učit tělocvik na 2. stupni ZŠ nebo SŠ,{' '}
              <strong>
                stačí vám k tomu magisterský titul (ne nutně pedagogický) z oboru zaměřeného na
                tělesnou výchovu a sport
              </strong>
              .
            </p>
            <p>
              Tedy např. pokud máte magistra v oboru „Trenér“, můžete spokojeně vyrazit do školství.
            </p>

            <LawReference
              links={['zakonyprolidi.cz/cs/2004-563#p8-1-h', 'zakonyprolidi.cz/cs/2004-563#p9-1-f']}
            >
              § 8 odst. (1) písm. h) / § 9 odst. (1) písm. f) zákona č. 563/2004 Sb. o pedagogických
              pracovnících
            </LawReference>
          </>
        ),
      },
    ]}
    subtitle="Tělesná výchova"
    title="Jak začít učit na střední škole"
  />
);

export default Page;
