import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

type MaxWidthProps = {
  children: ReactNode;
};

const MaxWidth: FC<MaxWidthProps> = ({ children }) => {
  return (
    <>
      <Wrap>{children}</Wrap>
    </>
  );
};
export default MaxWidth;
