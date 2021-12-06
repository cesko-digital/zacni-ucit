import React from 'react';

import InfoIcon from '@icons/info.svg';

import { Wrapper, IconWrapper, Paragraph } from './styled';

export const Message: React.FC = ({ children }) => (
  <Wrapper>
    <IconWrapper>
      <InfoIcon />
    </IconWrapper>
    <Paragraph>{children}</Paragraph>
  </Wrapper>
);
