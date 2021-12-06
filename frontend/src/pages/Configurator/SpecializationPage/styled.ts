import { mediaQueriesUp } from 'src/common/mediaQueries';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 8px 16px 16px;
  margin: 0 -16px;
  position: relative;

  &:nth-child(even) {
    background: rgba(127, 80, 255, 0.05);
    margin: 32px -16px;
    padding: 48px 16px;

    ${mediaQueriesUp('sm')`
      background: none;
      
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
  }
`;
