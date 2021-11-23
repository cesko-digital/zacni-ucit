import querystring from 'querystring';

import { gql, useQuery } from '@apollo/client';
import Button from '@components/Button/Button';
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
import { Note } from '../SpecializationPage/EducationArea/styled';

import { Text, Separator } from './styled';

const resultsQuery = gql`
  query qualificationsQuery(
    $subjectId: Int!
    $levelId: Int!
    $title: Int!
    $specialization: Int!
    $schoolLevelDone: Int
    $subjectDone: Int
  ) {
    qualifications(
      subjectId: $subjectId
      levelId: $levelId
      title: $title
      specialization: $specialization
      schoolLevelDone: $schoolLevelDone
      subjectDone: $subjectDone
    ) {
      path {
        id
        educationTypes {
          id
          name
          title {
            name
          }
        }
      }
      uncompletedEducationTypes {
        id
      }
    }
  }
`;

const coursesQuery = gql`
  query coursesQuery($eduTypeId: Int!) {
    courses(eduTypeId: $eduTypeId) {
      id
      name
      city
      price
      studyForm
      major
      schoolLevels {
        name
        targetSchoolLevel
      }
      educationSpecialization {
        name
      }
      otherQualificationType {
        id
        name
      }
      studyLengthInSemesters
      url
      note
      university {
        name
      }
    }
  }
`;

const studyForm = {
  prezencni: 'Prezenční',
  kombinovana: 'Kombinovaná',
  distancni: 'Distanční',
};

const countText = (count: number) => (count < 5 ? `${count} kroky` : `${count} kroků`);

const PathDetailPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues & { cesta?: string; kurzy?: string }>();

  const results = useQuery<any>(resultsQuery, {
    variables: {
      subjectId: values.predmet,
      levelId: values.stupen,
      title: values.vzdelani,
      specialization: values.oblast,
      schoolLevelDone: values.stupenSpecializace || undefined,
      subjectDone: values.predmetSpecializace || undefined,
    },
  });

  const courses = useQuery<any>(coursesQuery, {
    variables: {
      eduTypeId: values.kurzy.toString(),
    },
  });

  const qualification = results.data?.qualifications?.find(({ path }) => path.id === values.cesta);
  const educationType = qualification?.path.educationTypes.find(({ id }) => id === values.kurzy);

  const numberOfUncompletedCourses = qualification?.uncompletedEducationTypes.length;

  if (!values.vzdelani || !values.predmet || !values.stupen || !values.oblast) {
    router.replace(routes.configurator.step1);
    return null;
  }

  const modifiedValues = Object.entries(values).reduce(
    (all, [key, value]) => (!['kurz'].includes(key) ? { ...all, [key]: value } : all),
    {},
  );
  const modifiedValuesOther = Object.entries(values).reduce(
    (all, [key, value]) => (!['kurz', 'kurzy'].includes(key) ? { ...all, [key]: value } : all),
    {},
  );

  return (
    <Container>
      <ConfiguratorStep
        title={educationType?.title?.name ?? educationType?.name ?? ''}
        prevStep={{ url: routes.configurator.results, text: 'Zpátky na výběr cesty' }}
      >
        <EducationText />

        {numberOfUncompletedCourses > 1 && (
          <>
            <Message>
              <Text>
                <span>Nezapomeňte!</span>{' '}
                <strong>
                  Vybraná cesta k učení má {countText(numberOfUncompletedCourses)}. Po dokončení
                  jednoho z kurzů musíte udělat ještě další{' '}
                  {numberOfUncompletedCourses === 2
                    ? 'krok'
                    : `${numberOfUncompletedCourses - 1} kroky`}
                </strong>
                :{' '}
                {qualification?.path.educationTypes
                  .filter(({ id }) => id !== values.kurzy)
                  .map(({ id, name, title }) => (
                    <Button
                      href={`${routes.configurator.path}?${querystring.stringify(
                        modifiedValuesOther,
                      )}&kurzy=${id}`}
                    >
                      {title?.name ?? name}
                    </Button>
                  ))}
              </Text>
            </Message>
            <Separator />
          </>
        )}

        {courses.loading && <>Čekejte...</>}
        {courses.error && <Note>{courses.error}</Note>}

        {courses.data?.courses.map((course, index) => (
          <Card key={course.id} theme="primary" badge={index === 0 ? 'Doporučujeme' : undefined}>
            <SchoolTile
              href={`${routes.configurator.course}?kurz=${course.id}&${querystring.stringify(
                modifiedValues,
              )}`}
              schoolName={course.university.name}
              type="???"
              location={course.city}
              price={parseFloat(course.price) || 'Zdarma'}
              duration={course.studyLengthInSemesters}
              studyType={`${course.studyForm.reduce(
                (all, current, index) =>
                  `${all}${index > 0 ? '/' : ''}${studyForm[current] ?? current}`,
                '',
              )} forma studia`}
              description={course.name}
            />
          </Card>
        ))}
      </ConfiguratorStep>
    </Container>
  );
};

export default PathDetailPage;
