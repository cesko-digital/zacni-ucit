import styled from 'styled-components';
import { mediaQueries, mediaQueriesUp } from '../../common/mediaQueries';
import { theme } from '../../common/theme';

export const Wrap = styled.main`
  margin: 0;
  padding: 0;

  ${mediaQueriesUp('md')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template rows: 1fr 1fr 1fr 1fr;
  
  & Section.section_1 {
    grid-column: 1/3;
    grid-row: 1/1;
    // border-top: 10px solid rgb(127, 80, 255);
    border-top-left-radius: 10%;
    padding-left: 10%;
    

  }

  & Section.section_2 {
    grid-column: 2/2;
    grid-row: 3/3;
    padding-left: 5rem;
    border:none;
    slign-self: start;
  }

  & Section.section_3 {
    grid-column: 1/1;
    grid-row: 4/4;
    align-self: end;
    padding: 1rem 2rem;
    border-top-right-radius: 90%;
    padding-top: 3rem;
    padding-right: 3rem;
  }

  & Section.section_4 {
    grid-column: 1/1;
    grid-row: 2/2;
  }

  & Section.section_5 {
    grid-column: 1/1;
    grid-row:3/3;
    padding: 1rem 2rem;
    align-self: center;
    justify-self:end;
    border-top: none;
  }

  & Section.section_6 {
    grid-column: 2/2;
    grid-row:4/4;
    justify-self:stretch;
    border-top: none;
  }

  & div.section1_path {
  grid-column: 2/2;
  grid-row: 2/2;
  align-self: center;
  justify-self: stretch;
  padding: 8rem 0;
  }

  `}
`;

export const GridforImg = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto auto;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin-bottom: 2rem;

  & H1 {
    grid-column: 1/1;
    grid-row: 1/1;
  }

  & H3 {
    grid-column: 1/1;
    grid-row: 1/1;
  }

  & p {
    grid-column: 1/1;
    grid-row: 1/2;
  }

  & Input {
    grid-column: 1/1;
    grid-row: 2/2;
    justify-self: center;
    max-width: 300px;
  }

  & a:nth-child(1) {
    grid-column: 1/1;
    align-self: end;
    grid-row: 3/3;
    margin-left: 1rem;
  }

  & a:nth-child(2) {
    grid-column: 2/2;
    grid-row: 3/3;
  }

  & Img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: end;
    align-self: start;
  }

  & svg {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: end;
    align-self: start;
    z-index: 5;
  }

  &.section1_grid {
    ${mediaQueriesUp('md')`
      grid-template-rows: auto auto auto;
      grid-template-rows: auto auto;

       & Img {
        border-top:none;
         border-right: none;
         border-bottom: 50px solid rgb(127, 80, 255);
       }

       & svg {
        display:none;
         }

    `};
  }

  &.section4_grid {
    ${mediaQueriesUp('md')`
        grid-template-columns: auto;
        row-gap: 0;
        text-align: center;
      
      & Img {
        grid-column: 1/1;
        grid-row: 1/2;
        justify-self:start;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 90%;
      }

      & svg {
     display:none;
      }

  `};
  }
`;

export const GridS1Path = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
  margin: 3rem 0;

  & a:nth-child(1) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: start;
    justify-self: end;
  }

  & a:nth-child(2) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: center;
    justify-self: end;
  }

  & a:nth-child(3) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: end;
    justify-self: end;
  }

  & a:nth-child(5) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: start;
    justify-self: start;
  }

  & a:nth-child(6) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: end;
    justify-self: start;
  }

  & svg {
    grid-column: 2/2;
    grid-row: 1/1;
    align-self: stretch;
    justify-self: center;
  }
`;

export const Section = styled.section`
  min-height: auto;
  width: 100vw;
  padding: 0rem 0 2rem 1rem;
  position: relative;

  &.section_2,
  &.section_5,
  &.section_6 {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &.section_3 {
    background: ${theme.color.primary};
    color: white;
  }

  &.section_6 {
    & img {
      margin: 1rem;
    }

    ${mediaQueriesUp('md')`
  margin: auto;
  max-width: 60%;
  text-align: center;
  `}
  }

  ${mediaQueriesUp('md')`
  width: auto;
  padding: 0rem 0 2rem 0rem;
  `};
`;

export const Img = styled.img`
  width: 25vw;
  aspect-ratio: 1/1.5;
  object-fit: cover;
  border-bottom-left-radius: 90%;
  overflow: hidden;

  ${mediaQueries('sm')`
   width: 40vw;
   aspect-ratio: 1/1.5;
  `}

  ${mediaQueriesUp('md')`
  max-width: 100%;
    `}

  &.section1_img {
    border-top: 20px solid rgba(127, 80, 255, 0.5);
    border-right: 20px solid rgba(127, 80, 255, 0.5);
    object-position: 60% center;
  }

  &.section2_img {
    border-bottom: 30px solid rgb(255, 47, 91);
    object-position: 35% 0;
  }

  &.section3_img {
    border-bottom: 30px solid rgb(255, 182, 11);
    object-position: 50% 0;
  }
`;

export const GridS5 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto auto;
  column-gap: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  & H3 {
    grid-column: 1/1;
    grid-row: 1/1;
  }

  & Input {
    grid-column: 1/2;
    grid-row: 2/2;
    justify-self: stretch;
  }

  & a {
    grid-column: 1/1;
    align-self: end;
    grid-row: 3/3;
    margin-left: 1rem;
  }

  & img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: start;
    align-self: center;
  }
`;

export const FlexS5Logos = styled.div`
  ${mediaQueriesUp('md')`
  margin: auto;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  `}
`;
