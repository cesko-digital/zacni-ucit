import React from 'react';

import StartTeachingCrossroadPage from '@pages/StartTeachingCrossroadPage/StartTeachingCrossroadPage';
import { routes } from '@routes';

import asImage from '@pages/CanITeachPage/as.svg';
import artsImage from '@pages/StartTeachingCrossroadPage/arts.png';
import languagesImage from '@pages/StartTeachingCrossroadPage/languages.png';

const Page: React.FC = () => (
  <StartTeachingCrossroadPage
    items={[
      {
        icon: languagesImage,
        button: {
          href: routes.startTeaching.teacherAssistant.higherExpertise,
          text: 'Vyšší odbornost',
        },
      },
      {
        icon: artsImage,
        button: {
          href: routes.startTeaching.teacherAssistant.lowerExpertise,
          text: 'Nižší odbornost',
        },
      },
    ]}
    logo={asImage}
    metaTitle="Jak začít dělat asistenta pedagoga"
    text={
      <p>
        Požadované vzdělání pro výkon profese asistenta pedagoga (dále jen AP) se liší podle toho,
        kterou úroveň odbornosti budete jako asistent*ka vykonávat:
      </p>
    }
    title="Jak začít dělat asistenta pedagoga"
  />
);

export default Page;
