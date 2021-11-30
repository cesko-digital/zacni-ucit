import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 32px 130px 0 0;

  ${mediaQueriesUp('sm')`
    padding: 80px 130px 0 0;
  `}
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;

  ${mediaQueriesUp('sm')`
    font-size: 5rem;
    margin: 0 0 -20px;
  `}

  ${mediaQueriesUp('md')`
    font-size: 6rem;
  `}
`;

export const CanITeachButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const ButtonWrapper = styled.span`
  margin-right: 16px;

  &:last-child {
    margin: 0;
  }
`;

export const LinksWrapper = styled.div`
  width: calc(100% + 100px);
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: -16px;

  ${mediaQueriesUp('sm')`
    top: 80px;
  `}
`;

export const Paragraph = styled.p`
  max-width: 90%;
  margin-bottom: 30px;

  ${mediaQueriesUp('sm')`
    font-size: 1.5rem;
  `}
`;
