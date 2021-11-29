import Container from '@components/Container/Container';
import React from 'react';

import { Wrapper } from './styled';
import spinner from './oval.svg';

export const Loading: React.FC = () => (
  <Container>
    <Wrapper>
      <img src={spinner} alt="" width={50} height={50} />
    </Wrapper>
  </Container>
);
