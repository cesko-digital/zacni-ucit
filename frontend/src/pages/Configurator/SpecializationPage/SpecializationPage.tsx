import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import { MainParagraph, LightText, PrimaryText } from '@components/Typography';
import StyleWrapper from '@components/StyledWrapper';
import { useQuery } from '@apollo/client';

import { allTitlesQuery, TitlesQuery } from '../EducationPage/EducationPage';
import EducationArea from './EducationArea/EducationArea';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectSelect/SubjectSelect';
import Hint from '@components/Hint/Hint';

import ConfiguratorStep from '../ConfiguratorStep/ConfiguratorStep';
import { routes } from '@routes';
import Container from '@components/Container/Container';
import { useRouter } from 'next/router';
import AnimatedHeight from '@components/AnimatedHeight/AnimatedHeight';

const SpecializationPage: React.FC = () => {
  const router = useRouter();
  const { values } = useFormikContext<ConfiguratorValues>();
  const titlesQuery = useQuery<TitlesQuery>(allTitlesQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.degree, 10)] },
  });

  if (!values.education || !values.subject || !values.degree) {
    router.replace(routes.configurator.step1);
    return null;
  }

  const selectedTitle = titlesQuery.data?.titles.find(({ id }) => id === values.education);
  const selectedLevel = schoolLevelsQuery.data?.schoolLevels.find(({ id }) => id === values.degree);
  const selectedSubject = subjectsQuery.data?.subjects.find(({ id }) => id === values.subject);

  return (
    <Container>
      <ConfiguratorStep
        title="Jaká je vaše studijní specializace?"
        buttonText="Výsledky"
        step={4}
        prevStep={{
          url: routes.configurator.step3,
          text: 'Změnit stupeň, předmět a vaše vzdělání',
        }}
        nextStep={{
          url: routes.configurator.results,
          text: 'Výsledky',
          disabled: !values.education,
        }}
      >
        <StyleWrapper margin="0 0 1rem 0">
          <AnimatedHeight isOpen>
            {selectedTitle && selectedLevel && selectedSubject ? (
              <MainParagraph>
                Vyberte specializaci vašeho dosaženého vzdělání{' '}
                <PrimaryText size="1em">{selectedTitle.name}</PrimaryText> pro předmět{' '}
                <PrimaryText size="1em">{selectedSubject.name}</PrimaryText> na{' '}
                <PrimaryText size="1em">{selectedLevel.name}</PrimaryText>
              </MainParagraph>
            ) : (
              <div />
            )}
          </AnimatedHeight>
        </StyleWrapper>

        <StyleWrapper margin="0 0 2rem 0">
          <AnimatedHeight isOpen>
            {selectedTitle ? <EducationArea education={selectedTitle.name} /> : <div />}
          </AnimatedHeight>
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
      </ConfiguratorStep>
    </Container>
  );
};

export default SpecializationPage;
