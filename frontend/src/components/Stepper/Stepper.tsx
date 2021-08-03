import React from 'react';
import type { FC } from 'react';

import { Wrapper, Bar, BarWrapper } from './styled';

type Props = {
  step: number;
  totalSteps: number;
};

const Stepper: FC<Props> = ({ step, totalSteps }) => (
  <Wrapper>
    Krok {step} z {totalSteps}
    <BarWrapper>
      {[...Array(totalSteps)].map((_, index) => (
        <Bar key={index} isActive={index + 1 <= step} />
      ))}
    </BarWrapper>
  </Wrapper>
);

export default Stepper;
