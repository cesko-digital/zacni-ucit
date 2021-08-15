import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 32px 100px 32px 0;

  ${mediaQueriesUp('sm')`
    padding: 80px 130px 80px 0;
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(127, 80, 255, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform: scaleX(10) scaleY(1.1) rotate(8deg);
    }
  `}
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 8px;

  ${mediaQueriesUp('sm')`
    font-size: 5rem;
    margin: 0 0 30px;
  `}

  ${mediaQueriesUp('md')`
    font-size: 6rem;
  `}
`;

export const ButtonWrapper = styled.span`
  margin-right: 16px;

  &:last-child {
    margin: 0;
  }
`;

export const LinksWrapper = styled.div`
  width: calc(100% + 100px);
  padding-top: 16px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: -2.5rem;

  ${mediaQueriesUp('sm')`
    top: 80px;
  `}
`;

export const Paragraph = styled.p`
  max-width: 550px;
  margin-bottom: 55px;

  ${mediaQueriesUp('sm')`
    font-size: 1.5rem;
  `}
`;
