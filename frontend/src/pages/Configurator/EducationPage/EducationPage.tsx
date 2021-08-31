import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import StyleWrapper from '@components/StyledWrapper';
import { MainParagraph, LightText, PrimaryText } from '@components/Typography';
import { gql, useQuery } from '@apollo/client';
import { allSubjectsQuery, SubjectsQuery } from '../SubjectPage/SubjectPage';
import Checkbox from '@components/Input/Checkbox/Checkbox';

interface TitlesQuery {
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
      <StyleWrapper margin="2rem 0 3rem 0">
        <LightText>
          Vyšší než magisterský stupeň ani maturita bez odborných předmětů nejsou pro učitelství
          podstatné.
        </LightText>
      </StyleWrapper>
      <StyleWrapper margin="2rem 0">
        {titlesQuery.data.titles.map(({ id, name }) => (
          <div key={id}>
            <Checkbox
              checked={values.education.includes(id)}
              label={name}
              name="education"
              value={id}
              onChange={() => {
                if (values.education.includes(id)) {
                  setFieldValue(
                    'education',
                    values.education.filter(current => current !== id),
                  );
                } else {
                  setFieldValue('education', [...values.education, id]);
                }
              }}
            />
          </div>
        ))}
      </StyleWrapper>
    </>
  );
};

export default EducationPage;
