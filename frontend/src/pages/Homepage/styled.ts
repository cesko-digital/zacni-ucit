import styled from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';
import { theme } from '../../common/theme';

export const Wrap = styled.main`
  margin: 0 10vw;
  ${mediaQueries('md')`
  margin: 0;
  `}
`;

export const Section = styled.section`
  min-height: auto;
  width: 100vw;
  padding: 1rem 0 1rem 1rem;

  &.section_3 {
    background: ${theme.color.primary};
    color: white;
  }
`;
