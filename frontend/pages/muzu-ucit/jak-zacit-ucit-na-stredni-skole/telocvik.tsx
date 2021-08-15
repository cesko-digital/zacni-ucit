import React from 'react';
import StartTeachingPage from '@pages/StartTeachingPage/StartTeachingPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import LawReference from '@components/LawReference/LawReference';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingPage
    title="Jak začít učit na střední škole"
    metaTitle="Tělesná výchova - Jak začít učit na střední škole"
    logo={ssImage}
    backButton={{
      href: routes.startTeaching.highSchool.crossroad,
      topButtonText: 'Zpátky na výběr předmětů na SŠ',
      bottomButtonText: 'Zpátky na výběr kde chci učit',
    }}
    subtitle="Tělesná výchova"
    mainInfo={
      <p>
        Požadavky na vyučující tělesné výchovy jsou shodné pro učitelství na 2. stupni ZŠ i pro SŠ.
        Pokud chcete učit tělocvik na 2. stupni ZŠ, gymnáziích, středních školách a učilištích,
        musíte mít vystudovaného
      </p>
    }
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
  />
);

export default Page;
