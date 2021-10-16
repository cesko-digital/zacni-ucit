import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { gql, useQuery } from '@apollo/client';
import Radio from '@components/Input/Radio/Radio';

import { RadiosWrapper } from './styled';
import { routes } from '@routes';

export interface SchoolLevelsQuery {
  schoolLevels: {
    id: string;
    name: string;
    targetSchoolLevel: boolean;
  }[];
}

export const allSchoolLevelsQuery = gql`
  query allSchoolLevelsQuery {
    schoolLevels {
      id
      name
      targetSchoolLevel
    }
  }
`;

const DegreePage: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();
  const { data, loading } = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);

  const filteredSchollLevels = React.useMemo(
    () => data?.schoolLevels.filter(({ targetSchoolLevel }) => targetSchoolLevel) ?? [],
    [data],
  );

  if (loading) {
    return <>Loading</>;
  }

  return (
    <StyleWrapper margin="2rem 0">
      <Hint href={`${routes.whyToTeach}#pribehy-ucitelu`}>Příběhy učitelů z praxe</Hint>
      <RadiosWrapper>
        {filteredSchollLevels.map(({ id, name }) => (
          <div key={id}>
            <Radio
              checked={values.degree === id}
              name="degree"
              value={id}
              onChange={() => setFieldValue('degree', id)}
              label={name}
            />
          </div>
        ))}
      </RadiosWrapper>
    </StyleWrapper>
  );
};

export default DegreePage;
