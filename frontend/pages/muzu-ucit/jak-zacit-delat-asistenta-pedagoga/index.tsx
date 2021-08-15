import React from 'react';
import StartTeachingCrossroadPage from '@pages/StartTeachingCrossroadPage/StartTeachingCrossroadPage';

import asImage from '@pages/CanITeachPage/as.svg';
import languagesImage from '@pages/StartTeachingCrossroadPage/languages.png';
import artsImage from '@pages/StartTeachingCrossroadPage/arts.png';
import { routes } from '@routes';

const Page: React.FC = () => (
  <StartTeachingCrossroadPage
    title="Jak začít dělat asistenta pedagoga"
    metaTitle="Jak začít dělat asistenta pedagoga"
    logo={asImage}
    text={
      <p>
        Požadované vzdělání pro výkon profese asistenta pedagoga (dále jen AP) se liší podle toho,
        kterou úroveň odbornosti budete jako asistent*ka vykonávat:
      </p>
    }
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
  />
);

export default Page;
