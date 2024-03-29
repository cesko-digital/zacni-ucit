import { gql, useQuery } from '@apollo/client';
import AnimatedHeight from '@components/AnimatedHeight/AnimatedHeight';
import Select from '@components/Input/Select/Select';
import { ConfiguratorValues } from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';
import { useFormikContext } from 'formik';
import React from 'react';

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

interface IProps {
  name: string;
  degreeId: string;
}

const SubjectSelect: React.FC<IProps> = ({ name, degreeId }) => {
  const { values, handleChange, setFieldValue } = useFormikContext<ConfiguratorValues>();

  const subjectsQuery = useQuery<SubjectsQuery>(allSubjectsQuery, {
    variables: { schoolLevelIds: [parseInt(degreeId, 10)] },
  });

  React.useEffect(() => {
    if (subjectsQuery.data && subjectsQuery.data.subjects[0] && !values[name]) {
      setFieldValue(name, subjectsQuery.data.subjects[0].id);
    }
  }, [subjectsQuery.data]);

  return (
    <AnimatedHeight isOpen>
      {subjectsQuery.data ? (
        <Select
          name={name}
          value={values[name]}
          onChange={handleChange}
          items={
            subjectsQuery.data?.subjects.map(({ id, name }) => ({ value: id, text: name })) ?? []
          }
        />
      ) : (
        <div />
      )}
    </AnimatedHeight>
  );
};

export default SubjectSelect;
