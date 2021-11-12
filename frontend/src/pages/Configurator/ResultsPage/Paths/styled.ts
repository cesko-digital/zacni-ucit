import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${mediaQueriesUp('md')(`
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
  `)}
`;

export const Top = styled.div`
  padding: 16px 0;
  background: rgba(127, 80, 255, 0.05);

  ${mediaQueriesUp('md')(`
    padding: 32px;
  `)}
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;

  ${mediaQueriesUp('md')(`
    font-size: 1.75rem;
  `)}
`;
