import React from 'react';

import { Wrapper, IconWrapper, Paragraph, Title, Content } from './styled';
import InfoIcon from '@icons/info.svg';

export const BetaBadge: React.FC = () => <Wrapper>
  <Content>
    <IconWrapper>
      <InfoIcon />
    </IconWrapper>
    <Paragraph>
      <Title>Testovací provoz</Title>
      Omluvte prosím případné nedostatky
    </Paragraph>
  </Content>
</Wrapper>
