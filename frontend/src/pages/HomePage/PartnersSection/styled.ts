import { mediaQueriesUp, mediaQueries } from 'src/common/mediaQueries';
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
  justify-content: center;

  ${mediaQueriesUp('sm')`
    margin: 0;
  `}
`;

export const MsmtWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  padding-bottom: 32px;

  & p {
    margin: 0;
  }

  ${mediaQueries('md')`
  display:none;
  `}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;

export const LogoItem = styled.li`
  list-style-type: none;
  width: 46%;
  padding: 12px;
  margin: 5px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  ${mediaQueriesUp('sm')`
    width: 150px;
    height: 150px;
    padding: 30px;
    width: 25%;
    border: none;
    margin: 0;
  `}
`;

export const Link = styled.a`
  appearance: none;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
