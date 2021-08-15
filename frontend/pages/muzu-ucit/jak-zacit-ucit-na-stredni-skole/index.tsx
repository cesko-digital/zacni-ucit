import React from 'react';
import StartTeachingCrossroadPage from '@pages/StartTeachingCrossroadPage/StartTeachingCrossroadPage';

import ssImage from '@pages/CanITeachPage/ss.svg';
import languagesImage from '@pages/StartTeachingCrossroadPage/languages.png';
import artsImage from '@pages/StartTeachingCrossroadPage/arts.png';
import generalImage from '@pages/StartTeachingCrossroadPage/general.png';
import gymnasticsImage from '@pages/StartTeachingCrossroadPage/gymnastics.png';
import vocationalSubjectsImage from '@pages/StartTeachingCrossroadPage/vocationalSubjects.png';
import practicalSubjectsImage from '@pages/StartTeachingCrossroadPage/practicalSubjects.png';
import practiseImage from '@pages/StartTeachingCrossroadPage/practise.png';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingCrossroadPage
    title="Jak začít učit na střední škole"
    metaTitle="Jak začít učit na střední škole"
    logo={ssImage}
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
        button: { href: routes.startTeaching.highSchool.languages, text: 'Cizí jazyky' },
      },
      {
        icon: artsImage,
        button: { href: routes.startTeaching.highSchool.arts, text: 'Umělecké předměty' },
      },
      {
        icon: generalImage,
        button: {
          href: routes.startTeaching.highSchool.generalSubjects,
          text: 'Všeobecné předměty',
        },
      },
      {
        icon: gymnasticsImage,
        button: {
          href: routes.startTeaching.highSchool.gymnastics,
          text: 'Tělocvik',
        },
      },
      {
        icon: vocationalSubjectsImage,
        button: {
          href: routes.startTeaching.highSchool.vocationalSubjects,
          text: 'Odborné předměty',
        },
      },
      {
        icon: practicalSubjectsImage,
        button: {
          href: routes.startTeaching.highSchool.practicalSubjects,
          text: 'Praktické vyučování',
        },
      },
      {
        icon: practiseImage,
        button: {
          href: routes.startTeaching.highSchool.practise,
          text: 'Odborný výcvik',
        },
      },
    ]}
  />
);

export default Page;
