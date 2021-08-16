import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 32px;

  ${mediaQueriesUp('sm')`
    padding: 60px 0;
    text-align: center;
  `}
`;

export const MainTitle = styled.h2`
  margin: 0 0 8px;
  color: #4b4848;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    color: #242120;
  `}
`;

export const LogosWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0;
  margin: -12px;

  ${mediaQueriesUp('sm')`
    margin: 0;
  `}
`;

export const LogoItem = styled.li`
  list-style-type: none;
  width: 50%;
  padding: 12px;

  ${mediaQueriesUp('sm')`
    padding: 30px;
    width: 25%;
  `}
`;

export const Link = styled.a`
  appearance: none;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;
