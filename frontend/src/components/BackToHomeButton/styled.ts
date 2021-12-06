import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const BackButtonWrapper = styled.div`
  padding: 16px 0 32px;

  ${({ visible }) =>
    visible
      ? mediaQueriesUp('sm')`
       display: block;
      `
      : mediaQueriesUp('sm')`
      display: none;
    `}
`;
