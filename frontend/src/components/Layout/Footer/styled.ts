import { mediaQueriesUp } from 'src/common/mediaQueries';
import { theme } from 'src/common/theme';
import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;

  ${mediaQueriesUp('md')`
 display:grid;
 grid-template-rows: auto auto;
 grid-template-columns: 1fr 1fr;
 

  & section:nth-child(1) {
    grid-column:1/3;
    grid-row: 1/1;
    align-self: stretch;
  }

  
  & section:nth-child(2) {
    grid-column:1/1;
    grid-row: 2/2;
    align-self: stretch;
  }
 

 & section:nth-child(3) {
   grid-column: 2/2;
   grid-row: 2/2;
  justify-self: stretch;
  align-self: stretch;
 }
 & section:nth-child(4) {
   grid-column: 2/2;
   grid-row: 2/2;
   align-self: end;
   justify-self: stretch;
  
  }
  `};

  ${mediaQueriesUp('lg')`
  display:grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  & section:nth-child(1) {
    grid-column:1/1;
    grid-row: 1/1;
  
  }

  & section:nth-child(2) {
    grid-column:2/2;
    grid-row: 1/1;
    align-self: stretch;
  }

  & section:nth-child(3) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: stretch;
  }
  & section:nth-child(4) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: end;
  }
    `};
`;

export const FooterSection = styled.section`
  padding: 2rem 2rem;
  background: rgba(127, 80, 255, 0.08);
  ${mediaQueriesUp('md')`
  padding: auto;
    `};

  &.footer_section2 {
    background: rgba(127, 80, 255, 0.16);
  }

  &.footer_section3 {
    background: rgba(127, 80, 255, 0.24);
  }
  &.footer_section4 {
    background: rgba(127, 80, 255, 0.32);
  }
`;

export const FlexRowSB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
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
