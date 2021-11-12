import Card from '@components/Card/Card';
import Container from '@components/Container/Container';
import { Message } from '@components/Message/Message';
import { routes } from '@routes';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import EducationText from '../EducationText/EducationText';
import SchoolTile from '../ResultsPage/SchoolTile/SchoolTile';

import { Text, Separator } from './styled';

export const schools = [
  {
    schoolName: 'Univerzita Karlova',
    type: 'Bc.',
    description: 'Učitelství pro střední školy',
    duration: '5 semestrů',
    price: 'Zdarma, pokud jste ještě Bc. nestudovali',
    studyType: 'Prezenční forma studia',
    location: 'Praha',
    href: routes.configurator.course,
  },
  {
    schoolName: 'Vysoké učení technické',
    type: 'Kurz CŽV',
    description: 'Učitel odborného výcviku a učitel praktického vyučování',
    duration: '1 semestr',
    price: 'Zdarma',
    studyType: 'Prezenční forma studia',
    location: 'Praha',
    href: routes.configurator.course,
  },
];

const countText = (count: number) => (count < 5 ? `${count} kroky` : `${count} kroků`);

const PathDetailPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues>();

  if (!values.education || !values.subject || !values.degree || !values.educationArea) {
    router.replace(routes.configurator.step1);
    return null;
  }

  return (
    <Container>
      <ConfiguratorStep
        title="Bakalářské vzdělání"
        prevStep={{ url: routes.configurator.results, text: 'Zpátky na výběr cesty' }}
      >
        <EducationText />

        {schools.length > 1 && (
          <>
            <Message>
              <Text>
                <span>Nezapomeňte!</span>{' '}
                <strong>
                  Vybraná cesta k učení má {countText(schools.length)}. Po dokončení jednoho z kurzů
                  musíte udělat ještě další {schools.length === 2 ? 'krok' : 'kroky'}.
                </strong>
              </Text>
            </Message>
            <Separator />
          </>
        )}

        {schools.map((school, index) => (
          <Card
            key={school.schoolName}
            theme="primary"
            badge={index === 0 ? 'Doporučujeme' : undefined}
          >
            <SchoolTile {...school} />
          </Card>
        ))}
      </ConfiguratorStep>
    </Container>
  );
};

export default PathDetailPage;
