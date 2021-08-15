import React from 'react';

import { Wrapper } from './styled';

interface Props {
  withPaddingBottom?: boolean;
}

const Container: React.FC<Props> = ({ withPaddingBottom = true, children }) => (
  <Wrapper withPaddingBottom={withPaddingBottom}>{children}</Wrapper>
);

export default Container;
