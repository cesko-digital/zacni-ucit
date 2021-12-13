import React from 'react';

import InfoIcon from '@icons/info.svg';

import { Wrapper, IconWrapper, Paragraph } from './styled';

interface IProps {
  icon?: JSX.Element;
}

export const Message: React.FC<IProps> = ({ icon, children }) => (
  <Wrapper>
    <IconWrapper>
      {icon ?? <InfoIcon />}
    </IconWrapper>
    <Paragraph>{children}</Paragraph>
  </Wrapper>
);
