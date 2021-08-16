import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

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

export const Cities = styled.div`
  ${mediaQueriesUp('sm')`
    padding-top: 60px;
  `}
`;

export const CityGroup = styled.div`
  padding: 16px 16px 24px;
  margin: 0 -16px;

  &:nth-child(even) {
    background: rgba(127, 80, 255, 0.05);
  }

  ${mediaQueriesUp('sm')`
    border-radius: 5px;
    display: flex;
    padding: 20px 32px;
    margin: 0;
  `}
`;

export const CityName = styled.strong`
  font-size: 1.5rem;
  display: block;
  margin-bottom: 16px;

  ${mediaQueriesUp('sm')`
    margin: 0 32px 0 0;
    min-width: 25%;
    font-size: 1.25rem;
  `}
`;

export const Content = styled.div`
  ${mediaQueriesUp('sm')`
    padding-top: 5px;
  `}
`;

export const Row = styled.div`
  margin-bottom: 16px;

  &:last-child  {
    margin: 0;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
  margin: 16px 0 0;
`;

export const ListItem = styled.li`
  margin-bottom: 16px;

  &:last-child  {
    margin: 0;
  }
`;

export const Link = styled.a`
  color: #0c0807;
  font-weight: bold;
`;
