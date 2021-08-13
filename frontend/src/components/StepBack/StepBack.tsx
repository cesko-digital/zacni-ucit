import React from 'react';

import { Button, IconWrapper } from './styled';

import ArrowIcon from '@icons/arrow.svg';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

const StepBack: React.FC<Props> = ({ onClick, children }) => (
  <Button onClick={onClick}>
    <IconWrapper>
      <ArrowIcon />
    </IconWrapper>
    Změnit {children}
  </Button>
);

export default StepBack;
