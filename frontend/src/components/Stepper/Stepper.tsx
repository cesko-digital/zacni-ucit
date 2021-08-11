import React from 'react';
import type { FC } from 'react';

import { Wrapper, Label, Bar, BarWrapper } from './styled';

type Props = {
  step: number;
  totalSteps: number;
};

const Stepper: FC<Props> = ({ step, totalSteps }) => (
  <Wrapper>
    <Label>
      Krok {step} z {totalSteps}
    </Label>
    <BarWrapper>
      {[...Array(totalSteps)].map((_, index) => (
        <Bar key={index} isActive={index + 1 <= step} />
      ))}
    </BarWrapper>
  </Wrapper>
);

export default Stepper;
