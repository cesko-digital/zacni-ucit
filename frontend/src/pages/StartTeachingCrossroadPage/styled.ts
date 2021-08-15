import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 8px;

  ${mediaQueriesUp('sm')`
    width: 100px;
    height: 100px;
    margin: 10px 0 0 30px;
  `}
`;

export const MainTitle = styled.h1`
  margin: 0;
  line-height: 1.2;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    text-align: left;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;

  ${mediaQueriesUp('sm')`
    flex-direction: row-reverse;
    margin: 20px 0 60px;
  `}
`;

export const CrossroadList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 34px;
`;
