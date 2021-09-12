import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import StyleWrapper from '@components/StyledWrapper';
import { MainParagraph, LightText, PrimaryText } from '@components/Typography';
import { gql, useQuery } from '@apollo/client';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectPage';
import Hint from '@components/Hint/Hint';
import Radio from '@components/Input/Radio/Radio';

import { RadiosWrapper } from './styled';

export interface TitlesQuery {
  titles: {
    id: string;
    code: string;
    name: string;
  }[];
}

export const allTitlesQuery = gql`
  query getTitles {
    titles {
      id
      code
      name
    }
  }
`;

const EducationPage: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();
  const titlesQuery = useQuery<TitlesQuery>(allTitlesQuery);
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.degree, 10)] },
  });

  if (schoolLevelsQuery.loading || subjectsQuery.loading || titlesQuery.loading) {
    return <>Loading</>;
  }

  const selectedLevel = schoolLevelsQuery.data.schoolLevels.find(({ id }) => id === values.degree);
  const selectedSubject = subjectsQuery.data.subjects.find(({ id }) => id === values.subject);

  return (
    <>
      <MainParagraph>
        Vyberte všechna vaše vzdělání, která by mohla být relevantní pro učení předmětu{' '}
        <PrimaryText size="1em">{selectedSubject.name}</PrimaryText> na{' '}
        <PrimaryText size="1em">{selectedLevel.name}</PrimaryText>
      </MainParagraph>
      <StyleWrapper margin="2rem 0 1rem 0">
        <LightText>
          Vyšší než magisterský stupeň ani maturita bez odborných předmětů nejsou pro učitelství
          podstatné.
        </LightText>
      </StyleWrapper>
      <Hint onClick={console.log}>Nevíte si rady? Napište nám</Hint>
      <StyleWrapper margin="0 0 2rem 0">
        <RadiosWrapper>
          {titlesQuery.data.titles.map(({ id, name }) => (
            <div key={id}>
              <Radio
                checked={values.education === id}
                name="education"
                value={id}
                onChange={() => setFieldValue('education', id)}
                label={name}
              />
            </div>
          ))}
        </RadiosWrapper>
      </StyleWrapper>
    </>
  );
};

export default EducationPage;
