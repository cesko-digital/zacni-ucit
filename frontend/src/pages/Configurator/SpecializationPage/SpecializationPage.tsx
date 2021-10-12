import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import { MainParagraph, LightText, PrimaryText } from '@components/Typography';
import StyleWrapper from '@components/StyledWrapper';
import { useQuery } from '@apollo/client';

import { allTitlesQuery, TitlesQuery } from '../EducationPage/EducationPage';
import EducationArea from './EducationArea/EducationArea';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectSelect/SubjectSelect';
import Hint from '@components/Hint/Hint';
import Select from '@components/Input/Select/Select';

import { Section } from './styled';

const SpecializationPage: React.FC = () => {
  const { values, handleChange } = useFormikContext<ConfiguratorValues>();
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

      <StyleWrapper margin="0 0 2rem 0">
        <EducationArea education={selectedTitle.name} />
      </StyleWrapper>

      {/* <Section>
        <MainParagraph noMargin>
          4.2 Máte vystudovaný relevantní kurz celoživotního vzdělávání (CŽV) pro výuku{' '}
          <PrimaryText size="1em">{selectedSubject.name}</PrimaryText> na{' '}
          <PrimaryText size="1em">{selectedLevel.name}</PrimaryText>
        </MainParagraph>
        <Hint onClick={console.log}>Nevíte si rady? Napište nám</Hint>
        <Select name="" onChange={handleChange} value="" items={[]}></Select>
      </Section>

      <Section>
        <MainParagraph noMargin>
          4.3 Máte další relevantní zkušenosti pro výuku{' '}
          <PrimaryText size="1em">{selectedSubject.name}</PrimaryText> na{' '}
          <PrimaryText size="1em">{selectedLevel.name}</PrimaryText>
        </MainParagraph>
        <Hint onClick={console.log}>Nevíte si rady? Napište nám</Hint>
        <Select name="" onChange={handleChange} value="" items={[]}></Select>
      </Section> */}
    </>
  );
};

export default SpecializationPage;
