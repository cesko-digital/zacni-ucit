import React from 'react';
import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 130px 32px 0;

  ${mediaQueriesUp('sm')`
    padding: 0 130px 80px 0;
  `}
`;

export const Title = styled.h2`
  color: #4b4848;
  font-size: 1.5rem;
  line-height: 1.2em;
  margin: 0 0 8px;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    color: #242120;
  `}
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 16px;

  ${mediaQueriesUp('sm')`
    margin: 32px 0 16px;
  `}
`;

export const Text = styled.div`
  max-width: 90%;
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: -16px;
`;
