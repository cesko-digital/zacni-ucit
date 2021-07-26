import React from 'react';
import type { FC } from 'react';

type Props = {
  step: number;
  totalSteps: number;
};

const Stepper: FC<Props> = ({ step, totalSteps }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    Krok {step} z {totalSteps}
    <div style={{ display: 'flex', marginLeft: 20 }}>
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          style={{
            width: 20,
            height: 8,
            marginRight: 5,
            background: index + 1 <= step ? 'green' : 'gray',
          }}
        />
      ))}
    </div>
  </div>
);

export default Stepper;
