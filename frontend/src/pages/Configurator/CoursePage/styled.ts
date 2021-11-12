import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 0 16px;
  border-bottom: 1px solid #d8d8d7;

  ${mediaQueriesUp('sm')`
    padding: 0 0 32px;
  `}
`;

export const Content = styled.main``;
export const Details = styled.div`
  padding-top: 16px;

  ${mediaQueriesUp('sm')`
    padding-top: 32px;
  `}
`;
export const SchoolName = styled.h2`
  font-size: 1.5rem;
  margin: 0;

  ${mediaQueriesUp('sm')`
    font-size: 1.875rem;
  `}
`;

export const Title = styled.h3`
  color: #0c0807;
  font-size: 1.5rem;
  margin: 0 0 16px;
`;

export const SchoolType = styled.strong`
  margin: 0;
`;
export const Location = styled.p`
  margin: 0;
`;
export const Rows = styled.div``;
export const Row = styled.div`
  margin: 0 -16px;
  padding: 8px 16px;

  &:nth-child(2n) {
    background: rgba(127, 80, 255, 0.05);
  }

  ${mediaQueriesUp('sm')`
    border-radius: 5px;
    margin: 0 -32px;
    padding: 16px 32px;
  `}
`;

export const RowTitle = styled.strong`
  display: block;

  ${mediaQueriesUp('sm')`
    font-size: 0.875rem;
  `}
`;

export const Alternatives = styled.div`
  background: #fbfbfb;
  padding-top: 16px;

  ${mediaQueriesUp('sm')`
    padding-top: 60px;
  `}
`;

export const Paragraph = styled.p`
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    margin-bottom: 32px;
  `}
`;
