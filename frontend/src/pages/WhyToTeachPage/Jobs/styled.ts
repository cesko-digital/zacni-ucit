import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';
import Button from '@components/Button/Button';

export const MainTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.2em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 16px;

  ${mediaQueriesUp('sm')`
  font-size: 3rem;
  text-align: left;
  margin: 0 32px 0 0;
`}
`;

export const Section = styled.section`
  max-width: 100%;
  padding: 1rem 1rem 2rem 1rem;

  ${({ withBackground }) =>
    withBackground
      ? `
    padding: 24px 16px 40px;
    margin: 0 -16px;
    background: rgba(127, 80, 255, 0.05);
    position: relative;

    ${mediaQueriesUp('sm')`
      background: none;
      margin: 0;
      padding: 80px 0;
      
      &:after {
        border-radius: 5px;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(127, 80, 255, 0.05);
        z-index: -1;
        transform: rotate(-2deg) scaleX(1.2) translateY(-5px);
      }
    `}

    ${mediaQueriesUp('md')`
      padding: 80px 0;
    `}
    `
      : ''}
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  max-width: 75ch;
`;
