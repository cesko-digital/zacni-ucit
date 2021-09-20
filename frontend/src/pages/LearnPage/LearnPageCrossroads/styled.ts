import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${mediaQueriesUp('sm')`
    padding: 0 0 20px;
  `}
`;

export const Section = styled.section`
  padding: 2rem 1rem;
  margin-bottom: 1rem;

  &:nth-child(2n) {
    background: rgba(127, 80, 255, 0.05);
  }
`;

export const Paragraph = styled.p`
  max-width: 75ch;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  display: block;

  width: 4rem;
  height: 4rem;
  margin-left: 1rem;

  ${mediaQueriesUp('sm')`
    width: 130px;
    height: 80px;
    margin-left: 1rem;
  `}
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    text-align: left;
    margin: 0 32px 0 0;
    padding-left: 1rem;
   
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;
