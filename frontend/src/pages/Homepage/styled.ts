import styled from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';
import { theme } from '../../common/theme';

export const Wrap = styled.main`
  margin: 0;
  padding: 0;
`;

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr auto;

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
    justify-self: end;
  }

  & a:nth-child(1) {
    grid-column: 1/1;
    align-self: center;
    grid-row: 2/2;
    margin-left: 1rem;
  }

  & a:nth-child(2) {
    grid-column: 2/2;
    grid-row: 2/2;
  }

  & Img {
    grid-column: 2/2;
    grid-row: 1/3;
    justify-self: end;
    align-self: stretch;
  }

  & svg {
    grid-column: 2/2;
    grid-row: 1/2;
    justify-self: end;

    z-index: 2;
  }
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 3rem 0;

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

  & svg {
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
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/2.25;
  object-fit: cover;
  clip-path: url(#imgFrame);
  //clip-path: ellipse(100% 70% at 100% 0%);
  overflow: visible;

  &.section1_img {
    border-top: 30px solid rgba(127, 80, 255, 0.5);
    border-right: 20px solid rgba(127, 80, 255, 0.5);
    object-position: 65% -2rem;
  }
  &.section2_img {
    border-bottom: 6rem solid rgba(255, 47, 91, 0.8);
    object-position: 35% 0;
  }
  &.section3_img {
    object-position: 50% 0;
  }
`;
