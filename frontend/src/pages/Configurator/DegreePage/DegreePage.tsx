import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../Configurator';
import Button from '@components/Button/Button';
import Hint from '@components/Hint/Hint';
import Input from '@components/Input/Input';
import StyleWrapper from '@components/StyledWrapper';
import { LightText } from '@components/Typography';

export const degrees = [
  { id: 0, label: '1. Stupeň ZŠ' },
  { id: 1, label: '2. Stupeň ZŠ, nižší stupně gymnázií' },
  { id: 2, label: 'SŠ, SOŠ, SOU, vyšší stupně gymnázií' },
];

const DegreePage: FC = () => {
  const { values, setFieldValue } = useFormikContext<ConfiguratorValues>();

  return (
    <>
      <StyleWrapper margin="2rem 0">
        <Hint onClick={console.log}>Příběhy učitelů z praxe</Hint>
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
      <StyleWrapper margin="2rem 0">
        <LightText>
          Nenašli jste vámi zvolený stupeň nebo vás zajímá jiná pedagogická profese?{' '}
          <Button href="#">Napište nám</Button> nebo se podívejte na{' '}
          <Button href="#">přehled zákona o ped. pracovnících</Button>.
        </LightText>
      </StyleWrapper>
    </>
  );
};

export default DegreePage;
