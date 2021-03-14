import React, { FC } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 80vh;
  background-color: red;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
`;
const ContentContainer = styled.span`
  background-color: blue;
  width: 30%;
  padding: 20px;
`;

type Props = { children: Element };

const MiddleContainer: FC<Props> = ({ children }) => {
  return (
    <ContentWrapper>
      <ContentContainer>{children}</ContentContainer>
    </ContentWrapper>
  );
};
export default MiddleContainer;
