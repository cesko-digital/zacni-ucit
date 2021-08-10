import React from 'react';

import { Button, IconWrapper } from './styled';

import InfoIcon from '@icons/info.svg';

type Props = {
  children: string;
  onClick: () => void;
};

const Hint: React.FC<Props> = ({ onClick, children }) => (
  <Button type="button" onClick={onClick}>
    <IconWrapper>
      <InfoIcon />
    </IconWrapper>
    {children}
  </Button>
);

export default Hint;
