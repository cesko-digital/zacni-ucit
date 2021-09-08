import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  padding: 0;

  ${mediaQueriesUp('md')`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
    padding: 30px 0;
  `}
`;

export const Person = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0 -16px;
  padding: 16px 16px 24px;

  &:nth-child(2n) {
    background: rgba(127, 80, 255, 0.05);
  }

  ${mediaQueriesUp('md')`
    width: 50%;
    margin: 0;
    padding: 24px 16px 24px;
    background: none;
    position: relative;

    &:nth-child(2n) {
      background: none;
    }
  `}
`;

export const Image = styled.img`
  margin-right: 16px;

  ${mediaQueriesUp('md')`
    margin-right: 24px;
  `}
`;
