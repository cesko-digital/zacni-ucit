import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../Configurator';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { LightText, PrimaryText } from '@components/Typography';
import { gql, useQuery } from '@apollo/client';
import { allSchoolLevelsQuery, SchoolLevelsQuery } from '../DegreePage/DegreePage';
import Select from '@components/Input/Select/Select';

export interface SubjectsQuery {
  subjects: {
    id: string;
    code: string;
    name: string;
  }[];
}

export const allSubjectsQuery = gql`
  query allSubjectsQuery($schoolLevelIds: [Int]) {
    subjects(schoolLevelIds: $schoolLevelIds) {
      id
      code
      name
    }
  }
`;

const SubjectPage: React.FC = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<ConfiguratorValues>();
  const schoolLevelsQuery = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);
  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(values.degree, 10)] },
  });

  React.useEffect(() => {
    if (subjectsQuery.data && subjectsQuery.data.subjects[0]) {
      setFieldValue('subject', subjectsQuery.data.subjects[0].id);
    }
  }, [subjectsQuery.data]);

  if (schoolLevelsQuery.loading || subjectsQuery.loading) {
    return <>Loading</>;
  }

  const selectedLevel = schoolLevelsQuery.data.schoolLevels.find(({ id }) => id === values.degree);

  return (
    <>
      <PrimaryText>Pro {selectedLevel.name}</PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <StyleWrapper>
        <Hint onClick={console.log}>Chcete učit více předmětů?</Hint>
        <Hint onClick={console.log}>Zjistěte, jaké předměty můžete s vašim vzděláním vyučovat</Hint>
      </StyleWrapper>
      <StyleWrapper margin="0 0 2rem">
        <Select
          name="subject"
          value={values.subject}
          onChange={handleChange}
          items={
            subjectsQuery.data?.subjects.map(({ id, name }) => ({ value: id, text: name })) ?? []
          }
        />
      </StyleWrapper>
    </>
  );
};

export default SubjectPage;
