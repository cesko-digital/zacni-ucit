import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../Configurator';
import Input from '@components/Input/Input';
import StyleWrapper from '@components/StyledWrapper';

export const degrees = [
  { id: 0, label: '1. Stupeň ZŠ' },
  { id: 1, label: '2. Stupeň ZŠ, nižší stupně gymnázií' },
  { id: 2, label: 'SŠ, SOŠ, SOU, vyšší stupně gymnázií' },
];

const DegreePage: FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();

  return (
    <StyleWrapper margin="2rem 0">
      {degrees.map(({ id, label }) => (
        <Input
          key={id}
          checked={values.degree === id}
          label={label}
          name="degree"
          type="radio"
          value={id}
          onChange={() => setFieldValue('degree', id)}
        />
      ))}
    </StyleWrapper>
  );
};

export default DegreePage;
