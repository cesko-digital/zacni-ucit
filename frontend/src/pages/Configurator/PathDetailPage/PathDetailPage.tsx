import Card from '@components/Card/Card';
import { Message } from '@components/Message/Message';
import StepBack from '@components/StepBack/StepBack';
import React from 'react';
import EducationText from '../EducationText/EducationText';
import SchoolTile from '../ResultsPage/SchoolTile/SchoolTile';

import { Title, Text, Separator } from './styled';

interface Props {
  onBack: () => void;
  onSelectCourse: (course: string) => void;
}

const PathDetailPage: React.FC<Props> = ({ onBack, onSelectCourse }) => (
  <div>
    <StepBack onClick={() => onBack()}>Zpátky na výběr cesty</StepBack>

    <Title>Bakalářské vzdělání</Title>

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
        onClick={() => onSelectCourse('uk')}
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
        onClick={() => onSelectCourse('vut')}
      />
    </Card>
  </div>
);

export default PathDetailPage;
