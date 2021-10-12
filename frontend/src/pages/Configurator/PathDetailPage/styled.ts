import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: #0c0807;
  margin: 0 0 16px;
  line-height: 1.3;

  ${mediaQueriesUp('sm')`
    font-size: 2rem;
    margin-bottom: 32px;
  `}
`;

export const Text = styled.span`
  font-size: 0.75rem;
`;

export const Separator = styled.hr`
  height: 1px;
  border: none;
  background: #d8d8d7;
  margin: 16px 0;
`;
