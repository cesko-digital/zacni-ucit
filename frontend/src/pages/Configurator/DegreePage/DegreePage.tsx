import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { gql, useQuery } from '@apollo/client';
import Radio from '@components/Input/Radio/Radio';

import { RadiosWrapper } from './styled';

export interface SchoolLevelsQuery {
  schoolLevels: {
    id: string;
    name: string;
  }[];
}

export const allSchoolLevelsQuery = gql`
  query allSchoolLevelsQuery {
    schoolLevels {
      id
      name
    }
  }
`;

const DegreePage: FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();
  const { data, loading } = useQuery<SchoolLevelsQuery>(allSchoolLevelsQuery);

  if (loading) {
    return <>Loading</>;
  }

  return (
    <StyleWrapper margin="2rem 0">
      <Hint onClick={console.log}>Příběhy učitelů z praxe</Hint>
      <RadiosWrapper>
        {data?.schoolLevels.map(({ id, name }) => (
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
