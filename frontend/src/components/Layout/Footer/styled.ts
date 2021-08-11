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
  margin-right: 1rem;
`;

export const FooterText = styled.p`
  font-size: ${theme.fontSize.normal};
  font-weight: 400;
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

export const FooterBTN = styled.button`
  background: transparent;
  border: 2px solid ${theme.color.primary};
  border-radius: ${theme.radius.max};
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: ${theme.fontSize.normal};
  cursor: pointer;

  & svg {
    margin-right: 0.5rem;
  }
`;

export const FooterInput = styled.input`
  background: white;
  border: none;
  border-radius: ${theme.radius.max};
  font-size: ${theme.fontSize.normal};
  padding: 0.5rem 1rem;
  line-height: 2rem;
  width: 80%;
`;

export const FooterLabel = styled.label`
  background: ${theme.color.primary};
  color: white;
  border: 2px solid white;
  border-radius: ${theme.radius.max};
  font-size: ${theme.fontSize.normal};
  width: 20%;
  text-align: center;
  padding: 0.5rem;
  display: block;
  line-height: 28px;
  transform: translateX(300%) translateY(-100%);
  cursor: pointer;
`;
