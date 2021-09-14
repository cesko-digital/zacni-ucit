import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import { MainParagraph, LightText, PrimaryText } from '@components/Typography';
import { useQuery } from '@apollo/client';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectPage';

import { allTitlesQuery, TitlesQuery } from '../EducationPage/EducationPage';

const SpecializationPage: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();
  const titlesQuery = useQuery<TitlesQuery>(allTitlesQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.degree, 10)] },
  });

  if (schoolLevelsQuery.loading || subjectsQuery.loading || titlesQuery.loading) {
    return <>Loading</>;
  }

  const selectedTitle = titlesQuery.data.titles.find(({ id }) => id === values.education);
  const selectedLevel = schoolLevelsQuery.data.schoolLevels.find(({ id }) => id === values.degree);
  const selectedSubject = subjectsQuery.data.subjects.find(({ id }) => id === values.subject);

  return (
    <>
      <MainParagraph>
        Vyberte specializaci vašeho dosaženého vzdělání{' '}
        <PrimaryText size="1em">{selectedTitle.name}</PrimaryText> pro předmět{' '}
        <PrimaryText size="1em">{selectedSubject.name}</PrimaryText> na{' '}
        <PrimaryText size="1em">{selectedLevel.name}</PrimaryText>
      </MainParagraph>
      TODO
    </>
  );
};

export default SpecializationPage;
