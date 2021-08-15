import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;

  ${mediaQueriesUp('sm')`
    min-height: 70vh;
  `}
`;

export const Subtitle = styled.span`
  display: block;
  font-weight: bold;
`;

export const Image = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 300px;
  margin: 30px 0;

  ${mediaQueriesUp('sm')`
    margin: 80px auto;
  `}
`;

export const Content = styled.div``;

export const ListWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  justify-content: center;
`;
