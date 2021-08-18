import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';
import Button from '@components/Button/Button';

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
  font-size: 3rem;
  text-align: left;
  margin: 0 32px 0 0;
`}

  ${mediaQueriesUp('md')`
  font-size: 4rem;
`}
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0 0 32px;

  &:last-child {
    margin: 0;
  }
`;

export const MainLink = styled(Button)`
  font-weight: bold;
  color: #4b4848;
  display: inline-block;
  margin: 0 0 8px;

  ${mediaQueriesUp('md')`
    font-size: 0.875rem;
  `}
`;
