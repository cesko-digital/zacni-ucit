import React from 'react';
import StartTeachingCrossroadPage from '@pages/StartTeachingCrossroadPage/StartTeachingCrossroadPage';

import zsImage from '@pages/CanITeachPage/zs2.svg';
import languagesImage from '@pages/StartTeachingCrossroadPage/languages.png';
import artsImage from '@pages/StartTeachingCrossroadPage/arts.png';
import generalImage from '@pages/StartTeachingCrossroadPage/general.png';
import gymnasticsImage from '@pages/StartTeachingCrossroadPage/gymnastics.png';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingCrossroadPage
    title={<>Jak začít učit na 2.&nbsp;stupni ZŠ</>}
    metaTitle="Jak začít učit na 2. stupni ZŠ"
    logo={zsImage}
    text={
      <>
        <p>
          Pokud chcete učit na 2. stupni ZŠ, budete (případně nebudete) si{' '}
          <strong>doplňovat kvalifikaci</strong> podle předmětů, které chcete učit.
        </p>
        <p>Vyberte si, co chcete učit, a my vám ukážeme, jak na to.</p>
      </>
    }
    items={[
      {
        icon: languagesImage,
        button: { href: routes.startTeaching.secondGrade.languages, text: 'Cizí jazyky' },
      },
      {
        icon: artsImage,
        button: { href: routes.startTeaching.secondGrade.arts, text: 'Umělecké předměty' },
      },
      {
        icon: generalImage,
        button: {
          href: routes.startTeaching.secondGrade.generalSubjects,
          text: 'Všeobecné předměty',
        },
      },
      {
        icon: gymnasticsImage,
        button: {
          href: routes.startTeaching.secondGrade.gymnastics,
          text: 'Tělocvik',
        },
      },
    ]}
  />
);

export default Page;
