import Card from '@components/Card/Card';
import { Message } from '@components/Message/Message';
import { routes } from '@routes';
import React from 'react';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import EducationText from '../EducationText/EducationText';
import SchoolTile from '../ResultsPage/SchoolTile/SchoolTile';

import { Text, Separator } from './styled';

const PathDetailPage: React.FC = () => (
  <ConfiguratorStep
    title="Bakalářské vzdělání"
    prevStep={{ url: routes.configurator.results, text: 'Zpátky na výběr cesty' }}
  >
    <EducationText />

    <Message>
      <Text>
        <span>Nezapomeňte!</span>{' '}
        <strong>
          Vybraná cesta k učení má 2 kroky. Po dokončení jednoho z kurzů musíte udělat ještě další
          krok.
        </strong>
      </Text>
    </Message>

    <Separator />

    <Card theme="primary" badge="Doporučujeme">
      <SchoolTile
        schoolName="Univerzita Karlova"
        type="Bc."
        description="Učitelství pro střední školy"
        duration="5 semestrů"
        price="Zdarma, pokud jste ještě Bc. nestudovali"
        studyType="Prezenční forma studia"
        location="Praha"
        href={routes.configurator.course}
      />
    </Card>
    <Card theme="secondary">
      <SchoolTile
        schoolName="Vysoké učení technické"
        type="Kurz CŽV"
        description="Učitel odborného výcviku a učitel praktického vyučování"
        duration="1 semestr "
        price="Zdarma"
        studyType="Prezenční forma studia"
        location="Praha"
        href={routes.configurator.course}
      />
    </Card>
  </ConfiguratorStep>
);

export default PathDetailPage;
