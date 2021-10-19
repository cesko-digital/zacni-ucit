import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Text = styled.span`
  font-size: 0.75rem;

  ${mediaQueriesUp('sm')`
    font-size: 1rem;
    line-height: 1.8;
  `}
`;

export const Separator = styled.hr`
  height: 1px;
  border: none;
  background: #d8d8d7;
  margin: 16px 0;

  ${mediaQueriesUp('sm')`
    margin: 48px 0;
  `}
`;
