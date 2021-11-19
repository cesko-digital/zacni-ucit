import querystring from 'querystring';

import { gql, useQuery } from '@apollo/client';
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
      subjectId: values.subject,
      levelId: values.degree,
      title: values.education,
      specialization: values.educationArea,
      schoolLevelDone: values.teachingEducationDegree || undefined,
      subjectDone: values.teachingEducationSubject || undefined,
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

  if (!values.education || !values.subject || !values.degree || !values.educationArea) {
    router.replace(routes.configurator.step1);
    return null;
  }

  const modifiedValues = Object.entries(values).reduce(
    (all, [key, value]) => (!['kurz'].includes(key) ? { ...all, [key]: value } : all),
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
                  .
                </strong>
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
