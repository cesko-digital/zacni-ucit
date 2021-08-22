import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const MainTitle = styled.h1`
  text-align: center;
  font-size: 2rem;

  ${mediaQueriesUp('sm')`
    font-size: 3rem;
    margin: 80px 0 0;
    text-align: left;
  `}

  ${mediaQueriesUp('md')`
    font-size: 4rem;
  `}
`;

export const Section = styled.section`
  padding: 102px 0 32px;
  margin-top: -72px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
    font-size: 2rem;
    margin: 0 0 32px;
  `}
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0 0 32px;

  &:last-child {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 16px;
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const CrossroadList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 34px;
`;

export const BackButtonWrapper = styled.div`
  padding: 16px 0 32px;
  display: flex;
  justify-content: center;
`;
