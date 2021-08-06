import styled from 'styled-components';
import { mediaQueries, mediaQueriesUp } from '../../common/mediaQueries';
import { theme } from '../../common/theme';

export const Wrap = styled.main`
  margin: 0;
  padding: 0;
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

  & img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: start;
    align-self: start;
  }

  & svg {
    grid-column: 2/2;
    grid-row: 1/2;
    justify-self: end;
    z-index: 2;
  }
`;

export const GridS1Path = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 3rem 0;
  ${mediaQueriesUp('md')`
margin: auto;
max-width: 60%;
  `}

  & a:nth-child(1) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: start;
  }
  & a:nth-child(2) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: center;
  }
  & a:nth-child(3) {
    grid-column: 1/1;
    grid-row: 1/1;
    align-self: end;
  }

  & a:nth-child(5) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: start;
  }
  & a:nth-child(6) {
    grid-column: 3/3;
    grid-row: 1/1;
    align-self: end;
  }

  & img {
    grid-column: 2/2;
    grid-row: 1/1;
  }
`;

export const Section = styled.section`
  min-height: auto;
  width: 100vw;
  padding: 0rem 0 2rem 1rem;
  position: relative;
  padding-right: 1rem;

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

export const FlexS5Logos = styled.div`
  ${mediaQueriesUp('md')`
margin: auto;
max-width: 60%;
display: flex;
justify-content: space-between;
  `}
`;
