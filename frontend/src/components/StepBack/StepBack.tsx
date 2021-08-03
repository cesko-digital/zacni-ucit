import React from 'react';
import type { FC } from 'react';

import Button from '@components/Button/Button';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

const StepBack: FC<Props> = ({ onClick, children }) => (
  <Button onClick={onClick}>Změnit {children}</Button>
);

export default StepBack;
