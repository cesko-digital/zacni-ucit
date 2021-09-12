import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: #0c0807;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 2rem;
    margin-bottom: 32px;
  `}
`;
