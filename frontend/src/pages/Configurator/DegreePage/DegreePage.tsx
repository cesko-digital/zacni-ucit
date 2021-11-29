import { useFormikContext } from 'formik';
import React from 'react';

import type { ConfiguratorValues } from '../ConfiguratorLayout/ConfiguratorLayout';
import Hint from '@components/Hint/Hint';
import StyleWrapper from '@components/StyledWrapper';
import { gql, useQuery } from '@apollo/client';
import Radio from '@components/Input/Radio/Radio';

import { RadiosWrapper } from './styled';
import { routes } from '@routes';
import AnimatedHeight from '@components/AnimatedHeight/AnimatedHeight';

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

  return (
    <StyleWrapper margin="2rem 0">
      <AnimatedHeight isOpen>
        {loading ? (
          <div></div>
        ) : (
          <div>
            <Hint href={`${routes.whyToTeach}#pribehy-ucitelu`}>Příběhy učitelů z praxe</Hint>
            <RadiosWrapper>
              {filteredSchollLevels.map(({ id, name }) => (
                <div key={id}>
                  <Radio
                    checked={values.stupen === id}
                    name="stupen"
                    value={id}
                    onChange={() => setFieldValue('stupen', id)}
                    label={name}
                  />
                </div>
              ))}
            </RadiosWrapper>
          </div>
        )}
      </AnimatedHeight>
    </StyleWrapper>
  );
};

export default DegreePage;
