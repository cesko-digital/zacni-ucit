import { mediaQueriesUp } from 'src/common/mediaQueries';
import { theme } from 'src/common/theme';
import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  ${mediaQueriesUp('md')`
    flex-direction:row;
    `};
`;

export const FooterSection1 = styled.section`
  padding: 2rem 2rem;
  background: rgba(127, 80, 255, 0.1);

  &.footer_section2 {
    background: rgba(127, 80, 255, 0.2);
  }

  &.footer_section3 {
    background: rgba(127, 80, 255, 0.3);
  }
  &.footer_section4 {
    background: rgba(127, 80, 255, 0.4);
  }
`;

export const FlexRowSB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 2rem 1rem;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SmallText = styled.p`
  font-size: ${theme.fontSize.small};
  font-weight: 400;
  display: inline;
`;

export const LinkSmall = styled.a`
  font-size: ${theme.fontSize.small};
  font-weight: 700;
`;
