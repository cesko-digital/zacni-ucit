import { routes } from '@routes';
import { useRouter } from 'next/router';
import React from 'react';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';

const CoursePage: React.FC = () => {
  const router = useRouter();

  return (
    <ConfiguratorStep
      title="Pedagogické minimum (Bc.)"
      prevStep={
        Object.keys(router.query).length > 0
          ? { url: routes.configurator.path, text: 'Zpět na výsledky' }
          : undefined
      }
    >
      Detail kurzu
    </ConfiguratorStep>
  );
};

export default CoursePage;
