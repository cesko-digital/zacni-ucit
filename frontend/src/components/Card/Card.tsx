import React from 'react';

import { Wrapper, BadgeWrapper, Badge } from './styled';

interface Props {
  theme: 'primary' | 'secondary';
  badge?: string;
}

const Card: React.FC<Props> = ({ theme, badge, children }) => (
  <Wrapper theme={theme}>
    {badge && (
      <BadgeWrapper>
        <Badge>{badge}</Badge>
      </BadgeWrapper>
    )}
    <div>{children}</div>
  </Wrapper>
);

export default Card;
