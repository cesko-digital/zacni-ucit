import { useFormikContext } from 'formik';
import React from 'react';
import type { FC } from 'react';

import type { ConfiguratorValues } from '../Configurator';
import Link from '@components/Button/Link';
import InfoButton from '@components/InfoButton/InfoButton';
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
        <InfoButton onClick={console.log}>Příběhy učitelů z praxe</InfoButton>
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
          <Link href="#">Napište nám</Link> nebo se podívejte na{' '}
          <Link href="#">přehled zákona o ped. pracovnících</Link>.
        </LightText>
      </StyleWrapper>
    </>
  );
};

export default DegreePage;
